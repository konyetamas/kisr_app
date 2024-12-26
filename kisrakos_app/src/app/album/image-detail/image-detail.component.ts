import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageItem } from 'src/app/shared/model/imageItem';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {
  
  imageId : string | null = null;
  image? : ImageItem; 

  baseUrl='/assets/images/albums'; 
  
  ngOnInit(): void {
    this.getQueryParam();
    this.getImage(); 
  }

  constructor(private albumService: AlbumService, private route: ActivatedRoute){}

  getQueryParam(){ 
    this.imageId = this.route.snapshot.paramMap.get('id');
  } 

  getImage(){ 
    this.albumService.getImage(Number(this.imageId)).subscribe((data) => {
      this.image = data;

    }, (error) => {
      console.log(error);
    })
  }


}
