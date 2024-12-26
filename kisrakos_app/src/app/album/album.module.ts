import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { CoreModule } from '../core/core.module';
import { AlbumItemComponent } from './album-item/album-item.component';
import { AlbumDetailComponent } from './album-details/album-details.component';
import { ImageItemComponent } from './image-item/image-item.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router'; 
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ImageDetailComponent } from './image-detail/image-detail.component';


 
@NgModule({
  declarations: [
    AlbumItemComponent, 
    AlbumComponent ,
    AlbumDetailComponent,  
    ImageItemComponent, ImageDetailComponent
    ],
  imports: [ 
    CommonModule,
    CoreModule, 
    SharedModule,   
    RouterModule, 
    PaginationModule 
  ]
})
export class AlbumModule { }
