import { site } from "@/lib/site";
import { Section } from "./section";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
type Api = { total?: Record<string, number>; contributions?: Day[] };

async function getContributions(): Promise<{ days: Day[]; total: number } | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${site.handle}?y=last`,
      { next: { revalidate: 60 * 60 * 24 }, signal: AbortSignal.timeout(5000) },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as Api;
    const days = data.contributions ?? [];
    if (!days.length) return null;
    const total = days.reduce((sum, d) => sum + d.count, 0);
    return { days, total };
  } catch {
    return null; // section simply hides if the API is unavailable
  }
}

const levels = [
  "bg-fg/[0.07]",                            // 0 contributions: neutral
  "bg-[#9be9a8] dark:bg-[#0e4429]",          // level 1
  "bg-[#40c463] dark:bg-[#006d32]",          // level 2
  "bg-[#30a14e] dark:bg-[#26a641]",          // level 3
  "bg-[#216e39] dark:bg-[#39d353]",          // level 4
] as const;

/** Server component: fetched and cached at the edge, zero client JS. */
export async function GithubGraph() {
  const data = await getContributions();
  if (!data) return null;

  // pad so the first column starts on the right weekday (Sunday = 0)
  const offset = new Date(data.days[0].date + "T00:00:00Z").getUTCDay();

  return (
    <Section
      id="activity"
      title="GitHub contributions"
      description={`${data.total.toLocaleString("en-US")} contributions in the past 12 months`}
      // dots
    >
      <div className="overflow-x-auto px-4 py-6 sm:px-6">
        <div
          role="img"
          aria-label={`GitHub contribution graph: ${data.total} contributions in the past year`}
          className="grid w-max grid-flow-col grid-rows-7 gap-[3px]"
        >
          {Array.from({ length: offset }, (_, i) => (
            <span key={`pad-${i}`} className="size-[10px]" />
          ))}
          {data.days.map((d) => (
            <span
              key={d.date}
              title={`${d.count} on ${d.date}`}
              className={`size-[10px] rounded-[2px] ${levels[d.level]}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
