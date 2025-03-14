import React from 'react';
import { Star, Award, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const suppliers = [
  {
    id: 1,
    name: 'TechPro Electronics',
    rating: 4.8,
    verified: true,
    responseTime: '≤12h',
    image: 'https://images.unsplash.com/photo-1603575448360-153f093fd0b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    categories: ['Electronics', 'Smart Devices'],
  },
  {
    id: 2,
    name: 'Global Textile Co.',
    rating: 4.7,
    verified: true,
    responseTime: '≤24h',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    categories: ['Textiles', 'Apparel'],
  },
  {
    id: 3,
    name: 'InnoTech Solutions',
    rating: 4.9,
    verified: true,
    responseTime: '≤6h',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    categories: ['Industrial', 'Manufacturing'],
  },
];

export function SupplierShowcase() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Top Rated Suppliers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {suppliers.map((supplier) => (
            <Link
              key={supplier.id}
              to={`/supplier/${supplier.id}`}
              className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={supplier.image}
                  alt={supplier.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{supplier.name}</h3>
                  {supplier.verified && (
                    <Award className="h-5 w-5 text-blue-600" />
                  )}
                </div>
                <div className="flex items-center mb-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{supplier.rating}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Shield className="h-4 w-4 mr-1" />
                  <span>Verified Supplier</span>
                  <Clock className="h-4 w-4 ml-4 mr-1" />
                  <span>Response Time: {supplier.responseTime}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {supplier.categories.map((category) => (
                    <span
                      key={category}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}