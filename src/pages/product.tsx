import React from 'react';
import { useParams } from 'react-router-dom';

export function ProductPage() {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Product Details</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-500">Product ID: {id}</p>
        <p className="text-gray-500">Product details coming soon...</p>
      </div>
    </div>
  );
}