"use client";

import { useRouter } from "next/navigation";
import { 
  Skull, Brain, Heart, User, Stethoscope, Microscope, Beaker, 
  FileSearch, Hospital, ClipboardList, Eye, ScanFace, FlaskConical, 
  Baby, Syringe, Bone, UserPlus 
} from "lucide-react";

const coursesData = [
  { category: "Anatomy", icon: Skull },
  { category: "Biochemistry", icon: Brain },
  { category: "Physiology", icon: Heart },
  { category: "Community Medicine", icon: User },
  { category: "Pharmacology", icon: Stethoscope },
  { category: "Pathology", icon: Microscope },
  { category: "Microbiology", icon: Beaker },
  { category: "Forensic Medicine and Toxicology", icon: FileSearch },
  { category: "Clinical Postings Inwards", icon: Hospital },
  { category: "OPD", icon: ClipboardList },
  { category: "ENT", icon: User },
  { category: "Ophthalmology", icon: Eye },
  { category: "Psychiatry", icon: ScanFace },
  { category: "Dermatology and Venereology", icon: FlaskConical },
  { category: "Pediatrics", icon: Baby },
  { category: "Anesthesiology", icon: Syringe },
  { category: "Orthopaedics", icon: Bone },
  { category: "Obstetrics and Gynaecology", icon: UserPlus },
];

export default function Courses() {
  const router = useRouter();

  const handleCourseClick = () => {
    router.push("/courses");
  };

  return (
    <div
    className="py-16"
    style={{
      background: "radial-gradient(circle, rgba(12,151,165,0.7) 0%, rgba(33,65,35,0.9) 100%)",
    }}
  >
  
      <div className="max-w-7xl mx-auto px-6">
        <h1 
          className="text-4xl font-bold text-center mb-10 text-white"
          style={{ fontFamily: "Nunito" }}
        >
           Explore Medical Courses
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {coursesData.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <div 
                key={index} 
                className="p-6 rounded-2xl shadow-lg transition-all cursor-pointer hover:shadow-xl bg-gray-800 hover:bg-gray-700 border border-gray-700"
                onClick={handleCourseClick}
              >
                <div className="flex items-center space-x-3">
                  {/* Icon with radial background */}
                  <div className="p-3 rounded-full bg-gradient-to-br from-green-400 to-teal-500 shadow-md">
                    <IconComponent size={28} className="text-white" />
                  </div>
                  <h2 
                    className="text-lg text-white" 
                    style={{ fontFamily: "Nunito" }}
                  >
                    {course.category}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
