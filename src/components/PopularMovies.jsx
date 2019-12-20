import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../widgets/MovieCard';
import popularMoviesService from '../services/moviesService';
import '../styles/popularMovies.scss';

class PopularMovies extends React.Component {
  render() {
    return (
      <div className='popularMovies'>
        {this._renderMovies()}
      </div>
    )
  }

  componentDidMount() {
    this.props.fetchPopularMovies();
  }

  _renderMovies() {
    const { popularMoviesReducer: movies } = this.props;
    console.log(movies)
    return movies.data.map((movie, index) => {
      return <MovieCard title={movie.title} image={movie.backdrop_path} year={new Date(movie.release_date).getFullYear()} key={index} />
    })
  }
}

const mapStateToProps = state => ({
  popularMoviesReducer: state.popularMoviesReducer,
});

const mapDisptachToProps = dispatch => ({
  fetchPopularMovies: () => dispatch(fetchPopularMovies),
});

const fetchPopularMovies = async (dispatch) => {
  const movies = await popularMoviesService();
  dispatch({
    type: 'POPULAR_MOVIES_DATA_AVAIL',
    payload: { movies: movies },
  });
};

export default connect(
  mapStateToProps,
  mapDisptachToProps,
)(PopularMovies);