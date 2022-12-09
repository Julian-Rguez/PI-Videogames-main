import React from 'react';
import {Link} from 'react-router-dom';
import './Card.css';

function Card({data}) {
	return (
		<div className='card'>
			<Link to={`/videogames/${data.id}`}>
				{data.image === null || !data.image ? (
					<h3>Sin imagen</h3>
				) : (
					<img className='img' src={data.image} alt={data.name} />
				)}
			</Link>
			<div className='textCard'>
				<div className='nameGenres'>
					<div className='name'>{data.name}</div>
					<div className='genres'>{data.genres}</div>
				</div>
			</div>
				<div className='divRating'>
					<div className='rating'>{data.rating}</div>
				</div>
		</div>
	);
}

export default Card;
