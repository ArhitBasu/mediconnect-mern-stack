import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { User, Stethoscope, ShieldCheck, Activity } from "lucide-react";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login(role);
    navigate(`/${role.toLowerCase()}`);
  };

  const loginOptions = [
    { 
      role: "PATIENT", 
      label: "Patient Portal", 
      icon: User, 
      color: "bg-blue-600", 
      hover: "hover:bg-blue-700",
      description: "Book appointments and view records" 
    },
    { 
      role: "DOCTOR", 
      label: "Doctor Portal", 
      icon: Stethoscope, 
      color: "bg-emerald-600", 
      hover: "hover:bg-emerald-700",
      description: "Manage schedule and patient visits" 
    },
    { 
      role: "ADMIN", 
      label: "Admin Panel", 
      icon: ShieldCheck, 
      color: "bg-slate-900", 
      hover: "hover:bg-slate-800",
      description: "System management and analytics" 
    },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md px-6 z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-2xl shadow-xl shadow-indigo-200 mb-4">
            <Activity className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">MediConnect</h1>
          <p className="text-slate-500 mt-2 font-medium">Select your portal to continue</p>
        </div>

        <div className="space-y-4">
          {loginOptions.map((option) => (
            <button
              key={option.role}
              onClick={() => handleLogin(option.role)}
              className="w-full group relative flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-200 text-left"
            >
              <div className={`p-3 rounded-xl ${option.color} text-white transition-transform group-hover:scale-110`}>
                <option.icon size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">
                  {option.label}
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  {option.description}
                </p>
              </div>
              <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-colors">
                <Activity size={16} />
              </div>
            </button>
          ))}
        </div>

        <p className="text-center mt-10 text-xs text-slate-400 font-medium italic">
          Secure Multi-User Authentication System
        </p>
      </div>
    </div>
  );
};

export default Login;