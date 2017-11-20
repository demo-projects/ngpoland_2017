import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SignInComponent } from './sign-in.component';

@NgModule({
  imports: [CommonModule, LoginRoutingModule],
  declarations: [LoginComponent, SignInComponent]
})
export class LoginModule { }
