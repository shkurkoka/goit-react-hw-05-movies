import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [searchArr, setSearchArr] = useState([]);
    
    useEffect(() => {
        const topFilms = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDVkNWI0NDRjNmE4OGRjMzhjNzFjNDk4NjkwOGJmOCIsInN1YiI6IjY0ZDRhMTUwZDEwMGI2MDBjNWNmYTc1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oN_XdkYxFImA0SoU4WlFVfk3cEJmjoUrVEqps9KaPM0'
                }
            };

            try {
                const response = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options);
                const data = await response.json();
                setSearchArr(data.results);
                // console.log(data.results);
            } catch (err) {
                console.error(err);
            }
        }

        topFilms();
    }, []);

    return (
        <ul className="topFilms">
            {
                searchArr.map((result) => {
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
    )
};

export default Home;