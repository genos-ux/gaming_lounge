import { Card} from 'react-bootstrap'
import '../App.css'
import live from '../assets/images/Design_Vector_17.png';
import {IoCloudOfflineSharp} from 'react-icons/io5';
import {HiOutlineStatusOnline} from 'react-icons/hi'

import '../Styles/StoreItem.scss';
function storeItem({imgUrl,name,isLive}){


    

    
    return (
        

        <div className='store' style={{}}>
            <img src={imgUrl} alt="" width="250vw" style={{objectFit: "cover",height:'270px',borderRadius:'7px'}}/>

            <h5 style={{marginTop:'7px'}}>{name}</h5>
            <img src={live} alt="" width="40px" style={{position:'absolute',top:'0px',cursor:'pointer'}}/>
            <div style={{border:'1px solid black',fontSize:'14px',padding:'2px 10px',width:'46%',textAlign:'center',backgroundColor: isLive?"#fab19b":"#88acdb",border:'none',borderRadius:'17px',color:isLive?'#a61f11':'#3173d6',position:'absolute',bottom:'38px',marginLeft:'9px'}}>
               {isLive?<HiOutlineStatusOnline color='#a61f11' style={{marginRight:'3px'}}/>:<IoCloudOfflineSharp color="#3173d6"/>} {isLive?"LIVE":"OFFLINE"}
            </div>
            
        </div>

        
    )
}
 
export default storeItem;