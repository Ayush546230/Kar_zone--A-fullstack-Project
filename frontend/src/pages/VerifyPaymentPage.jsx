import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const VerifyPaymentPage = () => {
  const [statusMsg, setStatusMsg] = useState("Verifying Payment...");
  const navigate = useNavigate();
  const location = useLocation();
  const search = location.search || "";

  useEffect(() => {
    let cancelled = false;

    const verifyPayment = async () => {
      const params = new URLSearchParams(search);
      const rawSession = params.get("session_id");
      const session_id = rawSession ? rawSession.trim() : null;
      const payment_status = params.get("payment_status");
      const token = localStorage.getItem("token");

      if (payment_status === "cancel") {
        navigate("/checkout", { replace: true });
        return;
      }

      if (!session_id) {
        setStatusMsg("No session id provided in the URL");
        return;
      }

      try {
        setStatusMsg("Confirming payment with server...");
        const API_BASE = "http://localhost:5000";

        const res = await axios.get(`${API_BASE}/api/payments/confirm`, {
          params: { session_id },
          headers: token ? { Authorization: `Bearer ${token}` } : {},
          timeout: 15000,
        });

        if (cancelled) return;

        // ✅ Log the response to see what backend sends
        console.log("Payment verify response:", res.data);

        // ✅ Adjust this based on your backend response
        if (res?.data?.success || res?.data?.verified || res?.data?.status === "paid") {
          setStatusMsg("Payment confirmed! Redirecting...");
          setTimeout(() => {
            navigate("/bookings", { replace: true });
          }, 1500);
        } else {
          const msg = res?.data?.message || "Payment not completed.";
          setStatusMsg(msg);
        }
      } catch (err) {
        console.error("Verification failed:", err);
        const status = err?.response?.status;
        const serverMsg = err?.response?.data?.message;

        if (status === 404) {
          setStatusMsg(serverMsg || "Payment session not found");
        } else if (status === 400) {
          setStatusMsg(serverMsg || "Payment not completed");
        } else {
          setStatusMsg(serverMsg || "There was an error verifying payment.");
        }
      }
    };

    verifyPayment();

    return () => {
      cancelled = true;
    };
  }, [search, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center text-white p-4">
      <div className="text-center max-w-lg">
        <p className="mb-2">{statusMsg}</p>
        <p className="text-sm opacity-70">
          If this page shows 'session not found', try copying the 'session_id' from your URL and verify it with backend logs.
        </p>
      </div>
    </div>
  );
};

export default VerifyPaymentPage;
