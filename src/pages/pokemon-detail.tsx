import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Pokemon from '../models/pokemon';
//import POKEMONS from '../models/mock-pokemon';
import formatDate from '../helpers/format-date';
import formatType from '../helpers/format-type';
import PokemonService from '../service/pokemon-service';
import Loader from '../components/loader';
  
type Params = { id: string };
  
const PokemonDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    
  const [pokemon, setPokemon] = useState<Pokemon|null>(null);
  
  useEffect(() => {
   PokemonService.getPokemon(+match.params.id).then(pokemon => setPokemon(pokemon))
  }, [match.params.id]);
    
  return (
    <div>
      { pokemon ? (
        <div className="row">
          <div className="col s12 m8 offset-m2"> 
            <h2 className="header center">{ pokemon.name }</h2>
            <div className="card hoverable"> 
              <div className="card-image">
                <img src={pokemon.picture} alt={pokemon.name} style={{width: '250px', margin: '0 auto'}}/>
                <Link to={`/pokemons/pokemon-edit/${pokemon.id}`} className="btn btn-floating halfway-fab waves-effect waves-light"><i className="material-icons">edit</i></Link>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <table className="bordered striped">
                    <tbody>
                      <tr> 
                        <td>Name</td> 
                        <td><strong>{ pokemon.name }</strong></td> 
                      </tr>
                      <tr> 
                        <td>Health Points</td> 
                        <td><strong>{ pokemon.hp }</strong></td> 
                      </tr> 
                      <tr> 
                        <td>Damage</td> 
                        <td><strong>{ pokemon.cp }</strong></td> 
                      </tr> 
                      <tr> 
                        <td>Types</td> 
                        <td>
                          {pokemon.types.map(type => (
                           <span key={type} className={formatType(type)}>{type}</span>
                          ))}</td> 
                      </tr> 
                      <tr> 
                        <td>Creation Date</td> 
                        <td>{formatDate(pokemon.created)}</td> 
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-action">
                  <Link to="/">Back</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h4 className="center"><Loader/></h4>
      )}
    </div>
  );
}
  
export default PokemonDetail;