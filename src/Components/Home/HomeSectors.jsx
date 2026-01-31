import React from "react";
import {
  FaHome,
  FaTint,
  FaHeartbeat,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionWrapper from "../Sectionwrapper/Sectionwrapper";

export default function HomeSectors() {
  return (
    <>
      <SectionWrapper>
        <section className="py-20 " dir="rtl">
          <div className="container py-12 px-8 mx-auto">
            <h2 className="text-center text-3xl font-bold text-[#318160] mb-10 relative">
              محاور العمل
              <span className="absolute left-1/2 bg-[#318160] w-16 h-0.5 transform -translate-x-1/2 -bottom-4  block "></span>
            </h2>

            <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 py-10 px-4 sm:px-10 text-center ">
              <div className=" rounded-2xl shadow-md p-6 flex flex-col justify-center items-center gap-1 relative overflow-hidden  duration-500 ease-out cursor-pointer hover:shadow-[#318160] border border-[#318160]/35 ">
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-[#318160]"></div>

                <div className=" z-10 w-14 h-14 rounded-full flex justify-center items-center  ">
                  <FaHome className="text-3xl text-[#318160] " />
                </div>
                <h3 className="z-10 font-bold text-lg">الإسكان</h3>
                <p className="z-10 leading-relaxed text-center text-sm font-light">
                  تطوير المنازل ورفع كفاءتها داخل القرى
                </p>
              </div>

              <div className=" p-6 flex flex-col justify-center items-center gap-1 rounded-2xl shadow-md relative overflow-hidden  duration-500 ease-out cursor-pointer hover:shadow-[#318160] border border-[#318160]/35 ">
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-[#318160]"></div>

                <div className=" z-10 w-14 h-14 rounded-full flex justify-center items-center">
                  <FaTint className="text-3xl text-[#318160] " />
                </div>
                <h3 className="z-10 font-bold text-lg">مياه الشرب</h3>
                <p className="z-10 leading-relaxed text-center text-sm font-light">
                  توفير مياه نظيفة وشبكات صرف صحي
                </p>
              </div>

              <div className=" p-6 flex flex-col justify-center rounded-2xl items-center gap-1 relative overflow-hidden shadow-md  duration-500 ease-out cursor-pointer hover:shadow-[#318160] border border-[#318160]/35">
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-[#318160]"></div>

                <div className=" z-10 w-14 h-14 rounded-full flex justify-center items-center">
                  <FaHeartbeat className="text-3xl text-[#318160] " />
                </div>
                <h3 className="z-10 font-bold text-lg">الصحة</h3>
                <p className="z-10 leading-relaxed text-center text-sm font-light">
                  تطوير الوحدات الصحية وتوفير العلاج
                </p>
              </div>

              <div className=" p-6 rounded-2xl relative shadow-md overflow-hidden flex flex-col justify-center items-center gap-1  duration-500 ease-out cursor-pointer hover:shadow-[#318160] border border-[#318160]/35">
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-[#318160]"></div>
                <div className=" w-14 h-14 z-10  rounded-full flex justify-center items-center">
                  <FaGraduationCap className="text-3xl text-[#318160] " />
                </div>
                <h3 className="z-10 font-bold text-lg">التعليم</h3>
                <p className="z-10 leading-relaxed text-center text-sm font-light">
                  تطوير المدارس وتحسين العملية التعليمية
                </p>
              </div>

              <div className=" p-6 flex flex-col justify-center items-center gap-1 relative shadow-md overflow-hidden rounded-2xl  duration-500 ease-out cursor-pointer hover:shadow-[#318160] border border-[#318160]/35 ">
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-[#318160]"></div>
                <div className=" z-14 w-14 h-14 rounded-full flex justify-center items-center">
                  <FaBriefcase className="text-3xl text-[#318160] " />
                </div>
                <h3 className="z-10 font-bold text-lg">التمكين الاقتصادي</h3>
                <p className="z-10 leading-relaxed text-center text-sm font-light">
                  توفير فرص عمل ومشروعات صغيرة
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-4 flex-wrap ">
              <Link
                to="/axes"
                className="bg-gray-50 border border-[#318160]/30 text-[#318160] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-500"
              >
                تعرّف على باقي المحاور
              </Link>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
