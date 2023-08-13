import React, { useState} from "react";
import { Link, useSearchParams } from 'react-router-dom';

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("name");
    
    const [movies, setMovies] = useState([]);

    const Search = async (evt) => {
        evt.preventDefault();

        const form = evt.currentTarget;
        const search = form.elements.search.value;

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDVkNWI0NDRjNmE4OGRjMzhjNzFjNDk4NjkwOGJmOCIsInN1YiI6IjY0ZDRhMTUwZDEwMGI2MDBjNWNmYTc1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oN_XdkYxFImA0SoU4WlFVfk3cEJmjoUrVEqps9KaPM0'
            }
        };
        
        if (search !== "") {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, options);
                const data = await response.json();
                setMovies(data.results);
                // console.log(data);
                setSearchParams(`query=${search}`);
            } catch (err) {
                console.error(err);
            }
        }

    }

    return (
        <div>
            <form className="SearchForm" onSubmit={Search}>
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                    className="SearchForm-input"
                    name="search"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
            <ul className="search_list">
            {
                movies.map((result) => {
                    return<li key={result.id}>
                        <Link to={`/movies/${result.id}`}>
                            {
                                result.title ? result.title : result.name
                            }
                        </Link>
                    </li>
                })
            }
            </ul>
        </div>
    );
}

export default Movies;