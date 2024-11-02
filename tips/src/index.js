import "./index.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
      //my website :-
// import Mainjs from './lee website/main';
// import Timerwatch from './alarm/main';/
// import Watch from './alarm/alarm';
// import WatchStop from './stopwatch/main';
// import Person1 from './HOC/Person1';
// import Person2 from './HOC/person2';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
// import Web from './Task/basicweblogin/web/Home';
// import Lee from './Task/basicweblogin/web/Success';
// import './index.css';
// import "./App.css";
// import './form.css';
// game task
// import Game1 from './Gametask/game1';
// import Game from './Gametask/Game';
// import './Gametask/Game.css';
// import Form from './Task/from/from';
//    search filter task
// form validation 
// import Form from './Task/reactfrom/from';
// import App from './website/Main';
// import Formtask from './getdataTask/from';
// import Checkbox from './interview task\'s/task';
// import Navbar from './sidenavbar/navbar';
// import Website from './website/web1';
// import App from './App';
// import Form from './Task/reactfrom/from';
// import Explore from "./FE_Instagram/Insta.Explore";
// import Image from "./imageuploading/image";
// import MaterialUi from "./material Ui/demo";
// import Web from "./unisys/main";
// import Hirola from "./hirola task/hirola";
// import MainHirola from "./hirola task/main";
// import MainChat from "./chatapp/mainchat";
// import Translate from './api task/translate/translate';

// import Main from "./innovaskill copy/main";

const Mainjs = React.lazy(() => import("./lee website/main"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>

<Mainjs/>

{/* <Web/> */}

{/* <Navigation/> */}


{/*  <MainHirola/>

<React.Suspense> */}

{/* <Mainjs/> */}

{/* <Image/>

<MaterialUi/> */}

{/* </React.Suspense> */}

{/* <MainChat/> */}

{/* <Explore/> */}

{/* <Timerwatch/> */}

{/* <WatchStop/> */}

{/* <Navbar/> */}


{/* <App/> */}

{/* <Form/>  */}

{/* <Translate/> */}

{/* // <BrowserRouter>
// <Routes>
// <Route path='/' element={<Web/>}/>
// <Route path='/Success' element={<Lee />}/>
// </Routes>
// </BrowserRouter> */}

{/* <Person1/>

<Person2/> */}

{/* <BrowserRouter>
  <Routes>
    <Route path='/' element={<Game1 />}/>
    <Route path='/Game' element={<Game/>}/>
  </Routes>
  </BrowserRouter> */}

 {/* <Formtask/> */}

 {/* <Form/> */}

 {/* <App /> */}

 {/* <Task/> */}

 {/* <Axiosapi/> */}

 {/* <Website />  */}

 {/* <Checkbox /> */}

  </>
);















// web page task









//            use navigate task

// <BrowserRouter>
//   <Routes>
//     <Route path='/' element={<Home/>}/>
//     <Route path='/About' element={<About/>}/>
//   </Routes>
//   </BrowserRouter>








// this is for importing the file 

//     import User from  "./nameTransfer/Name";

// let (username)=prompt('enter your name');
//                
// (this is used for store the name )
//             | 
//     <User stuname={username} />
//                      |
//     (this is the (username) where we stored the element)




//                    x ---------x----------x-------x

                         //navigation bar (this is used to store the navbar)
                         //path is used for searching the variable 
                         // element is used for store the file 


// import {BrowserRouter,Routes,Route} from "react-router-dom"; 
//             |
//      (it is must for creating a nav bar)


// <BrowserRouter>      (if i enter this in chrome )  =>    (this file will be open)
// <Routes>                          |                              |
//         <Route              path='/about'                 element={<About />} /> 

//       <Route  path='/'     element={<Home />} />
//       <Route  path='/events' element={<Event />}/>
//       <Route path='service' element={<Service />}/>
//       <Route  path='contact' element={<Contact />}/>
// </Routes>
// </BrowserRouter>
