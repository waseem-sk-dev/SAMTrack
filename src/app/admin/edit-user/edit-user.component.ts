import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  userForm!: FormGroup;
  loading = false;
  usernameParam = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usernameParam = this.route.snapshot.paramMap.get('username')!;
    this.initForm();
    this.loadUser();
  }

  initForm(): void {
    this.userForm = this.fb.group({
      username: [{ value: '', disabled: true }],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
    });
  }

  loadUser(): void {
    this.loading = true;
    this.userService.getUserByUsername(this.usernameParam).subscribe({
      next: (user) => {
        this.userForm.patchValue(user);
        this.loading = false;
      },
      error: () => {
        Swal.fire('Error', 'Failed to load user data', 'error');
        this.loading = false;
      },
    });
  }

  onSubmit(): void {
    if (this.userForm.invalid) return;

    const updatedUser = {
      ...this.userForm.getRawValue(),
      username: this.usernameParam,
    };

    this.loading = true;
    this.userService.updateUser(updatedUser).subscribe({
      next: () => {
        Swal.fire('Success', 'User updated successfully', 'success').then(
          () => {
            this.router.navigate(['/admin-dashboard/all-users']);
          }
        );
      },
      error: () => {
        Swal.fire('Error', 'Update failed. Try again.', 'error');
        this.loading = false;
      },
    });
  }
}
