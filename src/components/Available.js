
// import img from '../assets/images/img.jpg';
import {Row, Col , Button, Form , InputGroup} from 'react-bootstrap';
// import Vid from '../assets/images/vid.mp4';
import '../App.css';
import mk from '../assets/images/mk.png';
import data from '../data/items.json';
import StoreItem from './StoreItem';
import {MdOutlineLiveTv} from 'react-icons/md';
import {RiRecordCircleLine} from 'react-icons/ri';
import {IoCloudOfflineSharp} from 'react-icons/io5'
import {IoChevronBackCircleOutline} from 'react-icons/io5';
import {IoChevronForwardCircleOutline} from 'react-icons/io5';
import nfs from '../assets/images/nfs.png'
import hex from '../assets/images/hex.png'
import kin from '../assets/images/kin.png';
import "../Styles/Available.scss";



export default function ResponsiveAutoExample() {

  const auto = {
      
    padding: '15px',
      
  }
  return (
    <div style={auto}>
      {/* <Row className='row'>
        <Col sm={6} style={{marginBottom:"18px",paddingLeft:'10px'}}>
            <img src={img} alt="" width="130px"/>
            

            <h4 style={{borderBottom:'2px solid orange',paddingBottom:'15px',width:'50%',marginBottom:'18px'}}>
              Get Your Game On At<br />
              OBESE GAMING LOUNGE
            </h4>

            <p style={{marginBottom:'19px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sed et soluta hic alias asperiores, tempore necessitatibus quia.</p>

            <InputGroup className="mb-3" style={{width:'67%'}}>
                <Form.Control
                  style={{border:'1px solid grey',padding:'8px,3px',borderRadius:'10px',
                borderRight:'none'}}
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2" style={{border:'none',backgroundColor:'green',color:'white'}}>
                  Button
                </Button>
            </InputGroup>

            <div class="input-group mb-3" style={{width:"90%"}}>
              <input class="form-control" id="inputGroupFile03" />
              <button class="btn" type="button" id="inputGroupFileAddon03" style={{background:'#7dbd8e'}}>Button</button>
            </div>

            <div>
              <h5 style={{marginBottom:'19px'}}>AVAILABLE GAMES</h5>
              <div style={{display:'flex',width:'70%',justifyContent:'space-between'}}>
                <img src={mk} alt="img" width="70px"/>
                <img src={nfs} alt="" width="70px"/>
                <img src={hex} alt="" width="70px" style={{borderRadius:'50%'}}/>
                <img src={kin} alt="" width="70px" height="70px" style={{borderRadius:'80%'}}/>
                
                
              </div>
            </div>
        </Col>
        <Col sm={6} style={{height:'68vh',borderRadius:'10px',overflow:'hidden',zIndex:1,border:'none'}}>
          <video src={Vid} autoplay muted loop style={{width:'110%',height:'100%',objectFit:'cover'}} controls/>

          <div></div>
        </Col>
      </Row> */}


      <div className='online'>
        <div className='line'></div>
        <span className='watch'>Watch online</span>
        <div className="live_update">
          <h3>Live Stream</h3>
          
          <div className='live_div'>
            <button className='live_button'>
              <MdOutlineLiveTv style={{marginRight: '7px'}}/>
              LIVE
            </button>
            <button className="recorded">
              <RiRecordCircleLine style={{marginRight:'7px'}}/>
              RECORDED
            </button>
            <button className="offline">
              <IoCloudOfflineSharp style={{marginRight:'7px'}}/>
              OFFLINE
            </button>
          </div>
          <div>
            <IoChevronBackCircleOutline size={25}/>
            <IoChevronForwardCircleOutline size={25}/>
          </div>

          
        </div>
        <div className='store_item' style={{display:'flex',marginTop:'20px'}}>
            {data.map((item,k)=>(
              <div key={item.id}>
                <StoreItem {...item}/>

              </div>
            ))}
        </div>
        
      </div>

      {/* <Meta/>
      <Info/>
      <Footer/> */}
      

      {/* <div>
        <h3>The OGL Experience</h3>
        <Swipper/>
      </div> */}
  
    </div>
  );
}

