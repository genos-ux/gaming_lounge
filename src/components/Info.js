import React from 'react'
import img1 from '../assets/images/Design_Rectangle_15_1.png';
import img2 from '../assets/images/Design_Ellipse_8_1.png';
import img3 from '../assets/images/Design_Ellipse_6_12.png';
import image from '../assets/images/Design_Rectangle_24.png';
import "../Styles/Info.scss";


function Info() {
  return (
    <div className='newsletter'>
        

        <div className='newsletter_container'>
            
            <div className='images'>
                
                
                
                <img src={img3} alt="" width="100px"/>
                <img src={img2} alt="" />
                
            
            </div>
            
            
            <div className='subscribe'>
                <h4>
                    Subscribe For More Info <br />
                    And Update From Hounter
                </h4>
                <div class="input-group mb-3" style={{width:'150%',marginTop:'35px'}}>
                <input class="form-control" id="inputGroupFile03" />
                <button class="btn" type="button" id="inputGroupFileAddon03" style={{backgroundColor:'#7dbd8e'}}>Subscribe here</button>
                </div>
            </div>
            

            
            <div>
            <img src={img3} alt="" width="100px"/>
            <img src={img2} alt="" />
            
            
            
            </div>
           
        </div>
        
    </div>
  )
}

export default Info;