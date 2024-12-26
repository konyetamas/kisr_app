import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CompetationComponent } from './competation/competation.component';
import { SightsComponent } from './sights/sights.component';
import { NavBarComponent } from '../core/nav-bar/nav-bar.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    CompetationComponent,
    SightsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,  
  ]
})
export class HomeModule { }
