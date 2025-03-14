import React from 'react';
import { Shield, Truck, CreditCard, Headphones } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Trade Assurance',
    description: 'Order protection and quality assurance for your purchases',
  },
  {
    icon: Truck,
    title: 'Logistics Services',
    description: 'Reliable shipping and delivery solutions worldwide',
  },
  {
    icon: CreditCard,
    title: 'Payment Solutions',
    description: 'Secure payment methods and financial services',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Professional assistance whenever you need it',
  },
];

export function TradeServices() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Trade Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}