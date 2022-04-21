import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecetteModule } from './recette/recette.module';
import { TodoModule } from './todo/todo.module';
import { DisneyModule } from './disney/disney.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    RecetteModule,
    DisneyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }