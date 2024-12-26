import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-child',
  templateUrl: './nav-bar-child.component.html',
  styleUrls: ['./nav-bar-child.component.scss']
})
export class NavBarChildComponent {
 
  constructor(private router: Router) { }

  navigateToPage(pageId : number) {
     
    if(pageId == 1)
    {
    this.router.navigate(['../kezdolap']) 
    }
    else if(pageId == 2) 
    {
    this.router.navigate(['/latnivalok']) 
    }
    else if(pageId == 3)
    {
    this.router.navigate(['/galeria']) 
    }
    else if(pageId == 4)
    {
    this.router.navigate(['/dokumentumok']) 
    }
    else if(pageId == 5)
    {
    this.router.navigate(['/palyazatok']) 
    }
    else if(pageId == 6) 
    {
    this.router.navigate(['/kapcsolat']) 
    }
  }

}
