import React from "react";
import { FaRoad } from "react-icons/fa";
import {
  MdLightbulbOutline,
  MdOutlineConstruction,
  MdWaterDrop,
} from "react-icons/md";
import SectionWrapper from "../../Sectionwrapper/Sectionwrapper";

export default function InfraGoals() {
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
                <MdWaterDrop className="text-[#318160]/80 text-4xl mb-2" />
                <p className="leading-relaxed text-sm text-gray-600 ">
                  تحسين خدمات المياه
                </p>
              </div>

              <div className=" flex flex-col items-center ">
                <MdOutlineConstruction className="text-[#318160]/80 text-4xl mb-2" />
                <p className="leading-relaxed text-sm text-gray-600 ">
                  تطوير الصرف الصحي
                </p>
              </div>

              <div className=" flex flex-col items-center ">
                <FaRoad className="text-[#318160]/80 text-4xl mb-2" />
                <p className="leading-relaxed text-sm text-gray-600 ">
                  رصف وتطوير الطرق
                </p>
              </div>

              <div className=" flex flex-col items-center ">
                <MdLightbulbOutline className="text-[#318160]/80 text-4xl mb-2" />
                <p className="leading-relaxed text-sm text-gray-600 ">
                  تحسين الإنارة العامة
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
