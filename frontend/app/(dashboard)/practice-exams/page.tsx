import { Play, Download, BookOpen, CheckCircle2 } from "lucide-react";
import Link from 'next/link';

export default function PracticeExam() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex items-center space-x-2 text-xs font-bold uppercase mb-4">
        <span className="bg-black text-white px-2 py-1">MODULES</span>
        <span>{">"}</span>
        <span className="bg-black text-white px-2 py-1">SERVERLESS & APP DEPLOYMENT</span>
        <span>{">"}</span>
        <span className="bg-brand-yellow border-2 border-black px-2 py-1">SET 1: LAMBDA & API GATEWAY</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-2 brutalist-card p-8">
          <div className="flex space-x-2 mb-6">
            <span className="bg-[#00E5FF] font-bold text-xs border-2 border-black px-2 py-1 uppercase">DVA-C02 ALIGNED</span>
            <span className="bg-black text-white font-bold text-xs px-2 py-1 uppercase border-2 border-black">v2.4 UPDATED</span>
          </div>
          
          <h1 className="text-5xl font-black tracking-tighter mb-4 leading-tight">Practice Set 1: Lambda & API Gateway</h1>
          
          <p className="text-gray-700 text-lg mb-8 max-w-2xl">
            Master serverless architectures, event-driven integrations, and securing REST APIs with this focused 25-question simulation.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t-4 border-gray-100">
            <div className="border-2 border-black px-4 py-3 flex items-center space-x-3 bg-white">
              <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center">
                <div className="w-1 h-1 bg-black rounded-full" />
              </div>
              <span className="font-bold text-sm">60 MINUTES</span>
            </div>
            <div className="border-2 border-black px-4 py-3 flex items-center space-x-3 bg-white">
              <BookOpen className="w-5 h-5" />
              <span className="font-bold text-sm">25 QUESTIONS</span>
            </div>
            <div className="border-2 border-black px-4 py-3 flex items-center space-x-3 bg-white">
              <span className="font-bold text-sm">MODERATE LEVEL</span>
            </div>
            <div className="border-2 border-black px-4 py-3 flex items-center space-x-3 bg-white col-span-3">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-bold text-sm">PASSING SCORE: 75%</span>
            </div>
          </div>
        </div>

        <div className="border-4 border-black bg-zinc-900 relative overflow-hidden flex items-center justify-center p-8 brutalist-shadow">
          <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80')] bg-cover mix-blend-overlay"></div>
          <div className="w-24 h-24 bg-white border-4 border-black rotate-12 flex items-center justify-center relative z-10 brutalist-shadow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#00E5FF] border-4 border-black p-8 text-center brutalist-shadow hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
          <div className="w-16 h-16 bg-white border-4 border-black mx-auto flex items-center justify-center mb-4">
            <Download className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black uppercase mb-2">Download PDF</h2>
          <p className="text-xs font-bold uppercase tracking-widest text-black/70">OFFLINE REFERENCE<br/>(4.2 MB)</p>
        </div>

        <div className="bg-brand-magenta border-4 border-black p-8 text-center brutalist-shadow hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
          <div className="w-16 h-16 bg-white border-4 border-black mx-auto flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black uppercase mb-2 text-white">Read PDF</h2>
          <p className="text-xs font-bold uppercase tracking-widest text-white/70">IN-BROWSER VIEWER</p>
        </div>

        <Link href="/quiz" className="block bg-brand-yellow border-4 border-black p-8 text-center brutalist-shadow hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
          <div className="w-16 h-16 bg-white border-4 border-black mx-auto flex items-center justify-center mb-4">
            <Play className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black uppercase mb-2">Start Quiz</h2>
          <p className="text-xs font-bold uppercase tracking-widest text-black/70">INTERACTIVE SIMULATION</p>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-2 brutalist-card p-8 bg-gray-100">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-brand-blue text-white text-2xl font-black px-3 py-1 border-2 border-black">01</div>
            <h2 className="text-3xl font-black">What You'll Practice</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-white border-2 border-black p-4 flex items-start space-x-4">
              <CheckCircle2 className="w-6 h-6 text-brand-blue shrink-0" />
              <div>
                <h3 className="font-bold text-sm mb-1">EVENT-DRIVEN PATTERNS</h3>
                <p className="text-sm text-gray-600">Handling S3 event notifications, DynamoDB Streams, and connecting them securely with AWS Lambda.</p>
              </div>
            </div>
            <div className="bg-white border-2 border-black p-4 flex items-start space-x-4">
              <CheckCircle2 className="w-6 h-6 text-brand-blue shrink-0" />
              <div>
                <h3 className="font-bold text-sm mb-1">API GATEWAY INTEGRATIONS</h3>
                <p className="text-sm text-gray-600">Proxy integrations, custom domain mapping, setting up request validation, and securing APIs using Cognito User Pools.</p>
              </div>
            </div>
            <div className="bg-white border-2 border-black p-4 flex items-start space-x-4">
              <CheckCircle2 className="w-6 h-6 text-brand-blue shrink-0" />
              <div>
                <h3 className="font-bold text-sm mb-1">TROUBLESHOOTING & X-RAY</h3>
                <p className="text-sm text-gray-600">Tracing requests through API Gateway and Lambda to identify bottlenecks, configuring active tracing, and reading annotations.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-zinc-900 border-4 border-black p-6 text-white brutalist-shadow">
            <h3 className="text-2xl font-black mb-4">Community Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-2 border-white p-3 text-center">
                <div className="text-3xl font-black">4.5k</div>
                <div className="text-[10px] font-bold uppercase tracking-widest mt-1">COMPLETIONS</div>
              </div>
              <div className="border-2 border-white p-3 text-center">
                <div className="text-3xl font-black">4.2/5</div>
                <div className="text-[10px] font-bold uppercase tracking-widest mt-1">DIFFICULTY RATING</div>
              </div>
            </div>
          </div>

          <div className="bg-brand-yellow border-4 border-black p-6 brutalist-shadow">
            <h4 className="font-bold text-xs uppercase mb-4 tracking-widest">TOP PERFORMANCE TIP</h4>
            <blockquote className="border-l-4 border-black pl-4 font-bold italic text-sm mb-4">
              "Pay close attention to concurrency limits and the differences between reserved and provisioned concurrency in Lambda."
            </blockquote>
            <div className="flex items-center space-x-3 text-xs font-bold">
              <div className="w-8 h-8 rounded-full border-2 border-black bg-white" />
              <span>— Dave R., Senior Cloud Dev</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
