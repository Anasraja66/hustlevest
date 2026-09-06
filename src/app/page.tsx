"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Filter, 
  X, 
  ShoppingBag, 
  Scale, 
  CalendarDays,
  Menu,
  ChevronDown,
  LineChart,
  ShieldCheck,
  Rocket,
  Plus,
  Mic,
  ArrowUp
} from "lucide-react";
import { ventures, Venture } from "../data/ventures";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedVenture, setSelectedVenture] = useState<Venture | null>(null);
  const [activeTab, setActiveTab] = useState<"shopping" | "rules" | "plan">("shopping");

  const amounts = ["£100", "£300", "£500"];
  const [amountIndex, setAmountIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAmountIndex((prev) => (prev + 1) % amounts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const [filterCapital, setFilterCapital] = useState<number | "All">("All");
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [filterAvailability, setFilterAvailability] = useState<string>("All");

  const filteredVentures = ventures.filter(v => 
    (filterCapital === "All" || v.capital === filterCapital) &&
    (filterCategory === "All" || v.category === filterCategory) &&
    (filterAvailability === "All" || v.availability === filterAvailability)
  );

  const openDrawer = (venture: Venture) => {
    setSelectedVenture(venture);
    setActiveTab("shopping");
    setIsDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden">
      
      {/* Navbar (Floating Dark Pill) */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl hidden md:flex items-center justify-between bg-[#1a1a1a] rounded-full p-2.5 pl-6 pr-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 backdrop-blur-xl"
      >
        {/* Logo Container */}
        <div className="flex items-center gap-3 cursor-pointer">
          <span className="text-white font-black text-[19px] tracking-tight">Hustle Vest</span>
        </div>
        
        {/* Centered Links */}
        <div className="flex items-center gap-8 text-[13px] font-semibold text-white/70">
          <a href="#simulator" className="hover:text-white transition-colors">Discovery Simulator</a>
          <a href="#businesses" className="hover:text-white transition-colors">15 Micro-Businesses</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#compliance" className="hover:text-white transition-colors">Compliance</a>
        </div>

        {/* Right CTA Button */}
        <button className="px-7 py-3 rounded-full bg-[#00BFA5] hover:bg-[#00A891] text-white font-bold text-[13px] shadow-[0_0_20px_rgba(0,191,165,0.4)] transition-all hover:scale-105 flex-shrink-0">
          Try AI Finder
        </button>
      </motion.nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden flex items-center justify-between px-6 h-20 bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center">
            <span className="text-sky-400 font-extrabold text-sm">H</span>
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900">Hustle Vest</span>
        </div>
        <button className="text-slate-900">
          <Menu size={24} />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-0 px-6 max-w-5xl mx-auto text-center relative z-20">
        


        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 mb-8 mx-auto hover:bg-slate-100 transition-colors cursor-pointer shadow-sm">
            <span className="px-2 py-0.5 rounded-full bg-brand-green/10 text-[10px] uppercase tracking-wider text-brand-green font-bold border border-brand-green/20">New</span>
            <span>Instant payouts are now live</span>
            <ArrowRight size={14} className="text-slate-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Turn{" "}
            <span className="inline-block relative text-sky-500 text-center">
              <span className="invisible">£500</span>
              <AnimatePresence>
                <motion.span
                  key={amountIndex}
                  initial={{ y: 20, opacity: 0, position: "absolute", left: 0, right: 0 }}
                  animate={{ y: 0, opacity: 1, position: "absolute", left: 0, right: 0 }}
                  exit={{ y: -20, opacity: 0, position: "absolute", left: 0, right: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {amounts[amountIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            {" "}into a <br className="hidden sm:block" />real UK side business.
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            No generic advice. We give you realistic UK micro-businesses with exact tool costs, supplier links, and local council regulations.
          </p>

          {/* Unified Premium Filter in Hero */}
          <div className="bg-white p-2 md:p-3 rounded-2xl md:rounded-full shadow-xl shadow-slate-200/50 border border-slate-100 mb-10 w-full max-w-4xl mx-auto flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-100 text-left items-center">
            
            <div className="flex-1 w-full px-6 py-3 relative group hover:bg-slate-50 transition-colors rounded-t-2xl md:rounded-l-full md:rounded-tr-none">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Capital</label>
              <select 
                className="w-full bg-transparent text-slate-800 font-semibold outline-none cursor-pointer appearance-none text-base"
                value={filterCapital}
                onChange={(e) => setFilterCapital(e.target.value === "All" ? "All" : Number(e.target.value))}
              >
                <option value="All">All Levels</option>
                <option value="100">£100</option>
                <option value="300">£300</option>
                <option value="500">£500</option>
              </select>
              <ChevronDown className="absolute right-6 top-1/2 -translate-y-[20%] text-slate-300 group-hover:text-sky-500 transition-colors pointer-events-none" size={18} />
            </div>

            <div className="flex-1 w-full px-6 py-3 relative group hover:bg-slate-50 transition-colors">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Category</label>
              <select 
                className="w-full bg-transparent text-slate-800 font-semibold outline-none cursor-pointer appearance-none text-base"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                <option value="Home Services">Home Services</option>
                <option value="Mobile">Mobile</option>
                <option value="Reselling">Reselling</option>
                <option value="Digital">Digital</option>
              </select>
              <ChevronDown className="absolute right-6 top-1/2 -translate-y-[20%] text-slate-300 group-hover:text-sky-500 transition-colors pointer-events-none" size={18} />
            </div>

            <div className="flex-1 w-full px-6 py-3 relative group hover:bg-slate-50 transition-colors rounded-b-2xl md:rounded-r-full md:rounded-bl-none">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Availability</label>
              <select 
                className="w-full bg-transparent text-slate-800 font-semibold outline-none cursor-pointer appearance-none text-base pr-8"
                value={filterAvailability}
                onChange={(e) => setFilterAvailability(e.target.value)}
              >
                <option value="All">Any Time</option>
                <option value="Weekend">Weekend</option>
                <option value="Evening">Evening</option>
                <option value="Flexible">Flexible</option>
              </select>
              <ChevronDown className="absolute right-6 top-1/2 -translate-y-[20%] text-slate-300 group-hover:text-sky-500 transition-colors pointer-events-none" size={18} />
            </div>

            <div className="px-3 py-3 md:py-0 w-full md:w-auto hidden md:block">
              <div className="w-14 h-14 bg-brand-green rounded-full flex items-center justify-center text-brand-gold shadow-lg shadow-brand-green/30 hover:scale-105 transition-transform cursor-pointer">
                <Filter size={20} />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="relative overflow-hidden group w-full sm:w-auto px-8 py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:-translate-y-0.5">
              <span className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[45deg] group-hover:left-[200%] transition-all duration-700 ease-in-out"></span>
              <span className="relative z-10">Start for free</span>
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl border border-slate-200 transition-colors">
              Book a demo
            </button>
          </div>
        </motion.div>
      </section>

      {/* Hero Dashboard Showcase (Scroll-Triggered Animation) */}
      <section className="relative z-10 mt-16 mb-20 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl shadow-slate-200/60 border border-slate-200 overflow-hidden flex flex-col md:flex-row"
        >
          {/* Mockup Sidebar */}
          <div className="w-64 bg-slate-50/50 border-r border-slate-100 p-6 hidden md:block">
            <div className="flex items-center gap-2 mb-10">
              <div className="w-6 h-6 rounded bg-brand-green"></div>
              <div className="h-4 w-20 bg-slate-200 rounded"></div>
            </div>
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="h-3 w-full bg-slate-200 rounded"></div>
                <div className="h-3 w-4/5 bg-slate-100 rounded"></div>
                <div className="h-3 w-5/6 bg-slate-100 rounded"></div>
              </div>
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <div className="h-3 w-3/4 bg-slate-200 rounded"></div>
                <div className="h-3 w-full bg-slate-100 rounded"></div>
              </div>
            </div>
          </div>
          {/* Mockup Main - AI Planner Chat */}
          <div className="flex-1 p-6 md:p-8 flex flex-col bg-white relative">
            
            {/* Chat Header */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                 </div>
                 <div>
                   <div className="text-sm font-bold text-slate-800">AI Planning Engine</div>
                   <div className="text-xs text-slate-400">Hyper-local 30-day plan</div>
                 </div>
               </div>
            </div>
            
            {/* Chat Messages */}
            <div className="flex-1 flex flex-col gap-5 mb-4">
              {/* AI Greeting */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex gap-3 max-w-[85%]"
              >
                <div className="w-7 h-7 rounded-full bg-brand-green flex items-center justify-center text-brand-gold text-[10px] font-bold flex-shrink-0 mt-1 shadow-sm">AI</div>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl rounded-tl-sm p-4 text-sm text-slate-600 shadow-sm leading-relaxed">
                  Welcome! Tell me your budget, location, and available time, and I'll generate a personalized launch roadmap.
                </div>
              </motion.div>
              
              {/* User Message */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex gap-3 max-w-[85%] self-end flex-row-reverse"
              >
                <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-[10px] font-bold flex-shrink-0 mt-1 shadow-sm">U</div>
                <div className="bg-sky-500 rounded-2xl rounded-tr-sm p-4 text-sm text-white shadow-sm leading-relaxed">
                  I have £300, live in Liverpool, and have 8 hours on weekends.
                </div>
              </motion.div>

              {/* AI Generating */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="flex gap-3 max-w-[85%]"
              >
                <div className="w-7 h-7 rounded-full bg-brand-green flex items-center justify-center text-brand-gold text-[10px] font-bold flex-shrink-0 mt-1 shadow-sm">AI</div>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl rounded-tl-sm p-4 text-sm text-slate-500 shadow-sm flex items-center gap-3">
                  <span className="flex gap-1.5">
                    <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full"></motion.span>
                    <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full"></motion.span>
                    <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full"></motion.span>
                  </span>
                  Generating local venture...
                </div>
              </motion.div>
            </div>

            {/* Input Area (Floating Omnibox Style) */}
            <div className="mt-auto pt-8 pb-2 relative z-20">
              <div className="bg-white border border-slate-200 rounded-full p-2 flex items-center gap-2 shadow-[0_8px_30px_rgb(0,0,0,0.08)] max-w-2xl mx-auto w-full transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                
                {/* Left Plus Button */}
                <button className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors flex-shrink-0 ml-1">
                  <Plus size={16} />
                </button>
                
                {/* Input Field */}
                <input 
                  type="text" 
                  disabled 
                  placeholder="Tell the AI your budget, location, and time..." 
                  className="flex-1 bg-transparent text-sm font-medium px-2 outline-none text-slate-700 placeholder:text-slate-400" 
                />
                
                {/* Voice Button */}
                <button className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full border border-slate-200 text-xs font-semibold text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors flex-shrink-0">
                  <Mic size={14} />
                  <span>Voice</span>
                </button>

                {/* Send Button */}
                <button className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-black transition-all shadow-md flex-shrink-0 mr-0.5 group">
                  <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                </button>
                
              </div>
            </div>
            
          </div>
        </motion.div>
      </section>


      {/* Features Section (3-Column Staggered) */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Everything you need to launch safely.</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Skip the guesswork. We provide exact shopping lists, real supplier links, and UK legal compliance steps.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-sky-500 mb-6 shadow-sm border border-slate-100">
                <ShoppingBag size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Verified Shopping Lists</h3>
              <p className="text-slate-600 leading-relaxed">Exact costs from real UK vendors (Amazon, Screwfix, Wilko) so you know exactly where every penny goes.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-sky-500 mb-6 shadow-sm border border-slate-100">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">UK Compliance Rules</h3>
              <p className="text-slate-600 leading-relaxed">Mandatory and recommended guidelines (HMRC, Public Liability, Council Rules) highlighted clearly.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-sky-500 mb-6 shadow-sm border border-slate-100">
                <Rocket size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">7-Day Launch Plans</h3>
              <p className="text-slate-600 leading-relaxed">A day-by-day action plan to get your first customer within a week, using free or low-cost marketing.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Setup Section (2-Column Scroll Reveal) */}
      <section className="py-24 bg-slate-50 overflow-hidden border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          
          <div className="flex-1 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">Get set up in minutes, not weeks.</h2>
              <p className="text-lg text-slate-600">Start your journey today with our streamlined process.</p>
            </motion.div>

            <div className="space-y-8">
              {[
                { step: "1", title: "Select your budget", desc: "Use the simulator to match your available capital." },
                { step: "2", title: "Unlock the blueprint", desc: "Access the shopping list and day-by-day plan." },
                { step: "3", title: "Launch & scale", desc: "Follow the steps and land your first paid customer." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-md mx-auto md:max-w-none">
            <motion.div 
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 relative z-10 overflow-hidden"
            >
              {/* Product Card Mockup (Real Business) */}
              <div className="h-40 w-full relative">
                <img src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=600&auto=format&fit=crop" alt="Mobile Car Detailing" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-green text-[10px] uppercase tracking-wider font-bold rounded-full shadow-sm">Verified Plan</div>
              </div>
              
              <div className="p-8 pt-0 relative">
                {/* Avatar */}
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border-4 border-white flex items-center justify-center -mt-8 mb-4 relative z-10 overflow-hidden">
                   <div className="w-full h-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold text-xl">M</div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-1">Mobile Eco-Wash</h3>
                <p className="text-slate-500 text-sm mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                  Service Business • High Demand
                </p>
                
                <div className="bg-slate-50 p-4 rounded-xl space-y-3 mb-6 border border-slate-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-slate-500">Startup Cost</span>
                    <span className="text-sm font-bold text-slate-900">£250</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-slate-500">Est. Monthly Profit</span>
                    <span className="text-sm font-bold text-brand-green">£1,200+</span>
                  </div>
                </div>
                
                <button className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors shadow-md flex items-center justify-center gap-2">
                  View Launch Plan <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
            
            {/* Floating Stat Card (SamurAI style) */}
            <motion.div 
              initial={{ opacity: 0, x: 50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -right-8 -bottom-8 bg-slate-900 text-white p-6 rounded-2xl shadow-2xl border border-slate-700 hidden md:block z-20"
            >
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Total ROI Generated</div>
              <div className="text-3xl font-black text-brand-gold">£24,500+</div>
              <div className="mt-2 text-xs text-slate-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                Based on 30-day plans
              </div>
            </motion.div>
            
            {/* Background Decorative Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sky-50 rounded-full blur-3xl -z-10"></div>
          </div>
          
        </div>
      </section>

      {/* Results Section (Interactive Filter Data) */}
      <section id="opportunities" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Your Matched Opportunities</h2>
            <p className="text-slate-600">Explore the exact ventures matching your simulator criteria.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredVentures.map((venture) => (
                <motion.div
                  key={venture.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col h-full overflow-hidden group cursor-pointer"
                  onClick={() => openDrawer(venture)}
                >
                  {/* Image Cover */}
                  <div className="h-48 w-full relative overflow-hidden">
                    <img src={venture.image} alt={venture.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-800 text-[10px] uppercase tracking-wider font-bold rounded-full shadow-sm">
                        {venture.category}
                      </span>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                       <h3 className="text-xl font-bold text-white mb-1">{venture.title}</h3>
                       <span className="text-white/80 font-medium text-xs flex items-center gap-1.5">
                         <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                         {venture.availability}
                       </span>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-slate-600 mb-6 flex-grow">{venture.description}</p>
                    
                    <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500 font-medium">Startup Cost</span>
                        <span className="font-bold text-slate-900">{venture.startupCost}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500 font-medium">Est. ROI</span>
                        <span className="font-bold text-brand-green">{venture.breakEven}</span>
                      </div>
                    </div>

                    <button 
                      className="w-full py-3.5 bg-slate-900 text-white font-bold rounded-xl transition-colors text-sm flex items-center justify-center gap-2 group-hover:bg-sky-500 shadow-md"
                    >
                      View Launch Plan <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
              
              {filteredVentures.length === 0 && (
                <div className="col-span-full py-12 text-center text-slate-500">
                  No ventures found matching your criteria. Try adjusting the filters.
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Scaling Stories & Strategies (Case Studies) */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Scaling Stories & Strategies</h2>
            <p className="text-lg text-slate-500">Real people building sustainable micro-businesses.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group cursor-pointer flex flex-col"
            >
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-800/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=600&auto=format&fit=crop" alt="Case Study 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-xs font-bold text-brand-green uppercase tracking-wider mb-3">Service Business</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">How a £300 Investment Turned into a £2k/Month Cleaning Agency</h3>
                <p className="text-sm text-slate-500 mb-6 flex-1">Learn the exact pricing and client acquisition strategy used by Sarah in Manchester.</p>
                <span className="text-sm font-bold text-sky-500 flex items-center gap-1 mt-auto">Read Story <ArrowRight size={14} /></span>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group cursor-pointer flex flex-col"
            >
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-800/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop" alt="Case Study 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-xs font-bold text-brand-green uppercase tracking-wider mb-3">Digital Hustle</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">7 Costly Mistakes to Avoid When Reselling Online</h3>
                <p className="text-sm text-slate-500 mb-6 flex-1">Don't waste your starting capital. Read our guide on optimizing margins and finding inventory.</p>
                <span className="text-sm font-bold text-sky-500 flex items-center gap-1 mt-auto">Read Story <ArrowRight size={14} /></span>
              </div>
            </motion.div>
            
            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group cursor-pointer flex flex-col"
            >
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-800/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop" alt="Case Study 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-xs font-bold text-brand-green uppercase tracking-wider mb-3">Community Spotlight</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">Our Community Just Crossed £100k in Shared Revenue</h3>
                <p className="text-sm text-slate-500 mb-6 flex-1">A look back at the past quarter and the most profitable micro-ventures launched.</p>
                <span className="text-sm font-bold text-sky-500 flex items-center gap-1 mt-auto">Read Story <ArrowRight size={14} /></span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Climax CTA Block */}
      <section className="py-24 px-6 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Background Animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-[50%] -left-[10%] w-[70%] h-[150%] bg-brand-green/20 blur-[100px] rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -bottom-[50%] -right-[10%] w-[70%] h-[150%] bg-sky-500/20 blur-[100px] rounded-full animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 relative z-10 tracking-tight">
            Ready to build your side-business?
          </h2>
          <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10">
            Join thousands of others turning spare time into sustainable income streams with realistic, step-by-step plans.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <button className="bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 px-10 rounded-xl transition-transform hover:scale-105 shadow-lg shadow-sky-500/30">
              Start for free
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-xl backdrop-blur-sm transition-colors border border-white/10">
              Talk to sales
            </button>
          </div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none opacity-30">
          <div className="absolute -top-40 left-20 w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 right-20 w-96 h-96 bg-[#00BFA5] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-amber-100 text-amber-800 text-xs font-extrabold px-4 py-1.5 rounded-full border border-amber-200 flex items-center gap-2 tracking-widest uppercase shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                </span>
                Early Access Pricing
              </div>
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Simple, transparent pricing.</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Choose the plan that fits your hustle. No hidden fees.</p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Single Category Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-200 relative overflow-hidden"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-1">Single Category</h3>
              <p className="text-sm text-slate-500 mb-6">Perfect for trying one industry.</p>
              
              <div className="flex items-start gap-1 mb-8">
                <span className="text-slate-400 font-bold mt-2">£</span>
                <span className="text-5xl font-black text-slate-900 tracking-tighter">5</span>
                <span className="text-slate-500 font-medium self-end mb-2">/mo</span>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "Access 1 category (e.g. Home Services)",
                  "Verified supplier links & exact costs",
                  "Step-by-step 7-day launch plans",
                  "Cancel anytime"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck size={12} className="text-slate-500" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-2xl transition-all">
                Choose Single Category
              </button>
            </motion.div>

            {/* All-Access Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-900 rounded-3xl p-8 md:p-10 shadow-2xl shadow-sky-900/20 border border-slate-800 relative overflow-hidden group"
            >
              {/* Highlight bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-[#00BFA5]"></div>
              
              <div className="absolute top-6 right-6">
                <span className="bg-sky-500/20 text-sky-400 border border-sky-500/30 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">Most Popular</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">All-Access</h3>
              <p className="text-sm text-slate-400 mb-6">Full library for serious hustlers.</p>
              
              <div className="flex items-start gap-1 mb-8">
                <span className="text-sky-400 font-bold mt-2">£</span>
                <span className="text-5xl font-black text-white tracking-tighter">20</span>
                <span className="text-slate-400 font-medium self-end mb-2">/mo</span>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "Access to all 15+ UK micro-businesses",
                  "Full legal & compliance checklists",
                  "New ventures added monthly",
                  "Priority email support",
                  "Cancel anytime"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck size={12} className="text-sky-400" />
                    </div>
                    <span className="text-sm font-medium text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 bg-[#00BFA5] hover:bg-[#00A891] text-white font-bold rounded-2xl transition-all shadow-[0_8px_30px_rgba(0,191,165,0.3)] flex items-center justify-center gap-2 group/btn">
                Unlock All-Access
                <Rocket size={18} className="text-white group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Dark Footer */}
      <footer className="bg-[#0A0A0A] border-t border-white/5 pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-4 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-white font-black text-2xl tracking-tight">Hustle Vest</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-6 pr-4">
                Your AI-powered copilot for finding, launching, and scaling profitable micro-businesses in the UK.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:bg-white/10 transition-all">
                  <span className="font-bold text-sm">X</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:bg-white/10 transition-all">
                  <span className="font-bold text-sm">in</span>
                </a>
              </div>
            </div>
            
            {/* Links Columns */}
            <div className="col-span-1 md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-[11px]">Platform</h4>
                <ul className="space-y-4 text-sm text-slate-400 font-medium">
                  <li><a href="#simulator" className="hover:text-[#00BFA5] transition-colors">Discovery Simulator</a></li>
                  <li><a href="#businesses" className="hover:text-[#00BFA5] transition-colors">Venture Library</a></li>
                  <li><a href="#pricing" className="hover:text-[#00BFA5] transition-colors">Pricing Plans</a></li>
                  <li><a href="#" className="hover:text-[#00BFA5] transition-colors">Changelog</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-[11px]">Resources</h4>
                <ul className="space-y-4 text-sm text-slate-400 font-medium">
                  <li><a href="#" className="hover:text-[#00BFA5] transition-colors">UK Tax Guide</a></li>
                  <li><a href="#" className="hover:text-[#00BFA5] transition-colors">Compliance Hub</a></li>
                  <li><a href="#" className="hover:text-[#00BFA5] transition-colors">Success Stories</a></li>
                  <li><a href="#" className="hover:text-[#00BFA5] transition-colors">Help Center</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-[11px]">Company</h4>
                <ul className="space-y-4 text-sm text-slate-400 font-medium">
                  <li><a href="#" className="hover:text-[#00BFA5] transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-[#00BFA5] transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-[#00BFA5] transition-colors">Contact Sales</a></li>
                  <li><a href="#" className="hover:text-[#00BFA5] transition-colors">Partners</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-[11px]">Legal</h4>
                <ul className="space-y-4 text-sm text-slate-400 font-medium">
                  <li><a href="#" className="hover:text-[#00BFA5] transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-[#00BFA5] transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-[#00BFA5] transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Disclaimer & Copyright */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[11px] text-slate-500 max-w-3xl text-center md:text-left leading-relaxed">
              <span className="text-amber-500/80 font-bold uppercase tracking-wider mr-2">Disclaimer:</span>
              Hustle Vest is an informational platform, not a financial adviser. All business ventures carry risk and require independent evaluation. We do not guarantee income or success.
            </p>
            <p className="text-[12px] font-medium text-slate-400 flex-shrink-0">
              © {new Date().getFullYear()} Anas Technology .co.uk
            </p>
          </div>
        </div>
      </footer>

      {/* Venture Detail Drawer Modal */}
      <AnimatePresence>
        {isDrawerOpen && selectedVenture && (
          <>
            {/* Centered Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
            />
            
            {/* Centered Modal Content Container */}
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full max-w-2xl h-[90vh] bg-white shadow-2xl flex flex-col overflow-hidden rounded-3xl border border-slate-200 pointer-events-auto"
              >
              {/* Drawer Header with Banner */}
              <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
                <img src={selectedVenture.image} className="absolute inset-0 w-full h-full object-cover" alt={selectedVenture.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                <button 
                  onClick={() => setIsDrawerOpen(false)}
                  className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full transition-colors text-white/70 hover:text-white"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-5 left-6 pr-6">
                  <span className="inline-block px-2.5 py-1 bg-sky-500/20 backdrop-blur-md border border-sky-400/30 text-sky-100 text-[10px] font-bold rounded-md uppercase tracking-wider mb-2">
                    {selectedVenture.category}
                  </span>
                  <h2 className="text-3xl font-extrabold text-white leading-tight">{selectedVenture.title}</h2>
                  <p className="text-slate-300 text-sm mt-1 line-clamp-1">{selectedVenture.description}</p>
                </div>
              </div>

              {/* Segmented Control Tabs */}
              <div className="px-6 py-4 bg-white border-b border-slate-100">
                <div className="flex bg-slate-100 p-1 rounded-xl">
                  <button 
                    onClick={() => setActiveTab("shopping")}
                    className={`flex-1 py-2.5 text-[13px] font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${activeTab === "shopping" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                  >
                    <ShoppingBag size={15} className={activeTab === "shopping" ? "text-sky-500" : ""} /> Shopping List
                  </button>
                  <button 
                    onClick={() => setActiveTab("rules")}
                    className={`flex-1 py-2.5 text-[13px] font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${activeTab === "rules" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                  >
                    <Scale size={15} className={activeTab === "rules" ? "text-sky-500" : ""} /> The Rules
                  </button>
                  <button 
                    onClick={() => setActiveTab("plan")}
                    className={`flex-1 py-2.5 text-[13px] font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${activeTab === "plan" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                  >
                    <CalendarDays size={15} className={activeTab === "plan" ? "text-sky-500" : ""} /> 7-Day Plan
                  </button>
                </div>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50">
                
                {/* Shopping List Tab */}
                {activeTab === "shopping" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-5 rounded-2xl mb-6 flex justify-between items-center shadow-lg shadow-slate-900/10 border border-slate-700">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sky-400 font-bold text-xl">
                          £
                        </div>
                        <span className="font-bold text-white">Total Budget</span>
                      </div>
                      <span className="text-2xl font-black text-sky-400">{selectedVenture.startupCost}</span>
                    </div>

                    {selectedVenture.shoppingList.map((item, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100 group-hover:bg-sky-50 group-hover:text-sky-500 group-hover:border-sky-100 transition-colors flex-shrink-0">
                          <ShoppingBag size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="font-bold text-slate-900 text-[15px] pr-4 leading-tight">{item.item}</h4>
                            <span className="bg-sky-50 text-sky-700 text-sm font-extrabold px-2.5 py-1 rounded-lg border border-sky-100">{item.cost}</span>
                          </div>
                          <div className="text-[12px] text-slate-500 font-medium mb-3">
                            Supplier: <span className="text-slate-700">{item.vendor}</span>
                          </div>
                          <p className="text-[13px] text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                            <span className="font-semibold text-slate-900 block mb-1">Why do you need this?</span>
                            {item.why}
                          </p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Rules Tab */}
                {activeTab === "rules" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl mb-6">
                      <p className="text-sm text-amber-900 font-medium flex items-start gap-3">
                        <span className="text-amber-500 mt-0.5"><ShieldCheck size={18} /></span>
                        Legal compliance is critical in the UK. Failure to follow these rules can result in fines.
                      </p>
                    </div>
                    {selectedVenture.rules.map((rule, idx) => {
                      const isMandatory = rule.startsWith("MANDATORY");
                      const isRecommended = rule.startsWith("RECOMMENDED");
                      return (
                        <div key={idx} className={`p-5 rounded-2xl border relative overflow-hidden ${isMandatory ? 'bg-white border-red-100 shadow-sm' : isRecommended ? 'bg-white border-sky-100 shadow-sm' : 'bg-white border-slate-200 shadow-sm'}`}>
                          <div className={`absolute left-0 top-0 bottom-0 w-1 ${isMandatory ? 'bg-red-400' : isRecommended ? 'bg-sky-400' : 'bg-slate-300'}`}></div>
                          <h4 className={`text-xs font-bold mb-2 uppercase tracking-widest flex items-center gap-2 ${isMandatory ? 'text-red-500' : isRecommended ? 'text-sky-500' : 'text-slate-500'}`}>
                            {isMandatory ? "Mandatory Requirement" : isRecommended ? "Recommended Practice" : "Good to Know"}
                          </h4>
                          <p className="text-sm font-medium text-slate-700 leading-relaxed">
                            {rule.replace(/^(MANDATORY|RECOMMENDED|NOT REQUIRED|CHECK):\s*/, '')}
                          </p>
                        </div>
                      );
                    })}
                  </motion.div>
                )}

                {/* 7-Day Plan Tab */}
                {activeTab === "plan" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-2">
                    <div className="space-y-6">
                      {selectedVenture.plan.map((step, idx) => (
                        <div key={idx} className="relative pl-10">
                          {/* Vertical Line */}
                          {idx !== selectedVenture.plan.length - 1 && (
                            <div className="absolute left-[11px] top-8 bottom-[-24px] w-[2px] bg-slate-200"></div>
                          )}
                          
                          {/* Dot / Number */}
                          <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold shadow-md ring-4 ring-slate-50">
                            {idx + 1}
                          </div>

                          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                            <h4 className="font-extrabold text-slate-900 text-[15px] mb-2 group-hover:text-sky-600 transition-colors">
                              {step.split(':')[0]}
                            </h4>
                            <p className="text-sm text-slate-600 leading-relaxed">
                              {step.split(':')[1]}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

              </div>
              
              {/* Drawer Footer */}
              <div className="p-5 border-t border-slate-100 bg-white">
                <button className="w-full py-4 bg-slate-900 hover:bg-black text-white font-bold rounded-2xl transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex items-center justify-center gap-2 group">
                  Save this Venture
                  <Rocket size={18} className="text-sky-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
