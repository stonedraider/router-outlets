import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public sidenavigation: any;

  public onActivate(componentRef) {
    this.sidenavigation = componentRef;
  }
}
