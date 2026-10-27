// @flow strict

import Image from 'next/image';
import * as React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full h-full transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/60 hover:shadow-[0_10px_25px_-5px_rgba(139,92,246,0.2),0_0_15px_rgba(139,92,246,0.15)]">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      {project.image && (
        <div className="relative">
          <Image
            src={project.image}
            alt={project.name}
            width={800}
            height={400}
            className="w-full h-48 object-cover rounded-t-md"
            priority={true}
          />
          {project.id === 4 && (
            <div className="pointer-events-none absolute inset-0 rounded-t-md bg-gradient-to-br from-[#1a1443]/35 via-transparent to-[#16f2b3]/10 mix-blend-color" />
          )}
        </div>
      )}
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>

          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">&apos;</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">&apos;,</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">tools:</span>
            <span className="text-gray-400">[</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-amber-300">&apos;{tag}&apos;</span>
                  {i < project.tools.length - 1 && <span className="text-gray-400">, </span>}
                </React.Fragment>
              ))
            }
            <span className="text-gray-400">],</span>
          </div>

          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
            <span className="text-orange-400">&apos;{project.role}&apos;</span>
            <span className="text-gray-400">,</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">description:</span>
            <span className="text-cyan-400">&quot;{project.description}&quot;</span>
            <span className="text-gray-400">,</span>
          </div>

          <div><span className="text-gray-400">{'};'}</span></div>
        </code>
      </div>

      {/* Buttons Section */}
      {(project.code || project.demo) && (
        <div className="flex justify-center gap-4 px-4 lg:px-8 pb-6">
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-[#1f2937] text-white border border-pink-500 hover:bg-pink-600 transition-all"
            >
              View Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-[#1f2937] text-white border border-green-500 hover:bg-green-600 transition-all"
            >
              Live Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
