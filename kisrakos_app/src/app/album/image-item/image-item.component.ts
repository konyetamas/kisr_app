import { Component, Input } from '@angular/core';
import { ImageItem } from 'src/app/shared/model/imageItem';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss']
})
export class ImageItemComponent {
  @Input() image?: ImageItem; 

  baseUrl='/assets/images/albums';
}
 