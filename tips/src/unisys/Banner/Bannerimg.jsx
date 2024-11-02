import './Banner.css';
import banner from './images/banner.jpg';

import b1 from './images/b1.jpg';
import b2 from './images/b2.jpg';


function Bannerimg() {

    return (<>

    <div className="main-banner">
        <img src={banner}/>
            <div className="banner-content">
                <div className='content'>
                    <h1> Build Your <br/> Career with <br/>  INNOVASKILLS technologies </h1>
                    <h3>Job Oriented Training with 100% <br/> Placement Assistance</h3>
                    <button> Enquiry now </button>
                </div>
            </div>
    </div>

    <Banner2/>

    </>);
}

export default Bannerimg;


function Banner2() {

   return(<>
    <div className='banner2'>

        <div className='banner2-content'>
            <h3>ENTERPRICING COMPUTING</h3>
            <h1>Welcome to INNOVASKILL</h1>
            <h4>Innovaskill Technologies is a global training company which provides tailor-fit courses to suit individual customer's requirement with our Industry Ready Learning Management System. Our training and development programs will help you to learn and acquire new skills, as well as gain the professional knowledge required to progress in your career.</h4>
            <button> Learn more </button>
        </div>
        
        <div className='banner2-img'>

            <div className='banner2-top'>
                
                <div className='banner-img'>
                    <img src={b1}/>
                </div>
                
                <div className='blog'>
                    <div className='blog-title'>
                        <h3> <i class="fa-regular fa-note-sticky"></i> BLOG </h3>
                        <h3> 13m </h3>
                    </div>
                        <h2>How to use AI as an equilizer of care for equitable employee experiences</h2>
                        <i class="fa-solid fa-arrow-right"></i>
                </div>

            </div>

            <div className='banner2-bottom'>

                <div className='blog'>
                    <div className='blog-title'>
                        <h3> <i class="fa-regular fa-newspaper"></i> NEWS </h3>
                        <h3> 13m </h3>
                    </div>
                        <h2>How to use AI as an equilizer of care for equitable employee experiences</h2>
                        <i class="fa-solid fa-arrow-right"></i>
                </div>

                <div className='banner-img'>
                    <img src={b2} className='img'/>
                </div>

            </div>
        </div>

    </div>
    </>);
}