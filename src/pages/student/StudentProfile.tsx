import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { Save, User } from "lucide-react";

const StudentProfile = () => {
  const { user } = useAuth();
  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "9876543210",
    password: "",
  });

  return (
    <div className="max-w-lg mx-auto">
      <div className="glass-card p-6 space-y-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-primary/10">
            <User className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground">Edit Profile</h3>
        </div>

        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center text-primary-foreground text-2xl font-bold">
            {user?.name.split(" ").map((n) => n[0]).join("")}
          </div>
        </div>

        <div className="space-y-4">
          {[
            { label: "Full Name", key: "name" as const, type: "text" },
            { label: "Email", key: "email" as const, type: "email" },
            { label: "Phone", key: "phone" as const, type: "tel" },
            { label: "New Password", key: "password" as const, type: "password" },
          ].map((field) => (
            <div key={field.key}>
              <label className="text-sm text-muted-foreground mb-1.5 block">{field.label}</label>
              <input
                type={field.type}
                value={form[field.key]}
                onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                className="w-full px-4 py-2.5 bg-secondary/50 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          ))}

          <p className="text-xs text-muted-foreground">
            Face scan is handled securely on the server. No face scan option is available on this page.
          </p>

          <button className="w-full py-3 gradient-gold text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
