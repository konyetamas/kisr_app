import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DocumentItem } from '../shared/model/documentItem'; 

@Injectable({
  providedIn: 'root'
}) 
export class DocumentService {

  constructor(private http: HttpClient) { }

  getDocuments(docType? : number){
    return this.http.get<DocumentItem[]>("/api/documents/"+docType);
  } 
}
