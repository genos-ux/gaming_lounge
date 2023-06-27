
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/Slider.scss';
import { dataSource  } from './data';
import imgGirl from '../assets/images/mk.png';
import {MdOutlineNavigateNext} from 'react-icons/md';
import {GrFormNext} from 'react-icons/gr';
import {GrFormPrevious} from 'react-icons/gr';
import {MdOutlineLiveTv} from 'react-icons/md';
import {RiRecordCircleLine} from 'react-icons/ri';
import {IoCloudOfflineSharp} from 'react-icons/io5';
import {IoChevronBackCircleOutline} from 'react-icons/io5';
import {IoChevronForwardCircleOutline} from 'react-icons/io5';
import { useRef } from 'react';
import StoreItem from './StoreItem';
import { Card} from 'react-bootstrap'
import '../App.css'
// import live from '../assets/images/Design_Vector_17.png';
import live from '../assets/images/Design_Vector_17.png';

// import {IoCloudOfflineSharp} from 'react-icons/io5';
import {HiOutlineStatusOnline} from 'react-icons/hi'


const CustomPrevArrow = ({onClick}) => (
  <div onClick={onClick} className="custom-prev-arrow" style={{display:'block',zIndex:1}}>
    {/* Your custom previous arrow content */}
    {/* <GrFormNext/> */}
    <IoChevronBackCircleOutline size={25}/>
    {/* Previous */}
  </div>
);

const CustomNextArrow = ({onClick}) => (
  <div className="custom-next-arrow" onClick={onClick}>
    {/* Your custom next arrow content */}
    {/* <GrFormPrevious/> */}
    <IoChevronForwardCircleOutline size={25}/>
    {/* Next */}
  </div>
);


function App() {
  const [defaultImage, setDefaultImage] = useState({});
  const sliderRef = useRef(null);
  
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };

  const handlePrevArrowClick = () => {
    // Handle previous arrow click event
    // ...
    sliderRef.current.slickPrev();
  };

  const handleNextArrowClick = () => {
    // Handle next arrow click event
    // ...
    sliderRef.current.slickNext();
  };

  return (
    <div className="slider-container">
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
          <div className='arrows'>
            {/* <IoChevronBackCircleOutline size={25}/> */}
            {/* <IoChevronForwardCircleOutline size={25}/> */}
            <CustomPrevArrow onClick={handlePrevArrowClick}/>
            <CustomNextArrow onClick={handleNextArrowClick}/>
          </div>

          
        </div>
        {/* <div className='store_item' style={{display:'flex',marginTop:'20px'}}>
            {data.map((item,k)=>(
              <div key={item.id}>
                <StoreItem {...item}/>

              </div>
            ))}
        </div> */}
        {/* <div key={item.id}>
              <StoreItem {...item}/>

            </div> */}
      </div>
      <div className='App'>
        <Slider {...settings} ref={sliderRef} className="slide">
          {dataSource.map((item) => (

          <div className="card">
            <div className="card-top" style={{position: 'relative'}}>
              <img
                src={
                  defaultImage[item.name] === item.name
                    ? defaultImage.linkDefault
                    : item.imgUrl
                }
                alt={item.name}
                onError={handleErrorImage}
              />

              {/* <h5 style={{marginTop:'7px'}}>{item.name}</h5> */}
              {/* <img src={live} alt="" width="10px" style={{position:'absolute',top:'0px',cursor:'pointer'}}/> */}
              <img src={live} style={{width:"30px",height:'30px',position:'absolute',top:'0px',cursor:'pointer',background:'none'}} alt="" />
              <div style={{border:'1px solid black',fontSize:'14px',padding:'2px 10px',width:'46%',textAlign:'center',backgroundColor: item.isLive?"#fab19b":"#88acdb",border:'none',borderRadius:'17px',color:item.isLive?'#a61f11':'#3173d6',position:'absolute',bottom:'7px',marginLeft:'9px',width:'100px'}}>
              {item.isLive?<HiOutlineStatusOnline color='#a61f11' style={{marginRight:'3px'}}/>:<IoCloudOfflineSharp color="#3173d6"/>} {item.isLive?"LIVE":"OFFLINE"}
              </div>
              
            </div>

          </div>
            
            
          ))}
        </Slider>
      </div>
      

    </div>
  );
}

export default App;
  