import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/home";
import Enquiry from "./enquiryForm/enquiry";
import OnlinePayment from "./onlinepayment/payment";




function Main() {

    return (<>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/form" element={< Enquiry/>}/>
            <Route path="/online-payment" element = { <OnlinePayment /> }/>
        </Routes>
    </BrowserRouter>
    </>);
}

export default Main;
