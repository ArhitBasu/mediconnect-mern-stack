import { Clock, User, Phone, MoreHorizontal, ExternalLink, MapPin, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TodayAppointments = () => {
  const navigate = useNavigate();
  const schedule = [
    { id: 1, time: "09:00 AM", patient: "Sarah Miller", type: "General Check-up", status: "Waiting", room: "Room 102" },
    { id: 2, time: "10:30 AM", patient: "James Wilson", type: "Follow-up", status: "In Progress", room: "Room 105" },
    { id: 3, time: "11:15 AM", patient: "Emily Rose", type: "Consultation", status: "Upcoming", room: "Waiting Hall" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 p-2">
      {/* Dynamic Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Live Schedule</h1>
          <p className="text-slate-500 font-medium flex items-center gap-2 mt-1">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            3 Patients remaining for your morning shift
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative group hidden md:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Find patient..." 
              className="pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm w-64 outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-400 transition-all shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Modern Table Container */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/40 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-8 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Appointment</th>
                <th className="px-8 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Patient Details</th>
                <th className="px-8 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Location</th>
                <th className="px-8 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Status</th>
                <th className="px-8 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {schedule.map((slot, index) => (
                <tr 
                  key={slot.id} 
                  className="hover:bg-indigo-50/30 transition-all group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Time Column */}
                  <td className="px-8 py-7">
                    <div className="flex flex-col">
                      <span className="text-lg font-black text-slate-900">{slot.time}</span>
                      <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-tighter">Est. 45 mins</span>
                    </div>
                  </td>

                  {/* Patient Column */}
                  <td className="px-8 py-7">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                        <User size={20} />
                      </div>
                      <div>
                        <p className="font-black text-slate-800 text-base">{slot.patient}</p>
                        <p className="text-xs text-slate-400 font-bold">{slot.type}</p>
                      </div>
                    </div>
                  </td>

                  {/* Location Column */}
                  <td className="px-8 py-7">
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-sm">
                      <MapPin size={14} className="text-slate-300" />
                      {slot.room}
                    </div>
                  </td>

                  {/* Status Column */}
                  <td className="px-8 py-7">
                    <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                      slot.status === 'In Progress' 
                        ? 'bg-blue-50 text-blue-600 border-blue-100 animate-pulse' 
                        : slot.status === 'Waiting' 
                        ? 'bg-amber-50 text-amber-600 border-amber-100' 
                        : 'bg-slate-50 text-slate-400 border-slate-200'
                    }`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${
                        slot.status === 'In Progress' ? 'bg-blue-600' : slot.status === 'Waiting' ? 'bg-amber-600' : 'bg-slate-400'
                      }`}></span>
                      {slot.status}
                    </span>
                  </td>

                  {/* Actions Column */}
                  <td className="px-8 py-7 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2.5 text-slate-300 hover:text-indigo-600 hover:bg-white rounded-xl transition-all border border-transparent hover:border-slate-200">
                        <Phone size={18} />
                      </button>
                      <button 
                        onClick={() => navigate("/doctor/write-prescription")}
                        className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200 group-hover:shadow-indigo-100 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      >
                        Start Session <ExternalLink size={14} />
                      </button>
                      <button className="p-2.5 text-slate-300 hover:text-slate-600">
                        <MoreHorizontal size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Dynamic Footer Info */}
        <div className="p-6 bg-slate-50/50 border-t border-slate-50 flex justify-between items-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Showing morning block (09:00 - 12:00)
          </p>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-xs font-black text-indigo-600 hover:bg-white rounded-xl transition-all">Previous Shift</button>
            <button className="px-4 py-2 text-xs font-black text-indigo-600 hover:bg-white rounded-xl transition-all">Next Shift</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayAppointments;