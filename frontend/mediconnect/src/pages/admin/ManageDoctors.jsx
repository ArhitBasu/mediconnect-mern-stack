import { Plus, Search, MoreVertical, Edit2, Trash2, Mail, Phone } from "lucide-react";

const ManageDoctors = () => {
  // Mock data for demonstration
  const doctors = [
    { id: 1, name: "Dr. John Smith", spec: "Cardiologist", status: "Active", email: "john.s@mediconnect.com" },
    { id: 2, name: "Dr. Sarah Jenkins", spec: "Neurologist", status: "On Leave", email: "sarah.j@mediconnect.com" },
    { id: 3, name: "Dr. Michael Chen", spec: "Pediatrician", status: "Active", email: "m.chen@mediconnect.com" },
  ];

  return (
    <div className="space-y-6">
      {/* Header with Search and Add Action */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Manage Doctors</h1>
          <p className="text-slate-500 text-sm">View, edit, and manage all registered medical professionals.</p>
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search doctors..." 
              className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all w-64"
            />
          </div>
          <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-lg shadow-indigo-100">
            <Plus size={18} />
            Add Doctor
          </button>
        </div>
      </div>

      {/* Table Card */}
      <div className="card !p-0 overflow-hidden"> {/* !p-0 removes default card padding for the table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-4 text-xs uppercase tracking-wider font-bold text-slate-500">Doctor Info</th>
                <th className="px-6 py-4 text-xs uppercase tracking-wider font-bold text-slate-500">Specialization</th>
                <th className="px-6 py-4 text-xs uppercase tracking-wider font-bold text-slate-500">Status</th>
                <th className="px-6 py-4 text-xs uppercase tracking-wider font-bold text-slate-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {doctors.map((doc) => (
                <tr key={doc.id} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm">
                        {doc.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">{doc.name}</p>
                        <p className="text-xs text-slate-500">{doc.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-lg">
                      {doc.spec}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      doc.status === 'Active' 
                        ? 'bg-emerald-50 text-emerald-700' 
                        : 'bg-amber-50 text-amber-700'
                    }`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${doc.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                      {doc.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 text-slate-400 hover:text-indigo-600 transition-all">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 text-slate-400 hover:text-red-600 transition-all">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/30 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-medium">Showing 3 of 128 doctors</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-xs font-bold border border-slate-200 rounded-md hover:bg-white transition-colors">Previous</button>
            <button className="px-3 py-1 text-xs font-bold bg-white border border-slate-200 rounded-md shadow-sm">1</button>
            <button className="px-3 py-1 text-xs font-bold border border-slate-200 rounded-md hover:bg-white transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageDoctors;