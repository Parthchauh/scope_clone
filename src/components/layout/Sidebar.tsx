import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Home,
  User,
  Calendar,
  DollarSign
} from "lucide-react";

interface SidebarProps {
  userRole: 'student' | 'guide' | 'operator' | 'dean';
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Sidebar = ({ userRole, activeSection, onSectionChange }: SidebarProps) => {
  const menuItems = [
    { id: 'dashboard', label: 'Home', icon: Home },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'leave', label: 'Enjoyed Leave', icon: Calendar },
    { id: 'scholarship', label: 'Scholarship', icon: DollarSign },
  ];

  return (
    <div className="flex h-full w-48 flex-col bg-muted/30 border-r">
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid items-start px-2 text-sm font-medium space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <Button
                key={item.id}
                variant="ghost"
                className={cn(
                  "w-full justify-start h-10 px-3 rounded-md transition-all duration-200",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-sm font-medium" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                )}
                onClick={() => onSectionChange(item.id)}
              >
                <Icon className="mr-3 h-4 w-4" />
                {item.label}
              </Button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};