import {
  SiCplusplus,
  SiDjango,
  SiFlask,
  SiGithubactions,
  SiJavascript,
  SiKeras,
  SiMongodb,
  SiNextdotjs,
  SiOpenai,
  SiOpencv,
  SiPlaywright,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiRedux,
  SiScikitlearn,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import Chip from "./Chip";
import { FaJava } from "react-icons/fa6";

export const CppCard = () => (
  <Chip name="C++" icon={<SiCplusplus className="w-3 h-3" />} className="bg-[#00599C] text-white" />
);

export const DjangoCard = () => (
  <Chip name="Django" icon={<SiDjango className="w-3 h-3" />} className="bg-[#092E20] text-white" />
);

export const FlaskCard = () => (
  <Chip name="Flask" icon={<SiFlask className="w-3 h-3" />} className="bg-black text-white" />
);

export const GitHubActionsCard = () => (
  <Chip
    name="GitHub Actions"
    icon={<SiGithubactions className="w-3 h-3" />}
    className="bg-[#2088FF] text-white"
  />
);

export const JavaCard = () => (
  <Chip name="Java" icon={<FaJava className="w-3 h-3" />} className="bg-[#F80000] text-white" />
);

export const JavaScriptCard = () => (
  <Chip
    name="JavaScript"
    icon={<SiJavascript className="w-3 h-3" />}
    className="text-[#F7DF1E] bg-black"
  />
);

export const KerasCard = () => (
  <Chip name="Keras" icon={<SiKeras className="w-3 h-3" />} className="bg-[#D00000] text-white" />
);

export const MongoDBCard = () => (
  <Chip
    name="MongoDB"
    icon={<SiMongodb className="w-3 h-3" />}
    className="text-[#47A248] bg-black"
  />
);

export const NextJsCard = () => (
  <Chip name="Next.js" icon={<SiNextdotjs className="w-3 h-3" />} className="bg-black text-white" />
);

export const OpenAICard = () => (
  <Chip name="OpenAI" icon={<SiOpenai className="w-3 h-3" />} className="bg-[#412991] text-white" />
);

export const OpenCvCard = () => (
  <Chip name="OpenCV" icon={<SiOpencv className="w-3 h-3" />} className="bg-[#5C3EE8] text-white" />
);

export const PlaywrightCard = () => (
  <Chip
    name="Playwright"
    icon={<SiPlaywright className="w-3 h-3" />}
    className="text-[#45BA4B] bg-black"
  />
);

export const PostgreSQLCard = () => (
  <Chip
    name="PostgreSQL"
    icon={<SiPostgresql className="w-3 h-3" />}
    className="bg-[#4169E1] text-white"
  />
);

export const PythonCard = () => (
  <Chip name="Python" icon={<SiPython className="w-3 h-3" />} className="bg-[#3776AB] text-white" />
);

export const ReactCard = () => (
  <Chip name="React" icon={<SiReact className="w-3 h-3" />} className="text-[#61DAFB] bg-black" />
);

export const ReactNativeCard = () => (
  <Chip
    name="React Native"
    icon={<SiReact className="w-3 h-3" />}
    className="text-[#61DAFB] bg-black"
  />
);

export const RedisCard = () => (
  <Chip name="Redis" icon={<SiRedis className="w-3 h-3" />} className="bg-[#FF4438] text-white" />
);

export const ReduxCard = () => (
  <Chip name="Redux" icon={<SiRedux className="w-3 h-3" />} className="bg-[#764ABC] text-white" />
);

export const ScikitLearnCard = () => (
  <Chip
    name="scikit-learn"
    icon={<SiScikitlearn className="w-3 h-3" />}
    className="text-[#F7931E] bg-black"
  />
);

export const TensorflowCard = () => (
  <Chip
    name="Tensorflow"
    icon={<SiTensorflow className="w-3 h-3" />}
    className="text-[#FF6F00] bg-black"
  />
);

export const TurborepoCard = () => (
  <Chip
    name="Turborepo"
    icon={<SiRedis className="w-3 h-3" />}
    className="bg-[#EF4444] text-white"
  />
);

export const TypeScriptCard = () => (
  <Chip
    name="TypeScript"
    icon={<SiTypescript className="w-3 h-3" />}
    className="bg-[#3178C6] text-white"
  />
);
