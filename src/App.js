import React, { useEffect, useState } from 'react';
import ReactDOM, { findDOMNode, flushSync } from 'react-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import GifCard from './Components/GifCard';


function App() {

  const [trend, setTrend] = useState([]) 
  const [search, setSearch] = useState([]);  //used to set search
  
  let trendURL = `http://api.giphy.com/v1/gifs/trending?api_key=59AiF3Hk64GO1i7avk4ycS6LY9uz0576`//only shows trending for now 

const getTrend = async () => {
    await axios.get(trendURL) //await for axios to get url 

      .then(res => { //after await,  
        setTrend(res.data.data) //set trending, DATA IS NESTED TWICE 
        console.log(res.data.data) 
      })

       
  }
    
  const HandleChange = (event) => {
    setSearch(event.target.value); //set search in realtime by getting event.target.value
  }

  
  const HandleSubmit = async () => { //on submit
        if (search.includes(' ')){
          setSearch(search.replace(' ', '+')) //do this to add + between url spaces
        }
        let searchURL = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=59AiF3Hk64GO1i7avk4ycS6LY9uz0576`; //backtick around it to update url
        await axios.get(searchURL) //await for axios to get url 

        .then(res => { //after await,  
          setSearch(res.data.data) //set trending, DATA IS NESTED TWICE 
          console.log(res.data.data)
        })
  
  }
  
  




  useEffect(() => { //run getTrend function, when state changes, rerender getTrend
    getTrend()
  }, [])
  
  return (
    <div>
      <div className="p-5 bg-dark fs-1">
        <div className="text-light text-center"><b>GIPHY Search</b></div>
      </div>

      <div className="container d-flex justify-content-center">
        <input className='search' onChange={HandleChange}></input> 
        <button onClick={HandleSubmit}>Search</button>
        <button>Random</button>
        </div>
        
        {
          trend.map(e => { //create new array e 
            return <img key={e.key} className='col-3' src={e.images.original.url} alt='GIPHY Results'></img> //give each outputted gif a key e.id and src output e.images.original.url
          })
        }
        
    </div >
    
  )

}

export default App;