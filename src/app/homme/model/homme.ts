export interface humain {
    lignes: Ligne[];
  
  }
  
  export interface Ligne {
    humains: homme;
    quantite: number;
  }
  
  export interface homme {
    lignes: any;
    icon: string;
    nom: string;
  }
  
  export const Homme: homme = {
      icon: '👨',
      nom: 'Homme',
      lignes: []
  };
  
  export const Femme: homme = {
      icon: '👩',
      nom: 'Femme',
      lignes: []
  };
  
  export const Enfant: homme = {
      icon: '👶',
      nom: 'Enfant',
      lignes: []
  };
  export const humains: homme[] = [
    Homme,
    Femme,
    Enfant,
  ];