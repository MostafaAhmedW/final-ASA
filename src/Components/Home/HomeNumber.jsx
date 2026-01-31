import React from "react";
import CountUp from "react-countup";
import { CiHeart, CiLocationOn } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";
import SectionWrapper from "../Sectionwrapper/Sectionwrapper";
export default function HomeNumber() {
  // count animation
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <>
      <SectionWrapper>
        <section className="" dir="rtl" ref={ref}>
          <div className="relative bg-center bg-cover bg-[url('/Images/layout.webp')]">
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-center text-3xl font-bold py-6 text-white mb-10">
                أرقام وإنجازات
              </h2>

              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10  p-6 text-center">
                <div className="p-6 rounded-2xl shadow-lg text-white">
                  <div className="flex justify-center items-center mb-2">
                    <CiLocationOn className="text-2xl ml-2 text-[#318160]" />
                    <h3 className="text-2xl font-bold">
                      {inView && <CountUp end={4500} duration={3} />}+
                    </h3>
                  </div>
                  <p className="leading-relaxed text-center text-lg font-light">
                    قرية مستفيدة
                  </p>
                </div>

                <div className="p-6 rounded-2xl shadow-lg text-white">
                  <div className="flex justify-center items-center mb-2">
                    <IoPeopleOutline className="text-2xl ml-2 text-[#318160]" />
                    <h3 className="text-2xl font-bold">
                      {inView && (
                        <CountUp end={58000000} duration={3} separator="," />
                      )}
                      +
                    </h3>
                  </div>
                  <p className="leading-relaxed text-center text-lg font-light">
                    مواطن
                  </p>
                </div>

                <div className="p-6 rounded-2xl shadow-lg text-white">
                  <div className="flex justify-center items-center mb-2">
                    <FaArrowTrendUp className="text-2xl ml-2 text-[#318160]" />
                    <h3 className="text-2xl font-bold">
                      {inView && (
                        <CountUp end={10000000} duration={3} separator="," />
                      )}
                      +
                    </h3>
                  </div>
                  <p className="leading-relaxed text-center text-lg font-light">
                    فرصة عمل
                  </p>
                </div>

                <div className="p-6 rounded-2xl shadow-lg text-white">
                  <div className="flex justify-center items-center mb-2">
                    <CiHeart className="text-2xl ml-2 text-[#318160]" />
                    <h3 className="text-2xl font-bold">
                      {inView && <CountUp end={100000} duration={3} />}+
                    </h3>
                  </div>
                  <p className="leading-relaxed text-center text-lg font-light">
                    مشروع خدمي
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
