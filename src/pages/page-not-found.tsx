import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
  
const PageNotFound: FunctionComponent = () => {
  
  return (
    <div className="center">
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" alt="Page not found"/>
      <h1>Oops! This page does not exist!</h1> 
      <Link to="/" className="waves-effect waves-teal btn-flat">
        HOME
      </Link>
    </div>
  );
}
  
export default PageNotFound;