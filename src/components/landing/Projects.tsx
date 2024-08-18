"use client";

import {
  FIRSTRoboticsCard,
  MotiSpectraCard,
  NarratorRLCard,
  ReviewRecapCard,
} from "@/components/Cards/Common";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Projects() {
  const { ref: loadMoreRef, isVisible: isMoreVisible } = useIntersectionObserver();

  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="text-3xl lg:text-4xl font-bold text-neutral-100 mb-6" id="Projects">
        PROJECTS
      </h1>
      <div className="w-full grid grid-cols-1 gridlg:grid-cols-2 gap-4">
        <MotiSpectraCard />
        <NarratorRLCard />
        <ReviewRecapCard />
        <FIRSTRoboticsCard />
      </div>
      <Link
        ref={loadMoreRef}
        href="/projects"
        className={`flex gap-2 items-center rounded-full mt-8 px-4 py-2 bg-sky-900 hover:bg-sky-800
          motion-safe:transition-all motion-safe:duration-500
          ${!isMoreVisible && "motion-safe:opacity-0 motion-safe:translate-y-1/2"}`}
      >
        <p>See more projects</p>
        <FaArrowUpRightFromSquare />
      </Link>
    </div>
  );
}
