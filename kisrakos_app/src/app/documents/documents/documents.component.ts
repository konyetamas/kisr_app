import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentItem } from 'src/app/shared/model/documentItem';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  documents: DocumentItem [] = []; 
  documentsVal: DocumentItem [] = []; 

  maxSize = 5;
  bigTotalItems = 175;
  bigCurrentPage = 1;

  constructor(private documentService: DocumentService, private route: ActivatedRoute){}
 

  ngOnInit(): void {  
 
    this.getDocuments();
    this.getDocumentsVal();
  } 

  getDocuments(){ 
    this.documentService.getDocuments(1).subscribe((data) => {              
      this.documents = data;  
    }, (error) => { 
      console.log(error);
    })} 

  getDocumentsVal(){  
      this.documentService.getDocuments(2).subscribe((data) => {              
        this.documentsVal = data;  
      }, (error) => { 
        console.log(error);
      })  
  }  
} 
