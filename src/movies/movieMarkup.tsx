import React from 'react';

export const MovieMarkup = ({ movie }: { movie: Movie }) => {
    return (
        <li>
            <a href='#'>
                <h2>{movie.title}</h2>
            </a>
            <p>{movie.overview}</p>
            <p>{movie.release_date}</p>
        </li>
    );
};
