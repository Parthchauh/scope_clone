import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import scopeLogo from "@/assets/scope-logo.png";

interface HeaderProps {
  userRole: 'student' | 'guide' | 'operator' | 'dean';
  userName: string;
}

export const Header = ({ userRole, userName }: HeaderProps) => {
  const { logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Logo Section - Left Aligned */}
        <div className="flex items-center space-x-3">
          <img src={scopeLogo} alt="SCOPE" className="h-10 w-auto" />
          <div>
            <h1 className="text-xl font-bold text-primary">SCOPE</h1>
            <p className="text-xs text-muted-foreground">Scholar CL & Payroll Engine</p>
          </div>
        </div>

        {/* Right Side Navigation */}
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            className="hover:bg-primary/5 transition-colors"
          >
            Student Dashboard
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            className="text-primary hover:bg-primary/10 transition-colors"
          >
            Reset Password
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={logout}
            className="text-destructive hover:bg-destructive/10 transition-colors"
          >
            🚪 Logout
          </Button>
        </div>
      </div>
    </header>
  );
};