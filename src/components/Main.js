import React from 'react'

import logo from '../images/logo.jpg';
import { Card } from './Card';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';



export const Main = () => {
  const [url,setUrl]=useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2dc6522bdbcbc300c99d7034c859c897&hash=5c663aa845ca2457782bf99d5ace1808");
  const [item,setItem]=useState();
  const [search,setSearch]=useState("");
  useEffect(()=>{
    const fetch=async()=>{
      const res=await axios.get(url)
      setItem(res.data.data.results);
    }
    fetch();
  },[url])
  
  const searchMarvel=()=>{
    setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`)
  }
  
  
  return (
    
    <>
 <div className='header'>
    
    <div className='search-bar'>
        <img src={logo} alt='logo'/>
        <input type='search' placeholder='Search Here Your Hero' 
        className='search'
        onChange={e=>setSearch(e.target.value)}
             onKeyPress={searchMarvel}/>
        
    </div>
</div>
<div className='content'>
  
 {
  (!item)?<p>Not Found</p>:<Card data={item}/>
 }
  

</div>

   </>
    
  )
}
