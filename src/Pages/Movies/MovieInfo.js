import React from 'react'
import { useParams } from 'react-router-dom'


export function MovieInfo() {
    const params = useParams();
    console.log(params);
    return (
        <React.StrictMode>
            <h2>Movie info from  {params.MovieId }</h2>
        </React.StrictMode>
    );
}
export default MovieInfo;