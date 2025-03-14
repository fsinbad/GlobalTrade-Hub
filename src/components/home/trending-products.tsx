import { Star, Heart, ShoppingCart, Percent, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useWishlistStore } from '@/lib/store';
import { useState } from 'react';

const products = [
  {
    id: '1',
    name: 'Wireless Earbuds Pro',
    price: 129.99,
    originalPrice: 199.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    stock: 15,
    description: 'Premium wireless earbuds with active noise cancellation',
    badges: ['Best Seller', '35% OFF'],
    supplier: {
      name: 'TechPro Electronics',
      rating: 4.8,
      verified: true,
    }
  },
  {
    id: '2',
    name: 'Smart Watch Series 5',
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    stock: 8,
    description: 'Advanced smartwatch with health monitoring features',
    badges: ['New Arrival', '25% OFF'],
    supplier: {
      name: 'SmartGear Inc',
      rating: 4.6,
      verified: true,
    }
  },
  {
    id: '3',
    name: 'Premium Laptop Stand',
    price: 49.99,
    originalPrice: 79.99,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    stock: 20,
    description: 'Ergonomic laptop stand for improved posture',
    badges: ['Hot Deal'],
    supplier: {
      name: 'ErgoDesign Co',
      rating: 4.4,
      verified: true,
    }
  },
  {
    id: '4',
    name: 'Wireless Charging Pad',
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1622445275576-721325763afe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    stock: 12,
    description: 'Fast wireless charging for all Qi-enabled devices',
    badges: ['Trending'],
    supplier: {
      name: 'PowerTech Solutions',
      rating: 4.7,
      verified: true,
    }
  },
  {
    id: '5',
    name: 'Professional Camera Kit',
    price: 899.99,
    originalPrice: 1299.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    stock: 5,
    description: 'Professional DSLR camera with accessories',
    badges: ['Premium', '30% OFF'],
    supplier: {
      name: 'Pro Camera Gear',
      rating: 4.9,
      verified: true,
    }
  },
  {
    id: '6',
    name: 'Smart Home Security System',
    price: 249.99,
    originalPrice: 349.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1558002038-76f45789c4a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    stock: 15,
    description: 'Complete home security system with smart features',
    badges: ['Best Value'],
    supplier: {
      name: 'SmartHome Security',
      rating: 4.8,
      verified: true,
    }
  },
];

export function TrendingProducts() {
  const { items: wishlistItems, addItem: addToWishlist, removeItem: removeFromWishlist } = useWishlistStore();
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Trending Products</h2>
          </div>
          <div className="flex gap-4">
            <button className="text-sm font-medium text-gray-500 hover:text-gray-900">
              New Arrivals
            </button>
            <button className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Best Sellers
            </button>
            <button className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Most Popular
            </button>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {product.badges.length > 0 && (
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.badges.map((badge, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 text-xs font-semibold rounded ${
                          badge.includes('OFF')
                            ? 'bg-red-500 text-white'
                            : badge === 'Best Seller'
                            ? 'bg-yellow-500 text-white'
                            : badge === 'New Arrival'
                            ? 'bg-green-500 text-white'
                            : 'bg-blue-500 text-white'
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
                <button
                  onClick={() => 
                    wishlistItems.includes(product.id)
                      ? removeFromWishlist(product.id)
                      : addToWishlist(product.id)
                  }
                  className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      wishlistItems.includes(product.id)
                        ? 'text-red-500 fill-current'
                        : 'text-gray-400'
                    }`}
                  />
                </button>
                {hoveredProduct === product.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4"
                  >
                    <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      Add to Cart
                    </button>
                  </motion.div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg text-gray-900">{product.name}</h3>
                  <div className="flex items-center">
                    {product.supplier.verified && (
                      <Award className="h-4 w-4 text-blue-500 mr-1" />
                    )}
                    <span className="text-sm text-gray-500">{product.supplier.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-2">{product.description}</p>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-gray-500">
                    ({Math.floor(product.rating * 100)} reviews)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-gray-900">${product.price}</span>
                    {product.originalPrice && (
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center">
                    <Percent className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-500">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    By {product.supplier.name}
                  </span>
                  <span className={`text-sm ${
                    product.stock < 10 ? 'text-red-500' : 'text-green-500'
                  }`}>
                    {product.stock < 10 ? `Only ${product.stock} left` : 'In Stock'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}