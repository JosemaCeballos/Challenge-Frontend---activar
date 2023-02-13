import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CharactersComponent } from "./components/characters/characters.component";

const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "/characters",
        pathMatch: 'full'
    },
    { path: "characters", component: CharactersComponent },
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)
