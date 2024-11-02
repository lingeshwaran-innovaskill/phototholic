import './payment.css';
import logo from './images/logo.png';

import Barcode from 'react-barcode';

function OnlinePayment() {


    return (<>


    <div className='payment-main-div'> 

    <div className='logo-div'>
        <img src={logo}/>
    </div>

    {/* <div className='barcode-div'>
        <Barcode value="lingesh" id="barcode"/>
    </div> */}

        <div className='payment-body'>

            <div className='payment-title'>
                <h2> Online Payment </h2>
            </div>

            <form>
                <input type='text' placeholder='Account Name' />
                <input type='number' placeholder='Account Number' />
                <input type='text' placeholder='Account Type'/>
                <input type='number' placeholder='IFSC code'/>
                <input type='text' placeholder='Bank Name'/>
                <input type='text' placeholder='Branch Name'/>

                <button> Submit </button>

            </form>

        </div>

    </div>

    </>);
}

export default OnlinePayment;
