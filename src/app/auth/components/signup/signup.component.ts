import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {​​​​​tap}​​​​​ from 'rxjs/operators';
import { User } from 'src/app/core/entities/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router
    ) {
  }

  userForm = this.fb.group({
    first_name: [null],
    last_name: [null],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit() {
  }

  get firstNameControl() {
    return this.userForm.get('first_name');
  }

  get lastNameControl() {
    return this.userForm.get('last_name');
  }

  get emailControl() {
    return this.userForm.get('email');
  }

  get passwordControl() {
    return this.userForm.get('password');
  }

  signup(){
    const newUser = new User(this.userForm.getRawValue());
    this.authService.signup(newUser).subscribe(
      ()=>{
        this.authService.signin(newUser.email, newUser.password).subscribe(
          () => {
            this.router.navigate(['dash/home'])
          }
        );
      },
      (err)=>{
        //Vérifier les erreurs de type duplicate
      }
    );
  }

}

