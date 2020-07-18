import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';

const layout = (props) => (
  <Auxiliary>
    <h5>toolbar ceritanya</h5>
    {props.children}
  </Auxiliary>
)

export default layout;