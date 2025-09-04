import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyOTP } from "../services/auth";
import { useAuth } from "../context/AuthContext";

const OTP = () => {
  const [otp, setOtp] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();
  const { loginWithToken } = useAuth();

  const handleVerify = async () => {
    try {
      const res = await verifyOTP({
        phone: state?.phone,
        name: state?.name,
        email: state?.email,
        otp,
      });
      loginWithToken(res.data.token);
      navigate("/dashboard");
    } catch {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Verify OTP</h2>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="border p-2 rounded w-64"
      />
      <button
        onClick={handleVerify}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Verify OTP
      </button>
    </div>
  );
};

export default OTP;
