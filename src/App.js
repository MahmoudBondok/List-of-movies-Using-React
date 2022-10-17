import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import axios from 'axios'
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieDetails from "./components/MovieDetails";


const App = () => {
  const [Movies, SetMovies] = useState([])
  const [pageCount, SetPageCount] = useState([0])

  const GetMoviesAll = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=fc43faa6fb709fbbb663571b7ea91cfd&language=en&page=1")
    SetMovies(res.data.results)
    SetPageCount(res.data.total_pages)
  }
  useEffect(() => {
    GetMoviesAll();
  }, [])
  const Search = async (word) => {
    if (word === "") {
      GetMoviesAll();
    } else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=fc43faa6fb709fbbb663571b7ea91cfd&query=${word}&language=en`)
      SetMovies(res.data.results)
      SetPageCount(res.data.total_pages)
    }
  }
  const GetPage = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=fc43faa6fb709fbbb663571b7ea91cfd&language=en&page=${page}`)
    SetMovies(res.data.results)
    SetPageCount(res.data.total_pages)
  }
  return (
    <div className="font color-body ">
      <NavBar Search={Search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList Movies={Movies} GetPage={GetPage} pageCount={pageCount} />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}
export default App;