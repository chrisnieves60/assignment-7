import React from 'react';
import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function GifCard(props) { //perhaps show trending by default? 
    const {trendFromApp, setTrendFromApp} = props;

    let trendURL = `http://api.giphy.com/v1/gifs/trending?api_key=59AiF3Hk64GO1i7avk4ycS6LY9uz0576`//only shows trending for now 
  const getTrend = async () => { 
    await axios.get(trendURL) //await for axios to get url 

      .then(res => { //after await,  
        setTrendFromApp(res.data.data) //set trending, DATA IS NESTED TWICE 
        console.log(res.data.data) 
      })

       
    }
    useEffect(() => { //run getTrend function, when state changes, rerender getTrend
        getTrend()
      }, [])

      return (
      <Fragment>

       { trendFromApp.map(e => { //create new array e 
      return <img key={e.key} className='col-3' src={e.images.original.url} alt='GIPHY Results'></img>})
      }

      

      </Fragment>
      )

}

export default GifCard