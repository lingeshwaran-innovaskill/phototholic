import React from "react";
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Homepage from "./Home";

function Web(){

    return (<>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />} />
        </Routes>
    </BrowserRouter>
    </>);
}

export default Web;