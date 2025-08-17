import ExperienceCard from "@/components/Cards/ExperienceCard";
import {
  DatadogCard,
  FlaskCard,
  GitHubActionsCard,
  JavaCard,
  NextJsCard,
  PlaywrightCard,
  PostgreSQLCard,
  PythonCard,
  ReactCard,
  ReactNativeCard,
  RedisCard,
  ReduxCard,
  SnowflakeCard,
  TurborepoCard,
  TypeScriptCard,
} from "../Chip/Common";

export default function Experience() {
  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="text-3xl lg:text-4xl font-bold text-neutral-100 mb-6">EXPERIENCE</h1>
      <div className="grid grid-cols-experience gridlg:grid-cols-experienceLg w-full gap-x-6 lg:gap-x-8">
        <ExperienceCard
          company="Super.com"
          logoUrl="/logos/super.png"
          location="Toronto, Canada"
          times={["May 2025 - Aug 2025"]}
          role="Software Engineering Co-op"
        >
          <ul>
            <li>
              Integrated <b>risk assessment</b> check to cash advance product, <b>reducing</b>{" "}
              failed repayments caused by <b>fraudulent</b> users by <b>94%</b>
            </li>
            <li>
              Engineered bank account balance analysis, <b>improving</b> new user repayments by{" "}
              <b>19%</b>
            </li>
            <li>
              Constructed new user off-boarding process, <b>increasing</b> removal of high-risk
              users by <b>200%</b>
            </li>
            <li>
              Ensured full <b>compliance</b> with financial <b>regulations</b> while developing cash
              advance product
            </li>
          </ul>
          <div className="flex flex-wrap gap-1 mt-4">
            <PythonCard />
            <TypeScriptCard />
            <ReactCard />
            <FlaskCard />
            <PostgreSQLCard />
            <DatadogCard />
            <SnowflakeCard />
          </div>
        </ExperienceCard>

        <ExperienceCard
          company="Deephaven Data Labs"
          logoUrl="/logos/deephaven.png"
          location="New York, USA"
          times={["Jan 2024 - Apr 2024", "Sep 2024 - Dec 2024"]}
          role="Software Engineering Co-op"
        >
          <ul>
            <li>
              Developed Python package for <b>rapidly calculating JSON tree diffs</b>, with over{" "}
              <b>4.7k downloads</b> per month on{" "}
              <a href="https://pypi.org/project/pyjsonpatch/" className="text-sky-400 underline">
                PyPI
              </a>
            </li>
            <li>
              Re-engineered CI/CD pipeline to <b>parallelize end-to-end tests</b>, <b>reducing</b>{" "}
              runtime by over <b>75%</b>
            </li>
            <li>
              Built <b>gRPC</b> API endpoints, algorithms, and components capable of{" "}
              <b>efficiently handling billions of data points</b>, used by <b>Fortune 500</b>{" "}
              companies
            </li>
          </ul>
          <div className="flex flex-wrap gap-1 mt-4">
            <PythonCard />
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
          role="Full-Stack Web Developer Co-op"
          noMarginBottom
        >
          <ul>
            <li>
              Re-architected messaging platform using <b> websockets</b>, <b>reducing latency</b> by
              over <b>93%</b>,
            </li>
            <li>
              Developed <b>responsive</b> forms and pages with <b>Redis</b> and <b>PostgreSQL</b>
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
