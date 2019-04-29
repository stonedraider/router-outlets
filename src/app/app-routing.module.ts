import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { SidenavigationComponent } from "./components/sidenavigation/sidenavigation.component";

const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "buildings/cockpit",
        pathMatch: "full"
    },
    {
        path: "buildings/:panel",
        component: SidenavigationComponent,
    },
    {
        path: "feature-component",
        loadChildren: "./modules/building/building.module#BuildingModule",
        outlet: "buildingDetails"
      }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false
            }
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}
