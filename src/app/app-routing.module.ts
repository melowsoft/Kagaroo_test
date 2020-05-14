import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component"
import {HistoryComponent} from "./history/history.component"


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "history",
    component: HistoryComponent
  },
  {
    path: "**",
    redirectTo: "/",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
