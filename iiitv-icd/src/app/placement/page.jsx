"use client";

import React from 'react';
import Link from 'next/link';

export default function Placement() {
  return (
    <div className="wrapper">
      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#800000] to-[#5d0000] text-white p-6">
            <h1 className="text-3xl font-bold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              About Placement
            </h1>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="prose max-w-none">
              <h1 className="text-lg text-gray-700 mb-6">
                loading
              </h1>

              {/* Additional Placement Information */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Placement Statistics */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold text-[#800000] mb-4">Placement Statistics</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Companies</span>
                      <span className="font-semibold text-[#800000]">50+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Average Package</span>
                      <span className="font-semibold text-[#800000]">12.5 LPA</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Highest Package</span>
                      <span className="font-semibold text-[#800000]">45 LPA</span>
                    </div>
                  </div>
                </div>

                {/* Placement Process */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold text-[#800000] mb-4">Placement Process</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[#800000] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Pre-placement talks and company presentations</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[#800000] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Technical and aptitude tests</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[#800000] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Technical and HR interviews</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[#800000] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Final selection and offer letters</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-[#800000] mb-4">Contact Placement Office</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600">
                      <span className="font-semibold">Email:</span>{' '}
                      <a href="mailto:placement@diu.iiitvadodara.ac.in" className="text-[#800000] hover:text-[#5d0000]">
                        placement@diu.iiitvadodara.ac.in
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">
                      <span className="font-semibold">Phone:</span>{' '}
                      <a href="tel:+91XXXXXXXXXX" className="text-[#800000] hover:text-[#5d0000]">
                        +91 XXXXXXXXXX
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
