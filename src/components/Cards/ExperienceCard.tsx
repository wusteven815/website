import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import Chip from "../Chip/Chip";
import Image from "next/image";

interface ExperienceCardProps {
  children?: React.ReactNode | React.ReactNode[];
  company: string;
  location: string;
  logoUrl: string;
  noMarginBottom?: boolean;
  role: string;
  times: string[];
}

export default function ExperienceCard({
  children,
  company,
  location,
  logoUrl,
  noMarginBottom,
  role,
  times,
}: ExperienceCardProps) {
  const { ref: logoRef, isVisible: isLogoVisible } = useIntersectionObserver();
  const { ref: detailsRef, isVisible: isDetailsVisible } = useIntersectionObserver();

  const isVisible = isLogoVisible || isDetailsVisible;

  return (
    <>
      <div className="flex flex-col items-center row-span-2 gridlg:row-span-1">
        <div className="w-6 h-6 rounded-full border-4 border-sky-400" />
        <div className="w-1 flex-1 bg-sky-500 min-h-8" />
      </div>

      <div
        className={`flex motion-safe:transition-all motion-safe:duration-500 justify-center mb-2
          ${!isVisible && "motion-safe:opacity-0 motion-safe:translate-x-16"}`}
        ref={logoRef}
      >
        <div>
          <Image src={logoUrl} alt={company} width={144} height={144} className="rounded-xl" />
        </div>
      </div>

      <div
        className={`motion-safe:transition-all motion-safe:duration-500 motion-safe:delay-100
          ${!isVisible && "motion-safe:opacity-0 motion-safe:translate-x-16"} ${!noMarginBottom && "mb-16"}`}
        ref={detailsRef}
      >
        <div className="flex flex-wrap font-bold text-xl mb-1">
          <h2 className="mr-1">{role}</h2>
          <h2 className="uppercase text-sky-400">{`@ ${company}`}</h2>
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-y-1 mb-3">
          <h3 className="italic font-medium text-neutral-300">{location}</h3>
          <div className="flex flex-wrap items-center gap-2">
            {times.map((time) => (
              <Chip name={time} className="bg-stone-600 text-neutral-200" key={time} />
            ))}
          </div>
        </div>
        {children}
      </div>
    </>
  );
}
