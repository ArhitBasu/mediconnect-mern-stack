import { Clock, User, Phone, MoreHorizontal, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TodayAppointments = () => {
  const navigate = useNavigate();
  const schedule = [
    { id: 1, time: "09:00 AM", patient: "Sarah Miller", type: "Check-up", status: "Waiting" },
    { id: 2, time: "10:30 AM", patient: "James Wilson", type: "Follow-up", status: "In Progress" },
    { id: 3, time: "11:15 AM", patient: "Emily Rose", type: "Consultation", status: "Upcoming" },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Today's Schedule</h1>
          <p className="text-slate-500 font-medium">Manage and track your active patient visits.</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Time</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Patient</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Type</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {schedule.map((slot) => (
              <tr key={slot.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <Clock size={14} className="text-indigo-500" /> {slot.time}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs font-bold">
                      {slot.patient.charAt(0)}
                    </div>
                    <span className="text-sm font-semibold text-slate-800">{slot.patient}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">{slot.type}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                    slot.status === 'In Progress' ? 'bg-blue-50 text-blue-600' : 
                    slot.status === 'Waiting' ? 'bg-amber-50 text-amber-600' : 'bg-slate-100 text-slate-400'
                  }`}>
                    {slot.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button 
                    onClick={() => navigate("/doctor/write-prescription")}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 shadow-md shadow-indigo-100 transition-all opacity-0 group-hover:opacity-100"
                  >
                    Prescribe <ExternalLink size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodayAppointments;