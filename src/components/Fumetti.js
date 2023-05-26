import './fumetti.css';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { Container } from 'react-bootstrap';



//https://gateway.marvel.com:443/v1/public/characters?apikey=2dc6522bdbcbc300c99d7034c859c897
//key privata: 1238e67a4e8404ee7b6e21224b9578cf22d8ca17
//key pubblica:2dc6522bdbcbc300c99d7034c859c897
//ts:1
//11238e67a4e8404ee7b6e21224b9578cf22d8ca172dc6522bdbcbc300c99d7034c859c897
//hash:5c663aa845ca2457782bf99d5ace1808


function Fumetti() {
   const [personaggio,Setpersonaggio ]=useState([])
  useEffect(()=>{
    axios.get('https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=2dc6522bdbcbc300c99d7034c859c897&hash=5c663aa845ca2457782bf99d5ace1808').then(res=>{
     Setpersonaggio(res.data.data.results)
     
    }).catch(error=>console.log(error))

  },[])

   console.log(personaggio);



  return (
    
   
    personaggio.map(per => {
      return(

<div key={per.id}>
   <div className='box-content1'>
   <div className='right-box1'>
   <Container>
  <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`}  alt='' className='img-fluid'/>
  </Container>
  </div>
  <div className='left-box1'>
  <p>{`${per.title}`}</p>
  <p>{per.description} </p>

    </div>
    </div>
  </div>


)
   })



  
  );
}

export default Fumetti;