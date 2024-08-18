import { SiDevpost, SiGithub, SiLinkedin } from "react-icons/si";
import TypingWords from "@/components/TypingWords";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center lg:items-start w-3/4 max-w-[700px] z-20">
      <h1 className="font-black text-5xl lg:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-100">
        Steven Wu
      </h1>

      <h2 className="font-light text-2xl lg:text-3xl lg:ml-1 text-center text-neutral-50">
        <TypingWords
          words={["Developing", "Learning", "Creating"]}
          className="text-sky-400"
          wordCycles={60}
        />
        {" the future"}
      </h2>

      <div className="mt-4 flex space-x-2">
        {[
          { name: "github", icon: SiGithub, link: "https://github.com/wusteven815" },
          { name: "devpost", icon: SiDevpost, link: "https://devpost.com/wusteven815" },
          {
            name: "linkedin",
            icon: SiLinkedin,
            link: "https://www.linkedin.com/in/wusteven815",
          },
        ].map((iconButton) => (
          <Link
            type="button"
            aria-label={iconButton.name}
            href={iconButton.link}
            className="text-neutral-100 hover:text-sky-400 transition-colors duration-200"
            key={iconButton.name}
          >
            <iconButton.icon className="w-8 h-8 lg:w-10 lg:h-10" />
          </Link>
        ))}
      </div>
    </div>
  );
}
