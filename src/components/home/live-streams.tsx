import { Play, Users, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const liveStreams = [
  {
    id: '1',
    title: 'New Electronics Launch Event',
    host: 'TechPro Electronics',
    viewers: 1234,
    thumbnail: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Electronics',
  },
  {
    id: '2',
    title: 'Spring Fashion Collection Preview',
    host: 'Global Fashion Co.',
    viewers: 856,
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Fashion',
  },
  {
    id: '3',
    title: 'Smart Home Devices Showcase',
    host: 'HomeTech Solutions',
    viewers: 567,
    thumbnail: 'https://images.unsplash.com/photo-1558002038-76f45789c4a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Smart Home',
  },
];

export function LiveStreams() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="relative">
              <div className="absolute -left-2 -top-2 w-3 h-3 bg-red-500 rounded-full animate-ping" />
              <div className="absolute -left-2 -top-2 w-3 h-3 bg-red-500 rounded-full" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 ml-4">Live Now</h2>
          </div>
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            View All Streams
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveStreams.map((stream) => (
            <motion.div
              key={stream.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative">
                <img
                  src={stream.thumbnail}
                  alt={stream.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse" />
                  LIVE
                </div>
                <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-sm flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  {stream.viewers.toLocaleString()}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-blue-600 ml-1" />
                  </div>
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{stream.title}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-1" />
                  {stream.host}
                </div>
                <div className="mt-2">
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                    {stream.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}