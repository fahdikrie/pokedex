import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Auxiliary from '../../hoc/Auxiliary';
import GridWrapper from '../../components/GridWrapper/GridWrapper';
import GridCards from '../../components/GridWrapper/GridCards/GridCards';
import classes from './PokeFeed.module.css';


import { fetchPokeListAPI } from '../../api';
import { fetchPokeList } from './action';

// const PokeFeed = (props) => {
//   const [pokemon, setPokemon] = useState({
//     pokemon: [],
//     nextUrl: '',
//     prevUrl: ''
//   })

//   useEffect(() => {
//     axios.get('https://pokeapi.co/api/v2/pokemon')
//     .then((res) => {
//       console.log(res.data);
//       setPokemon({
//         ...pokemon,
//         pokemon: res.data.results.map(arr => [arr.name, arr.url]),
//         nextUrl: res.data.next
//       });
//     })
//   }, [])

//   console.log(pokemon.pokemon);

//   return (
//     <Auxiliary>
//       <GridWrapper>
//         {pokemon.pokemon.map(
//           arrEl => <GridCards pokeName={arrEl[0]} pokeUrl={arrEl[1]}/>
//         )}
//       </GridWrapper>
//     </Auxiliary>
//   )
// }

class PokeFeed extends Component {

  componentDidMount() {
    this.props.fetchPokeList();
    console.log(this.props.pokemonList);
  };

  render() {
    return(
      <Auxiliary>
        <GridWrapper>
          {/* {this.props.pokemonList.map(
            arrEl => <GridCards pokeName={arrEl[0]} pokeUrl={arrEl[1]}/>
          )} */}
          haha
        </GridWrapper>
      </Auxiliary>
    )
  }
}

function mapStateToProps(state) {
  return {
    pokemonList: state.pokemonList,
    prevUrl: state.prevUrl,
    nextUrl: state.nextUrl
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPokeList: () => dispatch(fetchPokeList())
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(PokeFeed);