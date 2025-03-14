import React from 'react';
import { Building2, Package, Truck, Users, ChevronRight, Award, Shield, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Access millions of buyers worldwide',
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Protected transactions and escrow service',
  },
  {
    icon: Award,
    title: 'Seller Support',
    description: '24/7 dedicated support for sellers',
  },
];

const steps = [
  {
    icon: Building2,
    title: 'Register Your Business',
    description: 'Create your seller account and verify your business',
  },
  {
    icon: Package,
    title: 'List Your Products',
    description: 'Upload products with high-quality images and descriptions',
  },
  {
    icon: Users,
    title: 'Connect with Buyers',
    description: 'Receive inquiries and manage orders efficiently',
  },
  {
    icon: Truck,
    title: 'Start Selling',
    description: 'Ship products and grow your business globally',
  },
];

export function SellPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Start Selling Globally Today</h1>
            <p className="text-xl mb-8">Join thousands of successful sellers on our platform</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Selling
            </Button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Sell With Us?</h2>
            <p className="text-gray-600">Take advantage of our powerful platform features</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg p-6 text-center shadow-md"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600">Follow these simple steps to start selling</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg p-6 shadow-md h-full"
                >
                  <step.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
                {index < steps.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 h-8 w-8 text-gray-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Selling?</h2>
              <p className="text-xl mb-8">Join our global marketplace and reach millions of buyers</p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Create Seller Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}