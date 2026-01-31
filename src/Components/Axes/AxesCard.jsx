import React from "react";
import { FaBriefcase, FaGraduationCap, FaHeart } from "react-icons/fa";
import { MdOutlineConstruction } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { MdEco } from "react-icons/md";
import { Link } from "react-router-dom";
import SectionWrapper from "../Sectionwrapper/Sectionwrapper";
export default function AxesCard() {
  return (
    <>
      <SectionWrapper>
        <section className="bg-gray-100 py-20" dir="rtl">
          <div className="container  mx-auto md:px-10">
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
              <div className=" rounded-2xl p-6 border border-[#318160]/30 hover:shadow-md shadow-sm shadow-[#318160]/35  transition duration-300 cursor-pointer ">
                <div className="flex justify-between items-center mb-4">
                  <MdOutlineConstruction className="text-[#318160]/80 text-4xl" />

                  <span className="text-[0.70rem] font-light px-3 py-1 rounded-full bg-green-100 text-green-700">
                    مكتمل 95%
                  </span>
                </div>

                <h3 className="font-semibold mb-4 text-lg text-[#07000B]">
                  البنية التحتية
                </h3>

                <p className="leading-relaxed text-sm text-gray-600 ">
                  تطوير شبكات المياه والصرف الصحي والطرق، بما يساهم في تحسين
                  مستوى المعيشة داخل القرى.
                </p>

                <Link
                  to="/axes/infrastructure"
                  className="mt-6 inline-flex items-center gap-1 text-sm text-[#318160]
                   bg-[#318160]/5 px-3 py-1.5 rounded-lg
                     border border-[#318160]/40
                   hover:bg-[#318160]/10 hover:-translate-y-0.5
                    transition"
                >
                  اعرف المزيد
                  <span>←</span>
                </Link>
              </div>

              <div className=" rounded-2xl p-6 border border-[#318160]/30 hover:shadow-md shadow-sm shadow-[#318160]/35  transition duration-300 cursor-pointer ">
                <div className="flex justify-between items-center mb-4 ">
                  <FaHeart className="text-[#318160]/80 text-4xl " />

                  <span className="text-[0.70rem] font-light px-3 py-1 rounded-full bg-green-100 text-green-700">
                    مستمر
                  </span>
                </div>

                <h3 className="font-semibold mb-4 text-lg text-[#07000B]">
                  الصحة
                </h3>

                <p className="leading-relaxed text-sm text-gray-600 ">
                  دعم المنظومة الصحية من خلال تطوير الوحدات الصحية وتوفير
                  الخدمات الطبية للمواطنين.
                </p>

                <Link
                  to="/axes/health"
                  className="mt-6 inline-flex items-center gap-1 text-sm text-[#318160]
                   bg-[#318160]/5 px-3 py-1.5 rounded-lg
                     border border-[#318160]/40
                   hover:bg-[#318160]/10 hover:-translate-y-0.5
                    transition"
                >
                  اعرف المزيد
                  <span>←</span>
                </Link>
              </div>

              <div className=" rounded-2xl p-6 border border-[#318160]/30 hover:shadow-md shadow-sm shadow-[#318160]/35 transition duration-300 cursor-pointer ">
                <div className="flex justify-between items-center mb-4">
                  <FaGraduationCap className="text-[#318160]/80 text-4xl" />

                  <span className="text-[0.70rem] font-light px-3 py-1 rounded-full bg-green-100 text-green-700">
                    مستمر
                  </span>
                </div>

                <h3 className="font-semibold mb-4 text-lg text-[#07000B]">
                  التعليم
                </h3>

                <p className="leading-relaxed text-sm text-gray-600 ">
                  تطوير المدارس وتحسين جودة العملية التعليمية ودعم الطلاب غير
                  القادرين.
                </p>

                <Link
                  to="/axes/education"
                  className="mt-6 inline-flex items-center gap-1 text-sm text-[#318160]
                   bg-[#318160]/5 px-3 py-1.5 rounded-lg
                     border border-[#318160]/40
                   hover:bg-[#318160]/10 hover:-translate-y-0.5
                    transition"
                >
                  اعرف المزيد
                  <span>←</span>
                </Link>
              </div>

              <div className=" rounded-2xl p-6 border border-[#318160]/30 hover:shadow-md shadow-sm shadow-[#318160]/35 transition duration-300 cursor-pointer ">
                <div className="flex justify-between items-center mb-4">
                  <FaHandsHelping className="text-[#318160]/80 text-4xl" />

                  <span className="text-[0.70rem] font-light px-3 py-1 rounded-full bg-green-100 text-green-700">
                    مستمر
                  </span>
                </div>

                <h3 className="font-semibold mb-4 text-lg text-[#07000B]">
                  الحماية الاجتماعية
                </h3>

                <p className="leading-relaxed text-sm text-gray-600 ">
                  دعم الأسر الأولى بالرعاية وتوفير مظلة حماية اجتماعية تضمن حياة
                  كريمة.
                </p>

                <Link
                  to="/axes/social-protection"
                  className="mt-6 inline-flex items-center gap-1 text-sm text-[#318160]
                   bg-[#318160]/5 px-3 py-1.5 rounded-lg
                     border border-[#318160]/40
                   hover:bg-[#318160]/10 hover:-translate-y-0.5
                    transition"
                >
                  اعرف المزيد
                  <span>←</span>
                </Link>
              </div>

              <div className=" rounded-2xl p-6 border border-[#318160]/30 hover:shadow-md shadow-sm shadow-[#318160]/35 transition duration-300 cursor-pointer ">
                <div className="flex justify-between items-center mb-4">
                  <FaBriefcase className="text-[#318160]/80 text-4xl" />

                  <span className="text-[0.70rem] font-light px-3 py-1 rounded-full bg-green-100 text-green-700">
                    مكتمل 90%
                  </span>
                </div>

                <h3 className="font-semibold mb-4 text-lg text-[#07000B]">
                  التمكين الاقتصادي
                </h3>

                <p className="leading-relaxed text-sm text-gray-600 ">
                  توفير فرص عمل ودعم المشروعات الصغيرة لتحقيق دخل مستدام للأسر.
                </p>

                <Link
                  to="/axes/economic-empowerment"
                  className="mt-6 inline-flex items-center gap-1 text-sm text-[#318160]
                   bg-[#318160]/5 px-3 py-1.5 rounded-lg
                     border border-[#318160]/40
                   hover:bg-[#318160]/10 hover:-translate-y-0.5
                    transition"
                >
                  اعرف المزيد
                  <span>←</span>
                </Link>
              </div>

              <div className=" rounded-2xl p-6 border border-[#318160]/30 hover:shadow-md shadow-sm shadow-[#318160]/35 transition duration-300 cursor-pointer ">
                <div className="flex justify-between items-center mb-4">
                  <MdEco className="text-[#318160]/80 text-4xl" />

                  <span className="text-[0.70rem] font-light px-3 py-1 rounded-full bg-green-100 text-green-700">
                    جاري التنفيذ
                  </span>
                </div>

                <h3 className="font-semibold mb-4 text-lg text-[#07000B]">
                  التنمية المستدامة
                </h3>

                <p className="leading-relaxed text-sm text-gray-600 ">
                  الحفاظ على الموارد وتحقيق تنمية طويلة المدى تضمن حقوق الأجيال
                  القادمة.
                </p>

                <Link
                  to="/axes/sustainable-development"
                  className="mt-6 inline-flex items-center gap-1 text-sm text-[#318160]
                   bg-[#318160]/5 px-3 py-1.5 rounded-lg
                     border border-[#318160]/40
                   hover:bg-[#318160]/10 hover:-translate-y-0.5
                    transition"
                >
                  اعرف المزيد
                  <span>←</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
