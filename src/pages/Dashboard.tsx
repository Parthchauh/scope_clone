import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { StudentDashboard } from "@/components/dashboard/StudentDashboard";
import { StudentProfile } from "@/components/student/StudentProfile";
import { LeaveManagement } from "@/components/leave/LeaveManagement";

const Dashboard = () => {
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState('dashboard');
  
  if (!user) {
    return null;
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <StudentDashboard />;
      case 'profile':
        return <StudentProfile />;
      case 'leave':
        return <LeaveManagement />;
      case 'scholarship':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Scholarship Management</h2>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
        );
      case 'documents':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Document Management</h2>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
        );
      default:
        return <StudentDashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar 
        userRole={user.role}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          userRole={user.role}
          userName={user.name}
        />
        <main className="flex-1 overflow-auto p-6">
          {renderActiveSection()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;