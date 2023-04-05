import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [UserLoginComponent],
  imports: [CommonModule, AuthenticationRoutingModule, CheckboxModule],
})
export class AuthenticationModule {}
