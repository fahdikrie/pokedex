import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Auxiliary from '../../hoc/Auxiliary';
import GridWrapper from '../../components/GridWrapper/GridWrapper';
import GridCards from '../../components/GridWrapper/GridCards/GridCards';
import classes from './PokeFeed.module.css';

const PokeFeed = (props) => {
  const [pokemon, setPokemon] = useState({
    pokemon: [],
    nextUrl: '',
    prevUrl: ''
  })

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then((res) => {
      console.log(res.data);
      setPokemon({
        ...pokemon,
        pokemon: res.data.results.map(arr => [arr.name, arr.url]),
        nextUrl: res.data.next
      });
    })
  }, [])

  console.log(pokemon.pokemon);

  return (
    <Auxiliary>
      <GridWrapper>
        {pokemon.pokemon.map(
          arrEl => <GridCards pokeName={arrEl[0]} pokeUrl={arrEl[1]}/>
        )}
      </GridWrapper>
    </Auxiliary>
  )
}

export default PokeFeed;