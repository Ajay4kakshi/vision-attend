import { timetable } from "@/data/mockData";

const TimetablePage = () => {
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday"] as const;

  return (
    <div className="space-y-6">
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Time</th>
                {days.map((d) => (
                  <th key={d} className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3 capitalize">{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timetable.map((row, i) => (
                <tr key={i} className="border-b border-border/50">
                  <td className="px-5 py-3 text-sm font-medium text-primary whitespace-nowrap">{row.time}</td>
                  {days.map((d) => (
                    <td key={d} className="px-5 py-3 text-sm text-foreground">{row[d]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TimetablePage;
