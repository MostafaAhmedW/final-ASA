import React from "react";
import { FaHandsHelping, FaUserShield } from "react-icons/fa";
import { FaWheelchairMove } from "react-icons/fa6";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";

export default function SocialProtectionGoals() {
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
                <MdOutlineFamilyRestroom className="text-[#318160]/80 text-4xl mb-2" />
                <p className="leading-relaxed text-sm text-gray-600 ">
                  دعم الأسر الأولى بالرعاية
                </p>
              </div>

              <div className=" flex flex-col items-center ">
                <FaHandsHelping className="text-[#318160]/80 text-4xl mb-2" />
                <p className="leading-relaxed text-sm text-gray-600 ">
                  تحقيق العدالة الاجتماعية
                </p>
              </div>

              <div className=" flex flex-col items-center ">
                <FaWheelchairMove className="text-[#318160]/80 text-4xl mb-2" />
                <p className="leading-relaxed text-sm text-gray-600 ">
                  رعاية ذوي الهمم
                </p>
              </div>

              <div className=" flex flex-col items-center ">
                <FaUserShield className="text-[#318160]/80 text-4xl mb-2" />
                <p className="leading-relaxed text-sm text-gray-600 ">
                  توفير مظلة أمان اجتماعي
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
