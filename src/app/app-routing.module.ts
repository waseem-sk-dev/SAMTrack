import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { FacultyDashboardComponent } from './faculty/faculty-dashboard/faculty-dashboard.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AllUsersComponent } from './admin/all-users/all-users.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { ViewAllAttendanceComponent } from './admin/view-all-attendance/view-all-attendance.component';
import { AdminDashboardHomeComponent } from './admin/admin-dashboard-home/admin-dashboard-home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children: [
      { path: '', component: AdminDashboardHomeComponent }, // dashboard home page
      { path: 'add-user', component: AddUserComponent },
      { path: 'all-users', component: AllUsersComponent },
      { path: 'all-users/edit-user/:username', component: EditUserComponent },
      { path: 'view-all-attendance', component: ViewAllAttendanceComponent },
    ],
  },
  { path: 'faculty-dashboard', component: FacultyDashboardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
