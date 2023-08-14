import React, { useState, useEffect } from "react";
import { useParams, Link, Outlet } from 'react-router-dom';


const MovieDetails = () => {
    const [movieContext, setMovieContext] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const MovieDetails = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDVkNWI0NDRjNmE4OGRjMzhjNzFjNDk4NjkwOGJmOCIsInN1YiI6IjY0ZDRhMTUwZDEwMGI2MDBjNWNmYTc1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oN_XdkYxFImA0SoU4WlFVfk3cEJmjoUrVEqps9KaPM0'
                }
            };

            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
                const data = await response.json();
                setMovieContext(data);
                console.log(data);
            } catch (err) {
                console.error(err);
            }
        }

        MovieDetails();
    }, [movieId]);


    return (
        <div>
            <button><Link to="/">Go home</Link></button>
            {
                movieContext.status_message? movieContext.status_message :
            <div className="movieContext">
                <img src={`https://image.tmdb.org/t/p/original${movieContext.backdrop_path}`} alt="Ups, something is wrong" width="450px"/>
                <div className="movieContext-text">
                    <h1>{movieContext.title}</h1>
                    <p>User Score: {
                        movieContext.vote_average? `${Math.round(movieContext.vote_average * 10)}%` : "Ups, something is wrong"
                    }</p>
                    <h2>Overview</h2>
                    <p>{movieContext.overview}</p>
                    <h3>Genres</h3>
                    <p>
                        {
                            movieContext.genres? movieContext.genres.map((genre) => {
                                return `${genre.name} `;
                            }) : "Ups, something is wrong"
                        }
                    </p>
                </div>
                <hr />
                <div>
                    <h4>Additional information</h4>
                    <ul>
                        <li>
                            <Link to="cast">Cast</Link>
                        </li>
                        <li>
                            <Link to="reviews">Reviews</Link>
                        </li>
                    </ul>
                </div>
                <hr />
                <Outlet />
            </div>
            }
        </div>
    );
}

export default MovieDetails;