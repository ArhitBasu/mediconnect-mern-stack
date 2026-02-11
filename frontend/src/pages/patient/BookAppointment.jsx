import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { 
  Calendar, 
  Clock, 
  Stethoscope, 
  FileText, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  Info 
} from "lucide-react";

const BookAppointment = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    doctor: "",
    date: "",
    time: "",
    reason: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newAppointment = {
      id: Date.now(),
      patientId: user?.id || user?.email,
      doctor: form.doctor.split(' (')[0],
      specialty: form.doctor.split('(')[1]?.replace(')', '') || "General",
      date: form.date,
      time: form.time,
      reason: form.reason,
      status: "Pending",
      createdAt: new Date().toISOString()
    };

    const existingApts = JSON.parse(localStorage.getItem("appointments") || "[]");
    localStorage.setItem("appointments", JSON.stringify([...existingApts, newAppointment]));
    
    navigate("/patient/my-appointments");
  };

  return (
    <div className="max-w-6xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      {/* Header Section */}
      <div className="mb-10 space-y-2">
        <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-[0.3em]">
          <Sparkles size={16} />
          Scheduling Service
        </div>
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Request Consultation</h1>
        <p className="text-slate-500 font-medium">Please fill in the details below to secure your time slot.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
        
        {/* Left: Enhanced Form Section */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-8">
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/60 space-y-8">
            
            {/* Specialist Selection */}
            <div className="space-y-3">
              <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                <Stethoscope size={14} className="text-indigo-500" /> Professional Specialist
              </label>
              <div className="relative group">
                <select
                  name="doctor"
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-700 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer group-hover:bg-white"
                >
                  <option value="">Select a Doctor</option>
                  <option value="Dr. John Smith (Cardiology)">Dr. John Smith — Cardiology</option>
                  <option value="Dr. Sarah Jenkins (Neurology)">Dr. Sarah Jenkins — Neurology</option>
                  <option value="Dr. Michael Chen (Pediatrics)">Dr. Michael Chen — Pediatrics</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
              </div>
            </div>

            {/* Date & Time Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <Calendar size={14} className="text-indigo-500" /> Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-700 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all group-hover:bg-white"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <Clock size={14} className="text-indigo-500" /> Arrival Time
                </label>
                <input
                  type="time"
                  name="time"
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-700 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all"
                />
              </div>
            </div>

            {/* Reason Textarea */}
            <div className="space-y-3">
              <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                <FileText size={14} className="text-indigo-500" /> Consultation Notes
              </label>
              <textarea
                name="reason"
                rows="4"
                placeholder="Briefly describe your symptoms or medical concern..."
                onChange={handleChange}
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-3xl text-sm font-medium text-slate-700 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-indigo-600 text-white font-black py-5 rounded-[1.5rem] shadow-xl shadow-indigo-100 transition-all active:scale-[0.98] flex items-center justify-center gap-3 text-sm tracking-widest uppercase"
            >
              <Send size={18} />
              Finalize Request
            </button>
          </div>
        </form>

        {/* Right: Summary & Security Sidebar */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-indigo-50 rounded-[2.5rem] p-8 border border-indigo-100">
            <h3 className="text-lg font-black text-indigo-900 mb-6 flex items-center gap-2">
              <Info size={20} /> Appointment Summary
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-indigo-200/50">
                <span className="text-xs font-bold text-indigo-400 uppercase">Provider</span>
                <span className="text-sm font-black text-indigo-900">{form.doctor || "Not Selected"}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-indigo-200/50">
                <span className="text-xs font-bold text-indigo-400 uppercase">Date</span>
                <span className="text-sm font-black text-indigo-900">{form.date || "TBD"}</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-xs font-bold text-indigo-400 uppercase">Service Fee</span>
                <span className="text-sm font-black text-indigo-900">$0.00 (Insurance)</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-white/50 rounded-2xl border border-white flex items-center gap-3">
              <ShieldCheck className="text-indigo-600" size={24} />
              <p className="text-[10px] font-bold text-indigo-800 leading-tight tracking-tight uppercase">
                Your medical data is encrypted and secure under standard HIPAA guidelines.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-[2.5rem] border-2 border-dashed border-slate-200 bg-white">
            <h4 className="text-sm font-black text-slate-800 mb-2">Need Help?</h4>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Our support team is available 24/7 for technical difficulties or urgent rescheduling.
            </p>
            <button className="text-[11px] font-black text-indigo-600 hover:text-indigo-800 underline uppercase tracking-widest">
              Contact Support
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookAppointment;