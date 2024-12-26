import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';
import { Album } from 'src/app/shared/model/album';
import { FilterParams } from 'src/app/shared/model/filterParams';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']  
}) 
export class AlbumComponent implements OnInit  { 

albums: Album [] = [];  

constructor(private albumService: AlbumService){}
 
 
   ngOnInit(): void {  
    this.getAlbums();      
  }


getAlbums(){ 

    this.albumService.getAlbums().subscribe((data) => {
      this.albums = data;
    
    }, (error) => {
      console.log(error);
    })
} 
}
