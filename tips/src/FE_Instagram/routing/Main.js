import { BrowserRouter , Routes , Route } from "react-router-dom";


function Insta() {

    return ( <>
<BrowserRouter>
<Routes>
    <Route path="/"/>
    <Route path="/explore"/>
    <Route path="/messages"/>
</Routes>
</BrowserRouter>
    </> );
}

export default Insta;