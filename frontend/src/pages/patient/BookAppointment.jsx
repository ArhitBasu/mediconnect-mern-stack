import { useState } from "react";
import { Calendar, Clock, Stethoscope, FileText, Send, AlertCircle } from "lucide-react";

const BookAppointment = () => {
  const [form, setForm] = useState({
    doctor: "",
    date: "",
    time: "",
    reason: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment Request Sent!");
  };

  return (
    <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Request an Appointment</h1>
        <p className="text-slate-500 font-medium mt-1">Select a specialist and your preferred time slot.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left: The Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
          <div className="card space-y-6 shadow-xl shadow-slate-200/50 border-none">
            
            {/* Doctor Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                <Stethoscope size={14} className="text-indigo-500" /> Choose a Specialist
              </label>
              <select
                name="doctor"
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="">Select a Doctor</option>
                <option value="Dr. John Smith">Dr. John Smith (Cardiology)</option>
                <option value="Dr. Sarah Jenkins">Dr. Sarah Jenkins (Neurology)</option>
                <option value="Dr. Michael Chen">Dr. Michael Chen (Pediatrics)</option>
              </select>
            </div>

            {/* Date & Time Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                  <Calendar size={14} className="text-indigo-500" /> Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                  <Clock size={14} className="text-indigo-500" /> Preferred Time
                </label>
                <input
                  type="time"
                  name="time"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all"
                />
              </div>
            </div>

            {/* Reason Textarea */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                <FileText size={14} className="text-indigo-500" /> Reason for Visit
              </label>
              <textarea
                name="reason"
                rows="4"
                placeholder="Briefly describe your symptoms or concern..."
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-indigo-100 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Confirm Booking Request
            </button>
          </div>
        </form>

        {/* Right: Informational Sidebar */}
        <div className="space-y-6">
          <div className="card bg-slate-900 border-none text-white p-6 shadow-2xl shadow-slate-300">
            <h3 className="font-bold text-lg mb-4">Booking Policy</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-xs text-slate-300 leading-relaxed">
                <div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-white">1</div>
                Requests are typically confirmed by the clinic within 2 hours.
              </li>
              <li className="flex gap-3 text-xs text-slate-300 leading-relaxed">
                <div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-white">2</div>
                Cancellations must be made at least 24 hours in advance.
              </li>
            </ul>
          </div>

          <div className="card border-dashed border-2 border-slate-200 bg-white/50 flex flex-col items-center text-center p-6">
            <AlertCircle className="text-indigo-500 mb-3" size={32} />
            <h4 className="text-sm font-bold text-slate-800">Need Immediate Help?</h4>
            <p className="text-xs text-slate-500 mt-2">
              If this is a life-threatening emergency, please call your local emergency number immediately.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookAppointment;