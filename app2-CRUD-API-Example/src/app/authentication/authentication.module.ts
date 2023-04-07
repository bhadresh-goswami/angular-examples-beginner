import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [UserLoginComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    CheckboxModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    MessagesModule,
  ],
})
export class AuthenticationModule {}
