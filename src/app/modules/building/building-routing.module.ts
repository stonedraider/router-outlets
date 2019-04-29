import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BuildingDetailsComponent } from "./components/building-details/building-details.component";

const routes: Routes = [
    {
        path: "",
        component: BuildingDetailsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class BuildingRoutingModule {

}
