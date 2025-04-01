import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Carousel images data
const carouselImages = [
  "http://diu.iiitvadodara.ac.in/img/isepsem.jpg",
  "http://diu.iiitvadodara.ac.in/img/isep.jpg",
  "http://diu.iiitvadodara.ac.in/img/mou0&0.jpg",
  "http://diu.iiitvadodara.ac.in/img/76th_Repbulic_Day.jpg",
  "http://diu.iiitvadodara.ac.in/img/whtmou.jpg",
  "http://diu.iiitvadodara.ac.in/img/20250111_094613.jpg",
  "http://diu.iiitvadodara.ac.in/img/6thconvo.jpg",
  "http://diu.iiitvadodara.ac.in/img/aeoiyt.jpg",
  "http://diu.iiitvadodara.ac.in/img/rscbhvngr.jpg",
  "http://diu.iiitvadodara.ac.in/img/MoURdk.jpeg",
  "http://diu.iiitvadodara.ac.in/img/MoU.jpg",
  "http://diu.iiitvadodara.ac.in/img/1727076944185.png",
  "http://diu.iiitvadodara.ac.in/img/p1.png",
  "http://diu.iiitvadodara.ac.in/img/p2.png"
];

// Announcements data
const announcements = [
  {
    id: 1,
    text: "Faculty Recruitment : ADVERTISEMENT NUMBER: IIITV/ESTT/RECT/FACULTY/24-25/01 DATED 09 DEC 2024: Update",
    link: "https://drive.google.com/file/d/1tTjZ5bQhHuOmBjxM8iaoVXNt3SqlI7Mt/view",
    isNew: true,
    color: "blue"
  },
  {
    id: 2,
    text: "Corrigendum - I to the Institute's EOI enquiry for 'Empanelment of vendors to provide student hostel accommodation' for Diu Campus(22.March.2025).",
    link: "http://diu.iiitvadodara.ac.in/pdf/IIITV - ICD _Hostel EOI_Corrigendum_I_22325.pdf",
    isNew: true,
    color: "red"
  },
  {
    id: 3,
    text: "Admissions open for MTech, PhD",
    link: "#",
    isNew: true,
    color: "blue",
    links: [
      { text: "MTech", url: "https://iiitvadodara.ac.in/mtech_admissions.php" },
      { text: "PhD", url: "https://iiitvadodara.ac.in/phd_admissions.php" }
    ]
  },
  {
    id: 4,
    text: "New Programs Launched: BTech-AI, BTech-ECE, MCA, BSc online",
    link: "mca.php",
    isNew: true,
    color: "red"
  },
  {
    id: 5,
    text: "Advertisement for Faculty Positions (Dec 2024)",
    link: "https://iiitvadodara.ac.in/faculty_positions.php",
    color: "blue"
  },
  {
    id: 6,
    text: "Anti Ragging Form for 2023-24 admission.",
    link: "https://antiragging.in/affidavit_affiliated_form.php",
    color: "red"
  },
  {
    id: 7,
    text: "Advertisement for Empanelment of Visiting Faculty for Academic Year 2023-24",
    link: "http://diu.iiitvadodara.ac.in/FacultyRecu.php",
    color: "blue"
  }
];

// Events data
const events = [
  {
    date: "06 Feb 2025",
    title: "Centre of Excellence and PHN LAB Inauguration",
    link: "http://diu.iiitvadodara.ac.in/img/phn.JPG"
  },
  {
    date: "05 Feb 2025",
    title: "Expert Talk on India's Space Exploration Programme Chandrayan-3 and Beyond",
    link: "http://diu.iiitvadodara.ac.in/img/isep.jpg"
  },
  {
    date: "05 Feb 2025",
    title: "Mou signing ceremony between SAC ISRO and IIITV",
    link: "http://diu.iiitvadodara.ac.in/img/isepsem.jpg"
  },
  {
    date: "22 Sept 2024",
    title: "Hon'ble Vice President of India Visit at Diu and Education Hub Diu",
    link: "http://diu.iiitvadodara.ac.in/img/1727076944185.png"
  },
  {
    date: "24 Aug 2024",
    title: "8th Prof. Vijaya Agarwala Memorial National Workshop on Microwave Absorbing Materials (VAMMAM - 2024) Thrust Area \"Role of AI for Stealth",
    link: "https://drive.google.com/file/d/1-qFrGa5r7EPSYnVlScVdEXENspo8Nxum/view"
  }
];

// News data
const news = [
  {
    text: "6th Convocation of IIIT Vadodara 17.Dec.2024",
    link: "https://sites.google.com/iiitvadodara.ac.in/copyofiiitv2web/home?authuser=0"
  },
  {
    text: "The Sports Festival of IIITV-ICD \"OLYMPUS\" 08.Nov.2024",
    link: "http://diu.iiitvadodara.ac.in/img/s22024.png"
  },
  {
    text: "Ph.D. Admissions(Full-Time / Part-Time) 24.Oct.2024",
    link: "https://pgadmissions.iiitvadodara.ac.in/"
  },
  {
    text: "IIIT Vadodara International Campus at Diu. 09.Oct.2020",
    link: "http://diu.iiitvadodara.ac.in/img/INDEX_DIU1.jpeg"
  }
];

export default function Home() {
  return (
    <div className="wrapper">
      {/* Image Carousel */}
      <div className="w-full bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative overflow-hidden h-[450px] my-4">
            {/* This would be a carousel in a real implementation */}
            <div className="flex justify-center items-center h-full">
              <Image 
                src={carouselImages[0]}
                alt="Campus"
                width={620}
                height={450}
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 flex items-center">
              <button className="absolute left-2 bg-white/50 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="absolute right-2 bg-white/50 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Announcements Alert */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4 max-w-screen-xl mx-auto">
        <div className="text-center">
          <ul className="divide-y divide-yellow-200">
            {announcements.slice(0, 5).map((announcement) => (
              <li key={announcement.id} className="py-3">
                <Link 
                  href={announcement.link} 
                  className={`text-${announcement.color}-600 font-semibold hover:underline flex items-center justify-center`}
                >
                  {announcement.text}
                  {announcement.isNew && (
                    <span className="ml-2">
                      <Image src="http://diu.iiitvadodara.ac.in/img/new.gif" alt="New" width={36} height={14} />
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Widgets Section */}
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Announcements */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-[#800000] text-white p-3">
              <h2 className="text-xl font-semibold">Announcements</h2>
            </div>
            <div className="p-4">
              <ul className="divide-y divide-gray-200">
                {announcements.slice(0, 3).map((announcement) => (
                  <li key={announcement.id} className="py-3">
                    <Link 
                      href={announcement.link} 
                      className={`text-${announcement.color}-600 font-semibold hover:underline block`}
                    >
                      {announcement.text}
                    </Link>
                  </li>
                ))}
                <li className="py-3">
                  <span>Government of India Schemes for Students' Welfare</span>
                  <div className="mt-1 space-x-2">
                    <a href="https://www.vidyalakshmi.co.in/Students/indexPopup" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.vidyalakshmi.co.in</a>
                    <a href="https://www.scholarships.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.scholarships.gov.in</a>
                  </div>
                </li>
              </ul>
              
              {/* My Gov Section */}
              <div className="mt-6">
                <div className="bg-[#800000] text-white p-3">
                  <h2 className="text-xl font-semibold">My Gov</h2>
                </div>
                <div className="mt-4">
                  <Link 
                    href="/pdf/Achievements_MHRD.pdf" 
                    className="text-blue-600 font-semibold hover:underline block"
                  >
                    Achievements of Ministry of Education, Government of India
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Events */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-[#800000] text-white p-3">
              <h2 className="text-xl font-semibold">Events</h2>
            </div>
            <div className="p-4">
              <ul className="divide-y divide-gray-200">
                {events.map((event, index) => (
                  <li key={index} className="py-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-[#800000] text-white rounded px-2 py-1 text-center mr-3">
                        <span className="text-sm font-medium">{event.date}</span>
                      </div>
                      <div className="flex-grow">
                        <Link 
                          href={event.link} 
                          className="text-gray-800 hover:text-[#800000] hover:underline"
                        >
                          {event.title}
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* News */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-[#800000] text-white p-3">
              <h2 className="text-xl font-semibold">News</h2>
            </div>
            <div className="p-4">
              <ul className="divide-y divide-gray-200">
                {news.map((item, index) => (
                  <li key={index} className="py-3">
                    <Link 
                      href={item.link} 
                      className="text-gray-800 hover:text-[#800000] hover:underline block"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Website Counter */}
      <div className="text-center text-gray-500 text-sm mt-4 mb-8">
        <span>Visitors: </span>
        <span className="inline-block border border-gray-300 px-1">00000</span>
      </div>
    </div>
  );
}
