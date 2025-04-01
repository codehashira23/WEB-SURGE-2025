import React from 'react';
import Image from 'next/image';

const facultyData = [
  {
    name: "Gaurav Pareek",
    image: "http://diu.iiitvadodara.ac.in/img/gauravsir.jpg",
    profile: "http://diu.iiitvadodara.ac.in/pdf/gauravsir.pdf",
    education: "Ph.D. in Computer Science and Engineering",
    thesis: "Cryptographic Solutions for Secure Sharing of Outsourced Data",
    institution: "National Institute of Technology (NIT) Goa",
    interests: "Cryptography, Information Security, Cloud Security, Access Control",
    contact: "gaurav_pareek@diu.iiitvadodara.ac.in",
    department: "Computer Science and Engineering"
  },
  {
    name: "Abhisek Paul",
    image: "http://diu.iiitvadodara.ac.in/img/AP.jpg",
    profile: "http://diu.iiitvadodara.ac.in/pdf/AbhisekPaul.pdf",
    education: "Ph.D. in Computer Science and Engineering",
    institution: "National Institute of Technology (NIT) Agartala",
    interests: "Image Processing, Soft Computing, Vision Computing",
    contact: "abhisek_paul@diu.iiitvadodara.ac.in",
    department: "Computer Science and Engineering"
  },
  {
    name: "Dr. Venkata Phanikrishna B.",
    image: "http://diu.iiitvadodara.ac.in/img/BVPK.jpg",
    profile: "http://diu.iiitvadodara.ac.in/pdf/BVPK_CV.pdf",
    education: "Ph.D. in Computer Science and Engineering",
    thesis: "Study of Single Channel EEG Signal Analysis for Drowsiness Detection using Machine Learning",
    institution: "National Institute of Technology (NIT) Rourkela",
    interests: "Machine Learning, Bio-signal (EEG) analysis, Algorithms, Pattern Recognition",
    contact: "venkata_phanikrishna@diu.iiitvadodara.ac.in",
    department: "Computer Science and Engineering"
  },
  {
    name: "Jignesh Patel",
    image: "http://diu.iiitvadodara.ac.in/img/Jignesh_Patel.jpg",
    profile: "https://jignnesh.github.io/",
    education: "Ph.D. (Information and Communication Technology)",
    institution: "DA-IICT, Gandhinagar India",
    interests: "Remote Sensing, Machine Learning",
    contact: "jignesh_patel@diu.iiitvadodara.ac.in",
    department: "Electronics & Communication Engineering"
  },
  {
    name: "Varun Kumar",
    image: "http://diu.iiitvadodara.ac.in/img/Varun_Kumar.jpg",
    profile: "http://diu.iiitvadodara.ac.in/pdf/vok001.pdf",
    education: "Ph.D. (Wireless Communication)",
    institution: "NIT, Rourkela",
    interests: "Wireless Communication, Machine Learning, Signal Processing",
    contact: "varun_kumar@diu.iiitvadodara.ac.in",
    department: "Electronics & Communication Engineering"
  },
  {
    name: "Vikas Kumar",
    image: "http://diu.iiitvadodara.ac.in/img/vikas_kumar.jpg",
    profile: "http://diu.iiitvadodara.ac.in/faculty-profile/vk001.php",
    education: "Ph.D. (Science, Society and Development)",
    institution: "Central University of Gujarat",
    interests: "Science, Technology and Society",
    contact: "vikas_kumar@diu.iiitvadodara.ac.in",
    department: "Humanities"
  },
  {
    name: "Ashish Phophalia",
    image: "http://iiitvadodara.ac.in/img/ashish_phophalia.jpg",
    profile: "https://iiitvadodara.ac.in/ashish_phophalia.php",
    education: "Ph.D. (Information and Communication Technology)",
    institution: "DA-IICT",
    interests: "Image Processing, Pattern Recognition, Medical Image Analysis",
    contact: "ashish_p@iiitvadodara.ac.in",
    department: "Faculties Associated from IIIT Vadodara"
  },
  {
    name: "Barnali Chetia",
    image: "http://iiitvadodara.ac.in/img/barnali.jpg",
    profile: "https://iiitvadodara.ac.in/barnali_chetia.php",
    education: "Ph.D. (Linguistics)",
    institution: "JNU New Delhi",
    interests: "Applied Linguistics, Sociolinguistics, Discourse Analysis, Gender Studies, Technical Communication",
    contact: "barnali@iiitvadodara.ac.in",
    department: "Faculties Associated from IIIT Vadodara"
  }
];

const Faculty = () => {
  // Group faculty by department
  const facultyByDepartment = facultyData.reduce((acc, faculty) => {
    if (!acc[faculty.department]) {
      acc[faculty.department] = [];
    }
    acc[faculty.department].push(faculty);
    return acc;
  }, {});

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#800000] mb-8">Faculty</h1>
      
      {Object.entries(facultyByDepartment).map(([department, facultyList]) => (
        <div key={department} className="mb-12">
          <h2 className="text-2xl font-semibold text-[#800000] mb-6 border-b-2 border-gray-200 pb-2">
            {department}
          </h2>
          
          <div className="space-y-8">
            {facultyList.map((faculty, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex justify-center">
                    <div className="relative w-32 h-32">
                      <Image
                        src={faculty.image}
                        alt={faculty.name}
                        width={128}
                        height={128}
                        className="object-cover rounded-md"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">
                      <a href={faculty.profile} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {faculty.name}
                      </a>
                    </h3>
                    
                    <div className="space-y-1 text-gray-700">
                      <p>{faculty.education}</p>
                      {faculty.thesis && <p>Thesis: {faculty.thesis}</p>}
                      <p>{faculty.institution}</p>
                      <p className="mt-2">
                        <span className="font-semibold">Areas of Interest: </span>
                        {faculty.interests}
                      </p>
                      <p className="mt-2">
                        <span className="font-semibold">Contact: </span>
                        {faculty.contact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faculty;