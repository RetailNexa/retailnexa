
import React, { useState, useEffect } from 'react';
import { BotIcon, ChartIcon, ShieldIcon, CheckIcon } from './components/Icons';
import DashboardPreview from './components/DashboardPreview';
import { Feature, Plan } from './types';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const linkedInUrl = "https://www.linkedin.com/company/retailnexa";
  const contactEmail = "retailnexa.ai@gmail.com";
  const [leadForm, setLeadForm] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    locations: "1",
    pos: "",
    requestType: "Demo",
    message: ""
  });
  const [leadError, setLeadError] = useState<string | null>(null);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadMailtoHref, setLeadMailtoHref] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const submitLeadForm = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadError(null);
    setLeadSubmitted(false);

    if (!leadForm.fullName.trim()) {
      setLeadError("Please enter your name.");
      return;
    }
    if (!leadForm.email.trim()) {
      setLeadError("Please enter your email.");
      return;
    }

    const subject = `${leadForm.requestType} request — ${leadForm.businessName || "Retail business"}`;
    const body = [
      `Request Type: ${leadForm.requestType}`,
      `Name: ${leadForm.fullName}`,
      `Business: ${leadForm.businessName || "-"}`,
      `Email: ${leadForm.email}`,
      `Phone: ${leadForm.phone || "-"}`,
      `Locations: ${leadForm.locations || "-"}`,
      `POS: ${leadForm.pos || "-"}`,
      "",
      "Notes:",
      leadForm.message || "-"
    ].join("\n");

    const mailtoHref = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setLeadMailtoHref(mailtoHref);
    setLeadSubmitted(true);

    window.location.href = mailtoHref;
  };

  const features: Feature[] = [
    {
      id: 1,
      title: "Revenue Integrity",
      description: "Auto-reconcile every swipe and cash sale against bank deposits to eliminate leakage.",
      icon: <ChartIcon className="w-8 h-8 text-teal-600" />,
      details: ["POS vs Bank Settlement", "Cash Audit Automation", "Missing Deposit Alerts"]
    },
    {
      id: 2,
      title: "Inventory Autopilot",
      description: "Smart monitoring that anticipates demand, manages vendors, and flags shrinkage.",
      icon: <BotIcon className="w-8 h-8 text-cyan-600" />,
      details: ["Demand Forecasting", "Price Comparison", "Theft Pattern Detection"]
    },
    {
      id: 3,
      title: "Owner OS",
      description: "A centralized command center that handles compliance, documents, and customer calls.",
      icon: <ShieldIcon className="w-8 h-8 text-emerald-600" />,
      details: ["24/7 AI Phone Agent", "License Renewal Alerts", "Encrypted Document Vault"]
    }
  ];

  const pricingPlans: Plan[] = [
    {
      name: "Basic",
      price: "$49",
      features: ["Email & CSV sales parsing", "Unified dashboard", "Weekly reports", "Standard support"],
      cta: "Request Demo"
    },
    {
      name: "Pro",
      price: "$99",
      features: ["POS integration", "Inventory automation", "AI business assistant", "Deposit reconciliation", "Priority support"],
      cta: "Request Demo",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "$199+",
      features: ["Multi-location support", "Full automation workflows", "Camera + phone integrations", "White-label options", "Dedicated onboarding"],
      cta: "Talk to Sales"
    }
  ];

  return (
    <div className="min-h-screen selection:bg-teal-100 selection:text-teal-900 bg-[#f8fafc]">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'glass py-4 shadow-xl shadow-teal-900/5' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 bg-teal-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl italic shadow-[0_8px_16px_-4px_rgba(13,148,136,0.4)] group-hover:scale-105 transition-all">R</div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">RetailNexa</span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-slate-500">
            <a href="#problem" className="hover:text-teal-600 transition-colors">The Chaos</a>
            <a href="#how" className="hover:text-teal-600 transition-colors">How It Works</a>
            <a href="#features" className="hover:text-teal-600 transition-colors">The Intelligence</a>
            <a href="#pricing" className="hover:text-teal-600 transition-colors">Investment</a>
            <a href="#faq" className="hover:text-teal-600 transition-colors">FAQ</a>
            <a href="#contact" className="bg-slate-900 text-white px-7 py-3 rounded-xl hover:bg-teal-600 transition-all shadow-lg active:scale-95 text-[11px]">Request Demo</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
           <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-[120px] animate-pulse"></div>
           <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-cyan-200/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
           <div className="absolute top-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        </div>
        
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white shadow-sm border border-slate-200 rounded-full mb-10 group cursor-default">
            <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-ping"></span>
            <span className="text-[11px] font-black text-slate-600 uppercase tracking-[0.2em]">Eliminating Retail Operational Chaos</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter">
            Your POS tracks sales.<br /><span className="text-teal-600 italic">We track your profit.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            The first AI Operating System for independent retail. Automate reconciliation, stop shrinkage, and own your time.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-24">
            <a href="#contact" className="bg-teal-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-teal-700 transition-all shadow-[0_20px_40px_-10px_rgba(13,148,136,0.3)] hover:-translate-y-1 active:scale-95">Request a Demo</a>
            <a href="#how" className="bg-white text-slate-900 border-2 border-slate-200 px-12 py-5 rounded-2xl font-black text-xl hover:border-teal-500 hover:text-teal-600 transition-all active:scale-95 flex items-center justify-center gap-3">
              See How It Works
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-slate-900 border-b-[5px] border-b-transparent ml-1"></div>
              </div>
            </a>
          </div>

          <div className="relative group px-4">
            <div className="absolute -inset-4 bg-gradient-to-tr from-teal-500/10 via-transparent to-cyan-500/10 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity -z-10"></div>
            <DashboardPreview />
          </div>
        </div>
      </section>

      {/* The Chaos (Problem) Grid */}
      <section id="problem" className="py-32 bg-slate-900 px-6 relative overflow-hidden">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase italic">The High Cost of Chaos</h2>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              Retailers don't fail because they lack hard work. They fail because their money leaks through invisible cracks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { title: "Invisible Leakage", desc: "Credit card processors take too much. Bank deposits don't match POS reports. $200 here, $500 there—it adds up to your entire margin.", icon: "💸" },
              { title: "Operational Blindness", desc: "You have 5 different portals but no single source of truth. You spend your weekends chasing spreadsheets instead of growing your business.", icon: "🙈" },
              { title: "Inventory Drift", desc: "Dead stock eats your cash flow. Shrinkage happens right under your nose. You're buying what you don't need and running out of what you do.", icon: "📦" }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800/50 p-10 rounded-[2.5rem] border border-slate-700/50 hover:bg-slate-800 transition-all hover:-translate-y-2 group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                <h4 className="text-2xl font-black text-white mb-4 italic tracking-tight">{item.title}</h4>
                <p className="text-slate-400 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-teal-600 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
             <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>
             <div className="relative z-10 md:w-1/2">
                <div className="bg-white/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white mb-6 inline-block">The Intelligence Layer</div>
                <h3 className="text-4xl md:text-5xl font-black text-white leading-none mb-6">Stop Reacting.<br />Start Orchestrating.</h3>
                <p className="text-teal-50 text-lg mb-8 font-medium">
                   RetailNexa sits on top of your existing POS, Bank, and Cameras. We turn fragmented data into automated wealth protection.
                </p>
                <div className="flex flex-wrap gap-4">
                   {["POS Agnostic", "No New Hardware", "AI-Powered", "15min Setup"].map((tag, i) => (
                      <div key={i} className="flex items-center gap-2 text-white font-bold text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                        {tag}
                      </div>
                   ))}
                </div>
             </div>
             <div className="md:w-1/2 relative">
                <div className="bg-slate-900 rounded-3xl p-8 border border-white/10 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform">
                   <div className="space-y-4">
                      <div className="flex justify-between items-center text-teal-400 font-bold text-xs uppercase tracking-tighter">
                         <span>Live Reorder Priority</span>
                         <span className="bg-teal-400/10 px-2 py-0.5 rounded">Calculated</span>
                      </div>
                      <div className="space-y-3">
                         {[
                           { name: "Liquid Detergent", stock: "2%", action: "Ordering from Vendor A (Best Price)" },
                           { name: "Premium Coffee", stock: "5%", action: "Ordering from Vendor C (Fastest)" }
                         ].map((it, i) => (
                           <div key={i} className="bg-slate-800 p-4 rounded-xl border border-white/5">
                              <div className="flex justify-between items-center mb-1">
                                 <span className="text-white font-black text-sm">{it.name}</span>
                                 <span className="text-rose-500 text-xs font-bold">{it.stock} Left</span>
                              </div>
                              <p className="text-slate-400 text-[10px] font-medium">{it.action}</p>
                           </div>
                         ))}
                      </div>
                      <button className="w-full bg-teal-600 text-white font-black py-3 rounded-xl text-sm mt-2">Approve All Drafts</button>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-32 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="bg-teal-50 text-teal-600 text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6 inline-block">POS-Agnostic</div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Connect. Verify. Automate.</h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              RetailNexa sits on top of your existing tools and turns scattered data into actions — without replacing your POS.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Connect Your Stack",
                desc: "Sync POS data (APIs, portals, email, CSV), link bank deposits, and upload key documents.",
                bullets: ["Works with POS emails + exports", "Bank deposit verification", "Encrypted docs vault"]
              },
              {
                step: "02",
                title: "Monitor in Real Time",
                desc: "Track sales, inventory, and compliance with alerts that surface issues before they become losses.",
                bullets: ["Missing/partial deposit alerts", "Shrinkage & anomaly flags", "License renewal reminders"]
              },
              {
                step: "03",
                title: "Automate the Work",
                desc: "Generate reorder drafts, reconcile payments, and answer customer calls — so your store runs itself.",
                bullets: ["Reorder recommendations", "AI assistant answers", "24/7 AI phone agent"]
              }
            ].map((item) => (
              <div key={item.step} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-200 hover:border-teal-200 hover:bg-white hover:shadow-2xl transition-all">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">Step</div>
                  <div className="text-4xl font-black tracking-tighter text-teal-600 italic">{item.step}</div>
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8">{item.desc}</p>
                <div className="space-y-4 pt-6 border-t border-slate-200">
                  {item.bullets.map((b) => (
                    <div key={b} className="flex gap-3 items-center text-sm font-bold text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center">
                        <CheckIcon className="w-3 h-3 text-teal-600" />
                      </div>
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence (Features) Section */}
      <section id="features" className="py-32 px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Everything under one hood.</h2>
              <p className="text-xl text-slate-500 font-medium">
                We've built a full-stack automation layer that handles the heavy lifting, so you can focus on being an entrepreneur.
              </p>
            </div>
            <a href="#how" className="bg-slate-100 text-slate-900 px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-teal-50 hover:text-teal-600 transition-all">How It Works</a>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature) => (
              <div key={feature.id} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-teal-200 hover:bg-white hover:shadow-2xl transition-all group duration-500 flex flex-col h-full">
                <div className="mb-8 p-5 rounded-[1.5rem] bg-white w-fit shadow-md group-hover:bg-teal-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                  {React.isValidElement(feature.icon) && React.cloneElement(feature.icon as React.ReactElement<any>, { className: "w-10 h-10 group-hover:text-white" })}
                </div>
                <h3 className="text-2xl font-black mb-6 tracking-tight italic group-hover:text-teal-700">{feature.title}</h3>
                <p className="text-slate-500 mb-8 font-medium leading-relaxed flex-grow">{feature.description}</p>
                <div className="space-y-4 pt-6 border-t border-slate-100">
                  {feature.details.map((detail, i) => (
                    <div key={i} className="flex gap-3 items-center text-sm font-bold text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center">
                        <CheckIcon className="w-3 h-3 text-teal-600" />
                      </div>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 bg-slate-900 rounded-[4rem] p-10 md:p-20 text-white flex flex-col lg:flex-row items-center gap-16">
             <div className="lg:w-1/3">
                <h4 className="text-3xl font-black italic mb-6 leading-tight uppercase">AI Phone Agent:<br />Your New Best Employee</h4>
                <p className="text-slate-400 font-medium mb-8">
                   RetailNexa answers your store phone 24/7. It provides store hours, directions, stock checks, and faq—letting your floor staff focus on real sales.
                </p>
                <a href="#contact" className="inline-block bg-teal-600 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-teal-900 hover:bg-teal-500 transition-colors">Request a Demo</a>
             </div>
             <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {[
                  { text: "Hey! Are you guys open today?", sender: "Customer" },
                  { text: "Yes! We're open until 9 PM today at the Springfield location.", sender: "RetailNexa AI", bot: true },
                  { text: "Do you have the new Milk Silk in stock?", sender: "Customer" },
                  { text: "Checking live inventory... Yes, we have 4 units left. Would you like me to hold one for you?", sender: "RetailNexa AI", bot: true }
                ].map((msg, i) => (
                  <div key={i} className={`p-6 rounded-2xl border ${msg.bot ? 'bg-teal-950/30 border-teal-500/30' : 'bg-slate-800 border-slate-700'} relative`}>
                     <div className={`text-[10px] font-black uppercase mb-2 ${msg.bot ? 'text-teal-400' : 'text-slate-400'}`}>{msg.sender}</div>
                     <p className="text-sm font-medium italic">"{msg.text}"</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Target Segments */}
      <section className="py-32 bg-[#020617] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500 via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black mb-16 tracking-tighter uppercase italic">Built for the Backbone</h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {["Gas Stations", "Beauty Supply", "Liquor Stores", "Convenience", "Smoke Shops", "Spas & Wellness", "Specialty Retail"].map((cat, i) => (
              <div key={i} className="bg-white/5 px-8 py-6 rounded-3xl border border-white/10 hover:border-teal-500 hover:bg-teal-500/10 transition-all cursor-default group">
                <span className="text-xl md:text-3xl font-black tracking-tight text-slate-300 group-hover:text-white transition-colors">{cat}</span>
              </div>
            ))}
          </div>
          <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
             <span className="text-2xl font-black tracking-widest uppercase">Square</span>
             <span className="text-2xl font-black tracking-widest uppercase">Clover</span>
             <span className="text-2xl font-black tracking-widest uppercase">Lightspeed</span>
             <span className="text-2xl font-black tracking-widest uppercase">NRS</span>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6 bg-white relative">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <div className="bg-teal-50 text-teal-600 text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6 inline-block">Simple Monthly Plans</div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter italic uppercase">Buy back your time.</h2>
            <p className="text-xl text-slate-500 font-medium">Start small, then scale into full automation as you grow.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <div key={idx} className={`p-12 rounded-[3.5rem] relative transition-all duration-500 hover:-translate-y-4 ${plan.highlighted ? 'bg-slate-900 text-white shadow-[0_40px_80px_-20px_rgba(13,148,136,0.3)] scale-105 z-10' : 'bg-slate-50 border border-slate-200 text-slate-900'}`}>
                {plan.highlighted && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-teal-600 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">Best Value</div>
                )}
                <h3 className="text-3xl font-black mb-2 italic tracking-tight">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-6xl font-black tracking-tighter">{plan.price}</span>
                  <span className={`text-sm font-black uppercase tracking-widest ${plan.highlighted ? 'text-teal-400' : 'text-slate-500'}`}>/MO</span>
                </div>
                <ul className="space-y-6 mb-12">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex gap-4 items-center text-sm font-bold">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${plan.highlighted ? 'bg-teal-500/20 text-teal-400' : 'bg-teal-100 text-teal-600'}`}>
                        <CheckIcon className="w-3.5 h-3.5" />
                      </div>
                      <span className={plan.highlighted ? 'text-slate-300' : 'text-slate-600'}>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center w-full py-5 rounded-2xl font-black text-lg transition-all transform active:scale-95 shadow-xl ${plan.highlighted ? 'bg-teal-600 text-white hover:bg-teal-500' : 'bg-white text-slate-900 border-2 border-slate-200 hover:border-teal-600 hover:text-teal-600'}`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="bg-teal-50 text-teal-600 text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6 inline-block">FAQ</div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Answers, not fluff.</h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Built for owners and operators — simple setup, real automation, and clear accountability.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                q: "Do I need to replace my POS?",
                a: "No. RetailNexa is POS-agnostic — it sits on top of your existing system and standardizes the data for automation."
              },
              {
                q: "How do you pull sales and inventory data?",
                a: "We can ingest data from POS APIs, portals, daily sales emails, and CSV/Excel exports — whichever your store already has."
              },
              {
                q: "What does deposit reconciliation actually do?",
                a: "We compare reported sales and payment totals against bank deposits and flag missing, delayed, or partial deposits so you can act fast."
              },
              {
                q: "Can you support multiple locations?",
                a: "Yes. Multi-location consolidation and role-based workflows are part of the Enterprise path."
              },
              {
                q: "Is this available now?",
                a: "RetailNexa is onboarding early-access pilots. Fill out the demo request form and we’ll confirm fit and next steps."
              },
              {
                q: "What about security and privacy?",
                a: "We follow least-privilege access, keep data encrypted in transit, and only connect what’s needed for the workflows you enable."
              }
            ].map((item) => (
              <div key={item.q} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-200 hover:bg-white hover:border-teal-200 hover:shadow-xl transition-all">
                <h3 className="text-xl font-black mb-4 tracking-tight">{item.q}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

	      {/* Contact */}
	      <section id="contact" className="py-32 px-6 bg-white overflow-hidden">
	        <div className="container mx-auto max-w-6xl bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
	          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent pointer-events-none"></div>
	          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]"></div>
	          
	          <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-none italic uppercase">See RetailNexa<br /><span className="text-teal-500 italic lowercase">on your store data.</span></h2>
	          <p className="text-xl md:text-2xl mb-14 text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
	            Get a guided walkthrough and a clear rollout plan for your store — POS-agnostic, owner-friendly, automation-first.
	          </p>
          <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6 mb-14 text-left">
            {[
              { title: "No POS replacement", desc: "Keep your current setup and add an automation layer on top." },
              { title: "Verify deposits daily", desc: "Catch missing, delayed, or partial deposits before they become losses." },
              { title: "Inventory autopilot", desc: "Reorder drafts and anomaly alerts built for real operators." }
            ].map((card) => (
              <div key={card.title} className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="text-xs font-black uppercase tracking-[0.3em] text-teal-300 mb-3">{card.title}</div>
                <div className="text-sm text-slate-300 font-medium leading-relaxed">{card.desc}</div>
              </div>
            ))}
          </div>
	          <div className="max-w-4xl mx-auto text-left relative z-10">
	            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12">
	              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
	                <div>
	                  <div className="text-xs font-black uppercase tracking-[0.3em] text-teal-300 mb-3">Request Access</div>
	                  <h3 className="text-3xl md:text-4xl font-black tracking-tight">Demo / Early Access Form</h3>
	                </div>
	                <a className="text-teal-300 font-black uppercase tracking-widest text-xs hover:text-teal-200 transition-colors" href="#pricing">
	                  View Pricing
	                </a>
	              </div>

	              <form onSubmit={submitLeadForm} className="grid md:grid-cols-2 gap-6">
	                <div>
	                  <label className="block text-xs font-black uppercase tracking-widest text-slate-300 mb-2">Full Name *</label>
	                  <input
	                    value={leadForm.fullName}
	                    onChange={(e) => setLeadForm((p) => ({ ...p, fullName: e.target.value }))}
	                    className="w-full bg-slate-950/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-500 font-bold focus:outline-none focus:ring-2 focus:ring-teal-500/60"
	                    placeholder="Your name"
	                    required
	                  />
	                </div>
	                <div>
	                  <label className="block text-xs font-black uppercase tracking-widest text-slate-300 mb-2">Work Email *</label>
	                  <input
	                    type="email"
	                    value={leadForm.email}
	                    onChange={(e) => setLeadForm((p) => ({ ...p, email: e.target.value }))}
	                    className="w-full bg-slate-950/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-500 font-bold focus:outline-none focus:ring-2 focus:ring-teal-500/60"
	                    placeholder="you@store.com"
	                    required
	                  />
	                </div>

	                <div>
	                  <label className="block text-xs font-black uppercase tracking-widest text-slate-300 mb-2">Business Name</label>
	                  <input
	                    value={leadForm.businessName}
	                    onChange={(e) => setLeadForm((p) => ({ ...p, businessName: e.target.value }))}
	                    className="w-full bg-slate-950/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-500 font-bold focus:outline-none focus:ring-2 focus:ring-teal-500/60"
	                    placeholder="Store / company"
	                  />
	                </div>
	                <div>
	                  <label className="block text-xs font-black uppercase tracking-widest text-slate-300 mb-2">Phone</label>
	                  <input
	                    value={leadForm.phone}
	                    onChange={(e) => setLeadForm((p) => ({ ...p, phone: e.target.value }))}
	                    className="w-full bg-slate-950/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-500 font-bold focus:outline-none focus:ring-2 focus:ring-teal-500/60"
	                    placeholder="+1 (___) ___-____"
	                  />
	                </div>

	                <div>
	                  <label className="block text-xs font-black uppercase tracking-widest text-slate-300 mb-2"># of Locations</label>
	                  <select
	                    value={leadForm.locations}
	                    onChange={(e) => setLeadForm((p) => ({ ...p, locations: e.target.value }))}
	                    className="w-full bg-slate-950/40 border border-white/10 rounded-2xl px-5 py-4 text-white font-bold focus:outline-none focus:ring-2 focus:ring-teal-500/60"
	                  >
	                    {["1", "2-3", "4-10", "11+"].map((o) => (
	                      <option key={o} value={o}>
	                        {o}
	                      </option>
	                    ))}
	                  </select>
	                </div>
	                <div>
	                  <label className="block text-xs font-black uppercase tracking-widest text-slate-300 mb-2">POS System</label>
	                  <select
	                    value={leadForm.pos}
	                    onChange={(e) => setLeadForm((p) => ({ ...p, pos: e.target.value }))}
	                    className="w-full bg-slate-950/40 border border-white/10 rounded-2xl px-5 py-4 text-white font-bold focus:outline-none focus:ring-2 focus:ring-teal-500/60"
	                  >
	                    {["", "NRS", "Square", "Clover", "Lightspeed", "Other / Not sure"].map((o) => (
	                      <option key={o || "blank"} value={o}>
	                        {o || "Select one"}
	                      </option>
	                    ))}
	                  </select>
	                </div>

	                <div className="md:col-span-2">
	                  <label className="block text-xs font-black uppercase tracking-widest text-slate-300 mb-2">Request Type</label>
	                  <div className="grid sm:grid-cols-2 gap-4">
	                    {["Demo", "Early Access"].map((t) => (
	                      <label key={t} className="flex items-center gap-3 bg-slate-950/40 border border-white/10 rounded-2xl px-5 py-4 font-bold cursor-pointer">
	                        <input
	                          type="radio"
	                          name="requestType"
	                          value={t}
	                          checked={leadForm.requestType === t}
	                          onChange={() => setLeadForm((p) => ({ ...p, requestType: t }))}
	                        />
	                        <span className="text-slate-200">{t}</span>
	                      </label>
	                    ))}
	                  </div>
	                </div>

	                <div className="md:col-span-2">
	                  <label className="block text-xs font-black uppercase tracking-widest text-slate-300 mb-2">What do you want to automate?</label>
	                  <textarea
	                    value={leadForm.message}
	                    onChange={(e) => setLeadForm((p) => ({ ...p, message: e.target.value }))}
	                    className="w-full bg-slate-950/40 border border-white/10 rounded-[1.5rem] px-5 py-4 text-white placeholder:text-slate-500 font-bold min-h-[120px] focus:outline-none focus:ring-2 focus:ring-teal-500/60"
	                    placeholder="Deposit reconciliation, inventory reorders, shrinkage alerts, phone agent..."
	                  />
	                </div>

	                <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between pt-2">
	                  <div className="text-sm text-slate-400 font-medium">
	                    {leadError && <div className="text-rose-300 font-black">{leadError}</div>}
	                    {leadSubmitted && leadMailtoHref && (
	                      <div className="text-teal-200 font-black">
	                        If your email app didn’t open,{" "}
	                        <a className="underline" href={leadMailtoHref}>
	                          click here to send
	                        </a>
	                        .
	                      </div>
	                    )}
	                  </div>
	                  <button
	                    type="submit"
	                    className="bg-teal-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-teal-500 transition-all shadow-[0_20px_40px_-10px_rgba(13,148,136,0.35)] active:scale-95"
	                  >
	                    Submit Request
	                  </button>
	                </div>
	              </form>

	              <div className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-slate-500">
	                Or email us directly:{" "}
	                <a className="text-teal-300 hover:text-teal-200 transition-colors" href={`mailto:${contactEmail}`}>
	                  {contactEmail}
	                </a>
	              </div>
	            </div>
	          </div>
	          
	          <p className="mt-12 text-slate-500 text-sm font-black uppercase tracking-[0.3em]">Early Access • Pilot Stores Welcome</p>
	        </div>
	      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-24 px-6 border-t border-slate-200">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
             <div className="col-span-2">
                <div className="flex items-center gap-3 mb-8 group cursor-pointer">
                  <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center text-white font-black text-2xl italic">R</div>
                  <span className="text-2xl font-black tracking-tighter text-slate-900">RetailNexa</span>
                </div>
                <p className="text-slate-500 max-w-sm font-medium leading-relaxed italic">
                   The modern retail operating system that bridges the gap between sales and sanity — built for independent owners.
                </p>
             </div>
             <div>
                <h5 className="font-black text-xs uppercase tracking-[0.2em] text-slate-900 mb-6">Product</h5>
                <ul className="space-y-4 text-sm font-bold text-slate-500">
                   <li><a href="#how" className="hover:text-teal-600 transition-colors">Integrations</a></li>
                   <li><a href="#features" className="hover:text-teal-600 transition-colors">AI Phone Agent</a></li>
                   <li><a href="#features" className="hover:text-teal-600 transition-colors">Reconciliation</a></li>
                   <li><a href="#features" className="hover:text-teal-600 transition-colors">Inventory OS</a></li>
                </ul>
             </div>
             <div>
                <h5 className="font-black text-xs uppercase tracking-[0.2em] text-slate-900 mb-6">Company</h5>
                <ul className="space-y-4 text-sm font-bold text-slate-500">
                   <li><a href="#problem" className="hover:text-teal-600 transition-colors">Our Vision</a></li>
                   <li><a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-colors">LinkedIn</a></li>
                   <li><a href="#pricing" className="hover:text-teal-600 transition-colors">Pricing</a></li>
                   <li><a href="#faq" className="hover:text-teal-600 transition-colors">FAQ</a></li>
                   <li><a href="#contact" className="hover:text-teal-600 transition-colors">Contact</a></li>
                </ul>
             </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-12 border-t border-slate-200">
            <div className="text-sm text-slate-400 font-black uppercase tracking-widest">
              &copy; {new Date().getFullYear()} RetailNexa AI. Built for the hustle.
            </div>
            <div className="flex gap-8">
               <a
                  href={`mailto:${contactEmail}`}
                  aria-label="Email RetailNexa"
                  className="w-10 h-10 rounded-full bg-slate-200 hover:bg-teal-100 flex items-center justify-center text-slate-400 hover:text-teal-600 transition-all cursor-pointer"
               >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
               </a>
               <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="RetailNexa on LinkedIn"
                  className="w-10 h-10 rounded-full bg-slate-200 hover:bg-teal-100 flex items-center justify-center text-slate-400 hover:text-teal-600 transition-all cursor-pointer"
               >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
               </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
