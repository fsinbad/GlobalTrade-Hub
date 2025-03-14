import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function DashboardOverview() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Dashboard Overview</h2>
      <p className="text-gray-600">Welcome to your dashboard!</p>
    </div>
  );
}

export function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <Link
              to="/dashboard"
              className="py-4 px-1 border-b-2 border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700"
            >
              Overview
            </Link>
            <Link
              to="/dashboard/orders"
              className="py-4 px-1 border-b-2 border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700"
            >
              Orders
            </Link>
            <Link
              to="/dashboard/products"
              className="py-4 px-1 border-b-2 border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700"
            >
              Products
            </Link>
          </nav>
        </div>
        
        <Routes>
          <Route index element={<DashboardOverview />} />
          <Route
            path="orders"
            element={<div className="p-6">Orders page coming soon...</div>}
          />
          <Route
            path="products"
            element={<div className="p-6">Products page coming soon...</div>}
          />
        </Routes>
      </div>
    </div>
  );
}