import { useAuth } from "@/contexts/AuthContext";
import { MapPin, Clock, BookOpen } from "lucide-react";
import CircularProgress from "@/components/CircularProgress";
import { subjectAttendance, mockRecognitions, mockNotifications } from "@/data/mockData";

const StudentOverview = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="glass-card p-6 glow-gold">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center text-primary-foreground text-xl font-bold">
              {user?.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{user?.name}</h3>
              <p className="text-sm text-muted-foreground">{user?.registerNumber}</p>
              <p className="text-xs text-muted-foreground">{user?.className}</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs bg-success/10 text-success px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-glow" />
            Currently On Campus
          </span>
          <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            Last recognized: 09:15 AM
          </div>
        </div>

        {/* Attendance Ring */}
        <div className="glass-card p-6 flex flex-col items-center justify-center">
          <h3 className="font-semibold text-foreground mb-2 text-sm">Overall Attendance</h3>
          <CircularProgress percentage={94} size={180} label="This Semester" />
        </div>

        {/* Recent Check-ins */}
        <div className="glass-card p-6">
          <h3 className="font-semibold text-foreground mb-4 text-sm">Recent Check-ins</h3>
          <div className="space-y-3">
            {["Main Entrance • 09:15 AM", "Lab Block • 10:05 AM", "Library • 01:15 PM", "Cafeteria • 12:30 PM"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subject Breakdown */}
      <div className="glass-card p-6">
        <h3 className="font-semibold text-foreground mb-4 text-sm flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-primary" />
          Subject-wise Attendance
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-2">Subject</th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-2">Attended</th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-2">Total</th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-2">Percentage</th>
              </tr>
            </thead>
            <tbody>
              {subjectAttendance.map((s) => (
                <tr key={s.subject} className="border-b border-border/50">
                  <td className="px-4 py-2.5 text-sm text-foreground">{s.subject}</td>
                  <td className="px-4 py-2.5 text-sm text-muted-foreground">{s.attended}</td>
                  <td className="px-4 py-2.5 text-sm text-muted-foreground">{s.total}</td>
                  <td className="px-4 py-2.5">
                    <span className={`text-sm font-medium ${s.percentage >= 75 ? "text-success" : "text-destructive"}`}>
                      {s.percentage}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Announcements */}
      <div className="glass-card p-6">
        <h3 className="font-semibold text-foreground mb-4 text-sm">Announcements</h3>
        <div className="space-y-2">
          {mockNotifications.filter((n) => n.type === "info").map((n) => (
            <div key={n.id} className="p-3 bg-secondary/30 rounded-xl">
              <p className="text-sm text-foreground">{n.title}</p>
              <p className="text-xs text-muted-foreground">{n.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentOverview;
