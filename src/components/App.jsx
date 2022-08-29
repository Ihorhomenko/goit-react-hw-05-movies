import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Container from "./container/container";
import AppBar from "./appBar/app-bar";

const Movies = lazy(() => import("./movies/movies"));
const MovieDetails = lazy(() => import("./movieDetails/movieDetails"));
const CastInformation = lazy(() => import("./castInformation/castInformation")) ;
const MovieReviews = lazy(() => import("./movieReviews/movieReviews")) ;
const HomePage = lazy(() => import ("./homepage/home-page"));


export const App = () => {

  return (
    <>
    <Container>
      <AppBar/>
      
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<CastInformation/>}/>
          <Route path="reviews" element={<MovieReviews/>}/>
        </Route>
      </Routes>
      </Suspense>
      
      
    </Container>
    
    </>
  );
};
