import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Calendar, 
  DollarSign, 
  FileText, 
  TrendingUp, 
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export const StudentDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary via-accent to-primary p-8 text-primary-foreground">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">Welcome back, Alex!</h1>
          <p className="text-lg text-primary-foreground/90 mb-4">
            Here's your academic journey overview
          </p>
          <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
            <span>PhD Program • Computer Science</span>
            <span>•</span>
            <span>Year 3 of 5</span>
          </div>
        </div>
        <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-white/10 blur-xl"></div>
        <div className="absolute -right-12 -bottom-12 h-48 w-48 rounded-full bg-white/5 blur-2xl"></div>
        <div className="absolute top-4 right-4 h-24 w-24 rounded-full bg-white/5"></div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Leave Balance</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15 days</div>
            <p className="text-xs text-muted-foreground">
              Out of 20 annual days
            </p>
            <Progress value={75} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Scholarship</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹31,000</div>
            <p className="text-xs text-muted-foreground">
              UGC-JRF Monthly
            </p>
            <Badge variant="outline" className="mt-2">
              Active
            </Badge>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Documents to submit
            </p>
            <Badge variant="warning" className="mt-2">
              Due Soon
            </Badge>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Research Progress</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">
              Thesis completion
            </p>
            <Progress value={78} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Leave Applications */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Leave Applications</CardTitle>
            <CardDescription>Your latest leave requests and their status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success" />
                <div>
                  <p className="font-medium">Casual Leave</p>
                  <p className="text-sm text-muted-foreground">Dec 15-17, 2024</p>
                </div>
              </div>
              <Badge variant="outline" className="text-success border-success">
                Approved
              </Badge>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-warning" />
                <div>
                  <p className="font-medium">Conference Leave</p>
                  <p className="text-sm text-muted-foreground">Jan 10-12, 2025</p>
                </div>
              </div>
              <Badge variant="outline" className="text-warning border-warning">
                Pending
              </Badge>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <AlertCircle className="h-5 w-5 text-destructive" />
                <div>
                  <p className="font-medium">Medical Leave</p>
                  <p className="text-sm text-muted-foreground">Nov 28-30, 2024</p>
                </div>
              </div>
              <Badge variant="outline" className="text-destructive border-destructive">
                Rejected
              </Badge>
            </div>

            <Button variant="outline" className="w-full">
              Apply for New Leave
            </Button>
          </CardContent>
        </Card>

        {/* Scholarship Information */}
        <Card>
          <CardHeader>
            <CardTitle>Scholarship Details</CardTitle>
            <CardDescription>Your current funding and payment status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border rounded-lg bg-gradient-to-r from-primary/5 to-accent/5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">UGC-JRF Fellowship</h3>
                <Badge variant="success">Active</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Monthly Stipend: ₹31,000
              </p>
              <p className="text-sm text-muted-foreground">
                Contingency: ₹20,000/year
              </p>
              <div className="mt-3">
                <p className="text-xs text-muted-foreground mb-1">
                  Current Year Progress
                </p>
                <Progress value={67} />
                <p className="text-xs text-muted-foreground mt-1">
                  8 months remaining
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Last Payment</span>
                <span className="font-medium">Dec 1, 2024</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Next Payment</span>
                <span className="font-medium">Jan 1, 2025</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Contingency Used</span>
                <span className="font-medium">₹12,000/₹20,000</span>
              </div>
            </div>

            <Button variant="gradient" className="w-full">
              View Full Details
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};