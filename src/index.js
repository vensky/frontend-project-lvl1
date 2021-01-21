import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { moviesData } from './moviesData';

import MovieItem from './MovieItem';

const movie = moviesData[0];

/*const movies = moviesData;*/

function Image(props) {
    return (
        <img src={`imdb.com${props.src}`} alt={props.alt} />
    )
}

class MovieItems extends React.Component {
    constructor() {
        super();

        this.state = {
            movies: moviesData,
            moviesWillWatch: [],
            show: false,
            like: false
        };
    }

/*    toggleOverview = () => {
        this.setState({
            show: !this.state.show
        });
    }

    handleLike = () => {
        this.setState({
            like: !this.state.like
        })
    }*/

    removeMovie = movie => {
        const updateMovies = this.state.movies.filter(function(item) {
                return item.id !== movie.id;
        })
        this.state.movies = updateMovies;
        this.setState({
            movies: updateMovies
        });
    }

    addMovieWillWatch = movie => {
        const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];
        /*updateMoviesWillWatch.push(movie);*/
        this.setState({
            moviesWillWatch: updateMoviesWillWatch
        });
    }

    render() {
        const { data: { title, vote_average, poster_path, overview } } = this.props;
        return (
            <div className="continer">
                <div>Will watch: {this.state.moviesWillWatch.length}</div>
                <div className="card-list">
                    {this.state.movies.map((movie) => {
                        return (
                            <MovieItem
                                key={movie.id}
                                movie={movie}
                                removeMovie={this.removeMovie}
                                addMovieWillWatch={this.addMovieWillWatch}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

function App() {
    return (
        <div>
            <MovieItems data={movie} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept()
}
