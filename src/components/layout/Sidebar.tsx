import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Users, 
  Calendar, 
  DollarSign, 
  BarChart3, 
  FileText, 
  Home,
  UserCheck,
  Settings,
  BookOpen
} from "lucide-react";

interface SidebarProps {
  userRole: 'student' | 'guide' | 'operator' | 'dean';
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Sidebar = ({ userRole, activeSection, onSectionChange }: SidebarProps) => {
  const menuItems = {
    student: [
      { id: 'dashboard', label: 'Dashboard', icon: Home },
      { id: 'profile', label: 'My Profile', icon: Users },
      { id: 'leave', label: 'Leave Management', icon: Calendar },
      { id: 'scholarship', label: 'My Scholarships', icon: DollarSign },
      { id: 'documents', label: 'Documents', icon: FileText },
    ],
    guide: [
      { id: 'dashboard', label: 'Dashboard', icon: Home },
      { id: 'students', label: 'My Students', icon: Users },
      { id: 'leave-review', label: 'Leave Requests', icon: UserCheck },
      { id: 'reports', label: 'Reports', icon: BarChart3 },
      { id: 'research', label: 'Research Progress', icon: BookOpen },
    ],
    operator: [
      { id: 'dashboard', label: 'Dashboard', icon: Home },
      { id: 'students', label: 'All Students', icon: Users },
      { id: 'leave-management', label: 'Leave Management', icon: Calendar },
      { id: 'scholarships', label: 'Scholarship Management', icon: DollarSign },
      { id: 'reports', label: 'System Reports', icon: BarChart3 },
      { id: 'settings', label: 'System Settings', icon: Settings },
    ],
    dean: [
      { id: 'dashboard', label: 'Executive Dashboard', icon: Home },
      { id: 'approvals', label: 'Final Approvals', icon: UserCheck },
      { id: 'analytics', label: 'Advanced Analytics', icon: BarChart3 },
      { id: 'policies', label: 'Policy Management', icon: FileText },
      { id: 'overview', label: 'Department Overview', icon: BookOpen },
    ]
  };

  const currentMenuItems = menuItems[userRole];

  return (
    <div className="flex h-full w-64 flex-col border-r bg-card">
      <div className="flex-1 overflow-auto py-6">
        <nav className="grid items-start px-4 text-sm font-medium">
          {currentMenuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start mb-1",
                  activeSection === item.id && "bg-gradient-to-r from-primary/10 to-accent/10 text-primary"
                )}
                onClick={() => onSectionChange(item.id)}
              >
                <Icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};