import React, { Suspense, lazy} from "react";
import { Routes, Route, NavLink } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies"));
const MovieDetails = lazy(() => import("./pages/MovieDetails"));
const Cast = lazy(() => import("./pages/Cast"));
const Reviews = lazy(() => import("./pages/Reviews"));

export const App = () => {

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  )
}