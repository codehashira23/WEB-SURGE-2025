import React from 'react';
import Image from 'next/image';

const staffData = [
  {
    name: "Mr. Pratik Patel",
    image: "http://diu.iiitvadodara.ac.in/img/Pratik_Patel.jpg",
    designation: "Jr. System Administrator",
    email: "pratikpatel@iiitvadodara.ac.in"
  },
  {
    name: "Mr. Gautam Kumar",
    image: "http://iiitvadodara.ac.in/img/gautam.jpg",
    designation: "Jr. Technical Superintendent",
    email: "gautam_kumar@diu.iiitvadodara.ac.in"
  },
  {
    name: "Mr. Sagar Biren",
    image: "http://diu.iiitvadodara.ac.in/img/sagar.jpg",
    designation: "Administrative Assistant",
    email: "sagar_upadhyay@diu.iiitvadodara.ac.in"
  },
  {
    name: "Mr. Prashant B Solanki",
    image: "http://diu.iiitvadodara.ac.in/img/p.jpg",
    designation: "System Administrator",
    email: "prashant_solanki@diu.iiitvadodara.ac.in"
  }
];

const Staff = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-[#800000] mb-8">Administrative & Technical Staff</h1>
          
          <div className="mb-8">
            <p className="text-gray-700">
              The administrative and technical staff at IIIT Vadodara-International Campus Diu play a vital role in the smooth functioning of the institute. They provide essential support services to maintain the academic and administrative operations of the campus.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {staffData.map((staff, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative w-32 h-32 mx-auto md:mx-0">
                        <Image
                          src={staff.image}
                          alt={staff.name}
                          width={128}
                          height={128}
                          className="object-cover rounded-md"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-grow text-center md:text-left">
                      <h2 className="text-xl font-semibold text-[#800000] mb-2">{staff.name}</h2>
                      <p className="text-gray-700 mb-2">{staff.designation}</p>
                      <p className="text-gray-700">
                        <span className="font-medium">Contact: </span>
                        <a href={`mailto:${staff.email}`} className="text-blue-600 hover:underline">
                          {staff.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gray-50 p-6 rounded-md">
            <h2 className="text-xl font-semibold text-[#800000] mb-4">General Contact Information</h2>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-medium">Administrative Office: </span>
                <a href="mailto:administration@diu.iiitvadodara.ac.in" className="text-blue-600 hover:underline">
                  administration@diu.iiitvadodara.ac.in
                </a>
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Academic Section: </span>
                <a href="mailto:academics@diu.iiitvadodara.ac.in" className="text-blue-600 hover:underline">
                  academics@diu.iiitvadodara.ac.in
                </a>
              </p>
              <p className="text-gray-700">
                <span className="font-medium">IT Support: </span>
                <a href="mailto:itsupport@diu.iiitvadodara.ac.in" className="text-blue-600 hover:underline">
                  itsupport@diu.iiitvadodara.ac.in
                </a>
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Phone: </span>
                +91 79905 73335 / 9265647473
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-4 border border-gray-200 rounded-md">
            <p className="text-gray-600 text-sm italic">
              Note: For general inquiries, please contact the administrative office. For specific department-related queries, please reach out to the respective staff members via their email addresses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;