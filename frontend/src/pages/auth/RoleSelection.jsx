import { useNavigate } from "react-router-dom";
import { User, Stethoscope, ShieldCheck, Activity } from "lucide-react";

const RoleSelection = () => {
  const navigate = useNavigate();

  const handlePortalSelect = (role) => {
    // Navigates to login and passes the chosen role in the background
    navigate("/login", { state: { targetRole: role } });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFF] flex flex-col items-center justify-center p-6 font-sans">
      <div className="mb-8 text-center">
        <div className="inline-flex p-4 bg-indigo-600 rounded-3xl shadow-xl shadow-indigo-100 mb-6">
          <Activity className="text-white" size={40} />
        </div>
        <h1 className="text-4xl font-black text-slate-900 tracking-tighter mb-2">MediConnect</h1>
        <p className="text-slate-500 font-medium">Select your portal to continue</p>
      </div>

      <div className="w-full max-w-md space-y-4">
        {/* Patient Portal */}
        <button 
          onClick={() => handlePortalSelect("PATIENT")}
          className="w-full group bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-600 text-white rounded-2xl group-hover:scale-110 transition-transform">
              <User size={24} />
            </div>
            <div className="text-left">
              <h3 className="font-black text-slate-800 uppercase text-sm tracking-wide">Patient Portal</h3>
              <p className="text-slate-400 text-xs">Book appointments and view records</p>
            </div>
          </div>
          <Activity className="text-slate-100 group-hover:text-blue-100" size={24} />
        </button>

        {/* Doctor Portal */}
        <button 
          onClick={() => handlePortalSelect("DOCTOR")}
          className="w-full group bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="p-4 bg-emerald-600 text-white rounded-2xl group-hover:scale-110 transition-transform">
              <Stethoscope size={24} />
            </div>
            <div className="text-left">
              <h3 className="font-black text-slate-800 uppercase text-sm tracking-wide">Doctor Portal</h3>
              <p className="text-slate-400 text-xs">Manage schedule and patient visits</p>
            </div>
          </div>
          <Activity className="text-slate-100 group-hover:text-emerald-100" size={24} />
        </button>

        {/* Admin Panel */}
        <button 
          onClick={() => handlePortalSelect("ADMIN")}
          className="w-full group bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="p-4 bg-slate-900 text-white rounded-2xl group-hover:scale-110 transition-transform">
              <ShieldCheck size={24} />
            </div>
            <div className="text-left">
              <h3 className="font-black text-slate-800 uppercase text-sm tracking-wide">Admin Panel</h3>
              <p className="text-slate-400 text-xs">System management and analytics</p>
            </div>
          </div>
          <Activity className="text-slate-100 group-hover:text-slate-200" size={24} />
        </button>
      </div>

      <p className="mt-12 text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] italic">
        Secure Multi-User Authentication System
      </p>
    </div>
  );
};

export default RoleSelection;