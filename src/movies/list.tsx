import React from 'react';
import { MovieMarkup } from './movieMarkup';

const renderMovie = (movie: Movie) => <MovieMarkup movie={movie} />;

export const List = ({ movieList }: { movieList: Movie[] }) => {
    return (
        <>
            <h1>Movies</h1>
            <ul>{movieList.map(renderMovie)}</ul>;
        </>
    );
};
