// src/pages/Settings.jsx
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../features/theme/themeSlice';

export default function Settings() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold dark:text-white mb-8">Settings</h1>

      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 space-y-8">
        
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-lg">Dark Mode</h3>
            <p className="text-gray-500 dark:text-gray-400">Toggle between light and dark theme</p>
          </div>
          <button
            onClick={() => dispatch(toggleDarkMode())}
            className={`px-6 py-2.5 rounded-xl font-medium transition ${darkMode ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            {darkMode ? 'Disable' : 'Enable'} Dark Mode
          </button>
        </div>

        <hr className="border-gray-200 dark:border-gray-700" />

        <div>
          <h3 className="font-semibold text-lg mb-4">Account Information</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium">Prachi Kumari</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">prachi@example.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Role</p>
              <p className="font-medium">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}