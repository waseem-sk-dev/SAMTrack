import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard-home',
  templateUrl: './admin-dashboard-home.component.html',
  styleUrls: ['./admin-dashboard-home.component.css'],
})
export class AdminDashboardHomeComponent {
  totalUsers = 50;
  avgAttendance = 92;
  reportsSubmitted = 17;
  activeSubjects = 6;

  attendanceRecords = [
    { user: 'John Doe', subject: 'Math', status: 'Present', timeIn: '9:00 AM' },
    { user: 'Jane Smith', subject: 'Physics', status: 'Absent', timeIn: '-' },
  ];
}
