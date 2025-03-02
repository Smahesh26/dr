'use client'
import Header from "@/_components/Header";
import { useState } from "react";
import Footer from "@/_components/Footer";
import { BookOpen, PlayCircle } from "lucide-react";
import { Open_Sans, Nunito } from "next/font/google";
import Header1 from "@/_components/Header1";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["700", "800"] });

const subjects = [
  "Anatomy", "Physiology", "Biochemistry", "Pathology", "Pharmacology",
  "Microbiology", "Forensic Medicine", "Community Medicine", "ENT", "Ophthalmology",
  "Medicine", "Surgery", "Pediatrics", "Obstetrics & Gynecology", "Orthopedics",
  "Dermatology", "Psychiatry", "Radiology", "Anesthesiology"
];

const chapters = subjects.reduce((acc, subject) => {
  acc[subject] = [
    { title: "Introduction", videos: [
      { thumbnail: "https://i.ytimg.com/vi/-gwSwUMBavM/hq720.jpg", description: `Overview of ${subject}` },
      { thumbnail: "https://i.ytimg.com/vi/LikYLOs7fEk/hq720.jpg", description: `Basic Concepts in ${subject}` },
      { thumbnail: "https://i.ytimg.com/vi/XyVal0Y9iGA/hq720.jpg", description: `Key Topics in ${subject}` }
    ]},
    { title: "Advanced Topics", videos: [
      { thumbnail: "https://i.ytimg.com/vi/Hxzk5hVgAlw/hq720.jpg", description: `Deep Dive into ${subject}` },
      { thumbnail: "https://i.ytimg.com/vi/Fy0Au_7lNWI/hq720.jpg", description: `Case Studies in ${subject}` },
      { thumbnail: "https://i.ytimg.com/vi/2VPaJZqWEfk/hq720.jpg", description: `Research Trends in ${subject}` }
    ]}
  ];
  return acc;
}, {});

export default function CoursePage() {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);

  return (
    <>
      <Header1 /><br />
      <div className="w-full min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center py-6 px-4 mt-20">
        
        {/* Heading with new position */}
        <h1 className={`text-4xl font-extrabold text-center text-black mt-6 ${nunito.className}`}>
          📚 Explore <span className="text-gray-900">{selectedSubject}</span>
        </h1>

        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-6 mt-6">
          
          {/* Sidebar */}
          <div className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-lg border border-gray-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Select Subject</h2>
            <div className="flex flex-col gap-2">
              {subjects.map((subject) => (
                <button
                  key={subject}
                  className={`w-full py-3 px-4 rounded-lg text-md font-medium flex items-center gap-2 transition-all bg-teal-600 text-white shadow-md hover:bg-teal-700`}
                  onClick={() => setSelectedSubject(subject)}
                >
                  <BookOpen size={20} /> {subject}
                </button>
              ))}
            </div>
          </div>

          {/* Course Content */}
          <div className="w-full md:w-3/4 bg-white p-8 rounded-lg shadow-xl border border-gray-300">
            {/* <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Chapters</h2> */}
            {chapters[selectedSubject] ? (
              <div>
                {chapters[selectedSubject].map((chapter, index) => (
                  <div key={index} className="mb-6 p-6 shadow-md border rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-blue-700 flex items-center gap-2">
                      <PlayCircle size={22} /> {chapter.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {chapter.videos.map((video, idx) => (
                        <div key={idx} className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105">
                          <img src={video.thumbnail} alt={video.description} className="w-full h-40 object-cover" />
                          <p className="p-4 text-center text-gray-700 text-sm">{video.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-lg text-center text-gray-600">No chapters available for this subject.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
