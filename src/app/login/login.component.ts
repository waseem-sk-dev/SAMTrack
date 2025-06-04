import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  faLock = faLock;
  faLockOpen = faLockOpen;
  loginForm: FormGroup;
  loading = false;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    public router: Router
  ) {
    this.loginForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z0-9._-]+$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get username() {
    return this.loginForm.get('username')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    if (this.loginForm.invalid) return;

    this.loading = true;
    const { username, password } = this.loginForm.value;

    this.auth.loginUser({ username, password }).subscribe({
      next: (user) => {
        this.loading = false;
        if (user && user.role) {
          Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'Redirecting...',
            showConfirmButton: false,
            timer: 2000,
          }).then(() => {
            if (user.role?.toLowerCase() === 'admin') {
              this.router.navigate(['/admin-dashboard']);
            } else if (user.role?.toLowerCase() === 'faculty') {
              this.router.navigate(['/faculty-dashboard']);
            } else {
              this.router.navigate(['/dashboard']);
            }
          });

          localStorage.setItem('loggedInUser', JSON.stringify(user));
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'User role not found.',
            confirmButtonColor: '#d33',
          });
        }
      },
      error: () => {
        this.loading = false;
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid username or password.',
          confirmButtonColor: '#d33',
        });
      },
    });
  }
}
