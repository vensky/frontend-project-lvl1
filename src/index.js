import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { moviesData } from './moviesData';

const movie = moviesData[0];

/*const movies = moviesData;*/

function Image(props) {
    return (
        <img src={`imdb.com${props.src}`} alt={props.alt} />
    )
}

class MovieItem extends React.Component {
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

    render() {
        const { data: { title, vote_average, poster_path, overview } } = this.props;
        return (
            <div>
{/*                 <Image src={poster_path} alt={title} />
                <p>{title}</p>
                <p>{vote_average}</p>
                <button type="button" onClick={this.toggleOverview}>
                    { this.state.show ? 'Hide' : 'Show' }
                </button>*/}
{/*                <button
                    className={ `"btn " ${this.state.like ? "btn--like" : null}` }
                    type="button"
                    onClick={this.handleLike}
                >
                    { this.state.like ? 'Unlike' : 'Like' }
                </button>*/}
               {/* { this.state.show ? <p>{overview}</p> : null }*/}

            {this.state.movies.map((movie) => {
                return (<h2>{movie.title}</h2>)
            })}
            </div>
        )
    }
}

function App() {
    return (
        <div>
            <MovieItem data={movie} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept()
}
