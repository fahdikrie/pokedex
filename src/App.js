import React from 'react';
import './App.css';

import Layout from './components/Layout/Layout';
import PokeFeed from './containers/PokeFeed/PokeFeed';

function App() {
  return (
    <Layout>
      <h5>content</h5>
      <PokeFeed/>
    </Layout>
  );
}

export default App;
