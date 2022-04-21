

import { Injectable } from '@angular/core';
import { homme } from '../model/homme';

@Injectable({
  providedIn: 'root',
})
export class HommeService {
  constructor() {}

  private key: string = 'homme';

  public sauvegarder(humain: homme[]): void {
    // Conversion de notre variable en JSON
    const humainConverties = JSON.stringify(humain);

    // Sauvegarde de nos données dans le navigateur
    localStorage.setItem(this.key, humainConverties);
  }

  public restorer(): homme[] {
    // Récupération des données dans le navigateur au format JSON
    const humainConverties = localStorage.getItem(this.key);

    // on teste si des données sont bien présente
    if (humainConverties) {
      // Conversion de nos données JSON en variable
      const humainDeConverties = JSON.parse(humainConverties);

      // On retourne nos todolist et on indique que c'est bien une list de Todo
      return humainDeConverties as homme[];
    }

    // Si aucune donnée n'est présente dans le navigateur on lui retourne une TodoList Vide
    return [];
  }
}
