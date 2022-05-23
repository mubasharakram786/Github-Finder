import { useState } from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import MoviesList from "./component/MoviesList"
import {Movies} from './data/data'
import Header from "./component/Header"
import './index.css'
import Home from "./component/Home"
import MovieForm from "./component/MovieForm"
function App() {
  const[movie,setMovie]=useState(Movies);
  return (
    <>
    <Router>
    <Header/>
    <div className="movie-container">
    <Routes>
      <Route exact path="/" element={<MoviesList movies={movie}/>}/>
     <Route path="/home" element={<Home/>}/>
     <Route path="/browse" element={<MovieForm/>}/>
    </Routes>
    </div>
    </Router>
    </>
   
  )
}

export default App