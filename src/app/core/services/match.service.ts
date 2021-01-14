import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get(): Observable<any> {
    return this.httpClient.post(
      `${environment.api}/api/user/matchs`,
      {
        max:30
      }
    ).pipe(
      map(result=>{
        return result['data'].map(userData=>userData[0]);
      })
    );
  }
}
