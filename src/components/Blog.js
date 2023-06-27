import {Row,Col} from 'react-bootstrap';
import {BiTimeFive} from 'react-icons/bi';
import img1 from '../assets/images/Design_Ellipse_7_1.png';
import img2 from '../assets/images/Design_Rectangle_22.png';
import '../Styles/Blog.scss';
import img3 from '../assets/images/Design_Rectangle_23.png';

export default function Blog(){
    return (
        <Row className='blog'>
            <div className='update'>
                <p>Keep <span>Up Wi</span>th Us</p>
                <h4>Blog,Events , Promos And Updates</h4>
                <button>More articles</button>
            </div>
            <Col md={6} xs={12}>

                <div className='blog_profile'>
                    <img src={img2} alt="" />

                    <div className='admi'>
                        <div className='admi_profile'>
                            <img src={img1} alt="" />
                            <span>Administrator</span>
                        </div>

                        <h5>The Things We Need To Check When We Want To Buy A House</h5>
                        <div className='time'>
                            <BiTimeFive/>
                            <span>4 min read | READ</span>
                        </div>
                    </div>
                </div>

                <div className='blog_profile'>
                    <img src={img2} alt="" />

                    <div className='admi'>
                        <div className='admi_profile'>
                            <img src={img1} alt="" />
                            <span>Administrator</span>
                        </div>

                        <h5>The Things We Need To Check When We Want To Buy A House</h5>
                        <div className='time'>
                            <BiTimeFive/>
                            <span>4 min read | READ</span>
                        </div>
                    </div>
                </div>

                <div className='blog_profile'>
                    <img src={img2} alt="" />

                    <div className='admi'>
                        <div className='admi_profile'>
                            <img src={img1} alt="" />
                            <span>Administrator</span>
                        </div>

                        <h5>The Things We Need To Check When We Want To Buy A House</h5>
                        <div className='time'>
                            <BiTimeFive/>
                            <span>4 min read | READ</span>
                        </div>
                    </div>
                </div>


            </Col>
            <Col xs={12} md={4} className='other_image'>
                <div className='mansion'>
                    <img src={img3} alt="" />
                </div>

                <div className='admi'>
                        <div className='admi_profile'>
                            <img src={img1} alt="" />
                            <span>Administrator</span>
                        </div>

                        <h5>The Things We Need To Check When We Want To Buy A House</h5>
                        <div className='time'>
                            <BiTimeFive/>
                            <span>4 min read | READ</span>
                        </div>
                </div>
            </Col>
        </Row>
    )
}