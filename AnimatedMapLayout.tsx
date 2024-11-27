import React from 'react';
import { motion } from 'framer-motion';

const sectors = [
  { id: 1, name: 'Administration', color: 'bg-blue-500' },
  { id: 2, name: 'Temples', color: 'bg-orange-500' },
  { id: 3, name: 'Hold-up Area', color: 'bg-green-500' },
  { id: 4, name: 'Rail Booking', color: 'bg-purple-500' },
  { id: 5, name: 'Banks', color: 'bg-yellow-500' },
  { id: 6, name: 'Markets', color: 'bg-pink-500' },
  { id: 7, name: 'Exhibition Area', color: 'bg-indigo-500' },
  { id: 8, name: 'Sangam Area', color: 'bg-red-500' },
  { id: 9, name: 'Kalpvasi Area', color: 'bg-teal-500' },
];

export default function AnimatedMapLayout() {
  return (
    <div className="relative w-full h-[600px] bg-gray-100 rounded-lg overflow-hidden">
      <motion.div
        className="absolute inset-0 flex flex-wrap justify-center items-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {sectors.map((sector, index) => (
          <motion.div
            key={sector.id}
            className={`${sector.color} w-1/3 h-1/3 m-1 rounded-lg flex items-center justify-center text-white font-bold text-sm`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {sector.name}
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow-lg"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <h3 className="text-lg font-bold mb-2">Mela Area: ~40 Kms</h3>
        <p className="text-sm">25 sectors divided into main areas</p>
      </motion.div>
    </div>
  );
}

