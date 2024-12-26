import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { SightsComponent } from './home/sights/sights.component';
import { ContactComponent } from './home/contact/contact.component';
import { CompetationComponent } from './home/competation/competation.component';
import { DocumentsComponent } from './documents/documents/documents.component'
import { AlbumComponent } from './album/album/album.component'
import { AlbumDetailComponent } from './album/album-details/album-details.component';
import { ImageItemComponent } from './album/image-item/image-item.component';
import { ImageDetailComponent } from './album/image-detail/image-detail.component';
import { DocumentsValasztasComponent } from './documents/documents-valasztas/documents-valasztas.component';
 

const routes: Routes = [
  {path: '', component: HomeComponent},  
  {path: 'kezdolap', component: HomeComponent},  
  {path: 'latnivalok', component: SightsComponent}, 
//  {path: 'latnivalok/:id', component: SightsComponent}, 
  {path: 'kapcsolat', component: ContactComponent}, 
  {path: 'palyazatok', component: CompetationComponent}, 
  {path: 'dokumentumok', component: DocumentsComponent}, 
  {path: 'galeria', component: AlbumComponent},    
  {path: 'dokumentum-valasztas', component: DocumentsValasztasComponent},          
      
 // { 
   // path: 'album/:id', component: AlbumDetailComponent}    
  {path: 'album/:id', component: AlbumDetailComponent},
  {path: 'kep/:id', component: ImageDetailComponent}    
]; 
 

@NgModule({  
  imports: [RouterModule.forRoot(routes, {useHash: true, anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }



