import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'guide' | 'operator' | 'dean';
  studentId?: string;
  department?: string;
  program?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (formData: any) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication - in real app, this would call an API
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data based on email
      let mockUser: User;
      
      if (email.includes('dean') || email.includes('admin')) {
        mockUser = {
          id: '1',
          name: 'Dr. John Dean',
          email,
          role: 'dean',
          department: 'Computer Science'
        };
      } else if (email.includes('guide') || email.includes('faculty')) {
        mockUser = {
          id: '2',
          name: 'Dr. Sarah Johnson',
          email,
          role: 'guide',
          department: 'Computer Science'
        };
      } else if (email.includes('operator') || email.includes('admin')) {
        mockUser = {
          id: '3',
          name: 'Admin Operator',
          email,
          role: 'operator',
          department: 'Administration'
        };
      } else {
        mockUser = {
          id: '4',
          name: 'Alex Thompson',
          email,
          role: 'student',
          studentId: 'PhD2021001',
          department: 'Computer Science',
          program: 'Ph.D.'
        };
      }
      
      setUser(mockUser);
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const signup = async (formData: any): Promise<boolean> => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser: User = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        role: formData.role || 'student',
        studentId: formData.studentId,
        department: formData.department,
        program: formData.program
      };
      
      setUser(newUser);
      return true;
    } catch (error) {
      console.error('Signup failed:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    signup,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};