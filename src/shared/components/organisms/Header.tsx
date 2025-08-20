export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-white shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Hello, John Doe</span>
        <button className="px-4 py-2 text-sm bg-black text-white rounded-md hover:opacity-90">
          Logout
        </button>
      </div>
    </header>
  );
}
