import IconCard from "@/components/Chip/Chip";
import ProjectCard from "@/components/Cards/ProjectCard";
import { FaCheck, FaCrown } from "react-icons/fa6";
import {
  CppCard,
  DjangoCard,
  FlaskCard,
  JavaScriptCard,
  KerasCard,
  MongoDBCard,
  NextJsCard,
  OpenAICard,
  OpenCvCard,
  PythonCard,
  ReactCard,
  ReactNativeCard,
  ScikitLearnCard,
  TensorflowCard,
  TypeScriptCard,
} from "@/components/Chip/Common";

interface CommonCardProps {
  className?: string;
  noAnim?: boolean;
}

export function MotiSpectraCard({ className, noAnim }: CommonCardProps) {
  return (
    <ProjectCard
      name="MotiSpectra"
      github="https://github.com/wusteven815/MotiSpectra"
      devpost="https://devpost.com/software/motispectra"
      noAnim={noAnim}
      className={className}
    >
      <ul className="flex-1">
        <li>Developed tool to assess listener engagement in online meetings</li>
        <li>
          Trained custom <b>convolutional neural networks</b> to analyze attention and emotion
        </li>
      </ul>
      <div className="flex flex-wrap gap-1 mt-5">
        <IconCard
          name="ConUHacks VIII: 2nd"
          icon={<FaCrown className="w-3 h-3 text-white" />}
          className="bg-yellow-700"
        />
        <PythonCard />
        <OpenCvCard />
        <TensorflowCard />
        <KerasCard />
        <FlaskCard />
        <TypeScriptCard />
        <NextJsCard />
        <ReactCard />
      </div>
    </ProjectCard>
  );
}

export function NarratorRLCard({ className, noAnim }: CommonCardProps) {
  return (
    <ProjectCard
      name="narratorRL"
      github="https://github.com/wusteven815/narratorRL"
      devpost="https://devpost.com/software/narratorrl"
      noAnim={noAnim}
      className={className}
    >
      <ul className="flex-1">
        <li>
          Created mobile app with <b>optical character recognition</b> to perform image-to-speech
          for the visually impaired
        </li>
        <li>Included LLM to summarize ouput, detect language, and find key points</li>
      </ul>
      <div className="flex flex-wrap gap-1 mt-5">
        <IconCard
          name="MetHacks: Cohere Challenge 1st"
          icon={<FaCrown className="w-3 h-3 text-white" />}
          className="bg-yellow-700"
        />
        <IconCard
          name="MetHacks: 2nd"
          icon={<FaCrown className="w-3 h-3 text-white" />}
          className="bg-yellow-700"
        />
        <JavaScriptCard />
        <ReactNativeCard />
        <PythonCard />
        <DjangoCard />
      </div>
    </ProjectCard>
  );
}

export function ReviewRecapCard({ className, noAnim }: CommonCardProps) {
  return (
    <ProjectCard
      name="Review Recap"
      github="https://github.com/wusteven815/ReviewRecap"
      devpost="https://devpost.com/software/bob-gj5h29"
      noAnim={noAnim}
      className={className}
    >
      <ul className="flex-1">
        <li>Made a Chrome extension that parses Amazon reviews to generate a summary</li>
        <li>
          Stored and cached results in a <b>RESTful</b> Django backend
        </li>
      </ul>
      <div className="flex flex-wrap gap-1 mt-5">
        <IconCard
          name="uOttaHack 5: Noibu Challenge 1st"
          icon={<FaCrown className="w-3 h-3 text-white" />}
          className="bg-yellow-700"
        />
        <JavaScriptCard />
        <PythonCard />
        <DjangoCard />
      </div>
    </ProjectCard>
  );
}

export function WLP4CompilerCard({ className, noAnim }: CommonCardProps) {
  return (
    <ProjectCard name="WLP4 Compiler" noAnim={noAnim} className={className}>
      <ul className="flex-1">
        <li>Built compiler from WLP4 (custom subset of C++) to MIPS (RISC machine code)</li>
        <li>
          1st place in bonus optimization challenge with <b>18% better score</b> than 2nd place
        </li>
      </ul>
      <div className="flex flex-wrap gap-1 mt-5">
        <CppCard />
      </div>
    </ProjectCard>
  );
}

export function FIRSTRoboticsCard({ className, noAnim }: CommonCardProps) {
  return (
    <ProjectCard
      name="FIRST Robotics"
      github="https://github.com/roboticsmgci/2022-robot"
      noAnim={noAnim}
      className={className}
    >
      <ul className="flex-1">
        <li>
          Led software team and won Ontario Rookie All-Star Team, progressed to{" "}
          <b>Texas World Championships</b>
        </li>
        <li>
          Developed C++ <b>autonomous robotics</b> code using real-time sensors and motor control
        </li>
      </ul>
      <div className="flex flex-wrap gap-1 mt-5">
        <CppCard />
      </div>
    </ProjectCard>
  );
}

export function Block2DiscordCard({ className, noAnim }: CommonCardProps) {
  return (
    <ProjectCard
      name="block2discord"
      github="https://github.com/wusteven815/block2discord"
      devpost="https://devpost.com/software/block2discord"
      noAnim={noAnim}
      className={className}
    >
      <ul className="flex-1">
        <li>
          Created an app to write Discord bot code with block code and then translates it to Python
        </li>
      </ul>
      <div className="flex flex-wrap gap-1 mt-5">
        <IconCard
          name="DeerHacks 2023: 2nd"
          icon={<FaCrown className="w-3 h-3 text-white" />}
          className="bg-yellow-700"
        />
        <PythonCard />
      </div>
    </ProjectCard>
  );
}

export function GPTGeorgeCard({ className, noAnim }: CommonCardProps) {
  return (
    <ProjectCard
      name="GPT George"
      github="https://github.com/wusteven815/gpt-george"
      devpost="https://devpost.com/software/gpt-george"
      noAnim={noAnim}
      className={className}
    >
      <ul className="flex-1">
        <li>Engineered a voice assistant with GPT-4 API</li>
        <li>Connected to various services such as Spotify, weather, email, math, and more</li>
      </ul>
      <div className="flex flex-wrap gap-1 mt-5">
        <IconCard name="UC Berkeley AI Hackathon" icon={<FaCheck />} className="bg-green-800" />
        <PythonCard />
        <OpenAICard />
      </div>
    </ProjectCard>
  );
}

export function QuizCasterCard({ className, noAnim }: CommonCardProps) {
  return (
    <ProjectCard
      name="QuizCaster"
      github="https://github.com/wusteven815/QuizCaster"
      devpost="https://devpost.com/software/quizcaster"
      noAnim={noAnim}
      className={className}
    >
      <ul className="flex-1">
        <li>
          Built a web app that generates quiz questions by parsing PDFs, websites, and YouTube
          videos
        </li>
        <li>
          Enhanced parsing with custom <b>Naive-Bayes model</b>
        </li>
      </ul>
      <div className="flex flex-wrap gap-1 mt-5">
        <IconCard name="Hack the 6ix 2023" icon={<FaCheck />} className="bg-green-800" />
        <PythonCard />
        <OpenAICard />
        <ScikitLearnCard />
        <TypeScriptCard />
        <NextJsCard />
        <ReactCard />
        <MongoDBCard />
      </div>
    </ProjectCard>
  );
}

export function ChessCard({ className, noAnim }: CommonCardProps) {
  return (
    <ProjectCard name="Chess in C++" noAnim={noAnim} className={className}>
      <ul className="flex-1">
        <li>Created chess using OOP and memory safe principles</li>
      </ul>
      <div className="flex flex-wrap gap-1 mt-5">
        <CppCard />
      </div>
    </ProjectCard>
  );
}
