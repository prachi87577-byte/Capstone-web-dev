// src/components/common/Loader.jsx
export default function Loader({ size = "large", fullScreen = false }) {
  const spinnerSize = size === "small" ? "w-6 h-6" : "w-12 h-12";

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          <div className={`${spinnerSize} border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin`}></div>
          <p className="mt-4 text-gray-500 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center py-12">
      <div className={`${spinnerSize} border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin`}></div>
    </div>
  );
}