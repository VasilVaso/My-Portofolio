import {React, Component} from 'react'
import './App.css';
import Home from "./routes/Home"
import Contact from "./routes/Contact"
import Project from "./routes/Project"
import About from "./routes/About"

import {Route ,Routes} from 'react-router-dom'

class App extends Component {
  render(){
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}
}


export default App;
