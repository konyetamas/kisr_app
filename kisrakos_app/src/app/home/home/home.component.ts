import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  imageSrc = '/images/templom.jpg'  

  constructor(private router: Router) { }

  navigateToPage(imageId : number) {
     
    if(imageId == 1)
    { 
    this.router.navigate(['/latnivalok'], { fragment: 'about' });
    }
    else if(imageId == 2)  
    {
    this.router.navigate(['/latnivalok'], { fragment: 'kalyha' });
    }
    else if(imageId == 3)
    {
    this.router.navigate(['/latnivalok'], { fragment: 'alpaka' });
    }
  } 

}
