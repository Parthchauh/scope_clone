import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { 
  Calendar as CalendarIcon, 
  Plus, 
  Eye, 
  Clock,
  CheckCircle,
  XCircle,
  FileText
} from "lucide-react";
import { cn } from "@/lib/utils";

export const LeaveManagement = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const leaveApplications = [
    {
      id: "LA001",
      type: "Casual Leave",
      startDate: "2024-12-15",
      endDate: "2024-12-17",
      days: 3,
      reason: "Personal work",
      status: "approved",
      appliedOn: "2024-12-10",
      approvedBy: "Dr. Sarah Johnson"
    },
    {
      id: "LA002", 
      type: "Conference Leave",
      startDate: "2025-01-10",
      endDate: "2025-01-12",
      days: 3,
      reason: "International Conference on AI",
      status: "pending",
      appliedOn: "2024-12-20",
      approvedBy: null
    },
    {
      id: "LA003",
      type: "Medical Leave", 
      startDate: "2024-11-28",
      endDate: "2024-11-30",
      days: 3,
      reason: "Medical treatment",
      status: "rejected",
      appliedOn: "2024-11-25",
      approvedBy: "Dr. Sarah Johnson"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge variant="outline" className="text-success border-success">Approved</Badge>;
      case 'pending':
        return <Badge variant="outline" className="text-warning border-warning">Pending</Badge>;
      case 'rejected':
        return <Badge variant="outline" className="text-destructive border-destructive">Rejected</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-5 w-5 text-success" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-warning" />;
      case 'rejected':
        return <XCircle className="h-5 w-5 text-destructive" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Leave Management</h1>
        <div className="text-sm text-muted-foreground">
          Balance: <span className="font-semibold text-primary">15/20 days</span>
        </div>
      </div>

      <Tabs defaultValue="applications" className="space-y-6">
        <TabsList>
          <TabsTrigger value="applications">My Applications</TabsTrigger>
          <TabsTrigger value="apply">Apply for Leave</TabsTrigger>
          <TabsTrigger value="calendar">Leave Calendar</TabsTrigger>
        </TabsList>

        <TabsContent value="applications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Leave Applications</CardTitle>
              <CardDescription>View and track your leave requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaveApplications.map((application) => (
                  <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(application.status)}
                      <div>
                        <p className="font-medium">{application.type}</p>
                        <p className="text-sm text-muted-foreground">
                          {format(new Date(application.startDate), "MMM dd")} - {format(new Date(application.endDate), "MMM dd, yyyy")} ({application.days} days)
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Applied on {format(new Date(application.appliedOn), "MMM dd, yyyy")}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      {getStatusBadge(application.status)}
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="apply" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Apply for Leave</CardTitle>
              <CardDescription>Submit a new leave application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="leave-type">Leave Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select leave type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="casual">Casual Leave</SelectItem>
                      <SelectItem value="duty">Duty Leave</SelectItem>
                      <SelectItem value="medical">Medical Leave</SelectItem>
                      <SelectItem value="conference">Conference Leave</SelectItem>
                      <SelectItem value="without-pay">Leave Without Pay</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Input placeholder="Number of days" />
                </div>

                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !startDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {startDate ? format(startDate, "PPP") : "Pick start date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>End Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !endDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {endDate ? format(endDate, "PPP") : "Pick end date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={setEndDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Reason for Leave</Label>
                <Textarea 
                  id="reason"
                  placeholder="Please provide details about your leave request..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Contact During Leave</Label>
                <Input 
                  id="contact"
                  placeholder="Phone number or email for emergency contact"
                />
              </div>

              <div className="flex justify-end space-x-2">
                <Button variant="outline">Save as Draft</Button>
                <Button variant="academic" className="gap-2">
                  <Plus className="h-4 w-4" />
                  Submit Application
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar">
          <Card>
            <CardHeader>
              <CardTitle>Leave Calendar</CardTitle>
              <CardDescription>View your leave history and upcoming leaves</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                <CalendarIcon className="h-12 w-12 mx-auto mb-4" />
                <p>Calendar view coming soon...</p>
                <p className="text-sm">View your leaves in a calendar format</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};