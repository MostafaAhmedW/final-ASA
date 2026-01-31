import React from "react";
import { FaSchool, FaUserGraduate } from "react-icons/fa";
import { MdGroup, MdOutlineAutoGraph } from "react-icons/md";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";

export default function EducationGoals() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className="bg-gray-100 py-20">
          <div className="container md:px-10 mx-auto">
            <h2 className="text-3xl font-bold text-[#318160] mb-10 text-center md:text-right">
              أهداف المحور
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14 ">
              <div className=" flex flex-col items-center ">
                <FaSchool className="text-[#318160]/80 text-4xl mb-2" />
                <p className="leading-relaxed text-sm text-gray-600 ">
                  تطوير المدارس
                </p>
              </div>

              <div className=" flex flex-col items-center ">
                <MdGroup className="text-[#318160]/80 text-4xl mb-2" />
                <p className="leading-relaxed text-sm text-gray-600 ">
                  خفض كثافة الفصول
                </p>
              </div>

              <div className=" flex flex-col items-center ">
                <FaUserGraduate className="text-[#318160]/80 text-4xl mb-2" />
                <p className="leading-relaxed text-sm text-gray-600 ">
                  دعم الطلاب
                </p>
              </div>

              <div className=" flex flex-col items-center ">
                <MdOutlineAutoGraph className="text-[#318160]/80 text-4xl mb-2" />
                <p className="leading-relaxed text-sm text-gray-600 ">
                  تحسين جودة التعليم
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
