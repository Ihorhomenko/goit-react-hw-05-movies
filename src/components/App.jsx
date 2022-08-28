import { Route, Routes } from "react-router-dom";
import Container from "./container/container";
import AppBar from "./appBar/app-bar";
import HomePage from "./homepage/home-page";
import Movies from "./movies/movies";
import MovieDetails from "./movieDetails/movieDetails";
import CastInformation from "./castInformation/castInformation";
import MovieReviews from "./movieReviews/movieReviews";

export const App = () => {

  return (
    <>
    <Container>
      <AppBar/>
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<CastInformation/>}/>
          <Route path="reviews" element={<MovieReviews/>}/>
        </Route>
      </Routes>
      
    </Container>
    
    </>
  );
};
