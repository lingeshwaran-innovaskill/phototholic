import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState , createContext} from 'react';
import React ,{Suspense} from 'react';
import { AuthProvider } from './auth';


// import Home from "./home/Home";
import Feedback from "./feedback/feedback";
// import Signup from './signup/signup';
// import Gallery from './gallery/gallery';
import Form from './form/Form';
import RequireAuth from './requireAuth';
import Login from './login/login';
import Error from './error page/err';
import Order from './Orders/Order';
import Profile from './profile/profile';
import Update from './update/update';
import Animation from './animation/ani';
// import Mainpage from './mainpage/main';
import User from './user';
const Mainpage = React.lazy(()=> import('./mainpage/main'));
const Signup = React.lazy(() => import("./signup/signup"));
const Gallery = React.lazy(() => import('./gallery/gallery'));
const Home = React.lazy(() => import("./home/Home"));

const Mainjs = () => {

    const [user,setUser] = useState({});

    const datas=(data)=>{
        setUser(data);
    }

    return(<>

<AuthProvider>    
{/* this context is used for if user  is not signup it will redirect to signup page */}

   <BrowserRouter>
   <Routes>
    <Route path='/'           element = { <Suspense fallback={<Animation/>}> <Mainpage /> </Suspense>  }/>
    <Route path="/home"       element = { <Suspense fallback={<Animation/>}> <Home  data={user} /> </Suspense>   }/>
    <Route path="/signup"     element = { <Suspense  fallback={<Animation/>}>  <User>  <Signup datas={datas}/>  </User>  </Suspense>  }/>
    <Route path='/login'      element = {<Suspense  fallback={<Animation/>}>  <User> <Login />  </User> </Suspense>  }/>
    <Route path='/gallery'    element = {<Suspense  fallback={<Animation/>}> <RequireAuth> <Gallery/>  </RequireAuth>   </Suspense> }/>
    <Route path="/feedback"   element = {<Suspense  fallback={<Animation/>}>  <RequireAuth>   <Feedback name={user}/>  </RequireAuth>  </Suspense>}/>
    <Route path='/profile'    element = {<Suspense  fallback={<Animation/>}>  <RequireAuth>   <Profile profile={user}/> </RequireAuth> </Suspense>}/>
    <Route path='/orders'     element = {<Suspense  fallback={<Animation/>}>  <RequireAuth>  <Order/>  </RequireAuth>  </Suspense>  }/>
    <Route path='/form'       element = { <Suspense  fallback={<Animation/>}> <Form/>  </Suspense>}/>
    <Route path='/update'     element = {<Suspense  fallback={<Animation/>}>  <Update/> </Suspense>  }/>
    <Route path="*"           element = { <Suspense  fallback={<Animation/>}> <Error/>  </Suspense> }/>
   </Routes>
   </BrowserRouter>

</AuthProvider>
    </>
    );
}
export default Mainjs;