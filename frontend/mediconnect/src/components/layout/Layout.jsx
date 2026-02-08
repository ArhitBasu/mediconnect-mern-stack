import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-slate-50 font-sans antialiased text-slate-900">
      {/* Sidebar with a subtle border instead of a heavy shadow */}
      <aside className="hidden md:flex border-r border-slate-200">
        <Sidebar />
      </aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Navbar with glassmorphism effect */}
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <Navbar />
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="max-w-7xl mx-auto p-4 md:p-8 lg:p-10">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;