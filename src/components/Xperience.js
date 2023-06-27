import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {IoGameController} from 'react-icons/io5';
import {AiOutlinePhone} from 'react-icons/ai'
import img from '../assets/images/Design_Ellipse_6_4.png';
// import img1 from '../assets/images/Design_Rectangle_19.png';
// import img2 from '../assets/images/Design_Rectangle_20.png';
// import img3 from '../assets/images/Design_Rectangle_18.png';
import {FaChess} from 'react-icons/fa';
import {FaTableTennis} from 'react-icons/fa';
import {GiSoccerKick} from 'react-icons/gi';
import rec from '../assets/images/rec17.png';
import "../Styles/Xperience.scss"

export default function Meta() {
  return (
    <Row className="meta">

        <div className='line'></div>
        <span className='watch'>What Sets Us Apart</span>
        
        <Col xs={6} className='ogl'>
            <h3>The OGL Gaming Experience</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas in magnam! Explicabo, rem voluptatibus.</p>

            <div className='games'>
                <h3>Game in for :</h3>
                <div className='gaming_category'>
                    <div className='games_type'>
                        <div className='console_game' style={{display:'flex',alignItems:'center'}}>
                            <IoGameController size={25} style={{marginRight:'6px'}}/>
                            <span>Console Games</span>

                        </div>

                        <div className='board_game' style={{marginTop:'20px'}}>
                            <FaChess size={25} style={{marginRight:'6px'}}/>
                            <span>Board Games</span>
                        </div>
                        

                    </div>
                    <div>
                    <div>
                        <FaTableTennis size={25} style={{marginRight:'6px'}}/>
                        <span>Table Games</span>

                        </div>

                        <div style={{marginTop:'20px'}}>
                            <GiSoccerKick size={25} style={{marginRight:'6px'}}/>
                            <span>Live Matches</span>
                        </div>

                    </div>
                </div>

                <div style={{display:'flex',alignItems:'center',marginTop:'15px',position:'relative',right:'40px'}}>
                    
                    <div style={{width:'100px',paddingLeft:'0px'}}>
                        <img src={img} alt="" style={{width:'100px',marginLeft:'0px'}}/>
                    </div>
                    <div style={{marginRight:'80px'}}>
                        <span>
                            <strong>Disaryr Russel</strong></span><br />
                        <span>Managing Director</span>
                    </div>
                    
                    <button style={{padding:'7px 20px',background:'#7dbd8e',color:'white',border:'none',borderRadius:'20px'}}>
                        <AiOutlinePhone size={23} style={{color:'white',marginRight:'10px'}}/>
                        <span>Register Now</span>
                    </button>
                </div>
                
            </div>
        </Col>
        <Col xs={6}  className='img'>

            <img src={rec} alt="" />


            
        </Col>

        
        
        
        
    </Row>
  )
}

