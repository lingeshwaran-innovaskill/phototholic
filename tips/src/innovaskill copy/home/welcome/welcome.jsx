import './welcome.css';
// import welcome from './image/ABOUT_US.png';
import welcome from './image/BANNER2.png';
// import gif from './image/1.gif';

function Welcome(){


    return (<>
    <div className="welcome-main" id="welcome">
        {/* <div></div> */}
    <div className='welcome-body'>
        <div className='welcome-content'>

            <h1> Welcome to Innovaskill Technologies </h1>
            <div className='welcome-content-1'>
            <p>
            Innovaskill Technologies is a global training company which provides tailor-fit courses to suit individual customer's requirement with our Industry Ready Learning Management System. Our training and development programs will help you to learn and acquire new skills, as well as gain the professional knowledge required to progress in your career.
            </p>
            <p>
            We offer a vast array of practical & job oriented domain specific courses, be IT software development, Electronic Design Automation, Industrial Automation, Information & Network Security, Mechanical & Civil Design, Solar Installation, Digital Marketing and many more Professional courses which are specifically designed to suit the needs of the Industry and also helps you to become an Entrepreneur.
            </p>

            </div>

        </div>

        <div className='welcome-image'>
            <img src={welcome}/>
        </div>
    </div>
    </div>
    </>);
}


export default Welcome;

