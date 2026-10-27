// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative reveal-on-scroll">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Column: Intro + Compact Education Card */}
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase tracking-wider">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-base leading-relaxed">
            {personalData.description}
          </p>

          {/* Compact Education Card */}
          <div className="mt-6 p-4 sm:p-5 rounded-xl border border-[#2d285c] bg-gradient-to-br from-[#101229] via-[#121430] to-[#16183a] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/60 hover:shadow-[0_10px_25px_-5px_rgba(139,92,246,0.2),0_0_15px_rgba(139,92,246,0.15)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-violet-950/60 border border-violet-800/40 text-violet-400 mt-0.5 flex-shrink-0">
                  <FaGraduationCap size={22} />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-violet-400 bg-violet-950/40 px-2.5 py-0.5 rounded-full border border-violet-800/30">
                    Third Year
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white mt-1">
                    B.Tech in Computer Engineering
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300">
                    MIT Academy of Engineering (MITAOE), Pune
                  </p>
                </div>
              </div>

              {/* CGPA Display */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 sm:border-l border-[#272b54] pt-3 sm:pt-0 sm:pl-5 flex-shrink-0">
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">
                  Current CGPA
                </span>
                <div className="text-lg sm:text-xl font-bold text-[#16f2b3] flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-black text-white">8.88</span>
                  <span className="text-xs text-gray-400 font-normal">/ 10</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Photo */}
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={320}
            height={320}
            alt={personalData.name}
            className="rounded-xl transition-transform duration-1000 hover:scale-105 cursor-pointer shadow-xl border border-[#232752]"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;