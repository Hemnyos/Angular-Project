// src/app/disney/page/dysney-page/dysney-page.component.ts
import { Component, OnInit } from '@angular/core';
import { DisneyData, Personnage } from '../../model/disney';
import { DisneyService } from '../../service/disney.service';

@Component({
  selector: 'app-disney-page',
  templateUrl: './disney-page.component.html',
  styleUrls: ['./disney-page.component.scss'],
})
export class DisneyPageComponent implements OnInit {
  // stock les données de l'api
  disneyData: DisneyData | null = null;
  personnagesFavoris: Personnage[] = this.disneyService.restorer()
  

  constructor(private disneyService: DisneyService) {}

  ngOnInit(): void {
    // quand le composant s'affiche, nous éxécutons la  méthode getDisneyData
    this.getDisneyData();
  }

  
  // method pour récupérer les données en ligne
  getDisneyData(): void {
    fetch('https://api.disneyapi.dev/characters?page=2')
      .then((response) => {
        // les données récupérées son au format Json, cette ligne les convertie en variable
        return response.json();
      })
      .then((disneyData) => {
        // nous stockons les variables de l'api dans notre composant
        this.disneyData = disneyData;
      });
  }


  currentDisney = ''

 
  addPersonnage(personnage: Personnage): void {
    const index = this.personnagesFavoris.findIndex(
    (heros) => heros._id === personnage._id );
    this.personnagesFavoris.push(personnage)
    this.disneyService.sauvegarder(this.personnagesFavoris)
    
  }

  isPersonnageFavoris(personnage: Personnage): boolean {
    const index = this.personnagesFavoris.findIndex(
      (personnagechoisi) => personnagechoisi.name === personnage.name
    );

    return index > -1
    
  }
  
  
  
  
  removePersonnage(personnage: Personnage): void {
    const index = this.personnagesFavoris.findIndex(
      (heros) => heros._id === personnage._id
    );

    this.personnagesFavoris.splice(index, 1)
  }
  
  
}