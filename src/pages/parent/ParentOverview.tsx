import { AlertTriangle, TrendingUp, Clock, Activity } from "lucide-react";
import CircularProgress from "@/components/CircularProgress";
import StatCard from "@/components/StatCard";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { monthlyAttendanceData, mockNotifications } from "@/data/mockData";

const ParentOverview = () => {
  const childAttendance = 94;
  const isLow = childAttendance < 75;

  return (
    <div className="space-y-6">
      {/* Child Profile */}
      <div className="glass-card p-6 glow-gold">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center text-primary-foreground text-lg font-bold">AK</div>
          <div>
            <h3 className="font-semibold text-foreground text-lg">Ajay Kumar</h3>
            <p className="text-sm text-muted-foreground">CS2021045 • CSE - A</p>
          </div>
        </div>
      </div>

      {isLow && (
        <div className="glass-card p-4 border-warning/30 flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-warning">Attendance Warning</p>
            <p className="text-xs text-muted-foreground">Your child's attendance is below 75%. Please take action.</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="glass-card p-6 flex flex-col items-center justify-center">
          <CircularProgress percentage={childAttendance} size={160} label="Overall" />
        </div>

        <div className="lg:col-span-2 glass-card p-6">
          <h3 className="font-semibold text-foreground mb-4 text-sm">Monthly Trend</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={monthlyAttendanceData}>
              <defs>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(43, 96%, 56%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(43, 96%, 56%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }} domain={[70, 100]} />
              <Tooltip contentStyle={{ background: "hsl(217, 33%, 17%)", border: "1px solid hsl(217, 33%, 22%)", borderRadius: "12px", color: "hsl(210, 40%, 98%)" }} />
              <Area type="monotone" dataKey="attendance" stroke="hsl(43, 96%, 56%)" fill="url(#goldGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="glass-card p-6">
        <h3 className="font-semibold text-foreground mb-4 text-sm">Recent Activity</h3>
        <div className="space-y-3">
          {["Checked in at Main Entrance • 09:15 AM", "Lab Block entry • 10:05 AM", "Library entry • 01:15 PM", "Checked out • 04:30 PM"].map((item, i) => (
            <div key={i} className="flex items-center gap-2 p-3 bg-secondary/30 rounded-xl text-sm text-foreground">
              <Activity className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParentOverview;
