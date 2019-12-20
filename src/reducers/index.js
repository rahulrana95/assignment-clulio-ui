import {combineReducers} from 'redux';

import popularMoviesReducer from './popularMoviesReducer';
// import trendingVideosReducer from './profileReducer';
// import newestVideosReducer from './categories';
// import topRatedVideosReducer from './topRatedVideosReducer';

const appReducers = combineReducers({
  popularMoviesReducer
});

const rootReducer = (state, action) => {
  return appReducers(state, action);
};

export default rootReducer;