import { Link } from "react-router-dom";
import "./main.css";

import DEV from "./profile11.jpg";
import Bg from "./blur.jpg";




function Mainpage(){

    return (<>

    <div className="container-fluid profile-main-div align">

        {/* <img src={Bg} id="bg-main-profile"/> */}

        <div className="container">

            <div className="row main-body-profile">

                <div className="col-12 col-sm-12 col-md-12 col-lg-6  profile-body-content ">

                    <div className="col-12 profile-quotes">
                        <h1>If You are <span>PERSISTENT</span> you will get it.</h1>
                        <h1>If you are<span> CONSISTENT </span> you will keep it.</h1>
                    </div>

                    <div className="col-12 developer-profile">
                        <h1>Hi! I'm <span>Lingeshwaran</span>,</h1>
                        <h3>I'm a MERN DEVELOPER</h3>
                    </div>

                    <div className="col-12 profile-info">
                        <p id="para-title">For Developing a Website :</p>
                        <p><i class="fa-solid fa-phone"></i> - 9082413467</p>
                        <p><i class="fa-solid fa-envelope"></i>  - lee@photoholic.in</p>
                    </div>

                    <Link to={'/home'} > <button className="py-1 px-3 my-2"> Start </button> </Link>

                </div>

                <div className="col-6 profile-body-img align z-n1 d-md-none d-lg-block d-sm-none d-none ">
                    <img src = {DEV} className="img-fluid w-75"/>
                </div>

            </div>

        </div>

            

    </div>

    </>);
}

export default Mainpage;