import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import {AuthRoutingModule} from './auth-routing.module';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';



@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
