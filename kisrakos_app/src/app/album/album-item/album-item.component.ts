import { Component, Input } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { Album } from 'src/app/shared/model/album';

@Component({ 
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.scss']
})
export class AlbumItemComponent  { 
  @Input() album?: Album; 

albumItem? : Album;  

}
