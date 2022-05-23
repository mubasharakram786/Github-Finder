import { useState } from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import MoviesList from "./component/MoviesList"
import {Movies} from './data/data'
import Header from "./component/Header"
import './index.css'
import Home from "./component/Home"
import MovieForm from "./component/MovieForm"
import {MovieContext} from './context/ContextMovie'
function App() {
  const[movie,setMovie]=useState(Movies);
  return (
    <MovieContext>
    <Router>
    <Header/>
    <div className="movie-container">
    <Routes>
      <Route exact path="/" element={<MoviesList/>}/>
     <Route path="/home" element={<Home/>}/>
     <Route path="/browse" element={<MovieForm/>}/>
    </Routes>
    </div>
    </Router>
    </MovieContext>
   
  )
}

export default App