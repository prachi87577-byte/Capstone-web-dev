// src/components/layout/Sidebar.jsx
import { useState } from 'react';
import { 
  Home, 
  Users, 
  Package, 
  BarChart3, 
  Settings, 
  LogOut, 
  X,
  ChevronLeft,
  ChevronRight 
} from 'lucide-react';

const menuItems = [
  { 
    icon: Home, 
    label: 'Dashboard', 
    path: '/' 
  },
  { 
    icon: Users, 
    label: 'Users', 
    path: '/users' 
  },
  { 
    icon: Package, 
    label: 'Products', 
    path: '/products' 
  },
  { 
    icon: BarChart3, 
    label: 'Analytics', 
    path: '/analytics' 
  },
  { 
    icon: Settings, 
    label: 'Settings', 
    path: '/settings' 
  },
];

export default function Sidebar({ isOpen, setIsOpen }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={`fixed lg:static inset-y-0 left-0 z-50 
        ${collapsed ? 'w-20' : 'w-64'} 
        bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 
        transform transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>

        {/* Header */}
        <div className="h-16 flex items-center justify-between px-6 border-b dark:border-gray-700">
          {!collapsed && (
            <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              AdminVista
            </h1>
          )}
          
          <button 
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:block text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>

          <button 
            onClick={() => setIsOpen(false)} 
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-6 px-3">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 mb-1 rounded-xl transition-all
                ${collapsed ? 'justify-center' : ''} 
                text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800`}
            >
              <item.icon size={22} />
              {!collapsed && <span className="font-medium">{item.label}</span>}
            </a>
          ))}
        </nav>

        {/* Footer / Logout */}
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <button 
            className={`flex items-center gap-3 w-full px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-950 rounded-xl transition-all
              ${collapsed ? 'justify-center' : ''}`}
          >
            <LogOut size={22} />
            {!collapsed && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </div>
    </>
  );
}