const INITIAL_STATE = {
    data: [],
    isLoading: false,
};
  
  const popularMoviesReducer = (
    state = INITIAL_STATE,
    action = {
      payload: [],
      type: '',
    },
  ) => {
    switch (action.type) {
      case 'POPULAR_MOVIES_DATA_LOADING':
        return Object.assign({}, state, {isLoading: true});
      case 'POPULAR_MOVIES_DATA_AVAIL':
          console.log(action);
        state.isLoading = false;
        state.data = action.payload.movies.results;
        state.currentPage = action.payload.movies.page;
        state.totalPages = action.payload.movies.total_pages;
        state.totalResults = action.payload.movies.total_results;

        return Object.assign({}, state);
        case 'POPULAR_MOVIES_DATA_ERROR': 
        state.isLoading = false;
        return Object.assign({}, state);
      default:
        return Object.assign({}, state);
    }
  };
  
  export default popularMoviesReducer;