
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const salesData = [
  { name: '08:00', sales: 120, deposit: 120 },
  { name: '10:00', sales: 450, deposit: 450 },
  { name: '12:00', sales: 980, deposit: 800 },
  { name: '14:00', sales: 760, deposit: 760 },
  { name: '16:00', sales: 1100, deposit: 1100 },
  { name: '18:00', sales: 1450, deposit: 1300 },
  { name: '20:00', sales: 800, deposit: 800 },
];

const DashboardPreview: React.FC = () => {
  return (
    <div className="bg-white rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(13,148,136,0.2)] border border-slate-200 overflow-hidden w-full max-w-5xl mx-auto transform transition-all hover:scale-[1.01]">
      <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500 shadow-sm shadow-rose-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500 shadow-sm shadow-amber-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-teal-500 shadow-sm shadow-teal-500/50"></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-2 w-32 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-teal-500 w-3/4 animate-pulse"></div>
          </div>
          <span className="text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase">AI Engine Live • 99.9% Uptime</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-teal-400 font-bold text-xs">JD</div>
      </div>
      
      <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-6 bg-slate-50/50">
        {/* Metric Cards */}
        <div className="md:col-span-1 space-y-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Total Sales Today</p>
            <h3 className="text-2xl font-black text-slate-900 mt-1">$5,641.20</h3>
            <div className="flex items-center gap-1 text-emerald-600 text-[11px] font-bold mt-2">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" /></svg>
              +14.2% vs avg
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-2xl border-l-4 border-l-rose-500 border border-slate-200 shadow-sm">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Profit at Risk</p>
            <h3 className="text-2xl font-black text-rose-600 mt-1">-$330.00</h3>
            <p className="text-rose-400 text-[11px] font-medium mt-2 leading-tight">2 unverified bank deposits detected</p>
          </div>

          <div className="bg-teal-900 p-5 rounded-2xl shadow-lg shadow-teal-900/20 text-white">
            <div className="flex justify-between items-start mb-4">
              <p className="text-teal-400 text-[10px] font-bold uppercase tracking-wider">Inventory Health</p>
              <div className="bg-teal-400/20 px-2 py-0.5 rounded text-[9px] font-bold text-teal-300">OPTIMAL</div>
            </div>
            <div className="relative h-2 bg-teal-800 rounded-full overflow-hidden mb-2">
              <div className="absolute left-0 h-full bg-teal-400 rounded-full" style={{ width: '88%' }}></div>
            </div>
            <p className="text-[11px] text-teal-200">Reordering 4 items in 2h</p>
          </div>
        </div>

        {/* Main Chart Section */}
        <div className="md:col-span-3 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h4 className="text-lg font-black text-slate-800">AI Integrity Monitor</h4>
              <p className="text-xs text-slate-500 font-medium">Real-time mapping: POS transactions vs. bank settlement</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">POS Sales</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Bank Deposit</span>
              </div>
            </div>
          </div>
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="chartTeal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0d9488" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#0d9488" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="chartRose" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8', fontWeight: 600}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8', fontWeight: 600}} />
                <Tooltip 
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', fontSize: '12px', fontWeight: 'bold'}}
                />
                <Area type="monotone" dataKey="sales" stroke="#0d9488" strokeWidth={4} fillOpacity={1} fill="url(#chartTeal)" />
                <Area type="monotone" dataKey="deposit" stroke="#f43f5e" strokeWidth={2} strokeDasharray="5 5" fillOpacity={1} fill="url(#chartRose)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 flex items-center justify-between p-4 bg-rose-50 rounded-2xl border border-rose-100 animate-pulse">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                </div>
                <div>
                  <p className="text-[13px] font-black text-rose-900 leading-none">High-Risk Discrepancy Found</p>
                  <p className="text-[11px] text-rose-700 mt-1">12:00PM: POS shows $980. Bank settled $800. Missing $180.</p>
                </div>
             </div>
             <button className="bg-rose-600 text-white text-[10px] px-4 py-2 rounded-lg font-black uppercase tracking-wider">Investigate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
