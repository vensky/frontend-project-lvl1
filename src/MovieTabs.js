import React from 'react';

const MovieTabs = (props) => {
    const {sort_by, updateSortBy} = props;
    const handleClick = value => {
        return () => {
            updateSortBy(value);
        }
    }
    const getClassLink = value => {
        return `${sort_by === value ? "active" : ""}`;
    }

    return (
        <ul>
            <li className={getClassLink("popularity.desc")} onClick={handleClick("popularity.desc")}>Popularity desc</li>
            <li className={getClassLink("revenue.desc")} onClick={handleClick("revenue.desc")}>Revenue desc</li>
            <li className={getClassLink("vote_average.desc")} onClick={handleClick("vote_average.desc")}>Popular</li>
        </ul>
    )

}

export default MovieTabs;
