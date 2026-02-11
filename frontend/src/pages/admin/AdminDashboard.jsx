import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Users, Stethoscope, CalendarCheck, Shield, Activity, ArrowUpRight, Plus, Download } from "lucide-react";

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);

  const stats = [
    { title: "Staff Doctors", value: "128", icon: Stethoscope, trend: "+4%", color: "text-indigo-600", bg: "bg-indigo-50" },
    { title: "Total Patients", value: "3,420", icon: Users, trend: "+12%", color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Daily Appointments", value: "850", icon: CalendarCheck, trend: "+8%", color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "System Status", value: "99.9%", icon: Shield, trend: "Secure", color: "text-slate-900", bg: "bg-slate-100" },
  ];

  return (
    <div className="p-2 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Executive Overview</h1>
          <p className="text-slate-500 font-medium">Monitoring HealthCore Network <span className="text-indigo-600">@{user?.name || "Admin"}</span></p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
            <Download size={18} /> Export Report
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
            <Plus size={18} /> New Notice
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="group bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-start">
              <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                <stat.icon size={24} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">{stat.trend}</span>
            </div>
            <div className="mt-6">
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.15em]">{stat.title}</p>
              <h3 className="text-3xl font-black text-slate-900 mt-1">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Analytics & Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex justify-between items-center">
            <h3 className="text-lg font-black text-slate-800 flex items-center gap-3">
              <Activity size={22} className="text-indigo-500" /> 
              System Activity Logs
            </h3>
            <button className="text-xs font-bold text-indigo-600 hover:underline">View All Logs</button>
          </div>
          <div className="p-4 space-y-3">
            {[
              { msg: "Database Backup Completed", time: "2 mins ago", type: "success" },
              { msg: "New Doctor Registration: Dr. Sarah Connor", time: "1 hour ago", type: "new" },
              { msg: "Security Alert: Failed Login attempt from IP 192.x", time: "3 hours ago", type: "alert" }
            ].map((log, i) => (
              <div key={i} className="flex items-center justify-between p-5 rounded-[1.5rem] bg-slate-50 hover:bg-slate-100/50 transition-colors border border-transparent hover:border-slate-200">
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${log.type === 'alert' ? 'bg-red-500 animate-pulse' : 'bg-indigo-500'}`} />
                  <div>
                    <p className="text-sm font-bold text-slate-800">{log.msg}</p>
                    <p className="text-xs text-slate-400 font-medium">{log.time}</p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-slate-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions Side Panel */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white">
          <h3 className="text-xl font-bold mb-6">Quick Controls</h3>
          <div className="space-y-4">
            <button className="w-full p-4 bg-white/10 hover:bg-white/20 rounded-2xl border border-white/10 text-left transition-all">
              <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-1">Server</p>
              <p className="text-sm font-medium">Restart Main Instance</p>
            </button>
            <button className="w-full p-4 bg-white/10 hover:bg-white/20 rounded-2xl border border-white/10 text-left transition-all">
              <p className="text-xs font-bold text-emerald-300 uppercase tracking-widest mb-1">Backup</p>
              <p className="text-sm font-medium">Download Daily Snapshot</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;