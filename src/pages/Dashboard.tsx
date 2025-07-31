import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { StudentDashboard } from "@/components/dashboard/StudentDashboard";
import { StudentProfile } from "@/components/student/StudentProfile";
import { LeaveManagement } from "@/components/leave/LeaveManagement";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  
  // Mock user data - this would come from authentication context
  const userData = {
    role: 'student' as const,
    name: 'Alex Thompson',
    id: 'PhD2021001'
  };

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
        userRole={userData.role}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          userRole={userData.role}
          userName={userData.name}
        />
        <main className="flex-1 overflow-auto p-6">
          {renderActiveSection()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;