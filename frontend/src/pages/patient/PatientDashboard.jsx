import { 
  Calendar, 
  Users, 
  Pill, 
  ArrowRight, 
  Clock, 
  Plus, 
  Activity, 
  Heart, 
  ChevronRight,
  ShieldCheck,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const PatientDashboard = () => {
  const appointments = [
    { id: 1, doctor: "Dr. John Smith", date: "Feb 20", time: "10:30 AM", type: "Cardiology" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-20 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      
      {/* 1. Hero Welcome Section */}
      <div className="relative overflow-hidden bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white shadow-2xl shadow-slate-200">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-300">
              <ShieldCheck size={12} /> Account Verified
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Healthy morning, <span className="text-indigo-400">Alex</span>
            </h1>
            <p className="text-slate-400 font-medium max-w-md leading-relaxed">
              Your health vitals are looking stable today. You have one consultation scheduled for next week.
            </p>
          </div>
          
          <Link 
            to="/patient/book-appointment" 
            className="flex items-center justify-center gap-3 bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-4 rounded-2xl font-black text-sm transition-all shadow-xl shadow-indigo-500/20 active:scale-95 uppercase tracking-widest"
          >
            <Plus size={18} /> New Appointment
          </Link>
        </div>
        {/* Abstract Background Shapes */}
        <div className="absolute -right-10 -top-10 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute left-1/2 bottom-0 w-96 h-24 bg-gradient-to-t from-indigo-500/10 to-transparent blur-2xl"></div>
      </div>

      {/* 2. The Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[16rem]">
        
        {/* Vitals Widget (4 cols) */}
        <div className="lg:col-span-4 bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm flex flex-col justify-between group hover:border-indigo-200 transition-all">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-rose-50 text-rose-500 rounded-2xl group-hover:bg-rose-500 group-hover:text-white transition-all">
              <Heart size={24} />
            </div>
            <TrendingUp size={20} className="text-emerald-500" />
          </div>
          <div>
            <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Average Heart Rate</p>
            <div className="flex items-baseline gap-2 mt-1">
              <h2 className="text-4xl font-black text-slate-900">72</h2>
              <span className="text-sm font-bold text-slate-400 italic">bpm</span>
            </div>
          </div>
        </div>

        {/* Upcoming Visit (8 cols) */}
        <div className="lg:col-span-8 bg-indigo-600 rounded-[2.5rem] p-8 text-white shadow-xl shadow-indigo-100 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
          <div className="space-y-4 z-10">
            <div className="flex items-center gap-2 text-indigo-200 font-black text-[10px] uppercase tracking-widest">
              <Clock size={14} /> Next Appointment
            </div>
            <div>
              <h3 className="text-2xl font-black">{appointments[0].doctor}</h3>
              <p className="text-indigo-100 font-medium opacity-80">{appointments[0].type} Specialist</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-sm font-bold bg-white/10 px-4 py-2 rounded-xl border border-white/20 uppercase tracking-tighter">
                {appointments[0].date}
              </div>
              <div className="text-sm font-bold bg-white/10 px-4 py-2 rounded-xl border border-white/20 uppercase tracking-tighter">
                {appointments[0].time}
              </div>
            </div>
          </div>
          <button className="z-10 bg-white text-indigo-600 p-4 rounded-2xl hover:scale-110 transition-transform shadow-lg">
            <ArrowRight size={24} />
          </button>
          <Calendar className="absolute -right-8 -bottom-8 text-white/5 w-48 h-48 -rotate-12" />
        </div>

        {/* Specialists Quick Browse (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-black text-slate-900 tracking-tight">Top Specialists</h3>
            <Link to="/patient/doctors" className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1 uppercase tracking-tighter">
              View Directory <ChevronRight size={14} />
            </Link>
          </div>
          <div className="space-y-4">
            {["Dr. Sarah Jenkins", "Dr. Michael Chen"].map((doc, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-slate-200 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center font-black text-[10px]">
                    MD
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">{doc}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Available Tomorrow</p>
                  </div>
                </div>
                <ArrowRight size={16} className="text-slate-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Prescription Tile (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
              <Pill size={20} className="text-emerald-500" /> Meds
            </h3>
            <span className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[9px] font-black uppercase">2 Active</span>
          </div>
          <div className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {["Amoxicillin", "Lisinopril"].map((med, i) => (
              <div key={i} className="p-4 rounded-2xl border border-dashed border-slate-200 flex justify-between items-center group hover:bg-slate-50 transition-colors">
                <span className="text-sm font-bold text-slate-700">{med}</span>
                <span className="text-[10px] font-black text-slate-400 uppercase">Daily</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default PatientDashboard;