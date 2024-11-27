import React from 'react';
import PricingTable from '@/components/PricingTable';

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Pricing Information</h1>
      <PricingTable />
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Note: Prices are indicative and may vary based on location, duration, and specific requirements.
          Please contact us for a customized quote.
        </p>
      </div>
    </div>
  );
}

