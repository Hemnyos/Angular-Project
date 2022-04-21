// src/app/todo/page/todo-page/todo-page.component.ts
import { Component, OnInit } from '@angular/core';
import { Ingredient, ingredients,Recette } from '../../model/recette';

@Component({
  selector: 'app-recette-page',
  templateUrl: './recette-page.component.html',
  styleUrls: ['./recette-page.component.scss'],
})
export class RecettePageComponent implements OnInit {
  // La variable qui va contenir nos todos, nous allons définir sa forme avec le Typage Todo[]
  recette: Recette = { lignes: [] };
  ingredients: Ingredient[] = ingredients

  
  addLigne(ingrediant: Ingredient, quantite: number = 1): void {
    const index = this.recette.lignes.findIndex(
      (ligne) => ligne.ingrediant === ingrediant
    );

    if (index > -1) {
      this.recette.lignes[index].quantite++;
      return;
    }

    this.recette.lignes.push({
      ingrediant,
      quantite,
    });
  }
  removeLigne(ingrediant: Ingredient): void {
    const index = this.recette.lignes.findIndex(
      (ligne) => ligne.ingrediant === ingrediant
    );

    this.recette.lignes.splice(index, 1)
  }
  
  

  
  constructor() {}

  ngOnInit(): void {}
}
