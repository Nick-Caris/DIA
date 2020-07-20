import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {WeaponsComponent} from "./weapons/weapons.component";
import {MenuComponent} from "./menu/menu.component";
import {PartsComponent} from "./parts/parts.component";


const routes: Routes = [
  { path: 'main-component', component: AppComponent },
  { path: 'menu-component', component: MenuComponent },
  { path: 'weapon-component', component: WeaponsComponent },
  { path: 'part-component', component: PartsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
