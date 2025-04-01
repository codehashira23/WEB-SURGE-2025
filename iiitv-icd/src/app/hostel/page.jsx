import React from 'react';
import Image from 'next/image';

const hostelImages = [
  "/img/hostel_n1.jpeg",
  "/img/hostel_n4.jpeg",
  "/img/hostel_n9.jpg",
  "/img/hostel_n8.jpg",
  "/img/hostel_n7.jpg",
  "/img/hostel_n10.jpg",
  "/img/hostel_n11.jpg",
  "/img/hostel_n12.jpg",
  "/img/host11.jpeg",
  "/img/host12.jpeg",
  "/img/host13.jpeg",
  "/img/host14.jpeg",
];

const hostelAmenities = [
  {
    title: "Hostel Room",
    description: "Semi-furnished. Each student is provided with a Cot, Cupboard, Study-Table and Chair"
  },
  {
    title: "R-O Plant with Water Cooler",
    description: "Clean and purified drinking water available for students"
  },
  {
    title: "Internet/Wi-Fi",
    description: "High-speed internet connection throughout the hostel"
  },
  {
    title: "Television with DTH Connection",
    description: "Entertainment facilities in common areas"
  },
  {
    title: "Dining Hall",
    description: "Spacious dining area with quality food services"
  },
  {
    title: "Gymnasium",
    description: "Separate facilities for Boys & Girls on different floors"
  },
  {
    title: "Sports",
    description: "Indoor games like Table-Tennis, Carom Board, Chess"
  },
  {
    title: "Musical Instruments",
    description: "Drum, Congo, Electric Guitar, Flute, Synthesizers, Tabla, Violin and Harmonium"
  },
  {
    title: "Security",
    description: "Round the clock security services"
  },
  {
    title: "Housekeeping",
    description: "Regular cleaning and maintenance"
  }
];

const Hostel = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-[#800000] mb-8">Hostel Facilities</h1>
          
          <div className="mb-12">
            <p className="text-gray-700 mb-6">
              IIIT Vadodara-International Campus Diu provides excellent hostel facilities for both boys and girls. The campus hostels are designed to offer a comfortable living environment that is conducive to academic pursuits while ensuring a balanced lifestyle for students.
            </p>
            
            {/* Image Gallery */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-[#800000] mb-6">Hostel Gallery</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hostelImages.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-64 w-full">
                      <Image 
                        src={`http://diu.iiitvadodara.ac.in${image}`}
                        alt={`Hostel Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hostel Amenities */}
            <div>
              <h2 className="text-2xl font-semibold text-[#800000] mb-6">Hostel Amenities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hostelAmenities.map((amenity, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-md">
                    <h3 className="text-lg font-medium text-[#800000] mb-2">{amenity.title}</h3>
                    <p className="text-gray-700">{amenity.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Hostel Rules and Guidelines */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-[#800000] mb-6">Hostel Rules and Guidelines</h2>
            
            <div className="bg-gray-50 p-6 rounded-md">
              <p className="text-gray-700 mb-4">
                All students residing in the hostels are expected to follow the rules and regulations to ensure a harmonious and disciplined environment. Some of the general guidelines include:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Students must maintain discipline and decorum in the hostel premises</li>
                <li>Ragging in any form is strictly prohibited</li>
                <li>Students must adhere to the hostel timings</li>
                <li>Visitors are allowed only in designated areas during specified hours</li>
                <li>Students are responsible for the safety of their belongings</li>
                <li>Damage to hostel property will result in appropriate fines</li>
                <li>Use of electrical appliances requires prior permission</li>
                <li>Students should maintain cleanliness in their rooms and common areas</li>
              </ul>
              
              <p className="mt-4 text-gray-700">
                For detailed hostel rules and regulations, please refer to the Hostel Manual available at the hostel office.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hostel;