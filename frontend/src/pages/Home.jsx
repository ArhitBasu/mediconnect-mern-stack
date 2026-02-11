import { Link } from "react-router-dom";
import { 
  Heart, 
  Shield, 
  Zap, 
  ArrowRight, 
  Calendar, 
  Users, 
  Clock, 
  Award,
  CheckCircle,
  Star,
  Activity,
  Stethoscope,
  BadgeCheck,
  Sparkles,
  ChevronRight,
  Play,
  Phone,
  Mail
} from "lucide-react";
import { useState, useEffect } from "react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: "50K+", label: "Active Patients", icon: Users },
    { value: "500+", label: "Verified Doctors", icon: Stethoscope },
    { value: "100K+", label: "Appointments", icon: Calendar },
    { value: "4.9", label: "Patient Rating", icon: Star },
  ];

  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "HIPAA-compliant encryption protecting your sensitive medical data 24/7",
      color: "indigo",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "Instant Booking",
      description: "Schedule appointments with top specialists in under 60 seconds",
      color: "amber",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "AI-powered health recommendations tailored to your medical history",
      color: "emerald",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "View records, chat with doctors, and manage health anytime, anywhere",
      color: "purple",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      content: "HealthCore transformed how I manage my family's healthcare. Booking appointments and accessing records has never been easier.",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      role: "Cardiologist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150",
      content: "The platform streamlined my practice. I can focus more on patients and less on paperwork. Truly revolutionary.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      content: "Finally, a healthcare app that actually understands patients. The telemedicine feature is a lifesaver!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen w-full bg-white overflow-hidden">
      
      {/* Enhanced Navigation with Glassmorphism */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}>
        <div className="bg-white/80 backdrop-blur-xl border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo with Animation */}
              <Link to="/" className="flex items-center gap-3 group">
                <div className="h-12 w-12 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-200 group-hover:scale-110 transition-all duration-500 group-hover:rotate-3">
                  <Heart size={24} fill="white" className="text-white animate-pulse-slow" />
                </div>
                <div>
                  <span className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                    HealthCore
                  </span>
                  <span className="hidden sm:inline ml-3 px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full">
                    LIVE • 24/7
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <a href="#features" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
                  Features
                </a>
                <a href="#doctors" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
                  Doctors
                </a>
                <a href="#testimonials" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
                  Testimonials
                </a>
                <a href="#pricing" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
                  Pricing
                </a>
              </div>

              {/* Auth Buttons */}
              <div className="flex items-center gap-4">
                <Link 
                  to="/login" 
                  className="px-6 py-2.5 text-sm font-bold text-slate-700 hover:text-indigo-600 transition-all relative group"
                >
                  <span>Sign In</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link 
                  to="/register" 
                  className="px-6 py-2.5 text-sm font-bold bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl 
                           hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-indigo-200 
                           hover:shadow-xl hover:shadow-indigo-300 hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <span>Join Now</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-20"></div> {/* Spacer for fixed nav */}

      {/* Hero Section - Enhanced with Parallax Effect */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/50"></div>
          
          {/* Animated Circles */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-4000"></div>
          
          {/* Grid Overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(99,102,241,0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            opacity: 0.4
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Hero Content */}
            <div className={`space-y-8 transition-all duration-1000 transform ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}>
              {/* Live Badge */}
              <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-2xl shadow-lg border border-white/30 animate-slide-down">
                <div className="h-2.5 w-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-black uppercase tracking-wider bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  Trusted by 50,000+ Patients
                </span>
                <BadgeCheck size={16} className="text-indigo-600" />
              </div>

              {/* Main Headline */}
              <h1 className="text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Healthcare
                <br />
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent bg-300% animate-gradient">
                    Reimagined
                  </span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-indigo-200/50 -z-10 rounded-full blur-sm"></span>
                </span>
                <br />
                for Everyone
              </h1>

              {/* Description */}
              <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                The all-in-one platform that connects patients with top doctors, 
                manages appointments, and secures your medical history — all in one beautiful interface.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Link
                  to="/register"
                  className="group relative px-8 py-5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl 
                           font-bold text-lg flex items-center justify-center gap-3 overflow-hidden
                           hover:from-indigo-700 hover:to-blue-700 transition-all duration-500 
                           shadow-xl shadow-indigo-200/50 hover:shadow-2xl hover:shadow-indigo-300/50 
                           hover:-translate-y-1"
                >
                  <span className="relative z-10">Start Free Trial</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                </Link>
                
                <button className="group px-8 py-5 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl 
                                 font-bold text-lg flex items-center justify-center gap-3 
                                 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all duration-300 
                                 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  <Play size={20} className="text-indigo-600 group-hover:scale-110 transition-transform" />
                  <span>Watch Demo</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-8 pt-6">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 border-2 border-white 
                                            flex items-center justify-center text-white text-xs font-bold shadow-lg">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-slate-700">1,000+ joined today</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-sm font-semibold text-slate-700 ml-2">4.9/5</span>
                </div>
              </div>
            </div>

            {/* Right Column - Hero Visual */}
            <div className={`relative transition-all duration-1000 delay-300 transform ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}>
              {/* Main Feature Card */}
              <div className="relative">
                {/* Floating Elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-3xl 
                              rotate-12 opacity-20 blur-xl animate-float"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl 
                              -rotate-12 opacity-20 blur-xl animate-float animation-delay-2000"></div>

                {/* Main Card */}
                <div className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/50 p-8 
                              transform hover:scale-105 transition-all duration-700">
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-2xl 
                                    flex items-center justify-center shadow-lg">
                        <Heart size={24} fill="white" className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">Today's Schedule</h3>
                        <p className="text-xs text-slate-500">5 upcoming appointments</p>
                      </div>
                    </div>
                    <span className="px-4 py-2 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                      LIVE
                    </span>
                  </div>

                  {/* Appointment List */}
                  <div className="space-y-4">
                    {[
                      { time: "09:30 AM", name: "Dr. Sarah Chen", specialty: "Cardiology", status: "Confirmed" },
                      { time: "11:00 AM", name: "Dr. James Wilson", specialty: "Neurology", status: "Pending" },
                      { time: "02:30 PM", name: "Dr. Emily Rodriguez", specialty: "Pediatrics", status: "Confirmed" },
                    ].map((appointment, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl 
                                              hover:bg-slate-100 transition-all duration-300 cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl 
                                        flex items-center justify-center">
                            <Clock size={16} className="text-indigo-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">{appointment.time}</p>
                            <p className="text-xs text-slate-500">{appointment.name}</p>
                          </div>
                        </div>
                        <div>
                          <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                            appointment.status === "Confirmed" 
                              ? "bg-emerald-100 text-emerald-700" 
                              : "bg-amber-100 text-amber-700"
                          }`}>
                            {appointment.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Card Footer */}
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <button className="w-full py-3 text-sm font-bold text-indigo-600 hover:text-indigo-700 
                                     flex items-center justify-center gap-2 group">
                      View All Appointments
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className={`text-center transform hover:scale-105 transition-all duration-500 
                                         animate-fade-in-up`} style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="inline-flex p-4 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl mb-4">
                    <Icon className="text-indigo-600" size={28} />
                  </div>
                  <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-500 mt-2">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="relative py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold mb-6">
              <Sparkles size={16} />
              Why Choose HealthCore
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Everything you need for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                better health management
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              We combine cutting-edge technology with compassionate care to deliver the best healthcare experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl 
                           transition-all duration-500 hover:-translate-y-2 border border-slate-100"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 
                                 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                  
                  <div className={`h-16 w-16 bg-${feature.color}-100 rounded-2xl flex items-center justify-center 
                                 mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className={`text-${feature.color}-600`} size={32} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <Link to="/register" className="text-sm font-bold text-indigo-600 group-hover:text-indigo-700 
                                                   flex items-center gap-2">
                      Learn more
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative py-28 bg-gradient-to-br from-indigo-50/30 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Trusted by thousands
            </h2>
            <p className="text-xl text-slate-600">
              Don't just take our word for it — hear from our community
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Carousel */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100">
                      <div className="flex items-center gap-4 mb-6">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="h-16 w-16 rounded-2xl object-cover"
                        />
                        <div>
                          <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                          <p className="text-sm text-slate-500">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-lg text-slate-700 leading-relaxed italic">
                        "{testimonial.content}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeTestimonial 
                      ? "w-8 bg-gradient-to-r from-indigo-600 to-blue-600" 
                      : "w-2.5 bg-slate-300 hover:bg-indigo-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-700 rounded-[3rem] p-16 
                        shadow-2xl relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-grid-white/10"></div>
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center">
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                Ready to transform your healthcare experience?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Join thousands of patients and doctors already using HealthCore
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link
                  to="/register"
                  className="group px-8 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-lg 
                           flex items-center justify-center gap-3 hover:bg-slate-50 transition-all 
                           shadow-2xl hover:shadow-3xl hover:-translate-y-1"
                >
                  <span>Get Started Today</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
                <button className="px-8 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 
                                 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 
                                 hover:bg-white/20 transition-all hover:-translate-y-1">
                  <Phone size={20} />
                  <span>Contact Sales</span>
                </button>
              </div>
              <p className="text-white/70 text-sm mt-8">
                ⚡ No credit card required • Free 14-day trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white/80 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <Heart size={24} fill="white" className="text-white" />
                </div>
                <span className="text-2xl font-black text-white">HealthCore</span>
              </div>
              <p className="text-slate-400 max-w-md leading-relaxed mb-6">
                Revolutionizing healthcare through technology. We're building a healthier future, one patient at a time.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="h-10 w-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-indigo-600 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="h-10 w-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-indigo-600 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.771-3.799c1.185-2.173 1.789-4.573 1.789-7.02 0-.107-.002-.214-.007-.32A9.93 9.93 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="h-10 w-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-indigo-600 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.39-1.335-1.76-1.335-1.76-1.09-.746.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.306.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.603-.015 2.896-.015 3.29 0 .322.192.697.8.58C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>

            {/* Footer Links */}
            <div>
              <h5 className="text-white font-bold mb-4">Product</h5>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Features</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Pricing</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Security</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Updates</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold mb-4">Company</h5>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">About</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Blog</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Press</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold mb-4">Support</h5>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Help Center</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-10 mt-8 text-center text-slate-400 text-sm">
            <p>© 2024 HealthCore. All rights reserved. HIPAA Compliant. Made with ❤️ for better healthcare.</p>
                        
          </div>
        </div>
      </footer>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.6s ease-out;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 6s ease infinite;
        }
        .bg-grid-white\\/10 {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E");
        }
        .bg-300\\% {
          background-size: 300%;
        }
      `}</style>
    </div>
  );
};

export default Home;