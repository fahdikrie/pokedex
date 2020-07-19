import React from 'react';
import './App.css';

import Layout from './components/Layout/Layout';
import PokeFeed from './containers/PokeFeed/PokeFeed';

function App() {
  return (
    <Layout>
      <PokeFeed/>
    </Layout>
  );
}

export default App;
