import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Login } from "@/components/auth/Login";
import { SignUp } from "@/components/auth/SignUp";
import Dashboard from "./Dashboard";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { user, login, signup, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    const success = await login(email, password);
    if (success) {
      toast({
        title: "Login Successful",
        description: "Welcome to SCOPE!",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSignUp = async (formData: any) => {
    const success = await signup(formData);
    if (success) {
      toast({
        title: "Account Created",
        description: "Welcome to SCOPE! Your account has been created successfully.",
      });
    } else {
      toast({
        title: "Signup Failed",
        description: "Failed to create account. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Show dashboard if user is authenticated
  if (isAuthenticated && user) {
    return <Dashboard />;
  }

  // Show authentication forms
  return (
    <>
      {isSignUpMode ? (
        <SignUp 
          onSignUp={handleSignUp}
          onBackToLogin={() => setIsSignUpMode(false)}
        />
      ) : (
        <Login 
          onLogin={handleLogin}
          onSignUp={() => setIsSignUpMode(true)}
        />
      )}
    </>
  );
};

export default Index;
