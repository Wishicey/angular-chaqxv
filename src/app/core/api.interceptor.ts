import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionService } from './services/session.service';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptor implements HttpInterceptor{

  constructor(
    private sessionService: SessionService
  ) { 

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    
    const update: {headers?: HttpHeaders} = {};
    const token = this.sessionService.getToken();

    if(token){
      update.headers = new HttpHeaders(
        {
          Authorization: `Bearer ${token}`,
        }
      )
    }    
    const clonedRequest: HttpRequest<any> = req.clone(update);

    return next.handle(clonedRequest);
  }
}
