import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarChildComponent } from './nav-bar-child/nav-bar-child.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    NavBarChildComponent
  ],
  imports: [
    CommonModule, 
    CollapseModule, 
    BrowserAnimationsModule
  ], 
  exports: [
    NavBarComponent, 
    FooterComponent, 
    NavBarChildComponent, 
    CollapseModule , 
    BrowserAnimationsModule 
  ]
})
export class CoreModule { }
