import { Component, OnInit, Input, AfterContentInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { AlbumDetail } from 'src/app/shared/model/albumDetail';
import { FilterParams } from 'src/app/shared/model/filterParams';
import { ImageItem } from 'src/app/shared/model/imageItem';
import { AlbumService } from '../album.service';
 

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailComponent implements OnInit  {
  
  albumId : string | null = null;
  images: ImageItem [] = []; 
  albumDetail : AlbumDetail [] =[];
  filterParams = new FilterParams(); 
 
  totalItems = 0; 
  currentPage = 0; 
 
  constructor(private albumService: AlbumService, private route: ActivatedRoute){}
   
   
  ngOnInit(): void {
    this.filterParams.pageNumber = 1;
     
    this.getQueryParam();
    this.getAlbumDetail(true);     
   } 
 
  getQueryParam(){ 
    this.albumId = this.route.snapshot.paramMap.get('id');
  } 

  getAlbumDetail(initCall : boolean){ 
    var pageItem =  Number(this.filterParams.pageNumber);

    this.albumService.getAlbumDetail(Number(this.albumId), pageItem).subscribe((data) => {
      
      if(initCall)
      {
      this.totalItems = Math.ceil(data.totalItems / 12);  
      } 
              
      this.images = data.images;  
    }, (error) => {
      console.log(error);
    })   

  } 

  pageChanged(event: PageChangedEvent): void {
    this.filterParams.pageNumber = event.page;
    this.getAlbumDetail(false);         
  } 
 
}

