import Link from 'next/link';
import { ArrowRight, GraduationCap } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-16">
      <div className="space-y-4 max-w-4xl">
        <div className="inline-block bg-brand-blue text-white px-4 py-1 text-sm font-bold uppercase tracking-widest border-2 border-black mb-4">
          Engineering Excellence
        </div>
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-black">
          Forge Your <span className="bg-brand-yellow px-4 border-b-8 border-black">Future</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium italic mt-6 max-w-2xl mx-auto">
          The industrial-grade platform for mastering the Amazon Web Services ecosystem through high-velocity practice and structural theory.
        </p>
      </div>

      <div className="w-full max-w-2xl">
        {/* Student Login Card */}
        <div className="brutalist-card p-8 flex flex-col justify-between text-left h-80 relative group">
          <div className="absolute -top-6 -right-6 bg-brand-yellow w-16 h-16 border-4 border-black flex items-center justify-center brutalist-shadow rotate-12 group-hover:rotate-0 transition-transform">
            <GraduationCap className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-4xl font-black uppercase border-b-8 border-brand-yellow pb-2 inline-block">Student Login</h2>
            <p className="mt-6 text-gray-700 font-medium">
              Access your learning modules, labs, and track your certification progress in real-time.
            </p>
            <div className="flex space-x-2 mt-6">
              <span className="border-2 border-black px-2 py-1 text-xs font-bold bg-white">LABS</span>
              <span className="border-2 border-black px-2 py-1 text-xs font-bold bg-white">QUIZZES</span>
              <span className="border-2 border-black px-2 py-1 text-xs font-bold bg-white">BADGES</span>
            </div>
          </div>
          <Link href="/dashboard" className="w-full bg-brand-yellow hover:bg-yellow-300 text-black py-4 font-black text-center brutalist-button flex items-center justify-center mt-8">
            ENTER FORGE <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="flex space-x-6">
        <div className="border-4 border-black bg-white px-6 py-3 font-bold flex items-center space-x-3 brutalist-shadow-sm">
          <div className="w-6 h-6 bg-blue-100 border-2 border-black rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-brand-blue rounded-full"></div>
          </div>
          <span>RDS INSTANCES: ACTIVE</span>
        </div>
        <div className="border-4 border-black bg-white px-6 py-3 font-bold flex items-center space-x-3 brutalist-shadow-sm">
          <div className="w-6 h-6 bg-yellow-100 border-2 border-black flex items-center justify-center">
            <div className="w-3 h-3 bg-brand-yellow"></div>
          </div>
          <span>LAMBDA THROUGHPUT: 100%</span>
        </div>
        <div className="border-4 border-black bg-white px-6 py-3 font-bold flex items-center space-x-3 brutalist-shadow-sm">
          <div className="w-6 h-6 bg-red-100 border-2 border-black rotate-45 flex items-center justify-center">
            <div className="w-3 h-3 bg-red-500"></div>
          </div>
          <span>IAM PROTOCOLS: SECURE</span>
        </div>
      </div>
    </div>
  );
}
