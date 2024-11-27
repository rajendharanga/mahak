import React from 'react';
import { motion } from 'framer-motion';

const pricingData = [
  { item: 'Gantry / Box Gate', price: '₹50,000 - ₹1,00,000 per day' },
  { item: 'Electric Pole Branding', price: '₹5,000 - ₹10,000 per pole per day' },
  { item: 'Hoardings', price: '₹30,000 - ₹80,000 per hoarding per day' },
  { item: 'Watch Tower / Media Tower', price: '₹1,00,000 - ₹2,00,000 per tower per day' },
  { item: 'Charging Stand Points', price: '₹20,000 - ₹40,000 per stand per day' },
  { item: 'Sky Balloon Advertising', price: '₹2,00,000 - ₹5,00,000 per balloon per day' },
  { item: 'Activation Zone', price: '₹5,00,000 - ₹10,00,000 per zone for the event duration' },
  { item: 'Police Barricade', price: '₹2,000 - ₹5,000 per barricade per day' },
];

export default function PricingTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4 font-bold">Inventory Item</th>
            <th className="p-4 font-bold">Price Range</th>
          </tr>
        </thead>
        <tbody>
          {pricingData.map((item, index) => (
            <motion.tr
              key={item.item}
              className="border-b"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <td className="p-4">{item.item}</td>
              <td className="p-4">{item.price}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

