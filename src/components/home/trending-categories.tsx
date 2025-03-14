import { motion } from 'framer-motion';
import { TrendingUp, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Gadgets',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    growth: '+25%',
    products: 1234,
    trending: ['Smartphones', 'Laptops', 'Accessories']
  },
  {
    id: 'fashion',
    name: 'Fashion & Apparel',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    growth: '+18%',
    products: 2567,
    trending: ['Summer Collection', 'Activewear', 'Accessories']
  },
  {
    id: 'home',
    name: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1558002038-76f45789c4a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    growth: '+22%',
    products: 1890,
    trending: ['Smart Home', 'Furniture', 'Decor']
  }
];

export function TrendingCategories() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Trending Categories</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
            >
              <div className="relative h-48">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{category.name}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-green-400 font-medium">{category.growth}</span>
                    <span className="mx-2">•</span>
                    <span>{category.products.toLocaleString()} products</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="mb-3">
                  <h4 className="text-sm font-medium text-gray-500">Trending in this category:</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {category.trending.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to={`/category/${category.id}`}
                  className="flex items-center justify-between text-blue-600 hover:text-blue-700 font-medium"
                >
                  Explore Category
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}