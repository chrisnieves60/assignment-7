import React, { useEffect, useState } from 'react';
import ReactDOM, { findDOMNode, flushSync } from 'react-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import GifCard from './Components/GifCard';
import SearchField from './Components/SearchField';


function App() {

  const [trend, setTrend] = useState([]) 
  const [search, setSearch] = useState([]);  //used to set search
  //create third use state to handle object data
  
  return (
    <div>
      <div className="p-5 bg-dark fs-1">
        <div className="text-light text-center"><b>GIPHY Search</b></div>
      </div>

      <div className="container d-flex justify-content-center">
      <SearchField searchFromApp={search} setSearchFromApp={setSearch}/>
        </div>
        <GifCard trendFromApp={trend} setTrendFromApp={setTrend}/>
    </div >
    
  )

}

export default App;