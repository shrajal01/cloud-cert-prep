import { Trophy, ArrowRight, X } from "lucide-react";
import Link from 'next/link';

export default function Results() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="bg-brand-yellow border-4 border-black p-8 flex items-center space-x-8 brutalist-shadow">
        <div className="w-24 h-24 bg-zinc-900 border-4 border-black flex items-center justify-center shrink-0 brutalist-shadow-sm">
          <Trophy className="w-12 h-12 text-brand-yellow" />
        </div>
        <div>
          <h1 className="text-6xl font-black uppercase tracking-tighter mb-2">CONGRATULATIONS!</h1>
          <p className="text-lg font-medium">You cleared the cutoff for the AWS Cloud Developer Associate Practice Lab.</p>
        </div>
        <div className="ml-auto w-32 h-32 opacity-20 relative hidden md:block">
          <Trophy className="w-full h-full text-black absolute top-0 left-0" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="brutalist-card p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-6">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500">PERFORMANCE ANALYSIS</div>
              <div className="bg-brand-blue text-white text-xs font-bold px-3 py-1 border-2 border-black">PASSING THRESHOLD: 72%</div>
            </div>
            
            <div className="text-7xl font-black text-brand-blue mb-8">88% SCORE</div>

            <div className="grid grid-cols-4 gap-4">
              <div className="border-4 border-black p-4 bg-gray-50 flex flex-col">
                <div className="text-[10px] font-bold text-gray-500 uppercase mb-2">TOTAL</div>
                <div className="text-3xl font-black mt-auto">25</div>
              </div>
              <div className="border-4 border-black p-4 bg-brand-yellow brutalist-shadow-sm flex flex-col">
                <div className="text-[10px] font-bold text-black uppercase mb-2">CORRECT</div>
                <div className="text-3xl font-black mt-auto">22</div>
              </div>
              <div className="border-4 border-black p-4 bg-red-100 flex flex-col">
                <div className="text-[10px] font-bold text-red-800 uppercase mb-2">INCORRECT</div>
                <div className="text-3xl font-black mt-auto">3</div>
              </div>
              <div className="border-4 border-black p-4 bg-gray-100 flex flex-col">
                <div className="text-[10px] font-bold text-gray-500 uppercase mb-2">TIME</div>
                <div className="text-3xl font-black mt-auto">18:45</div>
              </div>
            </div>
          </div>

          <div className="brutalist-card overflow-hidden">
            <div className="bg-brand-blue text-white p-4 border-b-4 border-black">
              <h3 className="font-bold uppercase text-sm">DOMAIN PROFICIENCY</h3>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <div className="flex justify-between text-sm font-bold mb-2">
                  <span>Serverless (Lambda, API Gateway)</span>
                  <span>95%</span>
                </div>
                <div className="h-4 border-2 border-black w-full bg-gray-100 relative">
                  <div className="absolute top-0 left-0 h-full bg-brand-yellow border-r-2 border-black w-[95%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-bold mb-2">
                  <span>Databases (DynamoDB)</span>
                  <span>82%</span>
                </div>
                <div className="h-4 border-2 border-black w-full bg-gray-100 relative">
                  <div className="absolute top-0 left-0 h-full bg-brand-yellow border-r-2 border-black w-[82%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-bold mb-2">
                  <span>CI/CD & Deployment</span>
                  <span>70%</span>
                </div>
                <div className="h-4 border-2 border-black w-full bg-gray-100 relative">
                  <div className="absolute top-0 left-0 h-full bg-brand-red border-r-2 border-black w-[70%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-zinc-900 border-4 border-black p-6 text-white relative overflow-hidden brutalist-shadow h-64">
            <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80')] bg-cover mix-blend-overlay"></div>
            <div className="relative z-10 flex flex-col justify-end h-full">
              <h3 className="text-brand-yellow font-bold text-sm uppercase mb-2">ELITE STATUS</h3>
              <p className="text-sm font-medium">You are in the top 5% of learners this week. Keep up the momentum.</p>
            </div>
          </div>

          <div className="bg-brand-yellow border-4 border-black p-8 text-center brutalist-shadow h-[21rem] flex flex-col justify-center">
            <h2 className="text-3xl font-black uppercase mb-4 leading-tight">READY FOR THE REAL THING?</h2>
            <p className="text-sm font-medium mb-8">You've mastered these concepts. Schedule your official AWS exam today or try a harder simulation.</p>
            <div className="space-y-3">
              <button className="w-full bg-zinc-900 text-white py-3 font-bold border-4 border-black hover:bg-zinc-800 transition-colors">
                BOOK EXAM
              </button>
              <Link href="/dashboard" className="block w-full bg-white text-black py-3 font-bold border-4 border-black brutalist-shadow-sm hover:translate-y-[-2px] transition-transform">
                BACK TO DASHBOARD
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center mb-6">
          <div className="bg-zinc-900 text-white px-4 py-2 font-bold text-sm uppercase">RECENT MISTAKES</div>
          <div className="h-1 flex-1 bg-black ml-4"></div>
        </div>
        
        <div className="space-y-4">
          <div className="brutalist-card p-4 flex items-start space-x-4">
            <div className="w-12 h-12 bg-brand-red border-2 border-black flex items-center justify-center shrink-0">
              <X className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold mb-1 text-sm">Q14: DynamoDB Capacity Planning</h4>
              <p className="text-sm text-gray-600 italic mb-2">"A company requires consistent performance for a high-traffic e-commerce application..."</p>
              <button className="text-brand-blue font-bold text-xs flex items-center hover:underline uppercase">
                REVIEW EXPLANATION <ArrowRight className="w-3 h-3 ml-1" />
              </button>
            </div>
          </div>
          <div className="brutalist-card p-4 flex items-start space-x-4">
            <div className="w-12 h-12 bg-brand-red border-2 border-black flex items-center justify-center shrink-0">
              <X className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold mb-1 text-sm">Q22: CodeDeploy Strategies</h4>
              <p className="text-sm text-gray-600 italic mb-2">"Compare blue/green deployments versus in-place deployments for a stateful application..."</p>
              <button className="text-brand-blue font-bold text-xs flex items-center hover:underline uppercase">
                REVIEW EXPLANATION <ArrowRight className="w-3 h-3 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
