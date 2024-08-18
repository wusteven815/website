"use client";

import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";
import { SiDevpost, SiGithub } from "react-icons/si";

interface ProjectCardProps {
  children?: ReactNode | ReactNode[];
  className?: string;
  devpost?: string;
  github?: string;
  name: string;
  noAnim?: boolean;
}

export default function ProjectCard({
  children,
  className,
  devpost,
  github,
  name,
  noAnim,
}: ProjectCardProps) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      className={`flex flex-col bg-stone-900 border border-stone-900 hover:border-neutral-500 rounded-xl p-6
        group motion-safe:transition-all motion-safe:duration-500
        ${!noAnim && !isVisible && "motion-safe:opacity-0 motion-safe:translate-y-12"} ${className}`}
      ref={ref}
    >
      <div className="flex items-center gap-x-2">
        <h2 className="flex-1 font-bold text-xl">{name}</h2>
        {github !== undefined && (
          <Link
            href={github}
            className="text-neutral-400 group-hover:text-neutral-100"
            aria-label="GitHub"
          >
            <SiGithub className="h-7 w-7 hover:text-sky-400 transition-colors duration-300" />
          </Link>
        )}
        {devpost !== undefined && (
          <Link
            href={devpost}
            className="text-neutral-400 group-hover:text-neutral-100"
            aria-label="Devpost"
          >
            <SiDevpost className="h-7 w-7 hover:text-sky-400 transition-colors duration-300" />
          </Link>
        )}
      </div>
      <div className="h-0.5 bg-sky-800 my-3" />
      {children}
    </div>
  );
}
