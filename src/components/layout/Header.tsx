import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { LogOut, Settings, User } from "lucide-react";
import scopeLogo from "@/assets/scope-logo.png";

interface HeaderProps {
  userRole: 'student' | 'guide' | 'operator' | 'dean';
  userName: string;
}

export const Header = ({ userRole, userName }: HeaderProps) => {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Logo Section - Left Aligned */}
        <div className="flex items-center space-x-3">
          <img src={scopeLogo} alt="SCOPE" className="h-10 w-auto" />
          <div>
            <h1 className="text-xl font-bold text-primary">SCOPE</h1>
            <p className="text-xs text-muted-foreground">Scholar CL & Payroll Engine</p>
          </div>
        </div>

        {/* Center - Welcome Message with Email */}
        {user && (
          <div className="hidden md:flex flex-col items-center text-center">
            <p className="text-sm font-medium text-foreground">
              Welcome, {user.name}
              {user.studentId && ` - ${user.studentId}`}
            </p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
        )}

        {/* Right Side Navigation */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          
          <Button 
            variant="outline" 
            size="sm"
            className="hover:bg-primary/5 hover:scale-105 transition-all duration-200 border-primary/20"
          >
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="text-muted-foreground hover:text-foreground hover:bg-accent/10 hover:scale-105 transition-all duration-200"
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm"
            onClick={handleLogout}
            className="group text-destructive hover:text-destructive-foreground hover:bg-destructive hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-lg"
          >
            <LogOut className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-200" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};