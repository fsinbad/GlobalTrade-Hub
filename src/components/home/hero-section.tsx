import { Button } from '../ui/button';

export function HeroSection() {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center py-12 md:py-16 lg:py-20">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Global Marketplace
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Connect with millions of buyers and sellers around the world. Find exactly what you're looking for at the best prices.
            </p>
            <div className="space-x-4">
              <Button size="lg">Start Shopping</Button>
              <Button variant="outline" size="lg">Become a Seller</Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="E-commerce illustration"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}