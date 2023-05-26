import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faTwitter,faLinkedin,faYoutube} from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <div className='footer'>
      <div className='sb__footer section__padding'>
       <div className='sb__footer-links'>
              <div className='sb__footer-links_div'>
                
                <a href='https://www.marvel.com/corporate/about'>
                <p>ABOUT MARVEL</p>
                 </a>
                 <a href='/healthplan'>
                  <p>HELP/FAQS</p>
                </a>
                <a href='/individual'>
                <p>CAREERS</p>
                  </a>
                  <a href='/individual'>
                <p>INTERNSHIPS</p>
                  </a>
               </div>
                    <div className='sb__footer-links_div'>
                      
                      <a href='/resource'>
                      <p>ADVERTISING</p>
                      </a> 
                      <a href='/resource'>
                      <p>DISNEY+</p>
                       </a> 
                       <a href='/resource'>
                        <p>MARVELHQ.COM</p>
                       </a>
                       <a href='/resource'>
                        <p>REDEEM DIGITAL COMICS</p>
                       </a>
                    </div>
                    
                       <div className='sb__footer-links_div'>
                        
                          <h4>MARVEL INSIDER</h4>
                          <a href='/about'>
                          <p>Get Rewarded for Being a Marvel Fan</p>
                          </a>
                        
                     
                          <h4>MARVEL UNLIMITED</h4>
                          <a href='/about'>
                          <p>Access Over 30,000+ Digital Comics</p>
                          </a>
                       </div>
                          
                         <div className='sb__footer-links_div'>
                             <h4>Coming soon on</h4>
                     
                      
                         
                            <div className='socialmedia'>
                               <FontAwesomeIcon icon={faFacebook}  size='2xl' />
                               <FontAwesomeIcon icon={faTwitter} size='2xl'/>
                               <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
                               <FontAwesomeIcon icon={faYoutube} size='2xl'/>
                             </div>
                          </div>
          </div>
                  <hr></hr>
       
                      <div className='sb__footer-below'>
                         <div className='sb__footer-copyright'>
                             <p>
                             @{new Date().getFullYear()} CodeInn. All right reserved.
                             </p>
                         </div>
                          <div className='sb__footer-below-links'>
                             <a href='/terms'><div><p>Terms & Conditions</p></div></a>
                             <a href='/privacy'><div><p>Privacy</p></div></a>
                             <a href='/security'><div><p>Security</p></div></a>
                             <a href='/cookie'><div><p>Cookie Declaration </p></div></a>

                           </div>
                      </div>
     


       </div>
    </div>
  )
}

export default Footer;