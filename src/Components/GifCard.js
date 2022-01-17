import React from 'react';
import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function GifCard(props) { 
    const {gifsFromApp, setGifsFromApp}= props; //we can have setGifs update WHEN SEARCHFIELD 

      return (
      <Fragment>
       { gifsFromApp.map(e => { //create new array e 
      return <img key={e.key} className='col-3' src={e.images.original.url} alt='GIPHY Results'></img>})
      }
      </Fragment>
      )
}

export default GifCard