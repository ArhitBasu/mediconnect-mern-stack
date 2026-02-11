import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Lock, ShieldCheck, AlertCircle, CheckCircle2, Save, User, Mail, LogOut } from "lucide-react";

const ChangePassword = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [status, setStatus] = useState({ type: "", message: "" });
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: ""
  });

  const handleUpdate = (e) => {
    e.preventDefault();
    
    // 1. Validation
    if (passwords.new !== passwords.confirm) {
      setStatus({ type: "error", message: "New passwords do not match." });
      return;
    }

    // 2. Get all users from LocalStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userIndex = users.findIndex(u => u.id === user.id || u.email === user.email);

    if (userIndex === -1) {
      setStatus({ type: "error", message: "User account not found." });
      return;
    }

    // 3. Verify old password
    if (users[userIndex].password !== passwords.current) {
      setStatus({ type: "error", message: "Current password is incorrect." });
      return;
    }

    // 4. Update and Save
    users[userIndex].password = passwords.new;
    localStorage.setItem("users", JSON.stringify(users));
    
    // 5. Update the "Session" user as well
    localStorage.setItem("currentUser", JSON.stringify(users[userIndex]));
    setUser(users[userIndex]);

    setStatus({ type: "success", message: "Password updated successfully!" });
    setPasswords({ current: "", new: "", confirm: "" });
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* 1. Account Identity Section (Shows Name & Email) */}
      <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
              <User size={32} className="text-indigo-300" />
            </div>
            <div>
              <h2 className="text-2xl font-black tracking-tight">{user?.name || "User Profile"}</h2>
              <p className="text-indigo-200 flex items-center gap-2 mt-1">
                <Mail size={14} />
                {user?.email}
              </p>
            </div>
          </div>
          <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-widest">
            Verified Account
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              <Lock className="text-indigo-600" size={24} />
              Security Settings
            </h3>
            <p className="text-slate-500 text-sm font-medium mt-1">Update your password to keep your account secure.</p>
          </div>
          {/* Forgot Password Link */}
          <Link 
            to="/forgot-password" 
            className="text-sm font-bold text-indigo-600 hover:text-indigo-700 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <form onSubmit={handleUpdate} className="p-8 space-y-6">
          {status.message && (
            <div className={`flex items-center gap-3 p-4 rounded-2xl text-sm font-bold animate-in fade-in slide-in-from-top-2 ${
              status.type === "success" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-red-50 text-red-600 border border-red-100"
            }`}>
              {status.type === "success" ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
              {status.message}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current Password */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Current Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={20} />
                <input 
                  type="password" required
                  value={passwords.current}
                  onChange={(e) => setPasswords({...passwords, current: e.target.value})}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
                  placeholder="Enter current password"
                />
              </div>
            </div>

            {/* New Password */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">New Password</label>
              <div className="relative group">
                <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={20} />
                <input 
                  type="password" required
                  value={passwords.new}
                  onChange={(e) => setPasswords({...passwords, new: e.target.value})}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Confirm New Password */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Confirm New Password</label>
              <div className="relative group">
                <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={20} />
                <input 
                  type="password" required
                  value={passwords.confirm}
                  onChange={(e) => setPasswords({...passwords, confirm: e.target.value})}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col md:flex-row items-center gap-4">
            <button 
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-[0.98]"
            >
              <Save size={18} />
              Update Security Credentials
            </button>
            
            <p className="text-slate-400 text-xs font-medium">
              Last password change was recently
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;