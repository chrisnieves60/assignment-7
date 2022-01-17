import React, { useEffect, useState } from 'react';
import ReactDOM, { findDOMNode, flushSync } from 'react-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import GifCard from './Components/GifCard';



function App() {

  const [gifs, setGifs] = useState([]) 
  const [search, setSearch] = useState([]);  //recieve prop info as search
  
  let trendURL = `http://api.giphy.com/v1/gifs/trending?api_key=59AiF3Hk64GO1i7avk4ycS6LY9uz0576`//only shows trending BY DEFAULT 
  const getGifs = async () => { 
    await axios.get(trendURL) //await for axios to get url 

      .then(res => { //after await,  
        setGifs(res.data.data) //set gifs to trending, DATA IS NESTED TWICE 
        console.log(res.data.data) 
      })
    }

    
//---------
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
    setGifs(res.data.data) //set searchfromapp to
    console.log(res.data.data)
  })
}

const HandleRand = async () => { //on submit
  
  let searchURL = `http://api.giphy.com/v1/gifs/random?api_key=59AiF3Hk64GO1i7avk4ycS6LY9uz0576`;
  await axios.get(searchURL) //await for axios to get url 

  .then(res => { //after await,  
    setGifs(new Array(res.data.data)) //set searchfromapp to
    console.log(res)
  })

}
useEffect(() => { //run getGifs function, when state changes, rerender getGifs
  getGifs()
}, [])

  return (
    <div>
      <div className="p-5 bg-dark fs-1">
        <div className="text-light text-center"><b>GIPHY Search</b></div>
      </div>

      <div className="container d-flex justify-content-center">
            <input className='search' onChange={HandleChange}></input> 
            <button onClick={HandleSubmit}>Search</button>
            <button onClick={HandleRand}>Random</button>
        </div>
        <GifCard gifsFromApp={gifs} setGifsFromApp={setGifs}/>
        
    </div >
    
  )

}

export default App;