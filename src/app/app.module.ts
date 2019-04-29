import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './components/app/app.component';
import { SidenavigationComponent } from './components/sidenavigation/sidenavigation.component';
import { BuildingDetailsComponent } from './modules/building/components/building-details/building-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavigationComponent,
    BuildingDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
