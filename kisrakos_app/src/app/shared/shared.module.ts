import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagerComponent } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PaginationModule.forRoot()
  ], 
  exports: [
    PaginationModule, 
    FormsModule, 
    PagerComponent 
  ]
})
export class SharedModule { }

