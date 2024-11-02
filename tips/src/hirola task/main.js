import { BrowserRouter, Route , Routes } from "react-router-dom";
import Hirola from "./hirola";
import Update from "./update";


function MainHirola() {


    return(<>
    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Hirola/>}/>
        <Route path="/update" element={<Update/>}/>
    </Routes>
    </BrowserRouter>
    </>)
}

export default MainHirola;