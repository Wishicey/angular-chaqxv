import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/entities/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatchService } from 'src/app/core/services/match.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // User = tableau avec nombre de user indéfini
  // [User] = tableau avec une seule entité

  matchs$: Observable<User[]>;
  matchs: User[] = [];

  constructor(
    private matchService: MatchService,
  ) { 
    this.matchs$ = matchService.get();
    this.matchs$.subscribe((userMatchs)=>{
      console.log({userMatchs});
      this.matchs = userMatchs;
    });
  }

  ngOnInit() {
  }

  get user(): User{
    return AuthService.user;
  }

}
