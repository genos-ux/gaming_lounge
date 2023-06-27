import HeroSection from '../components/HeroSection';
import Available from '../components/Available';
import Xperience from '../components/Xperience';
import Blog from '../components/Blog';
import Info from '../components/Info';
import Footer from '../components/Footer';
import Slider from '../components/Slider';


export default function Home(){
    return(

        <div style={{overflow:'hidden'}}>
        <HeroSection/>
        <div className="home" style={{overflow:'hidden',paddingLeft:'14px'}}>
            
            <Slider/>
            {/* <Available/> */}
            <Xperience/>
            <Blog/>
            
            <Info/>
            <Footer/>
            
        </div>

        </div>
    )
}