// @flow strict
import Image from "next/image";

import { achievements } from "@/utils/data/educations";
import { FaMedal, FaTrophy } from "react-icons/fa";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import lottieFile from "/public/lottie/development.json";

function Achievements() {
  return (
    <div
      id="achievements"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] reveal-on-scroll"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 pointer-events-none"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md uppercase tracking-wider font-semibold">
            Achievements
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4 max-w-[480px]">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {achievements.map((item) => (
                <GlowCard key={item.id} identifier={`achievement-${item.id}`}>
                  <div className="p-4 sm:p-5 relative text-white">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80 pointer-events-none"
                    />

                    {/* Top Highlights Row */}
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-xs sm:text-sm text-[#16f2b3] font-mono font-medium">
                        {item.year}
                      </p>
                      <span className="text-[11px] font-semibold text-[#16f2b3] bg-[#16f2b3]/10 px-2.5 py-0.5 rounded-full border border-[#16f2b3]/30">
                        {item.highlight}
                      </span>
                    </div>

                    <div className="flex items-start gap-x-4 sm:gap-x-6 py-2">
                      <div className="text-violet-400 p-2.5 rounded-xl bg-violet-950/50 border border-violet-800/30 flex-shrink-0 mt-1 transition-all duration-300 hover:scale-110">
                        {item.icon === "trophy" ? (
                          <FaTrophy size={28} className="text-amber-400" />
                        ) : (
                          <FaMedal size={28} className="text-violet-400" />
                        )}
                      </div>

                      <div className="flex-1">
                        <p className="text-base sm:text-xl font-bold uppercase tracking-wide text-white mb-1">
                          {item.title}
                        </p>

                        <div className="flex flex-wrap items-center gap-x-2 text-xs sm:text-sm text-gray-300">
                          <span className="font-medium text-white">
                            {item.event}
                          </span>
                          {item.organization && (
                            <>
                              <span>·</span>
                              <span>{item.organization}</span>
                            </>
                          )}
                          {item.team && (
                            <>
                              <span>·</span>
                              <span className="text-pink-300 font-medium">
                                {item.team}
                              </span>
                            </>
                          )}
                        </div>

                        {item.project && (
                          <p className="text-xs sm:text-sm text-gray-400 mt-1.5">
                            Project:{" "}
                            <span className="text-violet-300 font-semibold">
                              {item.project}
                            </span>
                          </p>
                        )}

                        <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="mt-2.5">
                          <span className="text-xs text-[#16f2b3] font-medium inline-flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#16f2b3]"></span>
                            {item.recognition}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;