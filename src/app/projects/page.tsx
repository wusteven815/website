"use client";

import {
  Block2DiscordCard,
  ChessCard,
  FIRSTRoboticsCard,
  GPTGeorgeCard,
  MotiSpectraCard,
  NarratorRLCard,
  QuizCasterCard,
  ReviewRecapCard,
  WLP4CompilerCard,
} from "@/components/Cards/Common";
import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa6";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-neutral-400">Loading...</div>}>
      <ProjectsPageContent />
    </Suspense>
  );
}

function ProjectsPageContent() {
  const searchParams = useSearchParams();
  const filterMap = [
    { key: "ALL", param: null },
    { key: "PYTHON", param: "python" },
    { key: "JS/TS", param: "js" },
    { key: "C++", param: "cpp" },
    { key: "HACKATHON", param: "hackathon" },
  ];

  const getQueryForFilter = (param: string | null) => {
    if (!param) return "/projects";
    const params = new URLSearchParams();
    params.set("filter", param);
    return `?${params.toString()}`;
  };

  const filterParam = searchParams.get("filter");
  const filter = filterMap.find((f) => f.param === filterParam)?.key || "ALL";

  return (
    <div className="px-6 py-8 lg:p-16">
      <div className="flex items-center justify-center lg:justify-start mb-4 gap-x-3 relative lg:static">
        <Link
          href="/"
          className="absolute lg:static left-0 h-10 w-10 flex items-center justify-center 
            bg-stone-700 hover:bg-sky-800 transition-colors duration-300 rounded-full"
          aria-label="Back to home"
        >
          <FaChevronLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-4xl lg:text-5xl font-bold text-neutral-100 text-center lg:text-start">
          PROJECTS
        </h1>
      </div>

      <div className="flex flex-wrap mb-6 lg:mb-8 gap-x-4 lg:gap-x-6 gap-y-2 justify-center lg:justify-start">
        {filterMap.map((item) => (
          <Link
            href={getQueryForFilter(item.param)}
            key={item.key}
            scroll={false}
            className={`transition-colors duration-200 font-medium${filter === item.key ? " text-sky-400" : ""}`}
            aria-current={filter === item.key ? "page" : undefined}
          >
            {item.key}
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-auto400">
        {["ALL", "PYTHON", "JS/TS", "HACKATHON"].includes(filter) && <MotiSpectraCard noAnim />}
        {["ALL", "PYTHON", "JS/TS", "HACKATHON"].includes(filter) && <NarratorRLCard noAnim />}
        {["ALL", "PYTHON", "JS/TS", "HACKATHON"].includes(filter) && <ReviewRecapCard noAnim />}
        {["ALL", "C++"].includes(filter) && <FIRSTRoboticsCard noAnim />}
        {["ALL", "C++"].includes(filter) && <WLP4CompilerCard noAnim />}
        {["ALL", "PYTHON", "HACKATHON"].includes(filter) && <Block2DiscordCard noAnim />}
        {["ALL", "PYTHON", "HACKATHON"].includes(filter) && <GPTGeorgeCard noAnim />}
        {["ALL", "PYTHON", "JS/TS", "HACKATHON"].includes(filter) && <QuizCasterCard noAnim />}
        {["ALL", "C++"].includes(filter) && <ChessCard noAnim />}
      </div>
    </div>
  );
}
