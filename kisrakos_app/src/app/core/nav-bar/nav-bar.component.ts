import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent { 

  constructor(private router: Router) { }

  navigateToPage(pageId : number) {
     
    if(pageId == 1)
    {
    this.router.navigate(['../kezdolap']) 
    }
    else if(pageId == 2) 
    {
    this.router.navigate(['../latnivalok']) 
    }
    else if(pageId == 3)
    {
    this.router.navigate(['../galeria']) 
    }
    else if(pageId == 4)
    {
    this.router.navigate(['../dokumentumok']) 
    }
    else if(pageId == 5)
    {
    this.router.navigate(['../palyazatok']) 
    }
    else if(pageId == 6) 
    {
    this.router.navigate(['../dokumentum-valasztas']) 
    }
    else if(pageId == 7) 
    {
    this.router.navigate(['../kapcsolat']) 
    }
  }

  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  } 

  testClick():void{ 
    alert("most"); 
  }
 
  isCollapsed = false;
  navCollapsed = true; 
}
