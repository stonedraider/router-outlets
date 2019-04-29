import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.css']
})
export class SidenavigationComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public openBuildingDetails() {
    console.log("openBuildingDetails()");
    this.router.navigate([{ outlets: { buildingDetails: "feature-component" } }]);
  }

}
