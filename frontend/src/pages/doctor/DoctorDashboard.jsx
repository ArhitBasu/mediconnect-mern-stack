import { Calendar, Clock, CheckCircle2, XCircle, ArrowRight, UserPlus, Activity, TrendingUp } from "lucide-react";

const DoctorDashboard = () => {
  const stats = [
    { label: "Consultations", value: "12", icon: Clock, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "New Patients", value: "4", icon: UserPlus, color: "text-indigo-600", bg: "bg-indigo-50" },
    { label: "Urgent Tasks", value: "8", icon: Activity, color: "text-rose-600", bg: "bg-rose-50" },
  ];

  return (
    <div className="p-2 space-y-10 animate-in fade-in duration-1000">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter italic">Doctor's Lounge</h1>
          <p className="text-slate-500 font-medium">System operational. You have <span className="text-indigo-600 font-bold">12 sessions</span> today.</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-2 rounded-2xl border border-slate-100 shadow-sm">
          <div className="p-2 bg-indigo-600 text-white rounded-lg"><Calendar size={18} /></div>
          <span className="text-sm font-black text-slate-700 pr-4">{new Date().toDateString()}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                <stat.icon size={30} />
              </div>
              <TrendingUp size={18} className="text-slate-200" />
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{stat.label}</p>
            <h3 className="text-4xl font-black text-slate-900 mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: Interactive Requests */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-lg font-black text-slate-800 px-2 uppercase tracking-tight flex items-center gap-3">
             <span className="w-2 h-6 bg-indigo-600 rounded-full"></span> Incoming Requests
          </h3>
          {[1, 2].map((id) => (
            <div key={id} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-indigo-100 transition-all">
              <div className="flex items-center gap-5">
                <div className="h-16 w-16 rounded-[1.5rem] bg-slate-50 flex items-center justify-center font-black text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-inner">
                  P{id}
                </div>
                <div>
                  <h4 className="font-black text-slate-800 text-lg">Patient #08{id}2</h4>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">General Consultation • 10:00 AM</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="px-6 py-3 bg-emerald-50 text-emerald-600 rounded-2xl text-xs font-black uppercase hover:bg-emerald-600 hover:text-white transition-all">Accept</button>
                <button className="px-6 py-3 bg-slate-50 text-slate-400 rounded-2xl text-xs font-black uppercase hover:bg-rose-50 hover:text-rose-600 transition-all">Decline</button>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Modern Timeline */}
        <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl shadow-indigo-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full"></div>
            <h3 className="text-xl font-black mb-10 flex items-center justify-between">
                Schedule
                <span className="text-[10px] bg-white/10 px-3 py-1 rounded-full text-indigo-300">FEB 2026</span>
            </h3>
            <div className="space-y-8 relative">
                <div className="absolute left-1 top-2 bottom-2 w-px bg-white/10"></div>
                {[
                    { time: "09:00", p: "Sarah M.", status: "Done" },
                    { time: "11:30", p: "James W.", status: "Next" },
                    { time: "14:00", p: "Emily R.", status: "Wait" }
                ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-center relative group">
                        <div className={`w-2.5 h-2.5 rounded-full border-2 border-slate-900 z-10 ${item.status === 'Next' ? 'bg-indigo-400 animate-pulse scale-125' : 'bg-white/20'}`}></div>
                        <div className="flex-1">
                            <p className="text-[10px] font-black text-indigo-300 tracking-[0.2em] uppercase">{item.time}</p>
                            <p className={`font-bold ${item.status === 'Done' ? 'text-white/40 line-through' : 'text-white'}`}>{item.p}</p>
                        </div>
                        {item.status === 'Next' && <ArrowRight size={16} className="text-indigo-400 group-hover:translate-x-2 transition-transform" />}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;