import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashRoutingModule } from './dash-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { ProfileComponent } from './components/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent, ProfileComponent],
  imports: [
    CommonModule,
    DashRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ]
})
export class DashModule { }
