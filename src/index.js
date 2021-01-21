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
            show: false,
            like: false
        };
    }

    toggleOverview = () => {
        this.setState({
            show: !this.state.show
        });
    }

    handleLike = () => {
        this.setState({
            like: !this.state.like
        })
    }

    removeMovie = movie => {
        const updateMovies = this.state.movies.filter(function(item) {
                return item.id !== movie.id;
        })
        this.state.movies = updateMovies;
        this.setState({
            movies: updateMovies
        });
    }

    render() {
        const { data: { title, vote_average, poster_path, overview } } = this.props;
        return (
            <div>
                {this.state.movies.map((movie) => {
                    return (
                        <MovieItem
                            key={movie.id}
                            movie={movie}
                            removeMovie={this.removeMovie}
                        />
                    )
                })}
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
