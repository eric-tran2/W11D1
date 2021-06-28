import React from 'react';
import { Route, Switch } from "react-router-dom";
import PokemonIndexContainer from './../components/pokemon/pokemon_index_container';

const App = () => (
  <div>
    <Route path="/" component={PokemonIndexContainer} />
  </div>
)