import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildingRoutingModule } from './building-routing.module';

import { BuildingDetailsComponent } from './components/building-details/building-details.component';

@NgModule({
  imports: [
    CommonModule,
    BuildingRoutingModule
  ],
  declarations: [
    BuildingDetailsComponent
  ]
})
export class BuildingModule { }
