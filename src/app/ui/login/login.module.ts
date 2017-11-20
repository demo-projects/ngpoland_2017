import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SignInComponent } from './sign-in.component';
import {ReactiveFormsModule} from '@angular/forms';
import {InputBoxComponent} from './input-box.component';


@NgModule({
  imports: [CommonModule, LoginRoutingModule, ReactiveFormsModule],
  declarations: [LoginComponent, SignInComponent, InputBoxComponent]
})
export class LoginModule { }
