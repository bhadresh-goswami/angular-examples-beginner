import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { LoginResult } from 'src/app/models/login.model';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers: [MessageService],
})
export class UserLoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });
  }
  onSubmit(login: FormGroup) {
    // console.log(`form valid:${login!.valid}`);  // console.log(`form email:${login!.value.email}`);  // console.log(`form email:${login!.value.password}`);  // console.log(`form message:${login!.value.message}`);
    if (login.valid) {
      this.authService.userLogin(login.value).subscribe((res: any) => {
        if (res == null || res.response == null) {
          this.messageService.add({
            severity: 'error',
            summary: 'Failed Login',
            detail: 'Wrong Email or Password!',
          });
        } else {
          //console.log(res.response);
          let token = res.response.token;
          this.authService.setToken(token);
          let role = res.response.userRole;
          let userId = res.response.userId;
          let userLoginResponse: LoginResult = res;
          console.log(userLoginResponse);
          this.authService.setUserDetails(userLoginResponse);
          this.router.navigateByUrl('admin');
        }
      });
    } else {
    }
  }
}
