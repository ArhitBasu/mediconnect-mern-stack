import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login(role);
    navigate(`/${role.toLowerCase()}`);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-80">
        <h2 className="text-xl font-bold mb-6 text-center">Login</h2>

        <button
          onClick={() => handleLogin("PATIENT")}
          className="w-full bg-blue-500 text-white py-2 mb-3 rounded"
        >
          Login as Patient
        </button>

        <button
          onClick={() => handleLogin("DOCTOR")}
          className="w-full bg-green-500 text-white py-2 mb-3 rounded"
        >
          Login as Doctor
        </button>

        <button
          onClick={() => handleLogin("ADMIN")}
          className="w-full bg-purple-500 text-white py-2 rounded"
        >
          Login as Admin
        </button>
      </div>
    </div>
  );
};

export default Login;
