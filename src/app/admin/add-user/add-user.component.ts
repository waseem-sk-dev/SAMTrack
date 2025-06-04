import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormGroup,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  constructor(private fb: FormBuilder, private http: HttpClient) {}

  loading = false;
  allowedRoles = ['admin', 'user', 'faculty'];
  showPassword = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  roleValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return { required: true };
    return this.allowedRoles.includes(value) ? null : { invalidRole: true };
  }

  userForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    role: ['', [this.roleValidator.bind(this)]],
  });

  onSubmit(): void {
    if (this.userForm.invalid) {
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Form',
        text: 'Please fix validation errors before submitting.',
      });
      return;
    }

    Swal.fire({
      title: 'Saving user...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    this.loading = true;

    this.http
      .post('http://localhost:8091/user/register-user', this.userForm.value)
      .subscribe({
        next: () => {
          this.loading = false;
          Swal.fire({
            icon: 'success',
            title: 'User Registered',
            text: 'The user has been successfully registered!',
            timer: 2000,
            showConfirmButton: false,
          });
          this.userForm.reset();
        },
        error: () => {
          this.loading = false;
          Swal.fire({
            icon: 'error',
            title: 'Registration Failed',
            text: 'An error occurred while registering the user.',
          });
        },
      });
  }
}
