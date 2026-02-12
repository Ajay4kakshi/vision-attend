import { mockAttendanceRecords } from "@/data/mockData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ParentAttendance = () => {
  const year = 2026;
  const month = 1;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const getStatus = (day: number) => {
    const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return mockAttendanceRecords.find((r) => r.date === date)?.status;
  };

  const statusColor = {
    present: "bg-success text-success-foreground",
    absent: "bg-destructive text-destructive-foreground",
    scheduled: "bg-secondary text-muted-foreground",
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <button className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <h3 className="font-semibold text-foreground">Ajay Kumar — February 2026</h3>
          <button className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className="text-center text-xs font-medium text-muted-foreground py-1">{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: firstDay }).map((_, i) => <div key={`e-${i}`} />)}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const status = getStatus(day);
            return (
              <div key={day} className={`aspect-square rounded-xl flex items-center justify-center text-sm font-medium ${status ? statusColor[status] : "text-muted-foreground"}`}>
                {day}
              </div>
            );
          })}
        </div>

        <div className="flex gap-4 mt-6 justify-center">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground"><div className="w-3 h-3 rounded bg-success" /> Present</div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground"><div className="w-3 h-3 rounded bg-destructive" /> Absent</div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground"><div className="w-3 h-3 rounded bg-secondary" /> Scheduled</div>
        </div>
      </div>
    </div>
  );
};

export default ParentAttendance;
