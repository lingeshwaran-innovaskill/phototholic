import './welcome.css';
import welcome from './image/ABOUT US1.svg';
import { motion } from 'framer-motion';
import TextAni from './text';
function Welcome(){


    const title='Welcome to Innovaskill Technologies'.split("");
    return (<>
<div className="container-fluid mb-lg-5 "  > 

<div className="row  my-lg-5" id="welcome" >
<h1></h1>
</div>

    <div className="welcome-main container ">

        <div className="welcome-body row d-flex justify-content-evenly align-items-center ">

            <div className="welcome-content d-inline-flex col-12 col-sm-10 col-md-10 col-lg-12">
                {title.map((t,ind)=>{
                    return(<>
                        <TextAni key={ind}> {t} </TextAni>
                    </>)
                })}
            </div>

            <div className="welcome-content col-12 col-sm-10 col-md-10  col-lg-6 my-3 my-md-3 my-sm-3 md-lg-0 ">

            <div className='welcome-content-1 py-md-2  m-0'>

                <p className=' mb-lg-3 m-0'>
                    To empower individuals through comprehensive, high-quality training programs that foster personal and professional growth, equipping them with the skills and knowledge needed to excel in their chosen fields. We are committed to creating an inclusive learning environment that encourages innovation, critical thinking, and lifelong learning, thereby contributing to the overall development of society.
                </p>

                <p className='mb-lg-3 m-0'>To be a leading training institute recognized for excellence in education and skill development, driving positive change and innovation in the workforce. We envision a world where every individual has access to the resources and opportunities needed to achieve their full potential, creating a dynamic and skilled global community.
                </p>

            </div>

        </div>

            <div className="welcome-image d-sm-block col-12 col-lg-6 col-md-10 col-sm-10 d-flex justify-content-center align-items-center">
                <img src={welcome} className='img-fluid col-lg-10'/>
            </div>

        </div>
    </div>

</div>

    </>);
}
export default Welcome;
