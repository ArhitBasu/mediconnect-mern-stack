import { useState, useEffect } from "react";
import { Search, Trash2, CheckCircle, ShieldAlert, AlertTriangle, UserPlus } from "lucide-react";

const ManageDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  const loadDoctors = () => {
    const allUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setDoctors(allUsers.filter((u) => u.role === "DOCTOR"));
  };

  useEffect(() => { loadDoctors(); }, []);

  const updateStatus = (id, status) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const updated = users.map(u => u.id === id ? { ...u, status } : u);
    localStorage.setItem("users", JSON.stringify(updated));
    loadDoctors();
  };

  return (
    <div className="space-y-8 p-2">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Staff Management</h1>
          <p className="text-slate-500 font-medium">Verify and authorize medical professionals.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input type="text" placeholder="Search by name or specialty..." className="pl-12 pr-6 py-3 bg-white border border-slate-200 rounded-2xl text-sm w-full md:w-80 focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none focus:border-indigo-500 shadow-sm" />
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Medical Practitioner</th>
              <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Verification Status</th>
              <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">Administrative Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {doctors.map((doc) => (
              <tr key={doc.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-lg border border-indigo-100">
                      {doc.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Dr. {doc.name}</p>
                      <p className="text-xs text-slate-400 font-medium">{doc.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  {doc.status === "APPROVED" ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-wider border border-emerald-100">
                      <CheckCircle size={12} /> Verified
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-[10px] font-black uppercase tracking-wider border border-amber-100">
                      <AlertTriangle size={12} /> Pending Review
                    </span>
                  )}
                </td>
                <td className="px-8 py-6 text-right">
                  <div className="flex justify-end gap-2">
                    {doc.status !== "APPROVED" && (
                      <button onClick={() => updateStatus(doc.id, "APPROVED")} className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all">
                        Approve
                      </button>
                    )}
                    <button onClick={() => updateStatus(doc.id, "REJECTED")} className="p-2 bg-white border border-slate-200 text-slate-400 rounded-xl hover:text-red-600 hover:border-red-100 hover:bg-red-50 transition-all">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {doctors.length === 0 && (
          <div className="py-20 text-center">
            <div className="inline-flex p-6 bg-slate-50 rounded-[2.5rem] mb-4">
              <ShieldAlert size={40} className="text-slate-200" />
            </div>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No Practitioner Records Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageDoctors;