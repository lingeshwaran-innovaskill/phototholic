import './payment.css';
import logo from './images/logo.png';
import { Link } from "react-router-dom";

function OnlinePayment() {


    return (<>

    <div className='container-fluid payment-main-div d-flex flex-column justify-content-lg-evenly justify-content-md-evenly justify-content-sm-center justify-content-center align-items-center'> 

        <div className="row d-flex justify-content-evenly align-items-center ">

            <div className='logo-div col-lg-3 col-md-5 col-sm-6 col-8 d-flex justify-content-start '>
                <img src={logo}/>
            </div>

            <div className='payment-home-btn d-flex justify-content-end align-items-lg-center col-lg-8 col-md-4 col-sm-4 col-3'>
                <Link to={'/home'} className='col-lg-1 col-md-2 col-sm-4' > <i className="fa-sharp fa-solid fa-house px-2 py-2"> </i> </Link> 
            </div>

        </div>

        <div className='payment-body col-lg-4 col-md-8 col-sm-9 col-12 d-flex flex-column justify-content-evenly align-items-center py-4 my-lg-0 my-md-0 my-sm-0 my-5'>

            <div className='payment-title col-lg-6 col-md-5 col-sm-6 col-7'>
                <h2 className=' my-2'> Online Payment </h2>
            </div>

            <div className='payment-details-div col-lg-10 col-md-9 col-sm-10 col-11 p-0'>

                <div className='payment-body-div col-12 py-2 my-2 d-flex justify-content-evenly align-items-center'>
                    <h3 className='col-lg-4 col-md-5 col-sm-5 col-5 m-0 ' >Account Name  </h3>  :  <p  className='col-lg-6 col-md-6 col-sm-5 col-6 m-0'>Innovaskill Technologies Private Limited </p>
                </div>

                <div className='payment-body-div col-12 py-2 my-2 d-flex justify-content-evenly '>
                    <h3 className='col-lg-4 col-md-5 col-sm-5 col-5 m-0 '>Account Number </h3> : <p className='col-lg-6 col-md-6 col-sm-5 col-6 m-0 te'> 029705006344 </p>
                </div>

                <div className='payment-body-div col-12 py-2 my-2  d-flex justify-content-evenly'>
                    <h3 className='col-lg-4 col-md-5 col-sm-5 col-5 m-0 '>Account Type </h3>  :  <p className='col-lg-6 col-md-6 col-sm-5 col-6 m-0'> Current </p>
                </div>

                <div className='payment-body-div col-12 py-2 my-2 d-flex justify-content-evenly'>
                    <h3 className='col-lg-4 col-md-5 col-sm-5 col-5 m-0 '> IFSC code </h3> :  <p className='col-lg-6 col-md-6 col-sm-5 col-6 m-0'>ICIC0000297 </p>
                </div>

                <div className='payment-body-div col-12 py-2 my-2  d-flex justify-content-evenly'>
                    <h3 className='col-lg-4 col-md-5 col-sm-5 col-5 m-0 '> Bank Name </h3> :  <p className='col-lg-6 col-md-6 col-sm-5 col-6 m-0'>ICICI Bank </p>
                </div>

            </div>

        </div>

    </div>

    </>);
}

export default OnlinePayment;
