import React from 'react'
import {CiFacebook} from 'react-icons/ci'
import {FaFacebook} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaCcMastercard} from 'react-icons/fa'
import {ImCreditCard} from 'react-icons/im'
import {AiFillCreditCard} from 'react-icons/ai'
import {FaCreditCard} from 'react-icons/fa'
import img from '../assets/images/log.png';
import imgg from '../assets/images/Design_Vector_3.png';
import "../Styles/Footer.scss";
// import img from '../assets/images/log.png'

function Footer() {

    
  return (
    <div className='foot'>

            <div className='logo_footer'>
                <img className='img' src={img} alt="" /><br />
                <span>Obese Gaming Lounge(OGL)</span>

                <div className='socialMedia_icons'>
                    {/* <CiFacebook size={25}/> */}
                    
                    <FaFacebookSquare size={25}/>
                    <BsInstagram size={25}/>
                    <FaTwitterSquare size={25}/>
                </div>
                {/* <img src={imgg} alt="" width="70px" /> */}
                
            </div>
        

        <div className='product_side'>
            {/* <div>
                <img src={img} alt="" width="100px" />
                <p>Gaming working License</p>

                <div style={{display:'flex',justifyContent:'space-between',marginTop:'50px'}}>
                    <CiFacebook size={25}/>
                    
                    <FaFacebookSquare size={25}/>
                    <BsInstagram size={25}/>
                    <FaTwitterSquare size={25}/>
                </div>
                <img src={imgg} alt="" width="70px" />
                
            </div> */}

            <div>
                <h5 style={{color:'black'}}>Property</h5>
                <p>Console</p>
                <p>Video Camera</p>
                <p>Camera</p>
                <p>Lenses</p>
            </div>

            <div>
                <h5 style={{color:'black'}}>Article</h5>
                <p>FAQ</p>
                <p>Sports</p>
                <p>Live Betting</p>
                <p>Games</p>
                <p>Live Games</p>
            </div>

            <div>
                <h5 style={{color:'black'}}>Contact</h5>
                <p>Console</p>
                <p>Betting way</p>
                <p>Console</p>
                
            </div>


            {/* <div>
                <h6>ACCEPT PAYMENTS</h6>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <FaCreditCard size={25}/>
                    <AiFillCreditCard size={25}/>
                    <ImCreditCard size={25}/>
                    <FaCcMastercard size={25}/>
                </div>

                <h6 style={{marginTop:'35px'}}>FOLLOW US</h6>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <CiFacebook size={25}/>
                    
                    <FaFacebookSquare size={25}/>
                    <BsInstagram size={25}/>
                    <FaTwitterSquare size={25}/>
                </div>

            </div> */}
        </div>

        
    </div>
  )
}

export default Footer