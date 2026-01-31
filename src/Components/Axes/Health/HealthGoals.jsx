import React from "react";
import { FaAmbulance, FaHospital, FaUserMd } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";

export default function HealthGoals() {
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
                <FaHospital className="text-[#318160]/80 text-4xl mb-2" />
                <p className="leading-relaxed text-sm text-gray-600 ">
                  تطوير الوحدات الصحية
                </p>
              </div>

              <div className=" flex flex-col items-center ">
                <FaUserMd className="text-[#318160]/80 text-4xl mb-2" />
                <p className="leading-relaxed text-sm text-gray-600 ">
                  دعم الكوادر الطبية
                </p>
              </div>

              <div className=" flex flex-col items-center ">
                <MdHealthAndSafety className="text-[#318160]/80 text-4xl mb-2" />
                <p className="leading-relaxed text-sm text-gray-600 ">
                  توفير الرعاية الوقائية
                </p>
              </div>

              <div className=" flex flex-col items-center ">
                <FaAmbulance className="text-[#318160]/80 text-4xl mb-2" />
                <p className="leading-relaxed text-sm text-gray-600 ">
                  تحسين خدمات الطوارئ
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
