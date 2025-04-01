import React from 'react';
import Link from 'next/link';

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
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-[#800000] mb-8 text-center">Internal Complaints Committee</h1>
          
          <div className="mb-8">
            <p className="text-gray-700 mb-4 text-justify">
              The Internal Complaints Committee of IIIT Vadodara - International Campus Diu was constituted in accordance with the{' '}
              <a 
                href="/pdf/Sexual-Harassment-at-Workplace-Act.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013.
              </a>
            </p>
          </div>
          
          {/* Committee Members */}
          <div className="mb-12 overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-6 py-3 text-left text-lg font-medium text-[#800000]">Role</th>
                  <th className="border border-gray-300 px-6 py-3 text-left text-lg font-medium text-[#800000]">Details</th>
                </tr>
              </thead>
              <tbody>
                {committeeMembers.map((member, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="border border-gray-300 px-6 py-4">
                      <h3 className="font-semibold">{member.role}</h3>
                    </td>
                    <td className="border border-gray-300 px-6 py-4">
                      <p className="font-bold text-[#800000]">{member.name}</p>
                      {member.designation && <p className="text-gray-700">{member.designation}</p>}
                      {member.note && <p className="text-gray-700">{member.note}</p>}
                      {member.email && (
                        <p className="text-gray-700">
                          Email:{' '}
                          <a href={`mailto:${member.email}`} className="text-blue-600 hover:underline">
                            {member.email}
                          </a>
                        </p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Committee Responsibilities */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-[#800000] mb-4">The committee is committed to address the following:</h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 text-justify">
                Prevention, prohibition and redressal of sexual harassment of women -- faculty, staff students, regardless of the duration and nature of association with the Institute.
              </p>
              
              <p className="text-gray-700 text-justify">
                Organization of gender sensitization programmes and other measures for campus residents to ensure knowledge and awareness of rights, entitlements and responsibilities spelled out in the Sexual Harassment Act, 2013.
              </p>
              
              <p className="text-gray-700 text-justify">
                We advise you to read the Act carefully to identify sexual harassment and also keep the following in mind as signals of the same: Attempts to influence/intimidate by linking professional advancement with sexual favors, or creating a hostile work environment through (for instance) sexually colored conversations, letters, telephone calls and text messages, or making demeaning comments about women's roles in society are all cases of sexual harassment.
              </p>
            </div>
          </div>
          
          {/* Grievance Redressal Process */}
          <div className="mt-12 bg-gray-50 p-6 rounded-md">
            <h2 className="text-xl font-semibold text-[#800000] mb-4">Grievance Redressal Process</h2>
            <p className="text-gray-700 mb-4">
              If you have experienced or witnessed sexual harassment at the institute, you can file a complaint with the Internal Complaints Committee. The process is confidential and designed to provide fair and timely resolution.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#800000] text-white flex items-center justify-center mt-0.5">
                  <span>1</span>
                </div>
                <div className="ml-3">
                  <p className="text-gray-700">
                    <span className="font-medium">Submit a written complaint</span> to the Presiding Officer of the Internal Complaints Committee.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#800000] text-white flex items-center justify-center mt-0.5">
                  <span>2</span>
                </div>
                <div className="ml-3">
                  <p className="text-gray-700">
                    <span className="font-medium">The committee will investigate</span> the complaint in a fair and timely manner.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#800000] text-white flex items-center justify-center mt-0.5">
                  <span>3</span>
                </div>
                <div className="ml-3">
                  <p className="text-gray-700">
                    <span className="font-medium">Appropriate action will be taken</span> based on the findings of the investigation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committee; 