import { useState } from "react";
import { Clock, Calendar as CalendarIcon, Plus, Trash2, CalendarCheck } from "lucide-react";

const Availability = () => {
  const [slots, setSlots] = useState([
    { id: 1, date: "2026-02-12", time: "09:00 AM" },
    { id: 2, date: "2026-02-12", time: "10:30 AM" },
  ]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Manage Availability</h1>
        <p className="text-slate-500 font-medium text-sm mt-1">Set your working hours for patient bookings.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left: Add New Slot Form */}
        <div className="lg:col-span-1">
          <div className="card sticky top-8 border-none shadow-xl shadow-slate-200/50">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Plus size={20} className="text-indigo-600" />
              Add New Slot
            </h3>
            
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Select Date</label>
                <div className="relative">
                  <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="date" 
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Start Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="time" 
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all" 
                  />
                </div>
              </div>

              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-indigo-100 transition-all active:scale-95 flex items-center justify-center gap-2">
                <Plus size={18} />
                Create Time Slot
              </button>
            </div>
          </div>
        </div>

        {/* Right: Slots List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-slate-800">Your Active Slots</h3>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{slots.length} Slots Total</span>
          </div>

          {slots.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {slots.map((slot) => (
                <div key={slot.id} className="card group hover:border-indigo-200 transition-all flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                      <CalendarCheck size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{slot.date}</p>
                      <p className="text-xs text-slate-500 font-medium">{slot.time}</p>
                    </div>
                  </div>
                  <button className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="card border-dashed border-2 border-slate-200 bg-transparent flex flex-col items-center justify-center py-20 text-slate-400">
              <Clock size={48} className="mb-4 opacity-20" />
              <p className="font-medium">No availability slots set for this week.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Availability;