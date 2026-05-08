import { Send, HelpCircle, BookOpen } from "lucide-react";
import Link from 'next/link';

export default function Quiz() {
  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-76px)] overflow-hidden p-6 bg-transparent">
      <div className="flex h-full gap-6">
        {/* Quiz Main Area */}
        <div className="flex-1 flex flex-col space-y-6">
          <div className="flex items-center space-x-4 border-b-4 border-black pb-4">
            <h2 className="text-2xl font-bold uppercase text-[#6B5A1D]">DVA-C02 PRACTICE</h2>
            
            <div className="ml-auto bg-brand-yellow border-4 border-black px-6 py-2 flex items-center space-x-3 brutalist-shadow-sm">
              <div className="font-bold">⏱ 00:54:15</div>
            </div>
          </div>

          <div className="flex flex-1 gap-6 min-h-0">
            {/* Question grid navigation sidebar */}
            <div className="w-64 shrink-0 flex flex-col gap-4">
              <div className="border-4 border-black p-4 bg-white">
                <h3 className="font-bold text-sm mb-1">Cloud Architect</h3>
                <p className="text-xs text-gray-600 mb-4">Level 12 Apprentice</p>
                <div className="h-2 w-full bg-gray-200 border border-black mb-1">
                  <div className="h-full bg-brand-blue w-[40%]"></div>
                </div>
                <p className="text-[10px] text-gray-500 font-bold uppercase">EXAM PROGRESS: 10/25</p>
              </div>

              <div className="flex-1 overflow-auto border-4 border-black p-2 bg-white brutalist-shadow-sm">
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(25)].map((_, i) => (
                    <button key={i} className={`h-10 border-2 border-black flex items-center justify-center font-bold text-sm ${i === 9 ? 'bg-brand-yellow' : i < 9 ? 'bg-brand-blue text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </button>
                  ))}
                </div>
              </div>

              <Link href="/results" className="block text-center w-full bg-brand-yellow border-4 border-black py-4 font-black uppercase hover:bg-yellow-300 brutalist-shadow mt-auto">
                FINISH EXAM
              </Link>
            </div>

            {/* Question Content */}
            <div className="flex-1 flex flex-col overflow-y-auto pr-4">
              <div className="bg-zinc-900 text-white inline-block px-4 py-1 font-bold text-sm mb-6 w-fit">
                QUESTION 10
              </div>

              <h2 className="text-3xl font-black mb-6 leading-tight">
                A developer is building a serverless application using AWS Lambda and Amazon API Gateway. The Lambda function needs to read data from a DynamoDB table. Which approach provides the most secure and least privileged access?
              </h2>

              <div className="space-y-4 mb-8">
                <label className="border-4 border-black p-4 flex items-start space-x-4 cursor-pointer hover:bg-gray-50 brutalist-shadow-sm transition-all">
                  <input type="radio" name="q10" className="mt-1 w-4 h-4 text-brand-blue border-2 border-black focus:ring-0" />
                  <span className="font-bold text-lg">A) Embed long-term IAM user credentials with AmazonDynamoDBFullAccess in the Lambda function code.</span>
                </label>
                <label className="border-4 border-black p-4 flex items-start space-x-4 cursor-pointer hover:bg-gray-50 brutalist-shadow-sm transition-all bg-brand-yellow border-brand-yellow">
                  <input type="radio" name="q10" defaultChecked className="mt-1 w-4 h-4 text-brand-blue border-2 border-black focus:ring-0" />
                  <span className="font-bold text-lg">B) Create an IAM execution role for the Lambda function with a policy that grants dynamodb:GetItem and dynamodb:Query permissions on the specific table.</span>
                </label>
                <label className="border-4 border-black p-4 flex items-start space-x-4 cursor-pointer hover:bg-gray-50 brutalist-shadow-sm transition-all">
                  <input type="radio" name="q10" className="mt-1 w-4 h-4 text-brand-blue border-2 border-black focus:ring-0" />
                  <span className="font-bold text-lg">C) Assign the AdministratorAccess managed policy to the API Gateway integration role.</span>
                </label>
                <label className="border-4 border-black p-4 flex items-start space-x-4 cursor-pointer hover:bg-gray-50 brutalist-shadow-sm transition-all">
                  <input type="radio" name="q10" className="mt-1 w-4 h-4 text-brand-blue border-2 border-black focus:ring-0" />
                  <span className="font-bold text-lg">D) Store the AWS root user credentials in AWS Secrets Manager and retrieve them dynamically in the Lambda function.</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* AI Tutor Right Sidebar */}
        <div className="w-80 shrink-0 border-4 border-black bg-gray-50 flex flex-col h-full brutalist-shadow">
          <div className="bg-[#6B5A1D] text-white p-4 font-bold flex items-center space-x-2 border-b-4 border-black">
            <HelpCircle className="w-5 h-5" />
            <span>HINT MODE: AI TUTOR</span>
          </div>

          <div className="flex-1 p-6 overflow-auto space-y-6">
            <div className="border-4 border-black bg-white p-4 brutalist-shadow-sm">
              <div className="text-xs text-brand-blue font-bold uppercase mb-2">CONCEPT CLARIFIER</div>
              <p className="text-sm italic font-medium leading-relaxed">
                "The principle of least privilege states that you should only grant the minimum permissions required to perform a task. Lambda execution roles are the standard way to grant permissions to Lambda functions securely."
              </p>
            </div>

            <div>
              <div className="text-[10px] font-bold uppercase text-gray-500 mb-3">ASK ABOUT:</div>
              <div className="flex flex-wrap gap-2">
                <button className="border-2 border-black bg-white px-3 py-1 text-xs font-bold hover:bg-brand-yellow">EXECUTION ROLES</button>
                <button className="border-2 border-black bg-white px-3 py-1 text-xs font-bold hover:bg-brand-yellow">LEAST PRIVILEGE</button>
                <button className="border-2 border-black bg-white px-3 py-1 text-xs font-bold hover:bg-brand-yellow">DYNAMODB IAM</button>
              </div>
            </div>

            <div className="border-4 border-black bg-gray-200 p-4">
              <div className="text-xs font-bold uppercase mb-2 flex items-center"><BookOpen className="w-3 h-3 mr-1"/> AWS DOCUMENTATION</div>
              <p className="text-xs">AWS Lambda execution role permissions.</p>
            </div>
          </div>

          <div className="p-4 border-t-4 border-black bg-white mt-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Ask AI a hint..." 
                className="w-full border-2 border-black px-4 py-3 text-sm focus:outline-none focus:ring-0"
              />
              <button className="absolute right-3 top-3 text-brand-blue hover:text-black">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
