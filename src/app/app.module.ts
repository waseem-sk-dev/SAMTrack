import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AllSubjectComponent } from './subjects/all-subject/all-subject.component';
import { AddSubjectComponent } from './subjects/add-subject/add-subject.component';
import { EditSubjectComponent } from './subjects/edit-subject/edit-subject.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AllUsersComponent } from './admin/all-users/all-users.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { ViewAllAttendanceComponent } from './admin/view-all-attendance/view-all-attendance.component';
import { FacultyDashboardComponent } from './faculty/faculty-dashboard/faculty-dashboard.component';
import { FacultyMenuComponent } from './faculty/faculty-menu/faculty-menu.component';
import { AddStudentComponent } from './faculty/add-student/add-student.component';
import { AllStudentComponent } from './faculty/all-student/all-student.component';
import { EditStudentComponent } from './faculty/edit-student/edit-student.component';
import { TakeAttendanceComponent } from './faculty/take-attendance/take-attendance.component';
import { ViewAttendanceComponent } from './faculty/view-attendance/view-attendance.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import {
  LucideAngularModule,
  Eye,
  EyeOff,
  User,
  Lock,
  Mail,
  Briefcase,
  UserCircle,
  UserCircle2,
} from 'lucide-angular';
import { UserActionsComponent } from './user-actions/user-actions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminDashboardHomeComponent } from './admin/admin-dashboard-home/admin-dashboard-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    AllSubjectComponent,
    AddSubjectComponent,
    EditSubjectComponent,
    AdminDashboardComponent,
    AdminMenuComponent,
    AddUserComponent,
    AllUsersComponent,
    EditUserComponent,
    ViewAllAttendanceComponent,
    FacultyDashboardComponent,
    FacultyMenuComponent,
    AddStudentComponent,
    AllStudentComponent,
    EditStudentComponent,
    TakeAttendanceComponent,
    ViewAttendanceComponent,
    UserActionsComponent,
    AdminDashboardHomeComponent,
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatSnackBarModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    LucideAngularModule.pick({
      Eye,
      EyeOff,
      User,
      Lock,
      Mail,
      Briefcase,
      UserCircle,
      UserCircle2,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private faLibrary: FaIconLibrary) {
    faLibrary.addIcons(faEye, faEyeSlash);
  }
}
