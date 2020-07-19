import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';

const layout = (props) => (
  <Auxiliary>
    {/* <div>toolbar ceritanya</div> */}
    {props.children}
  </Auxiliary>
)

export default layout;