import { mockNotifications } from "@/data/mockData";
import { Bell, AlertTriangle, CheckCircle, Info } from "lucide-react";

const iconMap = {
  warning: <AlertTriangle className="w-4 h-4 text-warning" />,
  success: <CheckCircle className="w-4 h-4 text-success" />,
  info: <Info className="w-4 h-4 text-primary" />,
};

const NotificationsPage = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-3">
      {mockNotifications.map((n) => (
        <div key={n.id} className={`glass-card p-4 flex items-start gap-3 ${!n.read ? "border-primary/30" : ""}`}>
          <div className="p-2 rounded-lg bg-secondary/50">{iconMap[n.type]}</div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium text-foreground">{n.title}</h4>
              {!n.read && <span className="w-2 h-2 rounded-full bg-primary" />}
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">{n.message}</p>
            <p className="text-xs text-muted-foreground/50 mt-1">{n.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationsPage;
