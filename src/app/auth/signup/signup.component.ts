import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  firstName = '';
  lastName = '';
  phone = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private service: AuthService
  ) {}

  onSignup() {
    if (this.firstName.length == 0) {
      this.toastr.warning('Please enter First Name !');
    } else if (this.lastName.length == 0) {
      this.toastr.warning('Please enter Last Name !');
    } else if (this.phone.length == 0) {
      this.toastr.warning('Please enter Mobile Number !');
    } else if (this.email.length == 0) {
      this.toastr.warning('Please enter Email !');
    } else if (this.password.length == 0) {
      this.toastr.warning('Please enter Password !');
    } else if (this.confirmPassword.length == 0) {
      this.toastr.warning('Please confirm a Password !');
    } else if (this.password != this.confirmPassword) {
      this.toastr.error("Password and Confirm Password field doesn't match !");
    } else {
      this.service
        .onSignup(
          this.firstName,
          this.lastName,
          this.phone,
          this.email,
          this.password
        )
        .subscribe((response: any) => {
          if (response.status == 'success') {
            this.toastr.success('Signed up successfully !');
            this.router.navigate(['/auth/login']);
          } else this.toastr.error(response.error);
        });
    }
  }
}
