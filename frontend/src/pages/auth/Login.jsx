import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { 
  AlertCircle, 
  ArrowRight, 
  Heart, 
  Mail, 
  Lock, 
  Fingerprint, 
  Sparkles,
  Shield,
  Activity,
  Calendar,
  Stethoscope,
  BadgeCheck
} from "lucide-react";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

 const handleLogin = (e) => {
  e.preventDefault();
  setIsLoading(true);
  setError("");

  setTimeout(() => {
    // 1. Get existing users
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // 2. AUTO-REGISTER DEMO USER (The part you added)
    if (form.email === "patient@example.com" && !users.find(u => u.email === form.email)) {
      const demoUser = { 
        email: "patient@example.com", 
        password: "password123", 
        role: "PATIENT", 
        name: "Alex" 
      };
      users.push(demoUser);
      localStorage.setItem("users", JSON.stringify(users));
    }

    // 3. Find the user
    const user = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (!user) {
      setError("Invalid credentials. Please try again.");
      setIsLoading(false);
      return;
    }

    // 4. Role check and Navigation
   // 4. Unified Login Logic (Allows Admin, Doctor, and Patient)
localStorage.setItem("currentUser", JSON.stringify(user));
setUser(user);

if (user.role === "ADMIN") {
  navigate("/admin", { replace: true });
} else if (user.role === "DOCTOR") {
  navigate("/doctor", { replace: true });
} else if (user.role === "PATIENT") {
  navigate("/patient", { replace: true });
} else {
  // Optional: fallback for unknown roles
  navigate("/", { replace: true });
}
  }, 800);
};

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-indigo-50 flex items-center justify-center p-8 relative overflow-hidden">
      
      {/* Enhanced decorative elements for web */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-4000"></div>
        
        {/* Fixed SVG grid overlay - properly escaped */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(99,102,241,0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          opacity: 0.4
        }}></div>
      </div>

      {/* Main Container - Two Column Layout for Web */}
      <div className="w-full max-w-7xl relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Branding & Features (Visible on desktop) */}
        <div className="hidden lg:block space-y-10 animate-fade-in-left">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-white/30">
              <div className="h-14 w-14 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-200">
                <Heart size={30} fill="white" className="text-white" />
              </div>
              <div>
                <span className="text-3xl font-black bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  HealthCore
                </span>
                <span className="ml-3 px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full">
                  PATIENT PORTAL
                </span>
              </div>
            </div>
            
            <h1 className="text-5xl font-black text-slate-900 leading-tight">
              Your Health,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                Simplified & Secure
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              Experience healthcare management reimagined. Access records, book appointments, and connect with specialists—all in one place.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-6 max-w-xl">
            <div className="flex items-start gap-4 p-5 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Activity className="text-indigo-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Real-time Updates</h3>
                <p className="text-sm text-slate-500">Instant notifications & alerts</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-5 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Calendar className="text-emerald-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Smart Scheduling</h3>
                <p className="text-sm text-slate-500">24/7 appointment booking</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-5 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">HIPAA Compliant</h3>
                <p className="text-sm text-slate-500">Enterprise-grade security</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-5 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Stethoscope className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Expert Network</h3>
                <p className="text-sm text-slate-500">500+ specialists</p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-8 pt-4">
            <div className="flex items-center gap-2">
              <BadgeCheck className="text-indigo-600" size={20} />
              <span className="text-sm font-semibold text-slate-700">Trusted by 50,000+ patients</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-sm font-semibold text-slate-700">4.9/5 Rating</span>
            </div>
          </div>
        </div>

        {/* Right Column - Login Card (Web Optimized) */}
        <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto animate-fade-in-right">
          {/* Brand Header - Mobile Only */}
          <div className="lg:hidden text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-sm border border-white/20 mb-4">
              <div className="h-10 w-10 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
                <Heart size={22} fill="white" className="text-white" />
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                HealthCore
              </span>
            </div>
          </div>

          {/* Enhanced Login Card for Web */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-indigo-200/30 border border-white/50 p-8 lg:p-10 transform hover:scale-[1.02] transition-all duration-500">
            
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                Welcome Back
              </h2>
              <p className="text-slate-500 text-lg">
                Sign in to access your health dashboard
              </p>
            </div>

            {/* Security Badge - Web Enhanced */}
            <div className="flex items-center gap-3 mb-8 p-4 bg-indigo-50/80 rounded-2xl border border-indigo-100">
              <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <Shield className="text-indigo-600" size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-indigo-900">Secure Login</p>
                <p className="text-xs text-indigo-600">256-bit SSL Encrypted Connection</p>
              </div>
              <div className="ml-auto">
                <div className="h-3 w-3 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            {error && (
              <div className="mb-6 p-5 bg-red-50/90 backdrop-blur-sm border border-red-200 rounded-2xl flex items-start gap-3 animate-shake">
                <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertCircle size={16} className="text-red-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-red-800">Authentication Failed</p>
                  <p className="text-xs text-red-600 mt-0.5">{error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-2">
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Mail size={20} className="text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="name@healthcore.com"
                    className="w-full pl-12 pr-5 py-5 bg-slate-50 border-2 border-slate-200 rounded-2xl text-base 
                             focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 
                             outline-none transition-all duration-300 placeholder:text-slate-400"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-700 ml-2">
                    Password
                  </label>
                  <Link 
                    to="/forgot-password" 
                    className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 hover:underline transition-all"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Lock size={20} className="text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                  </div>
                  <input
                    type="password"
                    required
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-5 py-5 bg-slate-50 border-2 border-slate-200 rounded-2xl text-base 
                             focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 
                             outline-none transition-all duration-300 placeholder:text-slate-400"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                  />
                </div>
              </div>

              {/* Options */}
              <div className="flex items-center justify-between py-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded-lg border-2 border-slate-300 text-indigo-600 focus:ring-indigo-200 transition-all" />
                  <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                    Remember this device
                  </span>
                </label>
                <button 
                  type="button"
                  className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-all group"
                >
                  <Fingerprint size={18} className="text-indigo-500 group-hover:scale-110 transition-transform" />
                  <span>Biometric Login</span>
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="relative w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-5 px-6 
                         rounded-2xl font-bold text-lg flex items-center justify-center gap-3 
                         hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 
                         shadow-xl shadow-indigo-200/50 hover:shadow-2xl hover:shadow-indigo-300/50 
                         disabled:opacity-70 disabled:cursor-not-allowed group mt-4"
              >
                {isLoading ? (
                  <>
                    <div className="h-6 w-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Authenticating...</span>
                  </>
                ) : (
                  <>
                    <span>Access Patient Portal</span>
                    <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </>
                )}
              </button>

              {/* Demo Credentials */}
              <div className="mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <Sparkles size={14} className="text-amber-500" />
                  <span className="font-semibold uppercase tracking-wider">Quick Demo Access</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="p-2 bg-white rounded-xl border border-slate-200">
                    <span className="text-xs text-slate-400">Email</span>
                    <p className="font-mono font-medium text-slate-800">patient@example.com</p>
                  </div>
                  <div className="p-2 bg-white rounded-xl border border-slate-200">
                    <span className="text-xs text-slate-400">Password</span>
                    <p className="font-mono font-medium text-slate-800">password123</p>
                  </div>
                </div>
              </div>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-slate-100"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-6 bg-white text-sm font-semibold text-slate-400">
                  New to HealthCore?
                </span>
              </div>
            </div>

            {/* Register Link */}
            <Link
              to="/register"
              className="block w-full bg-white border-2 border-indigo-200 text-indigo-700 
                       py-5 rounded-2xl font-bold text-lg text-center 
                       hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-300 
                       group shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center gap-3">
                Create Free Account
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>

            {/* Trust Badge */}
            <div className="mt-8 pt-6 border-t-2 border-slate-100">
              <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-emerald-600" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock size={16} className="text-blue-600" />
                  <span>256-bit Encrypted</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck size={16} className="text-indigo-600" />
                  <span>ISO 27001</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer - Web Version */}
          <p className="text-center mt-8 text-sm text-slate-400 font-medium">
            ⚡ Protected by advanced AI security systems • 24/7 monitoring
          </p>
        </div>
      </div>

      {/* Enhanced Web Animations - Moved to global CSS or kept as style tag */}
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
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out;
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        @keyframes shake {
          10%, 90% { transform: translateX(-1px); }
          20%, 80% { transform: translateX(2px); }
          30%, 50%, 70% { transform: translateX(-4px); }
          40%, 60% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        }
      `}</style>
    </div>
  );
};

export default Login;