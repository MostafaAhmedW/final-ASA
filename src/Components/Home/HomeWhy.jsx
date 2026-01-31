import React from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaHeartbeat,
  FaHome,
} from "react-icons/fa";
import SectionWrapper from "../Sectionwrapper/Sectionwrapper";

export default function HomeWhy() {
  return (
    <>
      <SectionWrapper>
        <section className="bg-gray-100 py-20" dir="rtl">
          <div className="container px-8 py-12 mx-auto">
            <h2 className=" text-center text-3xl font-bold text-[#318160] mb-10 relative">
              لماذا مبادرة حياة كريمة؟
              <span className="absolute left-1/2 bg-[#318160] w-16 h-0.5 transform -translate-x-1/2 -bottom-4  block "></span>
            </h2>

            <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-6">
              <div className="shadow-[#318160]/30  p-6 rounded-2xl shadow-sm hover:scale-105 hover:shadow-md  transition-transform duration-300 ease-out cursor-pointer  border border-[#318160]/35 ">
                <div className="flex flex-col items-center">
                  <div className=" w-14 h-14 rounded-full flex justify-center items-center ">
                    <FaHome className="text-4xl text-[#318160] mb-2 " />
                  </div>
                  <h3 className="font-semibold mb-2"> تحسين السكن </h3>
                  <p className="leading-relaxed text-center text-sm font-light">
                    تطوير المنازل ورفع كفاءة البنية التحتية بالقرى.
                  </p>
                </div>
              </div>

              <div className=" shadow-[#318160]/30 border border-[#318160]/35  p-6 rounded-2xl shadow-sm hover:scale-105 hover:shadow-md  transition-transform duration-300 ease-out cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className=" w-14 h-14 rounded-full flex justify-center items-center ">
                    <FaHeartbeat className="text-4xl text-[#318160]  mb-2 " />
                  </div>

                  <h3 className="font-semibold mb-2"> رعاية صحية </h3>
                  <p className="leading-relaxed text-center text-sm font-light">
                    توفير خدمات صحية متكاملة للمواطنين.
                  </p>
                </div>
              </div>

              <div className=" shadow-[#318160]/30 border border-[#318160]/35  p-6 rounded-2xl shadow-sm hover:scale-105 hover:shadow-md  transition-transform duration-300 ease-out cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className=" w-14 h-14 rounded-full flex justify-center items-center ">
                    <FaGraduationCap className="text-4xl text-[#318160]  mb-2 " />
                  </div>

                  <h3 className="font-semibold mb-2"> تعليم أفضل </h3>
                  <p className="leading-relaxed text-center text-sm font-light">
                    تطوير المدارس وتحسين العملية التعليمية.
                  </p>
                </div>
              </div>

              <div className=" shadow-[#318160]/30 border border-[#318160]/35  p-6 rounded-2xl shadow-sm hover:scale-105 hover:shadow-md  transition-transform duration-300 ease-out cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className=" w-14 h-14 rounded-full flex justify-center items-center ">
                    <FaBriefcase className="text-4xl text-[#318160]  mb-2" />
                  </div>

                  <h3 className="font-semibold mb-2"> تمكين اقتصادي </h3>
                  <p className="leading-relaxed text-center text-sm font-light">
                    خلق فرص عمل ودعم المشروعات الصغيرة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
