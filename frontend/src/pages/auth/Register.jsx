import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { 
  UserPlus, 
  Mail, 
  Lock, 
  User, 
  Stethoscope, 
  Heart, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  AlertCircle,
  Sparkles,
  BadgeCheck,
  Calendar,
  Clock,
  Fingerprint
} from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "PATIENT",
    specialty: "",
    licenseNumber: "",
    phone: "",
    terms: false
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [emailAvailable, setEmailAvailable] = useState(true);
  const [checkingEmail, setCheckingEmail] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Real-time password strength checker
  useEffect(() => {
    let strength = 0;
    const password = form.password;
    
    if (password.length > 7) strength += 1;
    if (password.match(/[a-z]+/)) strength += 1;
    if (password.match(/[A-Z]+/)) strength += 1;
    if (password.match(/[0-9]+/)) strength += 1;
    if (password.match(/[$@#&!]+/)) strength += 1;
    
    setPasswordStrength(strength);
  }, [form.password]);

  // Real-time email availability checker
  useEffect(() => {
    const checkEmail = async () => {
      if (form.email && form.email.includes('@')) {
        setCheckingEmail(true);
        // Simulate API call
        setTimeout(() => {
          const users = JSON.parse(localStorage.getItem("users") || "[]");
          const exists = users.find((u) => u.email === form.email);
          setEmailAvailable(!exists);
          setCheckingEmail(false);
        }, 500);
      }
    };
    
    checkEmail();
  }, [form.email]);

  // Password confirmation validator
  useEffect(() => {
    if (form.confirmPassword && form.password !== form.confirmPassword) {
      setErrors(prev => ({ ...prev, confirmPassword: "Passwords don't match" }));
    } else {
      setErrors(prev => ({ ...prev, confirmPassword: "" }));
    }
  }, [form.password, form.confirmPassword]);

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.email.includes('@')) newErrors.email = "Invalid email format";
    if (!emailAvailable) newErrors.email = "Email already registered";
    if (!form.password) newErrors.password = "Password is required";
    if (passwordStrength < 3) newErrors.password = "Password is too weak";
    if (form.password !== form.confirmPassword) newErrors.confirmPassword = "Passwords don't match";
    
    if (form.role === "DOCTOR") {
      if (!form.specialty) newErrors.specialty = "Specialty is required";
      if (!form.licenseNumber) newErrors.licenseNumber = "License number is required";
      if (!form.phone) newErrors.phone = "Phone number is required";
    }
    
    if (!form.terms) newErrors.terms = "You must accept the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);

    // Simulate network delay
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("users") || "[]");

      const newUser = {
        ...form,
        id: form.role === "DOCTOR" 
          ? `DOC-${Math.floor(Math.random() * 9000) + 1000}`
          : `PAT-${Math.floor(Math.random() * 9000) + 1000}`,
        role: form.role,
        status: form.role === "DOCTOR" ? "PENDING" : "APPROVED",
        createdAt: new Date().toISOString(),
        lastActive: new Date().toISOString(),
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(form.name)}&background=4f46e5&color=fff`,
        appointments: [],
        medicalHistory: form.role === "PATIENT" ? [] : undefined
      };

      // Remove confirmPassword from stored data
      delete newUser.confirmPassword;

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      setIsLoading(false);
      setShowSuccess(true);

      // Show success message then redirect
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }, 1500);
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return "bg-red-500";
    if (passwordStrength <= 3) return "bg-yellow-500";
    if (passwordStrength <= 4) return "bg-green-500";
    return "bg-emerald-500";
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 2) return "Weak";
    if (passwordStrength <= 3) return "Fair";
    if (passwordStrength <= 4) return "Good";
    return "Strong";
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-indigo-50 flex items-center justify-center p-8 relative overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-4000"></div>
      </div>

      {/* Success Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-3xl p-12 max-w-md text-center shadow-2xl animate-slide-up">
            <div className="h-20 w-20 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <CheckCircle size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {form.role === "DOCTOR" ? "Application Submitted!" : "Registration Successful!"}
            </h3>
            <p className="text-slate-600 mb-6">
              {form.role === "DOCTOR" 
                ? "Your doctor account is pending admin approval. You'll receive an email once verified."
                : "Your patient account has been created. Redirecting to login..."}
            </p>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-600 to-blue-600 animate-progress"></div>
            </div>
          </div>
        </div>
      )}

      {/* Main Container - Two Column Layout */}
      <div className="w-full max-w-7xl relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Column - Branding & Benefits */}
        <div className="hidden lg:block space-y-10 sticky top-8 animate-fade-in-left">
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
                  {form.role === "DOCTOR" ? "PROFESSIONAL" : "PATIENT"} PORTAL
                </span>
              </div>
            </div>
            
            <h1 className="text-5xl font-black text-slate-900 leading-tight">
              {form.role === "DOCTOR" ? (
                <>Join Our<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Medical Network</span></>
              ) : (
                <>Start Your<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Health Journey</span></>
              )}
            </h1>
            
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              {form.role === "DOCTOR" 
                ? "Connect with patients, manage your practice, and deliver better care with our integrated platform."
                : "Access your medical records, book appointments, and connect with top specialists—all in one place."}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 gap-6 max-w-xl">
            {form.role === "DOCTOR" ? (
              <>
                <div className="flex items-start gap-4 p-5 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg">
                  <div className="h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Smart Scheduling</h3>
                    <p className="text-sm text-slate-500">Manage appointments effortlessly</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg">
                  <div className="h-12 w-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Verified Credentials</h3>
                    <p className="text-sm text-slate-500">Trusted professional network</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-start gap-4 p-5 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg">
                  <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">24/7 Access</h3>
                    <p className="text-sm text-slate-500">Your health records anytime</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg">
                  <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Top Specialists</h3>
                    <p className="text-sm text-slate-500">Connect with expert doctors</p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <BadgeCheck className="text-indigo-600" size={20} />
              <span className="text-sm font-semibold text-slate-700">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Fingerprint className="text-indigo-600" size={20} />
              <span className="text-sm font-semibold text-slate-700">256-bit Encryption</span>
            </div>
          </div>
        </div>

        {/* Right Column - Registration Form */}
        <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto animate-fade-in-right">
          
          {/* Mobile Brand Header */}
          <div className="lg:hidden text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-sm border border-white/20 mb-4">
              <div className="h-10 w-10 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
                <Heart size={22} fill="white" className="text-white" />
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                HealthCore
              </span>
            </div>
          </div>

          {/* Registration Card */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-indigo-200/30 border border-white/50 p-8 lg:p-10">
            
            {/* Header with Role Toggle */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                  Create Account
                </h2>
                <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-2xl">
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, role: "PATIENT" })}
                    className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                      form.role === "PATIENT" 
                        ? "bg-white text-indigo-600 shadow-md" 
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    <Heart size={16} />
                    Patient
                  </button>
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, role: "DOCTOR" })}
                    className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                      form.role === "DOCTOR" 
                        ? "bg-white text-indigo-600 shadow-md" 
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    <Stethoscope size={16} />
                    Doctor
                  </button>
                </div>
              </div>
              <p className="text-slate-500 text-lg">
                {form.role === "DOCTOR" 
                  ? "Join as a healthcare professional" 
                  : "Join as a patient"}
              </p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleRegister} className="space-y-5">
              
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 ml-2 flex items-center gap-1">
                  <User size={14} className="text-indigo-600" />
                  Full Name
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    value={form.name}
                    placeholder={form.role === "DOCTOR" ? "Dr. John Doe" : "John Doe"}
                    className={`w-full px-5 py-4 bg-slate-50 border-2 rounded-2xl text-base 
                             focus:bg-white focus:ring-4 outline-none transition-all duration-300
                             ${errors.name 
                               ? "border-red-300 focus:border-red-500 focus:ring-red-100" 
                               : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-100"
                             }`}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1 ml-2 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email with Real-time Availability */}
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 ml-2 flex items-center gap-1">
                  <Mail size={14} className="text-indigo-600" />
                  Email Address
                </label>
                <div className="relative group">
                  <input
                    type="email"
                    value={form.email}
                    placeholder="name@example.com"
                    className={`w-full px-5 py-4 bg-slate-50 border-2 rounded-2xl text-base 
                             focus:bg-white focus:ring-4 outline-none transition-all duration-300
                             ${errors.email 
                               ? "border-red-300 focus:border-red-500 focus:ring-red-100" 
                               : emailAvailable 
                                 ? "border-slate-200 focus:border-indigo-500 focus:ring-indigo-100"
                                 : "border-red-300 focus:border-red-500 focus:ring-red-100"
                             }`}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  {checkingEmail && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <div className="h-5 w-5 border-2 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
                    </div>
                  )}
                  {!checkingEmail && form.email && !errors.email && emailAvailable && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <CheckCircle size={18} className="text-emerald-500" />
                    </div>
                  )}
                </div>
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1 ml-2 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.email}
                  </p>
                )}
              </div>

              {/* Phone - Doctor Only */}
              {form.role === "DOCTOR" && (
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700 ml-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    placeholder="+1 (555) 000-0000"
                    className={`w-full px-5 py-4 bg-slate-50 border-2 rounded-2xl text-base 
                             focus:bg-white focus:ring-4 outline-none transition-all duration-300
                             ${errors.phone 
                               ? "border-red-300 focus:border-red-500 focus:ring-red-100" 
                               : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-100"
                             }`}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1 ml-2">{errors.phone}</p>
                  )}
                </div>
              )}

              {/* Password with Strength Meter */}
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 ml-2 flex items-center gap-1">
                  <Lock size={14} className="text-indigo-600" />
                  Password
                </label>
                <input
                  type="password"
                  value={form.password}
                  placeholder="Create a strong password"
                  className={`w-full px-5 py-4 bg-slate-50 border-2 rounded-2xl text-base 
                           focus:bg-white focus:ring-4 outline-none transition-all duration-300
                           ${errors.password 
                             ? "border-red-300 focus:border-red-500 focus:ring-red-100" 
                             : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-100"
                           }`}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                
                {/* Password Strength Indicator */}
                {form.password && (
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1 flex-1">
                        {[1,2,3,4,5].map((level) => (
                          <div
                            key={level}
                            className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                              level <= passwordStrength 
                                ? getPasswordStrengthColor() 
                                : "bg-slate-200"
                            }`}
                          ></div>
                        ))}
                      </div>
                      <span className="text-xs font-semibold ml-2 text-slate-600">
                        {getPasswordStrengthText()}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">
                      Use 8+ chars with uppercase, number & symbol
                    </p>
                  </div>
                )}
                {errors.password && (
                  <p className="text-xs text-red-500 mt-1 ml-2">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 ml-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={form.confirmPassword}
                  placeholder="Re-enter your password"
                  className={`w-full px-5 py-4 bg-slate-50 border-2 rounded-2xl text-base 
                           focus:bg-white focus:ring-4 outline-none transition-all duration-300
                           ${errors.confirmPassword 
                             ? "border-red-300 focus:border-red-500 focus:ring-red-100" 
                             : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-100"
                           }`}
                  onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                />
                {errors.confirmPassword && (
                  <p className="text-xs text-red-500 mt-1 ml-2">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Doctor-specific Fields */}
              {form.role === "DOCTOR" && (
                <div className="space-y-4 animate-slide-down">
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700 ml-2">
                      Medical Specialty
                    </label>
                    <select
                      value={form.specialty}
                      className={`w-full px-5 py-4 bg-slate-50 border-2 rounded-2xl text-base 
                               focus:bg-white focus:ring-4 outline-none transition-all duration-300
                               ${errors.specialty 
                                 ? "border-red-300 focus:border-red-500 focus:ring-red-100" 
                                 : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-100"
                               }`}
                      onChange={(e) => setForm({ ...form, specialty: e.target.value })}
                    >
                      <option value="">Select Specialty</option>
                      <option value="Cardiology">Cardiology</option>
                      <option value="Dermatology">Dermatology</option>
                      <option value="Endocrinology">Endocrinology</option>
                      <option value="Gastroenterology">Gastroenterology</option>
                      <option value="Neurology">Neurology</option>
                      <option value="Obstetrics">Obstetrics & Gynecology</option>
                      <option value="Oncology">Oncology</option>
                      <option value="Ophthalmology">Ophthalmology</option>
                      <option value="Orthopedics">Orthopedics</option>
                      <option value="Pediatrics">Pediatrics</option>
                      <option value="Psychiatry">Psychiatry</option>
                      <option value="Radiology">Radiology</option>
                      <option value="Surgery">Surgery</option>
                      <option value="Urology">Urology</option>
                    </select>
                    {errors.specialty && (
                      <p className="text-xs text-red-500 mt-1 ml-2">{errors.specialty}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700 ml-2">
                      Medical License Number
                    </label>
                    <input
                      type="text"
                      value={form.licenseNumber}
                      placeholder="e.g., MD12345"
                      className={`w-full px-5 py-4 bg-slate-50 border-2 rounded-2xl text-base 
                               focus:bg-white focus:ring-4 outline-none transition-all duration-300
                               ${errors.licenseNumber 
                                 ? "border-red-300 focus:border-red-500 focus:ring-red-100" 
                                 : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-100"
                               }`}
                      onChange={(e) => setForm({ ...form, licenseNumber: e.target.value })}
                    />
                    {errors.licenseNumber && (
                      <p className="text-xs text-red-500 mt-1 ml-2">{errors.licenseNumber}</p>
                    )}
                  </div>

                  <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200">
                    <div className="flex items-start gap-3">
                      <Clock size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold text-amber-800">Verification Required</p>
                        <p className="text-xs text-amber-700 mt-1">
                          Your credentials will be verified by our team. This typically takes 1-2 business days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Terms & Conditions */}
              <div className="space-y-2 pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={form.terms}
                    onChange={(e) => setForm({ ...form, terms: e.target.checked })}
                    className="w-5 h-5 mt-0.5 rounded-lg border-2 border-slate-300 text-indigo-600 focus:ring-indigo-200 transition-all"
                  />
                  <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                    I agree to the{" "}
                    <Link to="/terms" className="text-indigo-600 font-semibold hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-indigo-600 font-semibold hover:underline">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
                {errors.terms && (
                  <p className="text-xs text-red-500 ml-2">{errors.terms}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="relative w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-5 px-6 
                         rounded-2xl font-bold text-lg flex items-center justify-center gap-3 
                         hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 
                         shadow-xl shadow-indigo-200/50 hover:shadow-2xl hover:shadow-indigo-300/50 
                         disabled:opacity-70 disabled:cursor-not-allowed group mt-6"
              >
                {isLoading ? (
                  <>
                    <div className="h-6 w-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <>
                    <span>{form.role === "DOCTOR" ? "Submit Application" : "Create Account"}</span>
                    <UserPlus size={22} className="group-hover:scale-110 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-slate-100"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-6 bg-white text-sm font-semibold text-slate-400">
                  Already have an account?
                </span>
              </div>
            </div>

            {/* Login Link */}
            <Link
              to="/login"
              className="block w-full bg-white border-2 border-indigo-200 text-indigo-700 
                       py-5 rounded-2xl font-bold text-lg text-center 
                       hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-300 
                       group shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center gap-3">
                Sign In Instead
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Animations */}
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
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down {
          animation: slideDown 0.5s ease-out;
        }
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 2s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Register;