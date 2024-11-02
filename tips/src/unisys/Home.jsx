import Bannerimg from "./Banner/Bannerimg";
import Navigation from "./Navigation/Nav";
import Technologies from "./Technologies/Tech";
import Client from "./client/client";


function Homepage(){

    return (<>
    <Navigation />

    <Bannerimg/>

    <Technologies/>
    <Client/>
    </>);
}

export default Homepage;