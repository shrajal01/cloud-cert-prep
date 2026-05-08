import Link from 'next/link';
import { Search, Bell, Settings, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-black px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-12">
        <Link href="/" className="text-2xl font-black uppercase tracking-tighter">
          AWS Cloud Forge
        </Link>
        <nav className="hidden md:flex space-x-6 text-sm font-bold">
          <Link href="/modules" className="hover:underline underline-offset-4">Modules</Link>
          <Link href="/practice-exams" className="hover:underline underline-offset-4 text-brand-blue border-b-2 border-brand-blue">Practice</Link>
          <Link href="#" className="hover:underline underline-offset-4">Resources</Link>
        </nav>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="relative hidden md:block">
          <input 
            type="text" 
            placeholder="Search resources..." 
            className="border-2 border-black px-4 py-1.5 text-sm w-64 focus:outline-none focus:ring-0"
          />
          <Search className="absolute right-3 top-1.5 w-4 h-4 text-gray-500" />
        </div>
        <button className="hover:scale-110 transition-transform">
          <Bell className="w-5 h-5" />
        </button>
        <button className="hover:scale-110 transition-transform">
          <Settings className="w-5 h-5" />
        </button>
        <button className="border-2 border-black p-1 hover:bg-gray-100 transition-colors">
          <User className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
