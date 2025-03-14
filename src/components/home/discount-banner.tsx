import { Clock, ArrowRight } from 'lucide-react';
import Countdown from 'react-countdown';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const discountEndTime = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000); // 3 days from now

export function DiscountBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Clock className="h-5 w-5 animate-pulse" />
            <span className="font-medium">Flash Sale Ends In:</span>
            <Countdown
              date={discountEndTime}
              renderer={({ days, hours, minutes, seconds }) => (
                <div className="flex space-x-3">
                  <div className="flex items-center">
                    <span className="bg-white text-blue-600 rounded px-2 py-1 font-bold">{days}</span>
                    <span className="ml-1">d</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-white text-blue-600 rounded px-2 py-1 font-bold">{hours}</span>
                    <span className="ml-1">h</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-white text-blue-600 rounded px-2 py-1 font-bold">{minutes}</span>
                    <span className="ml-1">m</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-white text-blue-600 rounded px-2 py-1 font-bold">{seconds}</span>
                    <span className="ml-1">s</span>
                  </div>
                </div>
              )}
            />
          </div>
          <Link
            to="/flash-sale"
            className="flex items-center hover:underline"
          >
            View All Deals <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}