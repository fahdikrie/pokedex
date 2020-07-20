import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Auxiliary from '../../hoc/Auxiliary';
import GridWrapper from '../../components/GridWrapper/GridWrapper';
import GridCards from '../../components/GridWrapper/GridCards/GridCards';
import classes from './PokeFeed.module.css';


import { fetchPokeList, fetchNextPokeList } from './action';

class PokeFeed extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchPokeList();
  };

  loadNextPage = () => {
    const nextPage = this.props.nextUrl
    console.log(nextPage);
    if (typeof nextPage != undefined || nextPage != null) {
      this.props.fetchNextPokeList(nextPage);
    }
  }

  render() {
    const { isLoading, isLoaded } = this.props;
    // if (isLoading) return 'loading...';
    // if (!isLoaded || !data) return null;

    return(
      <Auxiliary>
        <GridWrapper>
          {(typeof this.props.pokemonList != 'undefined' && this.props.isLoaded && this.props.error == null)?
              this.props.pokemonList.map(
              arrEl =>
                <GridCards
                  key={arrEl[0]}
                  pokeName={arrEl[0]}
                  pokeUrl={arrEl[1]}
                  pokeId={arrEl[2]} />
              )
          : 'loading...'}
          <button className={classes.ShowMoreButton} onClick={this.loadNextPage}>Show More</button>
        </GridWrapper>
      </Auxiliary>
    )
  };
}

function mapStateToProps(state) {
  console.log('state:', state.pokeFeedReducer.pokemonList)
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
    fetchPokeList: () => dispatch(fetchPokeList()),
    fetchNextPokeList: (nextUrl) => dispatch(fetchNextPokeList(nextUrl))
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(PokeFeed);