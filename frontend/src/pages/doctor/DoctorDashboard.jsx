import { Calendar, Users, Clock, CheckCircle2, XCircle, ArrowRight, UserPlus, Activity } from "lucide-react";

const DoctorDashboard = () => {
  const stats = [
    { label: "Today's Visits", value: "12", icon: Clock, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "New Patients", value: "4", icon: UserPlus, color: "text-indigo-600", bg: "bg-indigo-50" },
    { label: "Pending Requests", value: "8", icon: Activity, color: "text-amber-600", bg: "bg-amber-50" },
  ];

  const pendingRequests = [
    { id: 1, name: "Sarah Miller", type: "First Visit", time: "Requested for 2:00 PM" },
    { id: 2, name: "James Wilson", type: "Follow-up", time: "Requested for 4:30 PM" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Doctor Workspace</h1>
          <p className="text-slate-500 font-medium">You have 12 appointments scheduled for today.</p>
        </div>
        <div className="flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-2xl border border-indigo-100">
          <Calendar size={18} className="text-indigo-600" />
          <span className="text-sm font-bold text-indigo-700">Monday, Feb 9, 2026</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="card flex items-center gap-5 group hover:scale-[1.02] transition-transform cursor-default">
            <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color}`}>
              <stat.icon size={28} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-2xl font-black text-slate-800">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Appointment Requests */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Activity size={20} className="text-indigo-500" />
              Appointment Requests
            </h3>
            <button className="text-sm font-bold text-indigo-600 hover:underline">View All</button>
          </div>

          <div className="space-y-4">
            {pendingRequests.map((request) => (
              <div key={request.id} className="card flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-l-4 border-l-amber-400">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 shadow-inner">
                    {request.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{request.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{request.type} • {request.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-xl text-sm font-bold hover:bg-emerald-600 hover:text-white transition-all">
                    <CheckCircle2 size={16} /> Accept
                  </button>
                  <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-xl text-sm font-bold hover:bg-red-600 hover:text-white transition-all">
                    <XCircle size={16} /> Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Mini Schedule */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-slate-800">Schedule Preview</h3>
          <div className="card space-y-6 relative overflow-hidden">
             {/* Timeline Visual Line */}
             <div className="absolute left-9 top-14 bottom-10 w-0.5 bg-slate-100"></div>
             
             {[ 
               { time: "09:00", patient: "Alice Cooper", done: true },
               { time: "10:30", patient: "Bob Marley", done: false },
               { time: "11:15", patient: "Charlie Puth", done: false }
             ].map((item, idx) => (
               <div key={idx} className="flex gap-4 items-start relative z-10">
                 <span className={`text-[10px] font-black w-8 pt-1 ${item.done ? 'text-slate-300' : 'text-slate-500'}`}>
                   {item.time}
                 </span>
                 <div className={`h-6 w-6 rounded-full border-4 border-white shadow-sm flex-shrink-0 mt-0.5 ${item.done ? 'bg-emerald-500' : 'bg-indigo-500'}`}></div>
                 <div className="flex-1">
                   <p className={`text-sm font-bold ${item.done ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                     {item.patient}
                   </p>
                   {!item.done && <p className="text-[10px] text-indigo-500 font-bold uppercase">Next Patient</p>}
                 </div>
               </div>
             ))}

             <button className="w-full py-3 bg-slate-50 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
               See Full Schedule <ArrowRight size={14} />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;