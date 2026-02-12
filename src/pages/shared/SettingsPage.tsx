import { Settings as SettingsIcon } from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="max-w-lg mx-auto">
      <div className="glass-card p-6 space-y-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-primary/10">
            <SettingsIcon className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground">Settings</h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-xl">
            <div>
              <p className="text-sm font-medium text-foreground">Email Notifications</p>
              <p className="text-xs text-muted-foreground">Receive attendance alerts via email</p>
            </div>
            <div className="w-10 h-6 rounded-full bg-primary cursor-pointer relative">
              <div className="w-4 h-4 rounded-full bg-primary-foreground absolute right-1 top-1" />
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-xl">
            <div>
              <p className="text-sm font-medium text-foreground">Low Attendance Alerts</p>
              <p className="text-xs text-muted-foreground">Alert when attendance drops below 75%</p>
            </div>
            <div className="w-10 h-6 rounded-full bg-primary cursor-pointer relative">
              <div className="w-4 h-4 rounded-full bg-primary-foreground absolute right-1 top-1" />
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-xl">
            <div>
              <p className="text-sm font-medium text-foreground">Recognition Logs</p>
              <p className="text-xs text-muted-foreground">Show detailed recognition timestamps</p>
            </div>
            <div className="w-10 h-6 rounded-full bg-secondary border border-border cursor-pointer relative">
              <div className="w-4 h-4 rounded-full bg-muted-foreground absolute left-1 top-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
