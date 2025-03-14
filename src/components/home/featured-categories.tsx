import { Laptop, Smartphone, Home, ShoppingBag, Car, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Electronics', icon: Laptop, color: 'bg-blue-100' },
  { name: 'Mobile', icon: Smartphone, color: 'bg-green-100' },
  { name: 'Home & Garden', icon: Home, color: 'bg-yellow-100' },
  { name: 'Fashion', icon: ShoppingBag, color: 'bg-purple-100' },
  { name: 'Automotive', icon: Car, color: 'bg-red-100' },
  { name: 'Gifts', icon: Gift, color: 'bg-pink-100' },
];

export function FeaturedCategories() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/category/${category.name.toLowerCase()}`}
              className="flex flex-col items-center p-6 rounded-lg transition-transform hover:scale-105"
            >
              <div className={`${category.color} p-4 rounded-full mb-4`}>
                <category.icon className="h-6 w-6 text-gray-700" />
              </div>
              <span className="text-sm font-medium text-gray-900">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}