import { Calendar, Clock, User, MessageSquare, ArrowRight, Activity, Bell } from "lucide-react";

const PatientDashboard = () => {
  const nextAppointment = {
    doctor: "Dr. John Smith",
    specialty: "Cardiologist",
    date: "Feb 12, 2026",
    time: "10:30 AM",
    status: "Confirmed"
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Hello, Alex 👋
          </h1>
          <p className="text-slate-500 font-medium">
            You have a medical appointment scheduled for later this week.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
          <Bell size={18} className="text-indigo-600" />
          View Notifications
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Featured Appointment Card */}
          <div className="relative overflow-hidden bg-indigo-600 rounded-3xl p-8 text-white shadow-xl shadow-indigo-100">
            <div className="relative z-10">
              <span className="bg-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
                Upcoming Visit
              </span>
              <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h3 className="text-3xl font-bold">{nextAppointment.doctor}</h3>
                  <p className="text-indigo-100 flex items-center gap-2 mt-1 font-medium">
                    <Activity size={16} /> {nextAppointment.specialty}
                  </p>
                </div>
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <div className="text-center px-2">
                    <p className="text-[10px] uppercase font-bold text-indigo-200">Date</p>
                    <p className="text-sm font-bold">{nextAppointment.date}</p>
                  </div>
                  <div className="w-[1px] h-8 bg-white/20"></div>
                  <div className="text-center px-2">
                    <p className="text-[10px] uppercase font-bold text-indigo-200">Time</p>
                    <p className="text-sm font-bold">{nextAppointment.time}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Background Decor */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          {/* Quick Action Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="card group cursor-pointer hover:border-indigo-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Book Visit</h4>
                  <p className="text-xs text-slate-500 font-medium">Find a new specialist</p>
                </div>
              </div>
            </div>
            <div className="card group cursor-pointer hover:border-emerald-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Messages</h4>
                  <p className="text-xs text-slate-500 font-medium">Contact your care team</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          <div className="card">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Clock size={18} className="text-indigo-500" />
              Recent Activity
            </h3>
            <div className="space-y-6">
              {[1, 2].map((i) => (
                <div key={i} className="flex gap-4 relative">
                  {i === 1 && <div className="absolute left-[11px] top-8 w-[2px] h-10 bg-slate-100"></div>}
                  <div className="z-10 w-6 h-6 rounded-full bg-white border-4 border-indigo-50 flex-shrink-0"></div>
                  <div>
                    <p className="text-xs font-bold text-slate-700 leading-none">Prescription Updated</p>
                    <p className="text-[10px] text-slate-400 mt-1">Dr. Chen • 2 days ago</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 text-xs font-bold text-indigo-600 flex items-center justify-center gap-1 hover:underline">
              View History <ArrowRight size={14} />
            </button>
          </div>

          <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-xl shadow-slate-200">
            <h4 className="text-sm font-bold mb-2">Need Help?</h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Our 24/7 support team is available for any technical difficulties.
            </p>
            <button className="w-full py-2 bg-white text-slate-900 rounded-xl text-xs font-bold hover:bg-slate-100 transition-colors">
              Contact Support
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PatientDashboard;