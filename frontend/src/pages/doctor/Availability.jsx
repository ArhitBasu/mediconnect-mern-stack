import { useState } from "react";
import { Clock, Calendar as CalendarIcon, Plus, Trash2, CalendarCheck, Sparkles } from "lucide-react";

const Availability = () => {
  const [slots, setSlots] = useState([
    { id: 1, date: "2026-02-12", time: "09:00 AM" },
    { id: 2, date: "2026-02-12", time: "10:30 AM" },
  ]);

  const [formData, setFormData] = useState({ date: "", time: "" });

  const addSlot = () => {
    if (!formData.date || !formData.time) return;
    const newSlot = {
      id: Date.now(),
      date: formData.date,
      time: formData.time
    };
    setSlots([...slots, newSlot]);
    setFormData({ date: "", time: "" });
  };

  const removeSlot = (id) => setSlots(slots.filter(s => s.id !== id));

  return (
    <div className="p-2 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Time Management</h1>
          <p className="text-slate-500 font-medium italic flex items-center gap-2">
            <Sparkles size={14} className="text-indigo-400" /> Define your consultation window.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Input Form */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 sticky top-8">
            <h3 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2 uppercase tracking-tight">
              <Plus size={20} className="text-indigo-600" /> Create Slot
            </h3>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Calendar Date</label>
                <div className="relative group">
                  <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={18} />
                  <input 
                    type="date" 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:bg-white focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 outline-none transition-all font-bold text-slate-700" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Clock Time</label>
                <div className="relative group">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={18} />
                  <input 
                    type="time" 
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:bg-white focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 outline-none transition-all font-bold text-slate-700" 
                  />
                </div>
              </div>

              <button 
                onClick={addSlot}
                className="w-full bg-slate-900 hover:bg-indigo-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-indigo-100 transition-all active:scale-95 flex items-center justify-center gap-3 group"
              >
                Publish Slot <Plus size={18} className="group-hover:rotate-90 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* List View */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Live Directory ({slots.length})</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {slots.map((slot, index) => (
              <div key={slot.id} 
                style={{ animationDelay: `${index * 100}ms` }}
                className="animate-in slide-in-from-right-4 fill-mode-both bg-white group hover:border-indigo-200 transition-all flex items-center justify-between p-5 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center gap-5">
                  <div className="h-14 w-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CalendarCheck size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-800">{new Date(slot.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                    <p className="text-xs text-indigo-500 font-bold uppercase tracking-tighter">{slot.time}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeSlot(slot.id)}
                  className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Availability;