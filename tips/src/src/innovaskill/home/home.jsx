import Banner from "./banner/banner";
import Navigation from "../nav/navigation";
import Welcome from "./welcome/welcome";
import Technologies from "./Tech/tech";
import OwnContent from "./insContent/innova";
import Locate from "./map&form/location";
import ParticlesComponent from "../particles/particles";
import Footer from "../footer/footer";
import Enquiry from "../enquiryForm/enquiry";
import Review from "./googleReview/review";
import Development from "./development/dev";



function Home() {


    return (<>

    <Navigation/>
    <Banner/>
    <Development/>
    <Welcome/>
    <Technologies/> 
    {/* <OwnContent/> */}
    <Review/>
    <Locate/>
    <Footer/>

    </>);
}
export default Home;
