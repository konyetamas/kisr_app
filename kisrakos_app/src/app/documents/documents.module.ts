import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsComponent } from './documents/documents.component';
import { CoreModule } from '../core/core.module';
import { DocumentItemComponent } from './document-item/document-item.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { BasicDatasComponent } from './basic-datas/basic-datas.component';
import { ActivityDatasComponent } from './activity-datas/activity-datas.component';
import { DocumentsValasztasComponent } from './documents-valasztas/documents-valasztas.component';
import { ValasztasiSzervekComponent } from './valasztasi-szervek/valasztasi-szervek.component';



@NgModule({
  declarations: [
    DocumentsComponent,
    DocumentItemComponent,
    BasicDatasComponent,
    ActivityDatasComponent,
    DocumentsValasztasComponent,
    ValasztasiSzervekComponent
  ],
  imports: [
    CommonModule,
    CoreModule, 
    SharedModule, 
    RouterModule, 
    MatTabsModule
  ]
})
export class DocumentsModule { }

