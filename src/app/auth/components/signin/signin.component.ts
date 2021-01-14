import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {Router}​​​​​ from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {


  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private routeur: Router) {
  }

  userForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]]
  });

  ngOnInit() {
  }

  get emailControl() {
    return this.userForm.get('email');
  }

  get passwordControl() {
    return this.userForm.get('password');
  }

  signin() {
    // connexion
    console.log('submitted : ');
    console.log(this.userForm.getRawValue());

    this.authService.signin(
      this.emailControl.value,
      this.passwordControl.value
    ).subscribe(
      (result) => {
      this.routeur.navigate(['dash/home']);
      
    },
    (err) => {
      // On peut dire à l'utilisateur que le mdp/email est incorrect
      console.log({err});
    });


  }
}
