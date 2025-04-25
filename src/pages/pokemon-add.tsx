import React, { FunctionComponent, useState} from 'react';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';
import "./pokemon-add.css";


const PokemonAdd: FunctionComponent = ()=> {
    const [id] = useState<number>(new Date().getTime());
    const [pokemon] = useState<Pokemon>(new Pokemon(id));

    return (
        <div className = "row">
            <h2 className="header center">Add a Pokémon</h2>
            <PokemonForm pokemon={pokemon} isEditForm={false}></PokemonForm>
        </div>
    )
}
  
export default PokemonAdd;