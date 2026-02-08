import { Users, Stethoscope, CalendarCheck, TrendingUp, ArrowUpRight, Activity } from "lucide-react";

const AdminDashboard = () => {
  // Mock data for the UI
  const stats = [
    { title: "Total Doctors", value: "128", icon: Stethoscope, trend: "+4%", color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Active Patients", value: "3,420", icon: Users, trend: "+12%", color: "text-indigo-600", bg: "bg-indigo-50" },
    { title: "Appointments", value: "850", icon: CalendarCheck, trend: "+8%", color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "Platform Growth", value: "24%", icon: TrendingUp, trend: "+2%", color: "text-purple-600", bg: "bg-purple-50" },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">System Overview</h1>
        <p className="text-slate-500 font-medium">Welcome back, Administrator. Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="card group cursor-default">
            <div className="flex justify-between items-start">
              <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color} transition-colors group-hover:bg-white group-hover:ring-1 group-hover:ring-slate-200`}>
                <stat.icon size={24} />
              </div>
              <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                {stat.trend} <ArrowUpRight size={12} />
              </span>
            </div>
            <div className="mt-5">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{stat.title}</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-1">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity Feed */}
        <div className="card lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Activity size={20} className="text-indigo-500" />
              Recent System Activity
            </h3>
            <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">View All</button>
          </div>
          
          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between p-4 rounded-xl border border-dashed border-slate-200 hover:border-indigo-300 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600">
                    {item}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-700">New Doctor Verification Request</p>
                    <p className="text-xs text-slate-500">Dr. Sarah Jenkins submitted credentials • 2 mins ago</p>
                  </div>
                </div>
                <button className="px-4 py-1.5 text-xs font-bold bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
                  Review
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions / Platform Status */}
        <div className="card bg-indigo-900 border-none text-white">
          <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full bg-white/10 hover:bg-white/20 transition-colors py-3 px-4 rounded-xl text-sm font-medium text-left">
              Generate System Report
            </button>
            <button className="w-full bg-white/10 hover:bg-white/20 transition-colors py-3 px-4 rounded-xl text-sm font-medium text-left">
              Audit Access Logs
            </button>
            <button className="w-full bg-white text-indigo-900 hover:bg-indigo-50 transition-colors py-3 px-4 rounded-xl text-sm font-bold text-center mt-4">
              Add New Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;