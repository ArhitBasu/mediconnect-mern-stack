import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { 
  Calendar, 
  Clock, 
  MoreHorizontal, 
  CheckCircle2, 
  Timer, 
  X,
  Stethoscope,
  ExternalLink,
  Filter
} from "lucide-react";

const MyAppointments = () => {
  const { user } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const allApts = JSON.parse(localStorage.getItem("appointments") || "[]");
    const myApts = allApts.filter(apt => apt.patientId === (user?.id || user?.email));
    setAppointments(myApts);
  }, [user]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed": return "text-emerald-500 bg-emerald-500/10 ring-emerald-500/20";
      case "Pending": return "text-amber-500 bg-amber-500/10 ring-amber-500/20";
      default: return "text-slate-400 bg-slate-400/10 ring-slate-400/20";
    }
  };

  return (
    <div className="max-w-6xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* Dynamic Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-[0.2em]">
            <div className="h-1 w-4 bg-indigo-600 rounded-full"></div>
            Management
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Your Schedule</h1>
          <p className="text-slate-500 font-medium">You have <span className="text-indigo-600 font-bold">{appointments.length}</span> active medical requests.</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
            <Filter size={16} /> Filter
          </button>
          <button className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200">
            Export History
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main List Area */}
        <div className="lg:col-span-3 space-y-4">
          {appointments.length > 0 ? (
            appointments.map((apt) => (
              <div 
                key={apt.id} 
                className="group relative bg-white border border-slate-100 p-5 rounded-[2rem] hover:shadow-2xl hover:shadow-indigo-100/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {/* Visual ID / Date Block */}
                  <div className="flex flex-col items-center justify-center h-20 w-20 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Feb</span>
                    <span className="text-2xl font-black text-slate-800">{apt.date?.split('-')[2] || '24'}</span>
                  </div>

                  {/* Info Block */}
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-1">
                      <h3 className="text-xl font-bold text-slate-900">{apt.doctor}</h3>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ring-1 ring-inset ${getStatusColor(apt.status)}`}>
                        {apt.status}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-slate-400 mt-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-tight">
                        <Stethoscope size={14} className="text-indigo-500" /> {apt.specialty || "Specialist"}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-medium">
                        <Clock size={14} /> {apt.time}
                      </div>
                    </div>
                  </div>

                  {/* Actions Area */}
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-50 text-slate-600 rounded-2xl text-xs font-black hover:bg-indigo-600 hover:text-white transition-all">
                      DETAILS
                    </button>
                    <button className="p-2.5 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all">
                      <X size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            /* Redesigned Empty State */
            <div className="bg-slate-50/50 border-2 border-dashed border-slate-200 rounded-[3rem] p-20 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center mb-6">
                <Calendar size={32} className="text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Clear Skies!</h3>
              <p className="text-slate-500 mt-2 max-w-xs">No upcoming appointments found. Your health calendar is currently empty.</p>
            </div>
          )}
        </div>

        {/* Info Sidebar Section */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-[2.5rem] text-white shadow-xl shadow-indigo-200 relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-sm font-bold opacity-80 uppercase tracking-widest mb-1">Clinic Status</h4>
              <p className="text-2xl font-black mb-4">Open Now</p>
              <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-white rounded-full"></div>
              </div>
              <p className="text-[10px] mt-3 font-medium opacity-70 italic">Moderate wait times today</p>
            </div>
            {/* Abstract Circle */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          </div>

          <div className="bg-white border border-slate-100 p-6 rounded-[2.5rem] shadow-sm">
            <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Timer size={18} className="text-indigo-500" /> Quick Tips
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <div className="h-2 w-2 rounded-full bg-indigo-500 mt-1.5 shrink-0"></div>
                <p className="text-xs text-slate-500 leading-relaxed">Arrive <b>15 minutes</b> early for check-in.</p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="h-2 w-2 rounded-full bg-indigo-500 mt-1.5 shrink-0"></div>
                <p className="text-xs text-slate-500 leading-relaxed">Bring your current medication list.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;