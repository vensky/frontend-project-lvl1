import React from 'react';

const MovieItem = (props) => {
    const { movie, removeMovie, addMovieWillWatch } = props;
    return (
        <div className="card">
            <img
                className="card__image"
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
                alt={movie.title}
            />
            <div className="card__body">
                <h2 className="card__title">{movie.title}</h2>
                <button type="button" onClick={addMovieWillWatch.bind(null, props.movie)}>Will watch</button>
                <button type="button" onClick={removeMovie.bind(null, props.movie)}>Delete movie</button>
            </div>
        </div>
    )
}

export default MovieItem;
