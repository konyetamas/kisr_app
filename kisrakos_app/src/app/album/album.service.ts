import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from 'src/app/shared/model/album';
import { AlbumDetail } from '../shared/model/albumDetail';
import { ImageItem } from '../shared/model/imageItem';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAlbums(){
    return this.http.get<Album[]>("/api/albums");
  } 

  getAlbumDetail(albumId? : number, pageNumber? : number){ 
    console.log(albumId);  
    return this.http.get<AlbumDetail>("/api/albums/"+ albumId+"/"+pageNumber);
  }

  getImage(imageId? : number){ 
    return this.http.get<ImageItem>("/api/albums/image/"+imageId);
  }

}
