import { Users, UserCheck, UserX, Activity, MapPin, Clock, Cpu } from "lucide-react";
import StatCard from "@/components/StatCard";
import CircularProgress from "@/components/CircularProgress";
import { mockStudents, mockRecognitions } from "@/data/mockData";
import { useAuth } from "@/contexts/AuthContext";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { monthlyAttendanceData } from "@/data/mockData";

const present = mockStudents.filter((s) => s.status === "present").length;
const absent = mockStudents.filter((s) => s.status === "absent").length;
const pct = Math.round((present / mockStudents.length) * 100);

const TeacherOverview = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      {/* Profile + Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Profile */}
        <div className="glass-card p-5 glow-gold">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center text-primary-foreground font-bold">
              {user?.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">{user?.name}</h3>
              <p className="text-xs text-muted-foreground">{user?.department}</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs bg-success/10 text-success px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-glow" />
            Online
          </span>
        </div>

        <StatCard label="Total Students" value={mockStudents.length} icon={<Users className="w-4 h-4 text-primary" />} variant="default" />
        <StatCard label="Present Today" value={present} icon={<UserCheck className="w-4 h-4 text-success" />} trend={`+${present} since morning`} variant="success" />
        <StatCard label="Absent Today" value={absent} icon={<UserX className="w-4 h-4 text-destructive" />} variant="warning" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Attendance Chart */}
        <div className="lg:col-span-2 glass-card p-6">
          <h3 className="font-semibold text-foreground mb-4 text-sm">Monthly Attendance Trend</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={monthlyAttendanceData}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }} domain={[70, 100]} />
              <Tooltip
                contentStyle={{
                  background: "hsl(217, 33%, 17%)",
                  border: "1px solid hsl(217, 33%, 22%)",
                  borderRadius: "12px",
                  color: "hsl(210, 40%, 98%)",
                }}
              />
              <Bar dataKey="attendance" fill="hsl(43, 96%, 56%)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Circular */}
        <div className="glass-card p-6 flex flex-col items-center justify-center">
          <h3 className="font-semibold text-foreground mb-4 text-sm">Today's Rate</h3>
          <CircularProgress percentage={pct} label="Attendance" />
        </div>
      </div>

      {/* Live Recognition */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground text-sm">Live Recognition Feed</h3>
          <span className="inline-flex items-center gap-1.5 text-xs bg-success/10 text-success px-2.5 py-1 rounded-full">
            <Cpu className="w-3 h-3" />
            AI Units Active
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {mockRecognitions.map((rec, i) => (
            <div key={i} className="bg-secondary/50 rounded-xl p-4 border border-border/50">
              <p className="font-medium text-foreground text-sm">{rec.studentName}</p>
              <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                {rec.time}
              </div>
              <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3" />
                {rec.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherOverview;
