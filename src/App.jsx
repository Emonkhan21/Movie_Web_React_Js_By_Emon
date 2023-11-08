import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import MovieDetails from "./pages/MovieDetails"
import Notfound from "./pages/Notfound"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/moviesInfo/:id" element={<MovieDetails />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
