import React from 'react';
import { vendors } from '../constants';
import "../index.css";

const VendorsAndPartners = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 py-20">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-12">
          Our Trusted Partners
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {vendors.map((vendor, index) => (
            <div
              key={index}
              className="p-4 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg flex flex-col items-center overflow-hidden"
              style={{
                height: 'auto',
                width: '100%',
                maxWidth: '180px',
                backgroundColor: 'transparent',
              }}
            >
              <img
                src={vendor.logo}
                alt={vendor.name}
                className="object-contain bg-transparent border-none mb-3 w-full h-full max-h-20"
              />
              {vendor.name && (
                <h3
                  className="text-sm font-medium text-white text-center mt-2"
                  style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '100%',
                  }}
                >
                  {vendor.name}
                </h3>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorsAndPartners;
