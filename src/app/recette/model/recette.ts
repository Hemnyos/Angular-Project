// src/app/todo/model/todo.ts
export interface Recette {
    lignes: Ligne[];
  }
  
  export interface Ligne {
    ingrediant: Ingredient;
    quantite: number;
  }
  
  export interface Ingredient {
    icon: string;
    nom: string;
  }
  
  export const tomate: Ingredient = {
    icon: '🍅',
    nom: 'Tomate',
  };
  
  export const oignon: Ingredient = {
    icon: '🧅',
    nom: 'Oignon',
  };
  
  export const carotte: Ingredient = {
    icon: '🥕',
    nom: 'Carotte',
  };
  
  export const poivron: Ingredient = {
    icon: '🍎',
    nom: 'Poivron',
  };
  
  export const pommeDeTerre: Ingredient = {
    icon: '🥔',
    nom: 'Pomme de Terre',
  };
  
  export const ingredients: Ingredient[] = [
    tomate,
    oignon,
    carotte,
    poivron,
    pommeDeTerre,
  ];