import { Pill, Send, ChevronLeft, ShieldCheck, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WritePrescription = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8 animate-in slide-in-from-bottom-8 duration-700">
      <button 
        onClick={() => navigate(-1)}
        className="group flex items-center gap-3 text-slate-400 hover:text-indigo-600 font-black text-xs uppercase tracking-widest transition-all"
      >
        <div className="p-2 rounded-full group-hover:bg-indigo-50 transition-colors"><ChevronLeft size={16} /></div>
        Return to Portal
      </button>

      <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
        <div className="bg-indigo-600 p-10 text-white flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="h-20 w-20 bg-white/10 backdrop-blur-md rounded-[2rem] flex items-center justify-center border border-white/20">
              <Pill size={36} />
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-tight">Digital Prescription</h1>
              <p className="text-indigo-100 font-medium opacity-80 flex items-center gap-2 mt-1">
                <ShieldCheck size={16} /> Verified Practitioner: Dr. {JSON.parse(localStorage.getItem('currentUser'))?.name}
              </p>
            </div>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-1">Session ID</p>
            <p className="font-mono text-xl">#HC-99201-B</p>
          </div>
        </div>

        <div className="p-10 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Medication Name</label>
              <input type="text" placeholder="Search pharmacy database..." className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] text-sm font-bold focus:bg-white focus:ring-4 focus:ring-indigo-500/5 outline-none transition-all" />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Daily Dosage</label>
              <input type="text" placeholder="e.g. 500mg - 2x per day" className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] text-sm font-bold focus:bg-white focus:ring-4 focus:ring-indigo-500/5 outline-none transition-all" />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Usage Instructions & Notes</label>
            <textarea rows="4" placeholder="Type instructions here..." className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] text-sm font-bold focus:bg-white focus:ring-4 focus:ring-indigo-500/5 outline-none resize-none transition-all" />
          </div>

          <div className="flex items-center gap-4 p-5 bg-amber-50 rounded-2xl border border-amber-100 text-amber-700">
             <AlertCircle size={20} />
             <p className="text-xs font-bold uppercase tracking-tight">Ensure patient allergies are verified before issuing medication.</p>
          </div>

          <div className="pt-6 border-t border-slate-50">
            <button className="w-full md:w-auto bg-slate-900 text-white font-black px-12 py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-indigo-600 transition-all shadow-xl shadow-indigo-100 active:scale-95">
              Issue & Sync Prescription <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritePrescription;