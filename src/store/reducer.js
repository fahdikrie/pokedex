const initialState = {}

// so far cm butuh ngeget api doang
// > GET_ALL_POKEMON buat get all pokemon
// > GET_SINGLEVIEW_POKEMON buat liat singleview/detail (?)

const reducer = (state=initialState, action) => {
  if (action.type === 'GET_POKEMON') {
    return ({
      ...state,
      
    });
  } else if (action.type === 'GET_SINGLEVIEW_POKEMON') {

  }
};

export default reducer;