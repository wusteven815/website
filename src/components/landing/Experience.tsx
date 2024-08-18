import ExperienceCard from "@/components/Cards/ExperienceCard";
import {
  GitHubActionsCard,
  JavaCard,
  NextJsCard,
  PlaywrightCard,
  PostgreSQLCard,
  ReactCard,
  ReactNativeCard,
  RedisCard,
  ReduxCard,
  TurborepoCard,
  TypeScriptCard,
} from "../Chip/Common";

export default function Experience() {
  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="text-3xl lg:text-4xl font-bold text-neutral-100 mb-6">EXPERIENCE</h1>
      <div className="grid grid-cols-experience gridlg:grid-cols-experienceLg w-full gap-x-6 lg:gap-x-8">
        <ExperienceCard
          company="Deephaven Data Labs"
          logoUrl="/logos/deephaven.png"
          location="New York, USA"
          times={["Jan 2024 - Apr 2024", "Sep 2024 - Dec 2024"]}
          role="Software Engineering"
        >
          <ul>
            <li>
              Engineered features in Java capable of <b>efficiently handling billions</b> of data
              points
            </li>
            <li>
              Developed components with TypeScript and <b>Redux</b> used by <b>Fortune 500</b>{" "}
              companies
            </li>
            <li>
              Optimized <b>GitHub Actions CI </b>end-to-end tests to shorten runtime by over
              <b> 75%</b> by modifying tests to be capable of running concurrently
            </li>
          </ul>
          <div className="flex flex-wrap gap-1 mt-4">
            <TypeScriptCard />
            <ReactCard />
            <ReduxCard />
            <PlaywrightCard />
            <JavaCard />
            <GitHubActionsCard />
          </div>
        </ExperienceCard>

        <ExperienceCard
          company="DocTalk"
          logoUrl="/logos/doctalk.png"
          location="Toronto, Canada"
          times={["May 2023 - Aug 2023"]}
          role="Full-Stack Web Developer"
          noMarginBottom
        >
          <ul>
            <li>
              Re-architected messaging platform to reduce response times by over <b>93%</b>, using
              <b> websockets</b>
            </li>
            <li>
              Developed <b>responsive</b> forms and pages with <b>REST</b> APIs with <b>Redis</b>{" "}
              and <b>PostgreSQL</b>
            </li>
            <li>
              Migrated web and mobile repositories into a single monorepo, allowing for easier code
              sharing
            </li>
            <li>
              Implemented Bash and Python scripts to <b>improve developer QOL</b> and{" "}
              <b>automate</b> tasks
            </li>
          </ul>
          <div className="flex flex-wrap gap-1 mt-4">
            <TypeScriptCard />
            <ReactCard />
            <ReactNativeCard />
            <NextJsCard />
            <PostgreSQLCard />
            <RedisCard />
            <TurborepoCard />
          </div>
        </ExperienceCard>
      </div>
    </div>
  );
}
