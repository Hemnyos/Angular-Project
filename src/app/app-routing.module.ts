// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Nous importons notre page composant dans le routeur
import { TodoPageComponent } from './todo/page/todo-page/todo-page.component';
import { RecettePageComponent } from './recette/page/recette-page/recette-page.component';
import { DisneyPageComponent } from './disney/page/disney-page/disney-page.component';
import { Page404Component } from './404/page/page404/page404.component';

const routes: Routes = [
  // Affiche le composant TodoPageComponent quand l'url est todo
  { path: 'todo', component: TodoPageComponent },
  { path: 'recette', component: RecettePageComponent },
  {path: 'disney', component: DisneyPageComponent},
  {path: '404', component: Page404Component},
  { path: '', component: TodoPageComponent },
  { path: '**', pathMatch: 'full', component: Page404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}