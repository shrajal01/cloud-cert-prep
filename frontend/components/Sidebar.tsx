'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, BookOpen, FileQuestion, MessageSquare, Settings, LogOut, HelpCircle } from 'lucide-react';

const NAV_ITEMS = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/modules', label: 'Modules', icon: BookOpen },
  { href: '/practice-exams', label: 'Practice Exams', icon: FileQuestion },
  { href: '#', label: 'AI Tutor', icon: MessageSquare },
  { href: '#', label: 'Settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-100 border-r-4 border-black flex flex-col h-[calc(100vh-76px)] sticky top-[76px]">
      <div className="p-6 border-b-4 border-black bg-white m-4 brutalist-shadow">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-brand-blue text-white flex items-center justify-center font-bold text-xl border-2 border-black">
            A
          </div>
          <div>
            <h3 className="font-bold text-sm">Cloud Architect</h3>
            <p className="text-xs text-gray-600">Level 12 Apprentice</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname.startsWith(item.href) && item.href !== '#';
          return (
            <Link 
              key={item.label} 
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 font-bold border-2 transition-all ${
                isActive 
                  ? 'bg-brand-yellow border-black brutalist-shadow-sm' 
                  : 'border-transparent hover:border-black hover:bg-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 space-y-4 border-t-4 border-black bg-white">
        <button className="w-full bg-brand-blue text-white py-3 font-bold brutalist-button text-sm">
          UPGRADE TO PRO
        </button>
        <div className="space-y-2 text-sm font-bold text-gray-700">
          <button className="flex items-center space-x-2 w-full hover:text-black">
            <HelpCircle className="w-4 h-4" />
            <span>Support</span>
          </button>
          <button className="flex items-center space-x-2 w-full hover:text-black">
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
