import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import scopeLogo from "@/assets/scope-logo.png";
import campusBg from "@/assets/campus-bg.jpg";

interface LoginProps {
  onLogin: (email: string, password: string) => void;
  onSignUp: () => void;
}

export const Login = ({ onLogin, onSignUp }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${campusBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Login Card */}
      <Card className="w-full max-w-md mx-4 shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <img 
              src={scopeLogo} 
              alt="SCOPE - Scholar CL & Payroll Engine" 
              className="h-20 w-auto"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your charusat email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/90 border-gray-200 focus:border-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-white/90 border-gray-200 focus:border-primary"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-lg transition-colors duration-200"
            >
              Login
            </Button>
          </form>
          
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <button 
                onClick={onSignUp}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Sign Up
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
      
      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center text-sm gap-2">
            <span>© Copyright CSPIT - CHARUSAT</span>
            <span className="hidden sm:inline">|</span>
            <span>All rights reserved</span>
            <span className="hidden sm:inline">|</span>
            <button className="text-blue-300 hover:text-blue-100 transition-colors">
              About
            </button>
            <span className="hidden sm:inline">|</span>
            <button className="text-blue-300 hover:text-blue-100 transition-colors">
              Help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};