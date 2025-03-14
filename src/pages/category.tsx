import React from 'react';
import { useParams } from 'react-router-dom';
import { Filter, SortAsc, Grid, List, Star, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useWishlistStore } from '@/lib/store';

const products = [
  {
    id: '1',
    name: 'Wireless Earbuds Pro',
    price: 129.99,
    rating: 4.5,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    supplier: 'TechPro Electronics',
    minOrder: 10,
  },
  {
    id: '2',
    name: 'Smart Watch Series 5',
    price: 299.99,
    rating: 4.8,
    reviews: 256,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    supplier: 'SmartGear Inc',
    minOrder: 5,
  },
];

const filters = [
  { name: 'Price Range', options: ['Under $50', '$50-$200', '$200-$500', 'Over $500'] },
  { name: 'Supplier Type', options: ['Verified', 'Top Rated', 'Trade Assurance'] },
  { name: 'Min. Order', options: ['No Minimum', '≤10 pieces', '≤50 pieces', '≤100 pieces'] },
  { name: 'Shipping', options: ['Free Shipping', 'Fast Dispatch', 'Ready to Ship'] },
];

export function CategoryPage() {
  const { id } = useParams();
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');
  const { items: wishlistItems, addItem: addToWishlist, removeItem: removeFromWishlist } = useWishlistStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900 capitalize">{id}</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
          >
            <Grid className="h-5 w-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
          >
            <List className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-900">Filters</h2>
              <Filter className="h-5 w-5 text-gray-500" />
            </div>
            {filters.map((filter) => (
              <div key={filter.name} className="mb-6">
                <h3 className="font-medium text-gray-900 mb-2">{filter.name}</h3>
                <div className="space-y-2">
                  {filter.options.map((option) => (
                    <label key={option} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                      <span className="ml-2 text-sm text-gray-600">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Grid/List */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Showing 1-20 of 100 products</span>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Sort by:</span>
                <select className="rounded-lg border-gray-300">
                  <option>Best Match</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Customer Rating</option>
                </select>
              </div>
            </div>
          </div>

          <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`bg-white rounded-lg shadow-md overflow-hidden ${viewMode === 'list' ? 'flex' : ''}`}
              >
                <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <button
                    onClick={() => 
                      wishlistItems.includes(product.id)
                        ? removeFromWishlist(product.id)
                        : addToWishlist(product.id)
                    }
                    className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        wishlistItems.includes(product.id)
                          ? 'text-red-500 fill-current'
                          : 'text-gray-400'
                      }`}
                    />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-medium">{product.rating}</span>
                    <span className="ml-1 text-gray-500">({product.reviews} reviews)</span>
                  </div>
                  <div className="text-xl font-bold text-gray-900 mb-2">
                    ${product.price}
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    Min. Order: {product.minOrder} pieces
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{product.supplier}</span>
                    <Button size="sm">Contact Supplier</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}