import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later connect backend API here
    console.log("Reset link sent to:", email);

    setSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Forgot Password
        </h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="email"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Send Reset Link
            </button>

          </form>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-green-600 font-medium">
              Reset link sent successfully!
            </p>

            <Link
              to="/login"
              className="text-blue-600 hover:underline"
            >
              Back to Login
            </Link>
          </div>
        )}

        {!submitted && (
          <div className="text-center mt-4">
            <Link
              to="/login"
              className="text-blue-600 hover:underline text-sm"
            >
              Back to Login
            </Link>
          </div>
        )}

      </div>
    </div>
  );
};

export default ForgotPassword;
