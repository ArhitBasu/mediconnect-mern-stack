import { Calendar, Users, Pill, ArrowRight, Clock, Plus, Activity, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const PatientDashboard = () => {
  const appointments = [
    { id: 1, doctor: "Dr. John Smith", date: "Feb 12", time: "10:30 AM", type: "Cardiology" },
  ];

  const prescriptions = [
    { id: 1, name: "Amoxicillin", dose: "500mg", status: "Active" },
    { id: 2, name: "Lisinopril", dose: "10mg", status: "Expired" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Top Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Welcome back, Alex</h1>
          <p className="text-slate-500 font-medium">Here is what is happening with your health today.</p>
        </div>
        <Link 
          to="/patient/book-appointment" 
          className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-indigo-100 transition-all active:scale-95"
        >
          <Plus size={18} /> Book Appointment
        </Link>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 1. Upcoming Appointments */}
        <div className="card border-none shadow-xl shadow-slate-200/50 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <Calendar size={18} className="text-indigo-500" /> Appointments
            </h3>
            <Link to="/patient/my-appointments" className="text-xs font-bold text-indigo-600 hover:underline">View All</Link>
          </div>
          
          <div className="space-y-4 flex-1">
            {appointments.map(app => (
              <div key={app.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-indigo-200 transition-all cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-bold text-slate-800">{app.doctor}</p>
                    <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-tight">{app.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-700">{app.date}</p>
                    <p className="text-[10px] text-slate-400 font-medium">{app.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Available Specialists (Quick Browse) */}
        <div className="card border-none shadow-xl shadow-slate-200/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <Users size={18} className="text-blue-500" /> Top Specialists
            </h3>
            <Link to="/patient/doctors" className="text-xs font-bold text-blue-600 hover:underline">Browse</Link>
          </div>
          
          <div className="space-y-4">
            {["Dr. Sarah Jenkins", "Dr. Michael Chen"].map((doc, i) => (
              <div key={i} className="flex items-center gap-4 p-2 hover:bg-slate-50 rounded-xl transition-colors">
                <div className="h-10 w-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                  {doc.split(' ').map(n => n[0]).join('').replace('Dr', '')}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-800">{doc}</p>
                  <p className="text-[10px] text-slate-400 font-medium">Available Tomorrow</p>
                </div>
                <ArrowRight size={14} className="text-slate-300" />
              </div>
            ))}
          </div>
        </div>

        {/* 3. Prescription History (Quick Look) */}
        <div className="card border-none shadow-xl shadow-slate-200/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <Pill size={18} className="text-emerald-500" /> Prescriptions
            </h3>
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Active</span>
          </div>
          
          <div className="space-y-3">
            {prescriptions.map(pill => (
              <div key={pill.id} className="flex items-center justify-between p-3 rounded-2xl border border-dashed border-slate-200">
                <div>
                  <p className="text-sm font-bold text-slate-700">{pill.name}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{pill.dose}</p>
                </div>
                <span className={`px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-tighter ${
                  pill.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'
                }`}>
                  {pill.status}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Health Metric Feature */}
      <div className="bg-slate-900 rounded-[2rem] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
        <div className="space-y-4 z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500 rounded-lg">
              <Heart size={20} />
            </div>
            <h4 className="text-xl font-bold">Health Insights</h4>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Based on your last lab results from November, your cholesterol levels have improved by 12%. Keep up the good work!
          </p>
          <button className="text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors">
            View Full Lab Report →
          </button>
        </div>
        <div className="flex gap-6 z-10">
          <div className="text-center">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Heart Rate</p>
            <p className="text-3xl font-black">72 <span className="text-sm font-normal text-slate-500">bpm</span></p>
          </div>
          <div className="w-[1px] h-12 bg-white/10 self-center"></div>
          <div className="text-center">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Sleep</p>
            <p className="text-3xl font-black">7.5 <span className="text-sm font-normal text-slate-500">hrs</span></p>
          </div>
        </div>
        {/* Abstract Background Decor */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default PatientDashboard;