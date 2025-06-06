export default class Pokemon {
    // 1. Typage des propriétés d'un pokémon.
    id: number;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    types: Array<string>;
    created?: Date;
     
    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
     id: number,
     hp: number = 100,
     cp: number = 10,
     name: string = '...',
     picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/XXX.png',
     types: Array<string> = ['Normal'],
     created: Date = new Date()
    ) {
     // 3. Initialisation des propiétés d'un pokémons.
     this.id = id;
     this.hp = hp;
     this.cp = cp;
     this.name = name;
     this.picture = picture;
     this.types = types;
     this.created = created;
    }
   }

   //questo file è la classe pokemon, che ha il ruolo di rappresenatre un pokemnon nella nostra pplicazione. Ogni pokemon avrà dunque un identificativo unico sotto forma di numero, il numero di danni, un url dell'immagine, un array contenente i tipi possibili del pokemon e la data di creazione.
