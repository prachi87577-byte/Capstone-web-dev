// src/pages/Users.jsx
import { useState } from 'react';
import DataTable from '../components/table/DataTable';

const usersData = [
  { id: 1, name: "Rahul Sharma", email: "rahul@gmail.com", role: "Student", status: "Active", joinDate: "2025-01-15" },
  { id: 2, name: "Priya Patel", email: "priya@gmail.com", role: "Teacher", status: "Active", joinDate: "2024-12-10" },
  { id: 3, name: "Aman Verma", email: "aman@gmail.com", role: "Student", status: "Inactive", joinDate: "2025-02-01" },
  { id: 4, name: "Sneha Gupta", email: "sneha@gmail.com", role: "Admin", status: "Active", joinDate: "2024-11-20" },
];

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' },
  { key: 'status', label: 'Status' },
  { key: 'joinDate', label: 'Join Date' },
];

export default function Users() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = usersData.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold dark:text-white">Users Management</h1>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium transition">
          + Add New User
        </button>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-96 bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-indigo-500 px-4 py-3 rounded-xl focus:outline-none"
          />
        </div>

        <DataTable 
          columns={columns} 
          data={filteredUsers} 
          onEdit={(user) => alert(`Edit user: ${user.name}`)}
          onDelete={(user) => alert(`Delete user: ${user.name}`)}
        />
      </div>
    </div>
  );
}