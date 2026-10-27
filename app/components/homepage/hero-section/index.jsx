import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10 animate-subtle-pulse pointer-events-none"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        {/* Introduction */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10 animate-hero-intro">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello,
            <br />
            This is{" "}
            <span className="text-pink-500">
              {personalData.name}
            </span>
            {", I'm an Aspiring "}
            <span className="text-[#16f2b3]">
              Software Engineer
            </span>
            .
          </h1>

          {/* Social Links */}
          <div className="my-12 flex items-center gap-5">
            {personalData.github && (
              <Link
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <BsGithub size={30} />
              </Link>
            )}

            {personalData.linkedIn && (
              <Link
                href={personalData.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <BsLinkedin size={30} />
              </Link>
            )}

            {personalData.leetcode && (
              <Link
                href={personalData.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <SiLeetcode size={30} />
              </Link>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            {(personalData.resume || personalData.resumeUrl) && (
              <Link
                className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                target="_blank"
                rel="noopener noreferrer"
                href={personalData.resume || personalData.resumeUrl}
              >
                <span>Get Resume</span>
                <MdDownload size={16} />
              </Link>
            )}
          </div>
        </div>

        {/* Code Window */}
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] animate-hero-code transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600" />
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent" />
          </div>

          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-orange-400" />
              <div className="h-3 w-3 rounded-full bg-green-200" />
            </div>
          </div>

          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">developer</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{"{"}</span>
              </div>

              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  name:
                </span>
                <span className="text-gray-400">{"'"}</span>
                <span className="text-amber-300">
                  Sakshi Shewale
                </span>
                <span className="text-gray-400">{"',"}</span>
              </div>

              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  education:
                </span>
                <span className="text-gray-400">{"'"}</span>
                <span className="text-amber-300">
                  B.Tech Computer Engineering
                </span>
                <span className="text-gray-400">{"',"}</span>
              </div>

              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  college:
                </span>
                <span className="text-gray-400">{"'"}</span>
                <span className="text-amber-300">
                  MIT Academy of Engineering
                </span>
                <span className="text-gray-400">{"',"}</span>
              </div>

              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  interests:
                </span>
                <span className="text-gray-400">{"['"}</span>
                <span className="text-amber-300">
                  Software Development
                </span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">AI</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">
                  Cloud Computing
                </span>
                <span className="text-gray-400">{"'],"}</span>
              </div>

              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  currentlyLearning:
                </span>
                <span className="text-gray-400">{"'"}</span>
                <span className="text-amber-300">
                  Data Structures & Algorithms
                </span>
                <span className="text-gray-400">{"',"}</span>
              </div>

              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  mindset:
                </span>
                <span className="text-gray-400">{"'"}</span>
                <span className="text-amber-300">
                  Learn, Build, Improve
                </span>
                <span className="text-gray-400">{"',"}</span>
              </div>

              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">
                  openToInternships:
                </span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>

              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">
                  problemSolver:
                </span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>

              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">
                  growthMindset:
                </span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>

              <div>
                <span className="text-gray-400">{"};"}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;