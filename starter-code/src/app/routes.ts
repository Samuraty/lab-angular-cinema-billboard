import { Routes } from "@angular/router";
import { MyHomeComponentComponent } from "../app/my-home-component/my-home-component.component";
import { MyMovieComponentComponent } from "../app/my-movie-component/my-movie-component.component";


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponentComponent},
  { path: 'movie/:id', component: MyMovieComponentComponent },
];