import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';


    function SearchField(props) {
        const {searchFromApp, setSearchFromApp} = props;
        const [data, setData] = useState([]); 
        
        const HandleChange = (event) => {
            setSearchFromApp(event.target.value); //set search in realtime by getting event.target.value
          }

        const HandleSubmit = async () => { //on submit
            if (searchFromApp.includes(' ')){
              setSearchFromApp(searchFromApp.replace(' ', '+')) //do this to add + between url spaces
            }
            let searchURL = `http://api.giphy.com/v1/gifs/search?q=${searchFromApp}&api_key=59AiF3Hk64GO1i7avk4ycS6LY9uz0576`; //backtick around it to update url
            await axios.get(searchURL) //await for axios to get url 
    
            .then(res => { //after await,  
              setData(res.data.data) //set trending, DATA IS NESTED TWICE CONFIRM WORKING!! YAY
              console.log(res.data.data) 

            })
      
      }
        return (
            <Fragment><h2>Search Field: {searchFromApp}</h2>
            <input className='search' onChange={HandleChange}></input> 
            <button onClick={HandleSubmit}>Search</button>


             { data.map(e => { //create new array e 
            return <img key={e.key} className='col-3' src={e.images.original.url} alt='GIPHY Results'></img>})
            }


            </Fragment>

        )
    }

    
  
    export default SearchField