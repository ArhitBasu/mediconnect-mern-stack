import { Search, Filter, UserCheck, MoreVertical, Activity } from "lucide-react";

const ManagePatients = () => {
  const patients = [
    { id: 1, name: "John Doe", email: "john@email.com", lastVisit: "Feb 12, 2026", status: "Active" },
    { id: 2, name: "Jane Miller", email: "jane.m@outlook.com", lastVisit: "Jan 28, 2026", status: "Inactive" },
    { id: 3, name: "Robert Wilson", email: "robert.w@gmail.com", lastVisit: "Jan 15, 2026", status: "Active" },
  ];

  return (
    <div className="space-y-8 p-2">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Patient Directory</h1>
          <p className="text-slate-500 font-medium">Manage patient access and medical history links.</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-1.5 rounded-[1.5rem] border border-slate-200 shadow-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input type="text" placeholder="Search Patients..." className="pl-10 pr-4 py-2 bg-transparent text-sm w-64 outline-none" />
          </div>
          <button className="p-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
            <Filter size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {patients.map((patient) => (
          <div key={patient.id} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-center justify-between group gap-6">
            <div className="flex items-center gap-5 w-full md:w-auto">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors border border-slate-100">
                <UserCheck size={24} />
              </div>
              <div>
                <h3 className="font-black text-slate-800 text-lg leading-tight">{patient.name}</h3>
                <p className="text-sm text-slate-400 font-medium">{patient.email}</p>
              </div>
            </div>

            <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-12">
              <div className="text-left md:text-right">
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Last Visit</p>
                <p className="text-sm font-bold text-slate-600">{patient.lastVisit}</p>
              </div>
              
              <div className="flex items-center gap-6">
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                  patient.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-slate-100 text-slate-400 border-slate-200'
                }`}>
                  {patient.status}
                </span>
                
                <button className="p-3 text-slate-300 hover:text-indigo-600 hover:bg-indigo-50 rounded-2xl transition-all">
                  <Activity size={20} />
                </button>
                <button className="p-3 text-slate-300 hover:text-slate-900 rounded-2xl transition-all">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="pt-4 text-center">
        <button className="text-sm font-black text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-[0.2em]">
          End of Database
        </button>
      </div>
    </div>
  );
};

export default ManagePatients;