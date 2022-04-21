import { Injectable } from '@angular/core';
import { Personnage } from '../model/disney';

@Injectable({
  providedIn: 'root',
})
export class DisneyService {
  constructor() {}

  private key: string = 'disney';

  public sauvegarder(disney: Personnage[]): void {
    // Conversion de notre variable en JSON
    const todosConverties = JSON.stringify(disney);

    // Sauvegarde de nos données dans le navigateur
    localStorage.setItem(this.key, todosConverties);
  }

  public restorer(): Personnage[] {
    // Récupération des données dans le navigateur au format JSON
    const todosConverties = localStorage.getItem(this.key);

    // on teste si des données sont bien présente
    if (todosConverties) {
      // Conversion de nos données JSON en variable
      const todosDeConverties = JSON.parse(todosConverties);

      // On retourne nos todolist et on indique que c'est bien une list de Todo
      return todosDeConverties as Personnage[];
    }

    // Si aucune donnée n'est présente dans le navigateur on lui retourne une TodoList Vide
    return [];
  }
}