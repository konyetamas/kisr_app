import { Component, Input } from '@angular/core';
import { DocumentItem } from 'src/app/shared/model/documentItem';

@Component({
  selector: 'app-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.scss']
})
export class DocumentItemComponent {
  @Input() document?: DocumentItem; 
}
