import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { moviesData } from './moviesData';

import MovieItem from './MovieItem';
import MovieTabs from './MovieTabs';

const API_URL = 'https://api.themoviedb.org/3/discover/movie';
const API_KEY = '3f4ca4f3a9750da53450646ced312397';
const movie = moviesData[0];

class MovieItems extends React.Component {
    constructor() {
        super();

        this.state = {
            movies: [],
            moviesWillWatch: [],
            sort_by: "revenue.desc"
        };
    }

    componentDidMount() {
        fetch(`${API_URL}?api_key=${API_KEY}&sort_by=${this.state.sort_by}`).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({
                movies: data.results
            })
        })
    }

    removeMovie = movie => {
        const updateMovies = this.state.movies.filter(function(item) {
                return item.id !== movie.id;
        })
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

    removeMovieWillWatch = movie => {
        const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function(item) {
                return item.id !== movie.id;
        })
        this.setState({
            moviesWillWatch: updateMoviesWillWatch
        });
    }

    updateSortBy = value => {
        this.setState({
            sort_by: value
        })
    }

    render() {
        const { data: { title, vote_average, poster_path, overview } } = this.props;
        return (
            <div className="continer">
                <MovieTabs sort_by={this.state.sort_by} updateSortBy={this.updateSortBy} />
                <div>Will watch: {this.state.moviesWillWatch.length}</div>
                <div className="card-list">
                    {this.state.movies.map((movie) => {
                        return (
                            <MovieItem
                                key={movie.id}
                                movie={movie}
                                removeMovie={this.removeMovie}
                                addMovieWillWatch={this.addMovieWillWatch}
                                removeMovieWillWatch={this.removeMovieWillWatch}
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
