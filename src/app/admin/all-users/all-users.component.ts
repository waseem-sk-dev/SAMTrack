import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
  users: User[] = [];
  loading: boolean = false;
  searchText: string = '';
  selectedRole: string = 'All';

  page: number = 0;
  size: number = 10;
  totalUsers: number = 0;
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.loading = true;
    this.userService
      .getAllUsers(this.page, this.size, this.selectedRole, this.searchText)
      .subscribe({
        next: (data) => {
          this.users = data.users;
          this.totalUsers = data.total;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          Swal.fire('Error', 'Failed to fetch users', 'error');
        },
      });
  }

  onFilterChange(): void {
    this.page = 0;
    this.fetchUsers();
  }

  resetFilters(): void {
    this.searchText = '';
    this.selectedRole = 'All';
    this.page = 0;
    this.fetchUsers();
  }

  onPageChange(newPage: number): void {
    if (newPage >= 0 && newPage * this.size < this.totalUsers) {
      this.page = newPage;
      this.fetchUsers();
    }
  }

  onEditUser(user: User): void {
    this.router.navigate(['edit-user', user.username], {
      relativeTo: this.route,
    });
  }

  onDeleteUser(user: User): void {
    Swal.fire({
      title: `Delete ${user.username}?`,
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        this.loading = true;
        this.userService.deleteUser(user.username).subscribe({
          next: (response) => {
            console.log('Delete response:', response); // plain string
            this.users = this.users.filter((u) => u.username !== user.username);
            this.loading = false;
            Swal.fire('Deleted!', response, 'success');
            this.onFilterChange();
          },
          error: () => {
            this.loading = false;
            Swal.fire('Error', 'Failed to delete user', 'error');
          },
        });
      }
    });
  }
}
