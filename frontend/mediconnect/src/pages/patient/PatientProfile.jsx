import { useState } from "react";
import { Calendar, Clock, MapPin, MoreVertical, CheckCircle2, XCircle, AlertCircle } from "lucide-react";

const MyAppointments = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const appointments = [
    {
      id: 1,
      doctor: "Dr. John Smith",
      specialty: "Cardiologist",
      date: "Feb 12, 2026",
      time: "10:30 AM",
      status: "Confirmed",
      type: "In-Person"
    },
    {
      id: 2,
      doctor: "Dr. Sarah Jenkins",
      specialty: "Neurologist",
      date: "Feb 20, 2026",
      time: "02:00 PM",
      status: "Pending",
      type: "Video Consult"
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">My Appointments</h1>
          <p className="text-slate-500 font-medium">Manage your schedule and view visit history.</p>
        </div>
        
        {/* Tab Switcher */}
        <div className="flex p-1 bg-slate-100 rounded-xl w-fit">
          {["upcoming", "past"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg text-sm font-bold capitalize transition-all ${
                activeTab === tab 
                ? "bg-white text-slate-900 shadow-sm" 
                : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Appointment Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {appointments.map((app) => (
          <div key={app.id} className="card group hover:border-indigo-200 transition-all relative overflow-hidden">
            {/* Status Indicator Bar */}
            <div className={`absolute top-0 left-0 w-1 h-full ${
              app.status === 'Confirmed' ? 'bg-emerald-500' : 'bg-amber-400'
            }`}></div>

            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  {app.doctor.split(' ').pop()[0]}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">{app.doctor}</h3>
                  <p className="text-xs font-bold text-indigo-500 uppercase tracking-tight">{app.specialty}</p>
                </div>
              </div>
              <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg">
                <MoreVertical size={18} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-50">
              <div className="flex items-center gap-2 text-slate-600">
                <Calendar size={16} className="text-slate-400" />
                <span className="text-sm font-medium">{app.date}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Clock size={16} className="text-slate-400" />
                <span className="text-sm font-medium">{app.time}</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                app.status === 'Confirmed' 
                ? 'bg-emerald-50 text-emerald-600' 
                : 'bg-amber-50 text-amber-600'
              }`}>
                {app.status === 'Confirmed' ? <CheckCircle2 size={12} /> : <AlertCircle size={12} />}
                {app.status}
              </div>
              
              <div className="flex gap-2">
                <button className="text-xs font-bold text-slate-400 hover:text-red-500 transition-colors">
                  Cancel
                </button>
                <div className="w-[1px] h-4 bg-slate-200 self-center"></div>
                <button className="text-xs font-bold text-indigo-600 hover:underline">
                  Reschedule
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State Example (Hidden by logic) */}
      {appointments.length === 0 && (
        <div className="py-20 text-center card border-dashed border-2 bg-transparent">
          <Calendar className="mx-auto text-slate-200 mb-4" size={48} />
          <h3 className="text-lg font-bold text-slate-800">No appointments found</h3>
          <p className="text-slate-500 text-sm">You don't have any {activeTab} visits scheduled.</p>
        </div>
      )}
    </div>
  );
};

export default MyAppointments;