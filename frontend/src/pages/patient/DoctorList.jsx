import { Stethoscope, Star, MapPin, Search, Filter, ShieldCheck, ArrowRight, Award, Globe } from "lucide-react";

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
      bio: "Specialist in non-invasive cardiology and cardiovascular health with a focus on preventative care.",
      languages: ["English", "Spanish"]
    },
    {
      id: 2,
      name: "Dr. Sarah Jenkins",
      specialty: "Neurologist",
      rating: "4.8",
      reviews: "85",
      location: "West Wing Clinic",
      experience: "8 years",
      bio: "Expert in neuro-diagnostics and treatment of chronic migraines using advanced therapy techniques.",
      languages: ["English", "French"]
    },
    {
      id: 3,
      name: "Dr. Michael Chen",
      specialty: "Pediatrician",
      rating: "5.0",
      reviews: "210",
      location: "Children's Health Plaza",
      experience: "15 years",
      bio: "Dedicated to comprehensive pediatric care and supporting healthy childhood development milestones.",
      languages: ["English", "Mandarin"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto pb-20 animate-in fade-in duration-700">
      {/* Search & Meta Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-[0.3em]">
            <Award size={16} />
            Board Certified
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Find Your Specialist</h1>
          <p className="text-slate-500 font-medium">Connect with top-rated medical professionals in your area.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by name or specialty..." 
              className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm font-medium focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all outline-none shadow-sm"
            />
          </div>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:bg-slate-50 transition-all font-bold text-sm">
            <Filter size={18} /> Filters
          </button>
        </div>
      </div>

      {/* Specialist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {doctors.map((doc) => (
          <div key={doc.id} className="group bg-white rounded-[2.5rem] border border-slate-100 p-8 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500 flex flex-col relative overflow-hidden">
            {/* Top Row: Icon & Rating */}
            <div className="flex items-start justify-between mb-8">
              <div className="h-16 w-16 rounded-[1.25rem] bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-inner">
                <Stethoscope size={32} />
              </div>
              <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-100">
                <Star size={14} className="text-amber-500 fill-amber-500" />
                <span className="text-xs font-black text-amber-700">{doc.rating}</span>
                <span className="text-[10px] font-bold text-amber-400">({doc.reviews})</span>
              </div>
            </div>

            {/* Middle: Content */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {doc.name}
                </h2>
                <ShieldCheck size={18} className="text-blue-500" />
              </div>
              <p className="text-xs font-black text-indigo-500 uppercase tracking-widest">{doc.specialty}</p>
            </div>

            <p className="text-sm text-slate-500 mt-5 leading-relaxed font-medium line-clamp-3">
              {doc.bio}
            </p>

            {/* Bottom: Metadata */}
            <div className="mt-8 pt-6 border-t border-slate-50 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin size={14} />
                  <span className="text-xs font-bold text-slate-500 truncate">{doc.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Globe size={14} />
                  <span className="text-xs font-bold text-slate-500">{doc.languages[0]}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-black text-slate-500 uppercase tracking-tighter">
                  {doc.experience} Experience
                </span>
                <span className="px-3 py-1 bg-emerald-50 rounded-lg text-[10px] font-black text-emerald-600 uppercase tracking-tighter">
                  Accepting Patients
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="mt-8 w-full py-4 bg-slate-900 text-white rounded-[1.25rem] text-xs font-black hover:bg-indigo-600 transition-all flex items-center justify-center gap-3 group/btn shadow-lg shadow-slate-100 uppercase tracking-widest">
              Schedule Visit
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>

            {/* Decoration */}
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-indigo-50/30 rounded-full blur-2xl group-hover:bg-indigo-200/40 transition-colors"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;