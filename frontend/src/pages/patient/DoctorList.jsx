import { Stethoscope, Star, MapPin, Search, Filter, ShieldCheck, ArrowRight } from "lucide-react";

const DoctorList = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. John Smith",
      specialty: "Cardiologist",
      rating: "4.9",
      reviews: "120",
      location: "Main Medical Center",
      experience: "12 years",
      bio: "Specialist in non-invasive cardiology and cardiovascular health."
    },
    {
      id: 2,
      name: "Dr. Sarah Jenkins",
      specialty: "Neurologist",
      rating: "4.8",
      reviews: "85",
      location: "West Wing Clinic",
      experience: "8 years",
      bio: "Expert in neuro-diagnostics and treatment of chronic migraines."
    },
    {
      id: 3,
      name: "Dr. Michael Chen",
      specialty: "Pediatrician",
      rating: "5.0",
      reviews: "210",
      location: "Children's Health Plaza",
      experience: "15 years",
      bio: "Dedicated to comprehensive pediatric care and childhood development."
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header & Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Available Doctors</h1>
          <p className="text-slate-500 font-medium">Find and consult with our highly qualified specialists.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by name or specialty..." 
              className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm w-72 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all outline-none"
            />
          </div>
          <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
            <Filter size={18} />
          </button>
        </div>
      </div>

      {/* Doctor Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doc) => (
          <div key={doc.id} className="card group flex flex-col hover:border-indigo-200 transition-all">
            {/* Doctor Info Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="h-14 w-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <Stethoscope size={28} />
              </div>
              <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
                <Star size={14} className="text-amber-500 fill-amber-500" />
                <span className="text-xs font-bold text-amber-700">{doc.rating}</span>
              </div>
            </div>

            <div className="space-y-1">
              <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                {doc.name}
                <ShieldCheck size={16} className="text-blue-500" />
              </h2>
              <p className="text-sm font-bold text-indigo-600 uppercase tracking-wide">{doc.specialty}</p>
            </div>

            <p className="text-sm text-slate-500 mt-4 line-clamp-2 leading-relaxed">
              {doc.bio}
            </p>

            {/* Quick Stats */}
            <div className="mt-6 pt-6 border-t border-slate-50 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin size={14} />
                <span className="text-xs font-medium truncate">{doc.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 justify-end">
                <span className="text-xs font-bold text-slate-600">{doc.experience} Exp</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="mt-6 w-full py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-indigo-600 transition-all flex items-center justify-center gap-2 group/btn shadow-lg shadow-slate-100">
              View Profile 
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;