import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Auxiliary from '../../hoc/Auxiliary';
import GridWrapper from '../../components/GridWrapper/GridWrapper';
import GridCards from '../../components/GridWrapper/GridCards/GridCards';
import classes from './PokeFeed.module.css';


import { fetchPokeListAPI } from '../../api';
import { fetchPokeList } from './action';

class PokeFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isLoaded: false,
    };
}

  componentDidMount() {
    console.log(this.props)
    this.props.fetchPokeList();
  };

  render() {
    // const { isLoading, isLoaded, data } = this.props;
    // if (isLoading) return 'haha'; 
    // if (!isLoaded || !data) return null;
 
    return(
      <Auxiliary>
        <GridWrapper>
          {/* {this.props.pokemonList.map(
            arrEl => <GridCards pokeName={arrEl[0]} pokeUrl={arrEl[1]}/>
          )} */}
          {(typeof this.props.pokemonList != 'undefined')?
            this.props.pokemonList.map(
              arrEl => <GridCards pokeName={arrEl[0]} pokeUrl={arrEl[1]}/>
            )
          : 'loading...'}
        </GridWrapper>
      </Auxiliary>
    )
  };
}

function mapStateToProps(state) {
  console.log('state:', state)
  return {
    pokemonList: state.pokeFeedReducer.pokemonList,
    prevUrl: state.pokeFeedReducer.prevUrl,
    nextUrl: state.pokeFeedReducer.nextUrl,
    isLoading: state.pokeFeedReducer.isLoading,
    isLoaded: state.pokeFeedReducer.isLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPokeList: () => dispatch(fetchPokeList())
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(PokeFeed);