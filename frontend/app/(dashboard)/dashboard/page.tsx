import { Star, Zap, Terminal, MessageSquare, Cloud } from "lucide-react";
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-start">
        <div>
          <span className="bg-brand-yellow font-bold px-2 py-1 text-xs border-2 border-black uppercase">
            CERTIFICATION PATH
          </span>
          <h1 className="text-5xl font-black tracking-tighter mt-4">Master the Forge.</h1>
          <p className="mt-2 text-gray-700 max-w-xl">
            Select your certification module to begin the heavy-lifting of cloud architectural training. Build scalable systems with cold, hard logic.
          </p>
        </div>
        <div className="bg-white border-4 border-black p-4 w-48 brutalist-shadow-sm">
          <div className="text-xs font-bold text-gray-500 uppercase">COURSE PROGRESS</div>
          <div className="text-3xl font-black text-brand-blue">42%</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Module 1: Developer Associate */}
        <div className="col-span-1 md:col-span-2 brutalist-card overflow-hidden">
          <div className="h-48 bg-zinc-800 relative p-4 flex justify-end items-start border-b-4 border-black">
            <div className="flex space-x-2">
              <span className="bg-brand-yellow text-black font-bold text-xs px-2 py-1 border-2 border-black">ASSOCIATE</span>
              <span className="bg-white text-black font-bold text-xs px-2 py-1 border-2 border-black">DVA-C02</span>
            </div>
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80')] bg-cover mix-blend-overlay"></div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-black mb-2">AWS Cloud Developer Associate</h2>
            <p className="text-gray-700 text-sm mb-6 max-w-lg">
              Serverless, SDKs, and CI/CD pipelines. Learn to build applications that thrive in the cloud, not just live in it. Focuses on AWS Lambda, DynamoDB, API Gateway, and X-Ray.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 text-sm font-bold">
                <Star className="w-5 h-5 text-brand-yellow fill-brand-yellow" />
                <span>4.9 (2.4k Learners)</span>
              </div>
              <Link href="/modules" className="bg-brand-yellow px-8 py-3 brutalist-button text-sm inline-block">
                START MODULE
              </Link>
            </div>
          </div>
        </div>

        {/* Module 2: Solutions Architect Associate */}
        <div className="brutalist-card p-6 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-brand-blue border-4 border-black flex items-center justify-center text-white mb-4 brutalist-shadow-sm">
              <span className="font-bold font-mono">SA</span>
            </div>
            <h3 className="text-xl font-black mb-2">AWS Solutions Architect Associate</h3>
            <p className="text-xs text-gray-700 mb-4">
              Architect high-throughput data pipelines, resilient architectures, and master AWS networking. Focuses on structural integrity and performance at scale.
            </p>
            <ul className="text-xs space-y-2 font-bold text-gray-600 uppercase mb-6">
              <li className="flex items-center before:content-[''] before:w-2 before:h-2 before:bg-black before:mr-2">VPC & NETWORKING</li>
              <li className="flex items-center before:content-[''] before:w-2 before:h-2 before:bg-black before:mr-2">EC2 & AUTO SCALING</li>
              <li className="flex items-center before:content-[''] before:w-2 before:h-2 before:bg-black before:mr-2">HIGH AVAILABILITY</li>
            </ul>
          </div>
          <button className="w-full bg-white px-4 py-3 border-4 border-black font-bold text-sm uppercase hover:bg-gray-100 transition-colors">
            LOCKED
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Module 3: Cloud Practitioner */}
        <div className="brutalist-card p-6 flex flex-col justify-between border-gray-400 opacity-75">
          <div>
            <div className="w-12 h-12 bg-gray-300 border-4 border-black flex items-center justify-center text-black mb-4 brutalist-shadow-sm">
              <span className="font-bold font-mono">CP</span>
            </div>
            <h3 className="text-xl font-black mb-2">AWS Cloud Practitioner</h3>
            <p className="text-xs text-gray-700 mb-4">
              Foundational knowledge of the AWS Cloud platform, including basic cloud concepts and security. Ideal for beginners starting their journey.
            </p>
            <ul className="text-xs space-y-2 font-bold text-gray-600 uppercase mb-6">
              <li className="flex items-center before:content-[''] before:w-2 before:h-2 before:bg-black before:mr-2">CLOUD CONCEPTS</li>
              <li className="flex items-center before:content-[''] before:w-2 before:h-2 before:bg-black before:mr-2">SECURITY & COMPLIANCE</li>
              <li className="flex items-center before:content-[''] before:w-2 before:h-2 before:bg-black before:mr-2">BILLING & PRICING</li>
            </ul>
          </div>
          <button className="w-full bg-gray-200 px-4 py-3 border-4 border-black font-bold text-sm uppercase cursor-not-allowed">
            LOCKED
          </button>
        </div>

        {/* Keeping the Fast Track block to maintain the brutalist aesthetic as requested */}
        <div className="bg-[#6B5A1D] border-4 border-black p-6 flex flex-col justify-center items-center text-center text-white brutalist-shadow relative overflow-hidden group col-span-1 md:col-span-2">
          <Zap className="w-12 h-12 mb-4 drop-shadow-md" />
          <h2 className="text-4xl font-black uppercase mb-2">FAST TRACK</h2>
          <p className="text-sm mb-6 max-w-sm font-medium">Finish any associate module in 30 days and earn the Forge Badge.</p>
          <div className="border-2 border-white px-6 py-2 bg-transparent text-sm font-bold">
            241 STUDENTS CURRENTLY RACING
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="brutalist-card p-4 flex items-center space-x-4">
          <div className="w-10 h-10 bg-brand-yellow border-2 border-black flex items-center justify-center">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-sm">Cloud Shell Access</h4>
            <p className="text-xs text-gray-500">Connected to us-east-1</p>
          </div>
        </div>
        <div className="brutalist-card p-4 flex items-center space-x-4">
          <div className="w-10 h-10 bg-blue-100 border-2 border-black flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-brand-blue" />
          </div>
          <div>
            <h4 className="font-bold text-sm">Active Mentors</h4>
            <p className="text-xs text-gray-500">12 Experts online now</p>
          </div>
        </div>
        <div className="brutalist-card p-4 flex items-center space-x-4">
          <div className="w-10 h-10 bg-gray-100 border-2 border-black flex items-center justify-center">
            <Cloud className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-sm">Resource Sync</h4>
            <p className="text-xs text-gray-500">2 New whitepapers available</p>
          </div>
        </div>
      </div>
    </div>
  );
}
