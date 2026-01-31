import React from "react";
import { FaLeaf, FaRecycle, FaSolarPanel, FaWater } from "react-icons/fa";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";
export default function SustainableDevelopmentGoals() {
  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className="bg-gray-100 py-16">
          <div className="container md:px-10 mx-auto">
            <h2 className="text-3xl font-bold text-[#318160] mb-10 text-center md:text-right">
              أهداف المحور
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14 ">
              <div className=" flex flex-col items-center ">
                <FaLeaf className="text-[#318160]/80 text-4xl mb-2" />
                <p className="leading-relaxed text-sm text-gray-600 ">
                  حماية البيئة
                </p>
              </div>

              <div className=" flex flex-col items-center ">
                <FaSolarPanel className="text-[#318160]/80 text-4xl mb-2" />
                <p className="leading-relaxed text-sm text-gray-600 ">
                  الطاقة النظيفة
                </p>
              </div>

              <div className=" flex flex-col items-center ">
                <FaWater className="text-[#318160]/80 text-4xl mb-2" />
                <p className="leading-relaxed text-sm text-gray-600 ">
                  ترشيد الموارد
                </p>
              </div>

              <div className=" flex flex-col items-center ">
                <FaRecycle className="text-[#318160]/80 text-4xl mb-2" />
                <p className="leading-relaxed text-sm text-gray-600 ">
                  إعادة التدوير
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
