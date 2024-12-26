import { Component, OnInit } from '@angular/core';
import { DocumentItem } from 'src/app/shared/model/documentItem';
import { DocumentService } from '../document.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-documents-valasztas',
  templateUrl: './documents-valasztas.component.html',
  styleUrls: ['./documents-valasztas.component.scss']
})
export class DocumentsValasztasComponent implements OnInit {

  documents: DocumentItem [] = []; 
  documentsJeloltek: DocumentItem [] = []; 
  documentsVal: DocumentItem [] = []; 

  maxSize = 5;
  bigTotalItems = 175;
  bigCurrentPage = 1;

  constructor(private documentService: DocumentService, private route: ActivatedRoute){}
 
  ngOnInit(): void {  
 
    this.getDocuments();
    this.getJeloltDocuments();
  } 

  getDocuments(){ 
    this.documentService.getDocuments(3).subscribe((data) => {              
      this.documents = data;  
    }, (error) => { 
      console.log(error);
    })}  

    getJeloltDocuments(){ 
      this.documentService.getDocuments(4).subscribe((data) => {              
        this.documentsJeloltek = data;  
      }, (error) => { 
        console.log(error);
    })}  
}
