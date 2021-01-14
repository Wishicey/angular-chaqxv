import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ProfileUpdateInterface} from '../interfaces/profileUpdate.interface';
import {tap} from 'rxjs/operators';
import {User} from '../entities/user';
import {AuthService} from './auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  updateProfile(profileChanges: ProfileUpdateInterface): Observable<any> {
    return this.httpClient.patch(
      `${environment.api}/api/profile`,
      profileChanges
    ).pipe(
      tap((user: User) => {
        AuthService.user = user;
        this.snackBar.open('Profil mis à jour !');
      })
    );
  }
}
