// src/components/layout/Navbar.jsx
import { Bell, Search, Moon, Sun, Menu } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../features/theme/themeslice';

export default function Navbar({ setSidebarOpen }) {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          >
            <Menu size={24} />
          </button>

          <div className="relative hidden md:block w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search users, products..."
              className="w-full bg-gray-100 dark:bg-gray-800 pl-10 py-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => dispatch(toggleDarkMode())}
            className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl relative">
            <Bell size={22} />
            <span className="absolute top-1 right-1 h-4 w-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">3</span>
          </button>

          <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-700">
            <div className="w-9 h-9 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
              P
            </div>
            <div className="hidden sm:block">
              <p className="font-semibold dark:text-white text-sm">Prachi Kumari</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}