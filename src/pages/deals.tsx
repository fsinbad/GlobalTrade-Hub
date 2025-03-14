import React from 'react';
import { Clock, Percent, Tag, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Countdown from 'react-countdown';

const deals = [
  {
    id: '1',
    title: 'Flash Sale',
    endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    products: [
      {
        id: 'p1',
        name: 'Wireless Earbuds Pro',
        price: 129.99,
        originalPrice: 199.99,
        image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        soldCount: 156,
        totalStock: 200,
      },
      {
        id: 'p2',
        name: 'Smart Watch Series 5',
        price: 299.99,
        originalPrice: 399.99,
        image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        soldCount: 89,
        totalStock: 150,
      },
    ],
  },
  {
    id: '2',
    title: 'Clearance Sale',
    endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    products: [
      {
        id: 'p3',
        name: 'Premium Laptop Stand',
        price: 49.99,
        originalPrice: 79.99,
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        soldCount: 45,
        totalStock: 100,
      },
    ],
  },
];

export function DealsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Special Deals</h1>
        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-gray-900">Today's Deals</button>
          <button className="text-gray-600 hover:text-gray-900">Upcoming</button>
          <button className="text-gray-600 hover:text-gray-900">Ending Soon</button>
        </div>
      </div>

      <div className="space-y-8">
        {deals.map((deal) => (
          <div key={deal.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Tag className="h-5 w-5" />
                  <h2 className="text-xl font-bold">{deal.title}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <Countdown
                    date={deal.endTime}
                    renderer={({ days, hours, minutes, seconds }) => (
                      <div className="flex gap-2">
                        <span>{days}d</span>
                        <span>{hours}h</span>
                        <span>{minutes}m</span>
                        <span>{seconds}s</span>
                      </div>
                    )}
                  />
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {deal.products.map((product) => (
                  <motion.div
                    key={product.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl font-bold text-red-600">${product.price}</span>
                        <span className="text-gray-500 line-through">${product.originalPrice}</span>
                        <span className="bg-red-100 text-red-600 text-sm px-2 py-1 rounded-full">
                          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-red-600 h-2 rounded-full"
                            style={{ width: `${(product.soldCount / product.totalStock) * 100}%` }}
                          />
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-red-600">{product.soldCount} sold</span>
                          <span className="text-gray-500">{product.totalStock - product.soldCount} remaining</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}