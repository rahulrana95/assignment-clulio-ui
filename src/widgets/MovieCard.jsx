import React from 'react';
import '../styles/movieCard.scss';
import config from '../services/config.json';

export default class MovieCard extends React.Component {
	render() {
		const {image, title, genre, year} = this.props;
		return (
			<div className='movieCard'>
				<img src={`${config.REACT_APP_MOVIES_DB_IMG_URL}${image}`} />
				<div className='movieCard__footer'>
					<p className='movieCard__title'>{title}</p>
					<p>{genre}, {year}</p>
				</div>
			</div>
		)
	}
}

MovieCard.defaultProps = {
	image: 'db32LaOibwEliAmSL2jjDF6oDdj.jpg',
	title: 'ABC',
	genre: 'Genre',
	year: 'XXXX'
}