import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { SlPeople } from "react-icons/sl";
import { PiHouseLine } from "react-icons/pi";
import { SiOpensourceinitiative } from "react-icons/si";
import { BsCalendarDate } from "react-icons/bs";
import SectionWrapper from "../Sectionwrapper/Sectionwrapper";

export default function AboutNumber() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
      <SectionWrapper>
        <section dir="rtl" className="" ref={ref}>
          <div className="relative bg-center bg-cover bg-[url('/Images/layout.webp')]">
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10">
              <h2 className="text-center text-3xl font-bold py-6 text-white mb-10">
                أرقام وإنجازات
              </h2>

              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 p-6 text-center">
                <div className="p-6 rounded-2xl shadow-md  text-white">
                  <div className="flex justify-center items-center mb-2">
                    <SlPeople className="text-2xl ml-2 text-[#6fc5a3d8]" />
                    <h3 className="text-2xl font-bold">
                      {inView && <CountUp end={30000000} duration={3} />}+
                    </h3>
                  </div>
                  <p className="leading-relaxed text-center text-lg font-light">
                    مستفيد
                  </p>
                </div>

                <div className="p-6 rounded-2xl shadow-md text-white">
                  <div className="flex justify-center items-center mb-2">
                    <PiHouseLine className="text-2xl ml-2 text-[#6fc5a3d8]" />
                    <h3 className="text-2xl font-bold">
                      {inView && (
                        <CountUp end={4500} duration={3} separator="," />
                      )}
                      +
                    </h3>
                  </div>
                  <p className="leading-relaxed text-center text-lg font-light">
                    قرية
                  </p>
                </div>

                <div className="p-6 rounded-2xl shadow-md text-white">
                  <div className="flex justify-center items-center mb-2">
                    <SiOpensourceinitiative className="text-2xl ml-2 text-[#6fc5a3d8]" />
                    <h3 className="text-2xl font-bold">
                      {inView && (
                        <CountUp end={100000} duration={3} separator="," />
                      )}
                      +
                    </h3>
                  </div>
                  <p className="leading-relaxed text-center text-lg font-light">
                    مبادرة
                  </p>
                </div>

                <div className="p-6 rounded-2xl shadow-md text-white">
                  <div className="flex justify-center items-center mb-2">
                    <BsCalendarDate className="text-2xl ml-2 text-[#6fc5a3d8]" />
                    <h3 className="text-2xl font-bold">2019</h3>
                  </div>
                  <p className="leading-relaxed text-center text-lg font-light">
                    سنة التأسيس
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
