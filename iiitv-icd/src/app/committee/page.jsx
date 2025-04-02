'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const committeeMembers = [
  {
    role: "Presiding Officer",
    name: "Dr. Deepika Gupta",
    designation: "Assistant Professor",
    email: "deepika_gupta@diu.iiitvadodara.ac.in"
  },
  {
    role: "Member",
    name: "Dr. Varun Kumar",
    designation: "",
    email: "varun_kumar@diu.iiitvadodara.ac.in"
  },
  {
    role: "Member",
    name: "Ms. Prita Jha",
    designation: "Founder and President, Peace and Equality Cell(PEC)",
    email: "",
    note: "Members from amongst non-governmental Organizations"
  },
  {
    role: "Member",
    name: "Ms. Nitu Singh Bhaduria",
    designation: "Institute Counsellor",
    email: "counselor@iiitvadodara.ac.in"
  },
  {
    role: "Member",
    name: "Dr. Gaurav Pareek",
    designation: "Assistant Professor, PIC Students Affairs",
    email: "gaurav_pareek@diu.iiitvadodara.ac.in"
  },
  {
    role: "Member",
    name: "Dr. Vikas Kumar",
    designation: "Assistant Professor",
    email: "vikas_kumar@diu.iiitvadodara.ac.in"
  }
];

const Committee = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]), {
    stiffness: 100,
    damping: 20
  });

  return (
    <motion.div 
      ref={containerRef}
      style={{ opacity, scale }}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#800000]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#800000]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden border border-gray-100/50"
        >
          <div className="p-8 md:p-12">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-[#800000] mb-8 text-center relative group"
            >
              <span className="relative inline-block">
                Internal Complaints Committee
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#800000] transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
              </span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8 bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-gray-700 mb-4 text-justify leading-relaxed">
                The Internal Complaints Committee of IIIT Vadodara - International Campus Diu was constituted in accordance with the{' '}
                <a 
                  href="/pdf/Sexual-Harassment-at-Workplace-Act.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#800000] hover:text-red-700 transition-colors duration-300 font-medium relative group"
                >
                  Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013.
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#800000] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              </p>
            </motion.div>
            
            {/* Committee Members */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-12 overflow-x-auto rounded-2xl shadow-inner bg-white/50 backdrop-blur-sm border border-gray-100/50"
            >
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#800000] to-[#a00000]">
                    <th className="px-6 py-4 text-left text-lg font-medium text-white">Role</th>
                    <th className="px-6 py-4 text-left text-lg font-medium text-white">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {committeeMembers.map((member, index) => (
                    <motion.tr 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      className={`group hover:bg-gray-50/80 transition-all duration-300 ${
                        index % 2 === 0 ? 'bg-white/50' : 'bg-gray-50/50'
                      }`}
                    >
                      <td className="px-6 py-4 border-b border-gray-200/50">
                        <h3 className="font-semibold text-[#800000] group-hover:text-red-700 transition-colors duration-300">
                          {member.role}
                        </h3>
                      </td>
                      <td className="px-6 py-4 border-b border-gray-200/50">
                        <p className="font-bold text-[#800000] group-hover:text-red-700 transition-colors duration-300">
                          {member.name}
                        </p>
                        {member.designation && (
                          <p className="text-gray-700 mt-1">{member.designation}</p>
                        )}
                        {member.note && (
                          <p className="text-gray-700 mt-1 italic">{member.note}</p>
                        )}
                        {member.email && (
                          <p className="text-gray-700 mt-1">
                            Email:{' '}
                            <a 
                              href={`mailto:${member.email}`} 
                              className="text-[#800000] hover:text-red-700 transition-colors duration-300 relative group"
                            >
                              {member.email}
                              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#800000] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                            </a>
                          </p>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
            
            {/* Committee Responsibilities */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mb-8 bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold text-[#800000] mb-6 relative inline-block group">
                The committee is committed to address the following:
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#800000] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </h2>
              
              <div className="space-y-6">
                {[
                  "Prevention, prohibition and redressal of sexual harassment of women -- faculty, staff students, regardless of the duration and nature of association with the Institute.",
                  "Organization of gender sensitization programmes and other measures for campus residents to ensure knowledge and awareness of rights, entitlements and responsibilities spelled out in the Sexual Harassment Act, 2013.",
                  "We advise you to read the Act carefully to identify sexual harassment and also keep the following in mind as signals of the same: Attempts to influence/intimidate by linking professional advancement with sexual favors, or creating a hostile work environment through (for instance) sexually colored conversations, letters, telephone calls and text messages, or making demeaning comments about women's roles in society are all cases of sexual harassment."
                ].map((text, index) => (
                  <motion.p 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                    className="text-gray-700 text-justify leading-relaxed hover:text-gray-900 transition-colors duration-300 p-4 rounded-xl hover:bg-white/50"
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </motion.div>
            
            {/* Grievance Redressal Process */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-12 bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold text-[#800000] mb-6 relative inline-block group">
                Grievance Redressal Process
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#800000] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                If you have experienced or witnessed sexual harassment at the institute, you can file a complaint with the Internal Complaints Committee. The process is confidential and designed to provide fair and timely resolution.
              </p>
              <div className="space-y-6">
                {[
                  "Submit a written complaint to the Presiding Officer of the Internal Complaints Committee.",
                  "The committee will investigate the complaint in a fair and timely manner.",
                  "Appropriate action will be taken based on the findings of the investigation."
                ].map((text, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 1.1 + index * 0.1 }}
                    className="flex items-start group hover:bg-white/50 p-6 rounded-xl transition-all duration-300"
                  >
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-[#800000] to-[#a00000] text-white flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="font-medium">{index + 1}</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        <span className="font-medium text-[#800000]">{text.split(' ')[0]}</span>{' '}
                        {text.split(' ').slice(1).join(' ')}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Committee; 