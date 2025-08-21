import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GraduationCap, Users, Shield, FileText } from "lucide-react";
import scopeLogo from "@/assets/scope-logo.png";
import heroImage from "@/assets/hero-academic.jpg";

const Index = () => {
  const { isAuthenticated, loading } = useAuth();

  // Redirect if authenticated
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  // Show loading while checking auth
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={scopeLogo} alt="SCOPE" className="h-12 w-auto" />
              <div>
                <h1 className="text-2xl font-bold text-primary">SCOPE</h1>
                <p className="text-sm text-muted-foreground">Scholar CL & Payroll Engine</p>
              </div>
            </div>
            <Button 
              asChild
              className="btn-interactive btn-glow"
            >
              <a href="/auth">Get Started</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                  Streamline Your
                  <span className="text-primary block">Academic Journey</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  SCOPE - Scholar CL & Payroll Engine provides comprehensive leave management 
                  and scholarship tracking for academic institutions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  asChild
                  className="btn-interactive btn-glow text-lg px-8 py-3"
                >
                  <a href="/auth">Login to Dashboard</a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="btn-interactive text-lg px-8 py-3"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img 
                src={heroImage} 
                alt="Academic Excellence" 
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-3xl md:text-4xl font-bold">Why Choose SCOPE?</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Designed specifically for academic institutions to manage student affairs efficiently
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Student Management",
                description: "Comprehensive student profile and academic tracking system"
              },
              {
                icon: FileText,
                title: "Leave Management",
                description: "Streamlined leave application and approval process"
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description: "Enterprise-grade security with role-based access control"
              },
              {
                icon: Users,
                title: "Multi-Role Support",
                description: "Support for students, guides, operators, and administrators"
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold">{feature.title}</h4>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src={scopeLogo} alt="SCOPE" className="h-10 w-auto" />
                <div>
                  <h5 className="font-bold text-primary">SCOPE</h5>
                  <p className="text-sm text-muted-foreground">Scholar CL & Payroll Engine</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Empowering academic institutions with modern student management solutions.
              </p>
            </div>
            
            <div className="space-y-4">
              <h6 className="font-semibold">Quick Links</h6>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/auth" className="hover:text-primary transition-colors">Dashboard</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h6 className="font-semibold">Contact</h6>
              <div className="text-muted-foreground space-y-2">
                <p>CSPIT - CHARUSAT</p>
                <p>Changa, Gujarat, India</p>
                <p>Email: support@scope.edu</p>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2024 CSPIT - CHARUSAT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
