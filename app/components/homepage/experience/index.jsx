"use client";

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLaptop, BsPersonWorkspace } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import experience from "/public/lottie/code.json";

function Experience() {
  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] reveal-on-scroll"
    >
      <Image
        src="/section.svg"
        alt=""
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-12 sm:w-24 h-[2px] bg-[#1a1443]" />
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-12 sm:w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="flex justify-center items-start lg:sticky lg:top-24">
            <div className="w-full max-w-[500px]">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {experiences.map((exp) => (
                <GlowCard
                  key={exp.id}
                  identifier={`experience-${exp.id}`}
                >
                  <div className="p-4 sm:p-5 relative text-white">
                    <Image
                      src="/blur-23.svg"
                      alt=""
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80 pointer-events-none"
                    />

                    <div className="relative z-10">
                      {/* Experience duration and company */}
                      <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                        <span className="text-xs sm:text-sm text-[#16f2b3] font-mono font-medium">
                          {exp.duration}
                        </span>

                        <span className="text-xs uppercase tracking-wider text-violet-400 font-semibold px-2.5 py-1 rounded-full bg-violet-950/40 border border-violet-800/40">
                          {exp.company}
                        </span>
                      </div>

                      {/* Role and description */}
                      <div className="flex items-start gap-3 sm:gap-4 py-2">
                        <div className="text-violet-400 p-2.5 rounded-xl bg-violet-950/50 border border-violet-800/30 flex-shrink-0 mt-1">
                          <BsPersonWorkspace size={26} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
                            {exp.title}
                          </h3>

                          <p className="text-sm font-semibold text-[#16f2b3] mt-1">
                            {exp.company}
                          </p>

                          <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      </div>

                      {/* Project overview */}
                      {exp.project && (
                        <div className="mt-4 pt-4 bg-gradient-to-b from-[#131533]/90 to-[#0e1026]/95 rounded-xl p-4 sm:p-5 border border-[#2b275c]/70 shadow-inner">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <BsLaptop className="text-violet-400 text-xl flex-shrink-0" />

                              <h4 className="text-base sm:text-lg font-bold text-white">
                                {exp.project.name}
                              </h4>
                            </div>

                            {exp.project.badge && (
                              <span className="text-[10px] uppercase tracking-wider font-semibold text-pink-300 bg-pink-950/40 px-2.5 py-1 rounded-full border border-pink-500/30">
                                {exp.project.badge}
                              </span>
                            )}
                          </div>

                          <p className="text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed">
                            {exp.project.overview}
                          </p>

                          {/* Project features */}
                          {exp.project.features?.length > 0 && (
                            <div className="mt-4">
                              <p className="text-[11px] font-semibold uppercase tracking-wider text-violet-300 mb-2">
                                Key Features
                              </p>

                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {exp.project.features.map((feature, index) => (
                                  <li
                                    key={`${feature}-${index}`}
                                    className="flex items-start gap-2 bg-[#10132d]/70 p-2.5 rounded-lg border border-[#23264d]/60 text-xs text-gray-300"
                                  >
                                    <FaCheckCircle
                                      className="text-[#16f2b3] mt-0.5 flex-shrink-0"
                                      size={12}
                                    />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Technology badges */}
                          {exp.project.technologies?.length > 0 && (
                            <div className="mt-4 pt-3 border-t border-[#1d2247]">
                              <p className="text-[11px] font-semibold uppercase tracking-wider text-violet-300 mb-2">
                                Tech Stack
                              </p>

                              <div className="flex flex-wrap gap-2">
                                {exp.project.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="bg-[#1a1443]/90 text-[#16f2b3] border border-[#372f6a] hover:border-[#16f2b3]/60 px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono font-medium transition-colors"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Project links */}
                          <div className="mt-4 pt-4 border-t border-[#1d2247] flex flex-wrap items-center gap-3">
                            {exp.project.github && (
                              <Link
                                href={exp.project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 border border-violet-400/40 transition-all duration-200"
                              >
                                <BsGithub size={15} />
                                GitHub Repository
                                <FiExternalLink size={12} />
                              </Link>
                            )}

                            {exp.project.liveDemo && (
                              <Link
                                href={exp.project.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 border border-pink-400/40 transition-all duration-200"
                              >
                                <FiExternalLink size={14} />
                                Live Demo
                              </Link>
                            )}
                          </div>
                        </div>
                      )}
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

export default Experience;