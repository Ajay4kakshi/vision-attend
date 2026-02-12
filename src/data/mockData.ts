import { Student, AttendanceRecord, Recognition, Notification, User } from "@/types";

export const mockUsers: Record<string, User> = {
  teacher: {
    id: "t1",
    name: "Dr. Priya Sharma",
    email: "priya.sharma@visionattend.edu",
    role: "teacher",
    department: "Computer Science",
  },
  student: {
    id: "s1",
    name: "Ajay Kumar",
    email: "ajay.kumar@visionattend.edu",
    role: "student",
    registerNumber: "CS2021045",
    className: "CSE - A",
  },
  parent: {
    id: "p1",
    name: "Ramesh Kumar",
    email: "ramesh.kumar@email.com",
    role: "parent",
    childName: "Ajay Kumar",
  },
};

export const mockStudents: Student[] = [
  { id: "s1", name: "Ajay Kumar", registerNumber: "CS2021045", className: "CSE - A", status: "present", lastSeen: "09:15 AM", attendance: 94, email: "ajay@email.com", phone: "9876543210" },
  { id: "s2", name: "Sneha Reddy", registerNumber: "CS2021032", className: "CSE - A", status: "present", lastSeen: "09:12 AM", attendance: 88, email: "sneha@email.com", phone: "9876543211" },
  { id: "s3", name: "Vikram Singh", registerNumber: "CS2021018", className: "CSE - A", status: "absent", lastSeen: "Yesterday", attendance: 72, email: "vikram@email.com", phone: "9876543212" },
  { id: "s4", name: "Ananya Patel", registerNumber: "CS2021056", className: "CSE - B", status: "present", lastSeen: "09:20 AM", attendance: 91, email: "ananya@email.com", phone: "9876543213" },
  { id: "s5", name: "Rahul Menon", registerNumber: "CS2021023", className: "CSE - B", status: "present", lastSeen: "09:08 AM", attendance: 85, email: "rahul@email.com", phone: "9876543214" },
  { id: "s6", name: "Divya Nair", registerNumber: "CS2021041", className: "CSE - A", status: "absent", lastSeen: "2 days ago", attendance: 68, email: "divya@email.com", phone: "9876543215" },
  { id: "s7", name: "Karthik Rajan", registerNumber: "CS2021067", className: "CSE - B", status: "present", lastSeen: "09:18 AM", attendance: 96, email: "karthik@email.com", phone: "9876543216" },
  { id: "s8", name: "Meera Iyer", registerNumber: "CS2021029", className: "CSE - A", status: "present", lastSeen: "09:05 AM", attendance: 90, email: "meera@email.com", phone: "9876543217" },
];

export const mockAttendanceRecords: AttendanceRecord[] = [
  { date: "2026-02-01", status: "present" },
  { date: "2026-02-02", status: "present" },
  { date: "2026-02-03", status: "present" },
  { date: "2026-02-04", status: "absent" },
  { date: "2026-02-05", status: "present" },
  { date: "2026-02-06", status: "scheduled" },
  { date: "2026-02-07", status: "scheduled" },
  { date: "2026-02-08", status: "present" },
  { date: "2026-02-09", status: "present" },
  { date: "2026-02-10", status: "present" },
  { date: "2026-02-11", status: "present" },
  { date: "2026-02-12", status: "present" },
];

export const mockRecognitions: Recognition[] = [
  { studentName: "Ajay Kumar", time: "09:15 AM", location: "Main Entrance" },
  { studentName: "Sneha Reddy", time: "09:12 AM", location: "Main Entrance" },
  { studentName: "Meera Iyer", time: "09:05 AM", location: "Lab Block" },
  { studentName: "Karthik Rajan", time: "09:18 AM", location: "Library" },
];

export const mockNotifications: Notification[] = [
  { id: "n1", title: "Low Attendance Alert", message: "Vikram Singh's attendance dropped below 75%", time: "10 min ago", read: false, type: "warning" },
  { id: "n2", title: "Recognition Active", message: "AI Recognition units are online and operational", time: "1 hr ago", read: false, type: "success" },
  { id: "n3", title: "New Student Added", message: "Ananya Patel has been enrolled in the system", time: "2 hrs ago", read: true, type: "info" },
  { id: "n4", title: "Monthly Report Ready", message: "January 2026 attendance report is available for download", time: "1 day ago", read: true, type: "info" },
];

export const monthlyAttendanceData = [
  { month: "Sep", attendance: 92 },
  { month: "Oct", attendance: 88 },
  { month: "Nov", attendance: 90 },
  { month: "Dec", attendance: 85 },
  { month: "Jan", attendance: 91 },
  { month: "Feb", attendance: 94 },
];

export const subjectAttendance = [
  { subject: "Data Structures", total: 30, attended: 28, percentage: 93 },
  { subject: "Operating Systems", total: 25, attended: 23, percentage: 92 },
  { subject: "DBMS", total: 28, attended: 25, percentage: 89 },
  { subject: "Computer Networks", total: 22, attended: 19, percentage: 86 },
  { subject: "Software Engineering", total: 20, attended: 19, percentage: 95 },
];

export const timetable = [
  { time: "09:00 - 10:00", monday: "Data Structures", tuesday: "DBMS", wednesday: "OS", thursday: "CN", friday: "SE" },
  { time: "10:00 - 11:00", monday: "OS", tuesday: "Data Structures", wednesday: "DBMS", thursday: "SE", friday: "CN" },
  { time: "11:15 - 12:15", monday: "CN", tuesday: "SE", wednesday: "Data Structures", thursday: "DBMS", friday: "OS" },
  { time: "01:00 - 02:00", monday: "Lab", tuesday: "Lab", wednesday: "Tutorial", thursday: "Lab", friday: "Tutorial" },
  { time: "02:00 - 03:00", monday: "Lab", tuesday: "Lab", wednesday: "Library", thursday: "Lab", friday: "Sports" },
];
