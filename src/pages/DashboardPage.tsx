export default function DashboardPage() {
  const stats = [
    { title: "Total Members", value: 1200 },
    { title: "Active Services", value: 35 },
    { title: "Revenue", value: "$15,200" },
  ];

  const members = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Davis", email: "charlie@example.com" },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <h3 className="text-sm text-gray-500">{stat.title}</h3>
            <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Members Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <h3 className="px-6 py-3 text-lg font-semibold border-b border-gray-100">
          Recent Members
        </h3>
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="border-t">
                <td className="px-6 py-3">{member.id}</td>
                <td className="px-6 py-3">{member.name}</td>
                <td className="px-6 py-3">{member.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
