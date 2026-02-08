import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Lock, ShieldCheck, Activity, ArrowRight, AlertCircle } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "PATIENT"
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError(""); // Clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    console.log("Registered:", form);
    navigate("/login");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-xl px-6 z-10">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            
            {/* Left Side: Branding/Intro (Desktop only) */}
            <div className="hidden md:flex md:w-2/5 bg-indigo-600 p-10 text-white flex-col justify-between">
              <div>
                <Activity size={40} className="mb-6" />
                <h2 className="text-2xl font-bold leading-tight">Join our medical community.</h2>
                <p className="text-indigo-100 mt-4 text-sm font-medium">
                  Access specialized healthcare and manage your appointments with ease.
                </p>
              </div>
              <div className="text-xs text-indigo-200 font-medium">
                © 2026 MediConnect Inc.
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="flex-1 p-8 md:p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Create Account</h2>
                <p className="text-slate-400 text-sm mt-1">Fill in the details to get started.</p>
              </div>

              {error && (
                <div className="mb-6 flex items-center gap-2 p-3 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm animate-in fade-in zoom-in duration-300">
                  <AlertCircle size={16} />
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">Full Name</label>
                    <div className="relative group">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={18} />
                      <input 
                        name="name" type="text" placeholder="John Doe" 
                        value={form.name} onChange={handleChange} required
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email Address</label>
                    <div className="relative group">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={18} />
                      <input 
                        name="email" type="email" placeholder="john@example.com" 
                        value={form.email} onChange={handleChange} required
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Role Selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">I am a...</label>
                    <div className="flex gap-2">
                      {["PATIENT", "DOCTOR"].map((r) => (
                        <button
                          key={r} type="button"
                          onClick={() => setForm({ ...form, role: r })}
                          className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-all ${
                            form.role === r 
                            ? "bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-100" 
                            : "bg-white border-slate-200 text-slate-500 hover:border-indigo-300"
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Password Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase ml-1">Password</label>
                      <div className="relative group">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={18} />
                        <input 
                          name="password" type="password" placeholder="••••••••" 
                          value={form.password} onChange={handleChange} required
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase ml-1">Confirm</label>
                      <div className="relative group">
                        <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={18} />
                        <input 
                          name="confirmPassword" type="password" placeholder="••••••••" 
                          value={form.confirmPassword} onChange={handleChange} required
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 bg-slate-900 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg active:scale-[0.98]"
                >
                  Create Account
                  <ArrowRight size={18} />
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-sm text-slate-500 font-medium">
                  Already have an account?{" "}
                  <Link to="/login" className="text-indigo-600 font-bold hover:underline">
                    Login here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;