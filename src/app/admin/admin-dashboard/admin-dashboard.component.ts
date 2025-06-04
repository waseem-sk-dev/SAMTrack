import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  sidebarOpen = false;
  totalUsers = 0;
  avgAttendance = 0;
  reportsSubmitted = 0;
  activeSubjects = 0;

  attendanceRecords = [
    {
      user: 'Amit Sharma',
      subject: 'Mathematics',
      status: 'Present',
      timeIn: '9:01 AM',
    },
    { user: 'Priya Joshi', subject: 'Physics', status: 'Absent', timeIn: '—' },
    {
      user: 'Rahul Verma',
      subject: 'Chemistry',
      status: 'Present',
      timeIn: '8:58 AM',
    },
  ];
  constructor(private router: Router, private authService: AuthService) {
    // Close sidebar on route change (mobile behavior)
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.sidebarOpen = false;
      }
    });
  }
  logout() {
    // Clear user session or token
    this.authService.logout(); // Your auth service should handle token/session removal

    // Redirect to login page after logout
    this.router.navigate(['/login']);
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  ngOnInit() {
    // Example data - replace with real API calls
    this.totalUsers = 152;
    this.avgAttendance = 89;
    this.reportsSubmitted = 47;
    this.activeSubjects = 12;
  }
}
