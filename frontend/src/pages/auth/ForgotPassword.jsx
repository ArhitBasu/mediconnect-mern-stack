import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShieldAlert, Lock, Mail, ChevronRight, ArrowLeft, Fingerprint, ShieldCheck } from "lucide-react";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [newPassword, setNewPassword] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find(u => u.email === email)) { setStep(2); }
    else { alert("Identity Not Found"); }
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
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="bg-amber-500/10 border-b border-amber-500/20 p-4 flex items-center justify-between px-8 text-amber-500">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest"><ShieldAlert size={16}/> Security Protocol 402-A</div>
        </div>
        <div className="p-10">
          {step === 1 && (
            <form onSubmit={handleVerify} className="space-y-6">
              <h1 className="text-3xl font-black text-white">Account Recovery</h1>
              <input type="email" required placeholder="Identifier (Email)..." className="w-full p-4 bg-slate-950 border border-slate-800 rounded-2xl text-white outline-none focus:border-indigo-500" onChange={(e) => setEmail(e.target.value)} />
              <button className="w-full bg-white text-slate-950 py-4 rounded-2xl font-black uppercase text-xs tracking-widest">Verify Identity</button>
            </form>
          )}
          {step === 2 && (
            <form onSubmit={handleReset} className="space-y-6">
              <div className="flex items-center gap-3 text-indigo-400 mb-4"><Fingerprint /> <span className="text-sm font-bold">Identity Verified</span></div>
              <input type="password" required placeholder="New Access Key..." className="w-full p-4 bg-slate-950 border border-slate-800 rounded-2xl text-white outline-none focus:border-indigo-500" onChange={(e) => setNewPassword(e.target.value)} />
              <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest">Authorize Override</button>
            </form>
          )}
          {step === 3 && <div className="text-center py-10"><ShieldCheck size={48} className="text-emerald-500 mx-auto mb-4" /><h2 className="text-white font-black text-xl">Override Complete</h2><p className="text-slate-500 text-sm">Redirecting to login terminal...</p></div>}
        </div>
        <Link to="/login" className="block text-center p-6 border-t border-slate-800 text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest"><ArrowLeft className="inline mr-2" size={14}/> Abort Protocol</Link>
      </div>
    </div>
  );
};
export default ForgotPassword;