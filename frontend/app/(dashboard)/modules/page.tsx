import { Lock, Settings, Link as LinkIcon, FileText } from "lucide-react";
import Link from 'next/link';

export default function Modules() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center space-x-2 text-sm font-bold mb-2">
            <span className="bg-brand-blue text-white px-2 py-1">MODULE DVA-C02</span>
            <span className="text-gray-600">AWS Cloud Developer Associate</span>
          </div>
          <h1 className="text-5xl font-black italic tracking-tighter uppercase">Serverless & App Deployment</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <h2 className="text-2xl font-black uppercase mb-2 border-b-4 border-black pb-2">Practice Sets (PDFs)</h2>
          
          {/* Unlocked PDF Card */}
          <div className="brutalist-card p-6 relative flex items-start space-x-6">
            <div className="absolute top-0 right-0 bg-brand-yellow px-4 py-1 font-bold text-xs border-b-4 border-l-4 border-black">
              UNLOCKED
            </div>
            <div className="w-16 h-16 bg-brand-yellow border-4 border-black flex items-center justify-center text-black shrink-0">
              <FileText className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-black uppercase mb-2">Set 1: Lambda & API Gateway</h3>
              <p className="text-gray-700 font-medium mb-4 text-sm">
                Master serverless architectures, event-driven integrations, and securing REST APIs.
              </p>
              <div className="flex items-center space-x-4 mb-4 text-xs font-bold text-gray-600">
                <span>📄 25 Pages</span>
                <span>⏱ 60 Mins</span>
                <span className="text-brand-blue uppercase">Pass: 75%</span>
              </div>
              <Link href="/practice-exams" className="bg-brand-yellow border-4 border-black px-6 py-2 font-black uppercase inline-flex items-center hover:bg-yellow-300 transition-colors brutalist-shadow-sm text-sm">
                OPEN PDF SET <span className="ml-2">▷</span>
              </Link>
            </div>
          </div>

          {/* Locked PDF Card 1 */}
          <div className="brutalist-card p-6 relative flex items-start space-x-6 bg-gray-50 border-gray-400 opacity-80">
            <div className="w-16 h-16 bg-gray-300 border-4 border-gray-400 flex items-center justify-center text-gray-500 shrink-0">
              <FileText className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-black uppercase mb-2 text-gray-600">Set 2: DynamoDB & Security</h3>
              <p className="text-gray-500 font-medium mb-4 text-sm">
                Advanced NoSQL modeling, partition keys, and KMS encryption deep dive.
              </p>
              <div className="flex items-center space-x-4 text-xs font-bold text-gray-500 mb-4">
                <span>📄 32 Pages</span>
                <span>⏱ 90 Mins</span>
              </div>
              <button className="bg-gray-200 border-4 border-gray-400 px-6 py-2 font-black uppercase inline-flex items-center text-gray-500 cursor-not-allowed text-sm">
                <Lock className="w-4 h-4 mr-2" /> LOCKED
              </button>
            </div>
          </div>

          {/* Locked PDF Card 2 */}
          <div className="brutalist-card p-6 relative flex items-start space-x-6 bg-gray-50 border-gray-400 opacity-80">
            <div className="w-16 h-16 bg-gray-300 border-4 border-gray-400 flex items-center justify-center text-gray-500 shrink-0">
              <FileText className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-black uppercase mb-2 text-gray-600">Set 3: CI/CD & Deployment</h3>
              <p className="text-gray-500 font-medium mb-4 text-sm">
                CodePipeline, CodeBuild, CodeDeploy, and Elastic Beanstalk scenarios.
              </p>
              <div className="flex items-center space-x-4 text-xs font-bold text-gray-500 mb-4">
                <span>📄 40 Pages</span>
                <span>⏱ 120 Mins</span>
              </div>
              <button className="bg-gray-200 border-4 border-gray-400 px-6 py-2 font-black uppercase inline-flex items-center text-gray-500 cursor-not-allowed text-sm">
                <Lock className="w-4 h-4 mr-2" /> LOCKED
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-1 space-y-6">
          <div className="brutalist-card p-6">
            <h3 className="font-bold text-sm uppercase mb-4">MODULE PROGRESS</h3>
            <div className="h-6 border-2 border-black w-full bg-white mb-2 relative">
              <div className="absolute top-0 left-0 h-full bg-brand-blue border-r-2 border-black w-[15%]"></div>
            </div>
            <div className="text-sm font-medium">15% of Module Completed</div>
          </div>

          <div className="bg-zinc-900 border-4 border-black p-6 text-white brutalist-shadow">
            <h3 className="font-bold text-sm uppercase mb-4 border-b-2 border-zinc-700 pb-2">MODULE SOURCES</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start space-x-2">
                <LinkIcon className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                <a href="#" className="underline hover:text-brand-yellow">AWS Lambda Best Practices</a>
              </li>
              <li className="flex items-start space-x-2">
                <LinkIcon className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                <a href="#" className="underline hover:text-brand-yellow">DynamoDB Design Patterns</a>
              </li>
              <li className="flex items-start space-x-2">
                <LinkIcon className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                <a href="#" className="underline hover:text-brand-yellow">AWS Serverless Application Model</a>
              </li>
            </ul>
            <div className="h-2 bg-brand-yellow absolute bottom-0 left-0 right-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
