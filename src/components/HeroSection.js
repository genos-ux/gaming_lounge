import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import hero from '../assets/images/hero.png';
import "../Styles/Hero.scss";
import mk from '../assets/images/mk.png';
import nfs from '../assets/images/nfc.png';
import uno from '../assets/images/uno.png';
import log from '../assets/images/log.png';
import nba from '../assets/images/NBA2k23.png';
import { StrokedText } from 'stroked-text';
import playy from '../assets/images/playy.png';
import nfc from '../assets/images/nfs.png';
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';

function ResponsiveExample() {
  return (
    <div style={{background:'#F0FAFD'}}>
      
      <Row>
        <Col xs={12} md={6} className="gaming_available">
           
            <div className='logo'>
                <img src={log} alt="" />
                
            </div>

            <div className='logo_info'>

            <StrokedText fill='#F0FAFD' stroke='#1B1C57' strokeWidth={4}  className="stroked_text">Get Your Games On At</StrokedText>
            <p classname='lou'style={{fontWeight:700,fontSize:'2.8rem',paddingLeft:'20px',color:'#1B1C57',font:'Lexend',display:'block'}}>OBESE GAMING LOUNGE</p>

            <p className='ultimate'>
              The ultimate gaming experience.With a wide variety of games to choose from, you can play to your heart's desire
            </p>


            <div class="input-group mb-3" style={{width:"85%"}}>
                <input class="form-control" id="inputGroupFile03" placeholder='Search Your Location'/>
                <button class="btn" type="button" id="inputGroupFileAddon03" style={{background:'#7dbd8e'}}>Search</button>
            </div>

            <div className='available_games'>
                <h5>Available Games</h5>

                <div>
                    <img src={mk} alt="" />
                    <img src={nfs} alt="" />
                    <img src={uno} />
                    <img src={nba} alt="" />
                    {/* <img src={nfc}/> */}

                </div>

            </div>
            </div>
        </Col>
        <Col xs={12} md={6}>
          <div className='hero_img'>
            <img src={playy} alt="" />
            
            
          </div>
            
            
        </Col>
      </Row>
    </div>
  );
}

export default ResponsiveExample;