import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TagInterface } from 'src/app/core/interfaces/tags.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProfileService } from 'src/app/core/services/profile.service';
import { TagService } from 'src/app/core/services/tag.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  tags$: Observable<TagInterface[]>;
  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private tagService: TagService
  ) { 
    this.tags$ = this.tagService.get();
    /*this.tags$.subscribe((val)=>{
      console.log({val})
    });*/
  }

  userForm = this.fb.group({
    first_name: [null],
    last_name: [null],
    tags: [[]]
  });

  ngOnInit() {
    const user = AuthService.user;
    this.firstNameControl.setValue(user.first_name);
    this.lastNameControl.setValue(user.last_name);
    this.tagsControl.setValue(user.tags);
  }

  get firstNameControl() {
    return this.userForm.get('first_name');
  }

  get lastNameControl() {
    return this.userForm.get('last_name');
  }

  get tagsControl(){
    return this.userForm.get('tags');
  }

  updateProfile() : void{
    const userChanges = this.userForm.getRawValue()

    this.profileService.updateProfile(userChanges).subscribe();

    //envoyer des infos a l'api
  }

}
