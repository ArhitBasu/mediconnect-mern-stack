import { Pill, Plus, Trash2, Send, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WritePrescription = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold text-sm transition-colors"
      >
        <ChevronLeft size={18} /> Back to Appointments
      </button>

      <div className="card border-none shadow-2xl shadow-slate-200/60 p-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-14 w-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
            <Pill size={28} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">New Prescription</h1>
            <p className="text-sm text-slate-500">Patient: <b>James Wilson</b> (ID: #4492)</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Medication Name</label>
              <input type="text" placeholder="e.g. Amoxicillin" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-500/10 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Dosage</label>
              <input type="text" placeholder="e.g. 500mg" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-500/10 outline-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase ml-1">Instructions</label>
            <textarea rows="3" placeholder="Take twice daily after meals for 7 days..." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-500/10 outline-none resize-none" />
          </div>

          <div className="pt-4 border-t border-slate-100 flex gap-4">
            <button className="flex-1 bg-slate-900 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg">
              <Send size={18} /> Issue Prescription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritePrescription;