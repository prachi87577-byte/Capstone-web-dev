// src/pages/Products.jsx
import { useState } from 'react';
import DataTable from '../components/table/DataTable';

const productsData = [
  { id: 101, name: "Wireless Headphones", category: "Electronics", price: "₹2,499", stock: 45, status: "In Stock" },
  { id: 102, name: "Smart Watch Pro", category: "Wearables", price: "₹4,999", stock: 12, status: "Low Stock" },
  { id: 103, name: "Laptop Backpack", category: "Accessories", price: "₹1,299", stock: 78, status: "In Stock" },
  { id: 104, name: "4K Monitor", category: "Electronics", price: "₹24,999", stock: 8, status: "Low Stock" },
];

const columns = [
  { key: 'name', label: 'Product Name' },
  { key: 'category', label: 'Category' },
  { key: 'price', label: 'Price' },
  { key: 'stock', label: 'Stock' },
  { key: 'status', label: 'Status' },
];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold dark:text-white">Products Management</h1>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium transition">
          + Add New Product
        </button>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-96 bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-indigo-500 px-4 py-3 rounded-xl focus:outline-none"
          />
        </div>

        <DataTable 
          columns={columns} 
          data={filteredProducts}
          onEdit={(product) => alert(`Edit: ${product.name}`)}
          onDelete={(product) => alert(`Delete: ${product.name}`)}
        />
      </div>
    </div>
  );
}