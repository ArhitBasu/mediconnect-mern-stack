import { Search, Filter, MoreHorizontal, UserCheck, UserMinus, ShieldAlert } from "lucide-react";

const ManagePatients = () => {
  const patients = [
    { id: 1, name: "John Doe", email: "john@email.com", lastVisit: "2026-02-01", status: "Active" },
    { id: 2, name: "Jane Miller", email: "jane.m@outlook.com", lastVisit: "2026-01-28", status: "Inactive" },
    { id: 3, name: "Robert Wilson", email: "robert.w@gmail.com", lastVisit: "2026-02-05", status: "Pending" },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Patient Directory</h1>
          <p className="text-slate-500 text-sm">Monitor patient status and account activity.</p>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
            <Filter size={18} />
          </button>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Filter by name or email..." 
              className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all w-72"
            />
          </div>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="card !p-0 border-none shadow-xl shadow-slate-200/50">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="px-6 py-4 text-[11px] uppercase tracking-[0.1em] font-bold text-slate-400">Patient</th>
                <th className="px-6 py-4 text-[11px] uppercase tracking-[0.1em] font-bold text-slate-400">Last Visit</th>
                <th className="px-6 py-4 text-[11px] uppercase tracking-[0.1em] font-bold text-slate-400">Account Status</th>
                <th className="px-6 py-4 text-[11px] uppercase tracking-[0.1em] font-bold text-slate-400 text-right">Settings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {patients.map((patient) => (
                <tr key={patient.id} className="group hover:bg-slate-50/50 transition-all">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-white group-hover:shadow-sm transition-all border border-transparent group-hover:border-slate-100">
                        <UserCheck size={20} />
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-slate-800">{patient.name}</span>
                        <span className="text-xs text-slate-400 font-medium">{patient.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-600 font-medium">{patient.lastVisit}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider border ${
                      patient.status === 'Active' 
                        ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
                        : patient.status === 'Inactive'
                        ? 'bg-slate-100 text-slate-500 border-slate-200'
                        : 'bg-amber-50 text-amber-600 border-amber-100'
                    }`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end items-center gap-1">
                      <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-white rounded-lg transition-all border border-transparent hover:border-slate-200">
                        <ShieldAlert size={18} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-white rounded-lg transition-all border border-transparent hover:border-slate-200">
                        <MoreHorizontal size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Dynamic Footer Info */}
        <div className="p-4 bg-slate-50/50 flex justify-center border-t border-slate-100">
          <button className="text-sm font-bold text-indigo-600 hover:text-indigo-700 hover:underline transition-all">
            Load More Patients
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagePatients;