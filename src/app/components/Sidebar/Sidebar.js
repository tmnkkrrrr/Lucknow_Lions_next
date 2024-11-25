"use client";
import { Home, List, Settings, LogOut, LayoutList, FileText, Palette } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', icon: Home, href: '/admin/dashboard' },
    { name: 'Categories', icon: LayoutList, href: '/admin/dashboard/categories' },
    { name: 'Pages', icon: FileText, href: '/admin/dashboard/pages' },
    { name: 'Themes', icon: Palette, href: '/admin/dashboard/themes' },
    { name: 'Settings', icon: Settings, href: '/admin/dashboard/settings' }
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 shadow-sm">
      <div className="p-6">
        <h1 className="text-xl font-bold text-indigo-600">Admin Dashboard</h1>
      </div>

      <nav className="px-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center px-4 py-3 text-sm rounded-md
              ${pathname === item.href
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-700 hover:bg-gray-50'}`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
        <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
}