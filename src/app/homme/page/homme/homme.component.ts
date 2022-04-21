// src/app/todo/page/todo-page/todo-page.component.ts
import { Component, OnInit } from '@angular/core';
import { humains, homme, humain } from '../../model/homme';
import { HommeService } from '../../service/homme.service';

@Component({
  selector: 'app-homme-page',
  templateUrl: './homme.component.html',
  styleUrls: ['./homme.component.scss'],
})
export class HommeComponent implements OnInit {

  humain: humain = {lignes: []};
  Humain: homme = {
    lignes: [],
    icon: '👵',
    nom: 'Mère-Grand'
  };
  Humains: homme[] = humains
  homme: any;

  
  addLigne(humain: homme,): void {
    const index = this.Humain.lignes.findIndex(
      (ligne: { humain: homme[]; }) => ligne.humain === this.Humains
    );

    if (index > 1) {
      this.humain.lignes[index].quantite++;
      return;
  
    }

    this.Humain.lignes.push({
      humains,
    
    });
  }
  removeLigne(humain: homme): void {
    const index = this.Humain.lignes.findIndex(
      (ligne: { Humains: homme[]; }) => ligne.Humains === this.Humains
    );

    this.Humain.lignes.splice(index, 1)
  }
  

  
  sauvegarder(): void {
    this.hommeService.sauvegarder(this.homme);
  }

  // Rajouter ces arguments au contructeur va faire en sorte que Angular injecte le service dans ce composant
  constructor(private hommeService: HommeService) {}

  ngOnInit(): void {}
}
