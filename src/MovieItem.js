import React from 'react';

class MovieItem extends React.Component{
    constructor() {
        super();

        this.state = {
            willWatch: false
        }
    }

    render() {
        const { movie, removeMovie, addMovieWillWatch, removeMovieWillWatch } = this.props;
        return (
            <div className="card">
                <img
                    className="card__image"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
                    alt={movie.title}
                />
                <div className="card__body">
                    <h2 className="card__title">{movie.title}</h2>
                    { this.state.willWatch ? (
                        <button
                            type="button"
                            onClick={() => {
                                this.setState({
                                    willWatch: false
                                });
                                removeMovieWillWatch(movie)
                            }}
                        >
                            Remove Will watch
                        </button>
                        ) : (
                        <button
                            type="button"
                            onClick={() => {
                                this.setState({
                                    willWatch: true
                                });
                                addMovieWillWatch(movie)
                            }}
                        >
                            Will watch
                        </button>
                        )
                    }

                    <button type="button" onClick={removeMovie.bind(null, movie)}>Delete movie</button>
                </div>
            </div>
        )
    }
}

export default MovieItem;
