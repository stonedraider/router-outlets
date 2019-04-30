import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { SidenavigationComponent } from "./components/sidenavigation/sidenavigation.component";

const appRoutes: Routes = [
    // {
    //     path: "",
    //     redirectTo: "sidenavigation",
    //     pathMatch: "full"
    // },
    {
        path: "",
        component: SidenavigationComponent,
        children: [
            {
                path: "feature-component",
                loadChildren: "src/app/modules/building/building.module#BuildingModule",
                // outlet: "buildingDetails"
            }
        ]
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: true
            }
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}
