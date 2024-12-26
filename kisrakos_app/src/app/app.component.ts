import { Component } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}] 

})
export class AppComponent {
  title = 'angular-kisrakos-app';
}
