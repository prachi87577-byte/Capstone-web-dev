// src/pages/Analytics.jsx
import OverviewCharts from '../components/dashboard/OverviewCharts';

export default function Analytics() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold dark:text-white">Analytics & Reports</h1>
      
      <div className="grid grid-cols-1 gap-6">
        <OverviewCharts />
      </div>

      <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-4">Key Insights</h2>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          <li className="flex items-start gap-3">• Revenue increased by 12.5% this month</li>
          <li className="flex items-start gap-3">• User engagement is highest on mobile devices</li>
          <li className="flex items-start gap-3">• Top performing category: Electronics</li>
        </ul>
      </div>
    </div>
  );
}