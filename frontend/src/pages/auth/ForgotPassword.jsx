import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  ShieldAlert, 
  ArrowLeft, 
  Fingerprint, 
  ShieldCheck, 
  KeyRound,
  ChevronRight,
  Database,
  Lock
} from "lucide-react";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [newPassword, setNewPassword] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find(u => u.email === email)) { setStep(2); }
    else { alert("Identity Not Found in Database"); }
  };

  const handleReset = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const idx = users.findIndex(u => u.email === email);
    users[idx].password = newPassword;
    localStorage.setItem("users", JSON.stringify(users));
    setStep(3);
    setTimeout(() => navigate("/login"), 3000);
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 flex overflow-hidden font-sans">
      
      {/* Left Column: Security Narrative (Visible on Desktop) */}
      <div className="hidden lg:flex w-1/2 bg-indigo-600 p-16 flex-col justify-between relative overflow-hidden">
        <div className="z-10">
          <div className="flex items-center gap-3 text-white mb-12">
            <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center text-indigo-600 shadow-lg">
              <Database size={24} />
            </div>
            <span className="font-black tracking-tighter text-2xl uppercase">MedCore Auth</span>
          </div>
          
          <div className="space-y-6 max-w-md">
            <h2 className="text-5xl font-black text-white leading-tight">Secure Identity Recovery.</h2>
            <p className="text-indigo-100 text-lg font-medium opacity-80">
              Our automated protocol ensures your medical records remain private while you regain access to your terminal.
            </p>
          </div>
        </div>

        <div className="z-10 grid grid-cols-2 gap-8 mt-12">
          <div className="space-y-2">
            <p className="text-white font-black text-xs uppercase tracking-widest">Encryption</p>
            <p className="text-indigo-200 text-sm italic">AES-256 Bit Secure</p>
          </div>
          <div className="space-y-2">
            <p className="text-white font-black text-xs uppercase tracking-widest">Status</p>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <p className="text-indigo-200 text-sm">Servers Active</p>
            </div>
          </div>
        </div>

        {/* Decorative Background Element */}
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* Right Column: Interaction Form */}
      <div className="flex-1 flex flex-col justify-center items-center bg-slate-950 p-12">
        <div className="w-full max-w-md space-y-8">
          
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
              <ShieldAlert size={14}/> Recovery Step 0{step}
            </div>
            <h1 className="text-3xl font-black text-white">
              {step === 1 ? "Verify Identifier" : step === 2 ? "Reset Credentials" : "Update Success"}
            </h1>
          </div>

          {/* Step 1: Email */}
          {step === 1 && (
            <form onSubmit={handleVerify} className="space-y-6 animate-in slide-in-from-right-8 duration-500">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Registered Email</label>
                <input 
                  type="email" 
                  required 
                  placeholder="name@provider.com" 
                  className="w-full p-4 bg-slate-900 border border-slate-800 rounded-2xl text-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all font-medium" 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-2 group">
                Verify Identity <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}

          {/* Step 2: New Password */}
          {step === 2 && (
            <form onSubmit={handleReset} className="space-y-6 animate-in slide-in-from-right-8 duration-500">
              <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center gap-4 text-indigo-400">
                <Fingerprint size={24}/>
                <p className="text-xs font-bold tracking-tight uppercase leading-none">Authentication Token Validated</p>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">New Access Key</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                  <input 
                    type="password" 
                    required 
                    placeholder="••••••••" 
                    className="w-full pl-12 pr-4 py-4 bg-slate-900 border border-slate-800 rounded-2xl text-white outline-none focus:border-indigo-500 transition-all font-medium" 
                    onChange={(e) => setNewPassword(e.target.value)} 
                  />
                </div>
              </div>
              <button className="w-full bg-white text-slate-950 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-slate-100 transition-all shadow-xl active:scale-95">
                Apply New Security Key
              </button>
            </form>
          )}

          {/* Step 3: Success */}
          {step === 3 && (
            <div className="text-center py-10 animate-in fade-in zoom-in duration-1000">
              <div className="h-24 w-24 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-emerald-500/20">
                <ShieldCheck size={48} />
              </div>
              <h2 className="text-white font-black text-2xl mb-2">Override Successful</h2>
              <p className="text-slate-500 text-sm font-medium italic">Handing over control to Login Terminal...</p>
            </div>
          )}

          {/* Footer Link */}
          <Link to="/login" className="flex items-center justify-center gap-2 text-slate-600 hover:text-white transition-all text-xs font-black uppercase tracking-[0.2em] pt-8 border-t border-slate-900">
            <ArrowLeft size={14}/> Back to Terminal
          </Link>
        </div>
      </div>

    </div>
  );
};

export default ForgotPassword;