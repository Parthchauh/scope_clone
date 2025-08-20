import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";

export const StudentDashboard = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const leaveData = [
    { dates: "2025-11-15 to 2025-11-17", duration: "3 days", status: "APPROVED BY DEAN", statusColor: "bg-green-100 text-green-800" },
    { dates: "2025-10-05 to 2025-10-06", duration: "2 days", status: "PENDING", statusColor: "bg-yellow-100 text-yellow-800" },
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-muted-foreground">
            Welcome, <span className="text-foreground">Sunny Radadiya - 23CE122</span>
          </h1>
        </div>
        <div className="text-sm text-muted-foreground text-right">
          <p>Dept: Computer Engineering</p>
          <p>Guide: Ronak R. Patel</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - Leave Status and History */}
        <div className="lg:col-span-2 space-y-6">
          {/* Leave Status Cards */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-semibold">Leave Status</CardTitle>
              <Button 
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md transition-colors"
                onClick={() => {/* Add leave application logic */}}
              >
                + Apply Leave
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div 
                  className={`p-4 border rounded-lg transition-all duration-200 cursor-pointer ${
                    hoveredCard === 'casual' ? 'shadow-md scale-105' : 'hover:shadow-sm'
                  }`}
                  onMouseEnter={() => setHoveredCard('casual')}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Casual Leave (CL)</p>
                    <p className="text-2xl font-bold text-primary">12/30</p>
                  </div>
                </div>
                
                <div 
                  className={`p-4 border rounded-lg transition-all duration-200 cursor-pointer ${
                    hoveredCard === 'duty' ? 'shadow-md scale-105' : 'hover:shadow-sm'
                  }`}
                  onMouseEnter={() => setHoveredCard('duty')}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Duty Leave (DL)</p>
                    <p className="text-2xl font-bold text-blue-600">3/10</p>
                  </div>
                </div>
                
                <div 
                  className={`p-4 border rounded-lg transition-all duration-200 cursor-pointer ${
                    hoveredCard === 'lwp' ? 'shadow-md scale-105' : 'hover:shadow-sm'
                  }`}
                  onMouseEnter={() => setHoveredCard('lwp')}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Leave Without Pay (LWP)</p>
                    <p className="text-2xl font-bold text-gray-600">2</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CL History Table */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">CL History</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>DATES</TableHead>
                    <TableHead>DURATION</TableHead>
                    <TableHead>STATUS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leaveData.map((leave, index) => (
                    <TableRow key={index} className="hover:bg-muted/50 transition-colors">
                      <TableCell className="font-medium">{leave.dates}</TableCell>
                      <TableCell>{leave.duration}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${leave.statusColor}`}>
                          {leave.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - This Month Earning */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">This Month Earning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-teal-50 rounded-lg">
                  <span className="text-sm font-medium">College Scholarship (Base)</span>
                  <span className="font-bold text-green-600">₹30,000</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className="text-sm font-medium text-red-600">LWP Deductions</span>
                  <span className="font-bold text-red-600">- ₹2,000</span>
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-lg font-semibold">Final Payout</span>
                    <span className="text-xl font-bold text-green-600">₹28,000</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h4 className="font-semibold mb-3">Other Scholarships</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>State Government Scholarship</span>
                    <span className="font-medium">₹15,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Merit-Based Grant</span>
                    <span className="font-medium">₹5,000</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="text-center text-sm text-muted-foreground border-t pt-4 mt-8">
        © Copyright CSPIT - CHARUSAT | All rights reserved | 
        <button className="text-primary hover:underline ml-1">About</button> | 
        <button className="text-primary hover:underline ml-1">Help</button>
      </footer>
    </div>
  );
};