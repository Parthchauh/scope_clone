import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  Edit, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  BookOpen,
  User,
  FileText,
  Upload
} from "lucide-react";

export const StudentProfile = () => {
  const studentData = {
    id: "PhD2021001",
    name: "Alex Thompson",
    email: "alex.thompson@university.edu",
    phone: "+91 98765 43210",
    emergencyContact: "+91 87654 32109",
    address: "Room 204, Hostel Block A, University Campus",
    admissionDate: "July 15, 2021",
    expectedCompletion: "July 2026",
    guide: "Dr. Sarah Johnson",
    department: "Computer Science",
    program: "Ph.D.",
    disability: "None",
    category: "General",
    bankAccount: "****7890",
    ifscCode: "BANK001234"
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Student Profile</h1>
        <Button variant="academic" className="gap-2">
          <Edit className="h-4 w-4" />
          Edit Profile
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Overview */}
        <Card className="lg:col-span-1">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder-avatar.jpg" alt={studentData.name} />
                <AvatarFallback className="text-lg bg-gradient-to-r from-primary to-accent text-white">
                  {studentData.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-xl">{studentData.name}</CardTitle>
            <CardDescription>Student ID: {studentData.id}</CardDescription>
            <div className="flex justify-center space-x-2 mt-3">
              <Badge variant="outline">{studentData.program}</Badge>
              <Badge variant="secondary">{studentData.department}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full gap-2">
              <Upload className="h-4 w-4" />
              Update Photo
            </Button>
            <Separator />
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Joined {studentData.admissionDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                <span>Expected: {studentData.expectedCompletion}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Information */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Your academic and personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Contact Information */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <User className="h-4 w-4" />
                Contact Details
              </h3>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">{studentData.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">{studentData.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg md:col-span-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">{studentData.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Academic Information */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Academic Details
              </h3>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Research Guide</p>
                  <p className="text-sm text-muted-foreground">{studentData.guide}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Department</p>
                  <p className="text-sm text-muted-foreground">{studentData.department}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Category</p>
                  <p className="text-sm text-muted-foreground">{studentData.category}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Disability Status</p>
                  <p className="text-sm text-muted-foreground">{studentData.disability}</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Financial Information */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Financial Details
              </h3>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Bank Account</p>
                  <p className="text-sm text-muted-foreground">{studentData.bankAccount}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">IFSC Code</p>
                  <p className="text-sm text-muted-foreground">{studentData.ifscCode}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Emergency Contact</p>
                  <p className="text-sm text-muted-foreground">{studentData.emergencyContact}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};