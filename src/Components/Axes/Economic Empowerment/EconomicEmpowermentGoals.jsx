import React from "react";
import { FaBriefcase, FaStore } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { MdOutlineHandshake } from "react-icons/md";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";

export default function EconomicEmpowermentGoals() {
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
                <FaBriefcase className="text-[#318160]/80 text-4xl mb-2" />
                <p className="leading-relaxed text-sm text-gray-600 ">
                  توفير فرص عمل
                </p>
              </div>

              <div className=" flex flex-col items-center ">
                <FaStore className="text-[#318160]/80 text-4xl mb-2" />
                <p className="leading-relaxed text-sm text-gray-600 ">
                  دعم المشروعات الصغير
                </p>
              </div>

              <div className=" flex flex-col items-center ">
                <MdOutlineHandshake className="text-[#318160]/80 text-4xl mb-2" />
                <p className="leading-relaxed text-sm text-gray-600 ">
                  تمكين المرأة والشباب
                </p>
              </div>

              <div className=" flex flex-col items-center ">
                <IoMdTrendingUp className="text-[#318160]/80 text-4xl mb-2" />
                <p className="leading-relaxed text-sm text-gray-600 ">
                  تحسين الدخل
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
