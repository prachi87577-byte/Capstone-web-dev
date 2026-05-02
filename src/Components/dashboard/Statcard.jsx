// src/components/dashboard/StatCard.jsx
export default function StatCard({ title, value, change, icon: Icon, color = "indigo" }) {
  const isPositive = change >= 0;

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{title}</p>
          <p className="text-3xl font-bold mt-3 dark:text-white">{value}</p>
        </div>
        <div className={`p-3 rounded-xl bg-${color}-100 dark:bg-${color}-900/50`}>
          <Icon className={`text-${color}-600 dark:text-${color}-400`} size={28} />
        </div>
      </div>

      <div className={`mt-4 flex items-center gap-1 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        <span>{isPositive ? '↑' : '↓'}</span>
        <span>{Math.abs(change)}% from last month</span>
      </div>
    </div>
  );
}