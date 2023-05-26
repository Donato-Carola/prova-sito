import React from 'react'
import './home.css'
import marvel from '../images/marvel1.jpeg'
import { Container } from 'react-bootstrap';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className='body'>
    <Container>
    <img src={marvel} alt='' className='img-fluid'/>
    </Container>

    
    </div>

  )
}

export default Home