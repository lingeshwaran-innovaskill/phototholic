import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Thewebsite from './taskweb';
import Weblink from  './Cart';

import camera from '../images/camera.jpg';
import head from  '../images/h.jpg';
import Cargo from '../images/cargo1.jpg';
import mobile from '../images/pixel.webp';

import { useState } from 'react';

function App(){ 

    const datas=([
        { img:camera,
          name:'Camera -DSLR',
          amount:1299,
          count:1
        },
        { img:head,
          name:'Headphones',
          amount:499,
          count:1
        },
          {img:Cargo,
          name:'Cargo pante',
          amount:100,
          count:1
        },
          { img:mobile,
          name:'Mobile - google pixel',
          amount:799,
          count:1
        }
        ]);

    const [cart,setCart]=useState([]);

    const add=(cartvalue)=>{
   setCart([...cart , cartvalue]);
    };
  
    const clear=(cleariteam)=>{
      setCart(cart.filter((e)=>e.name!==cleariteam));
    };


    return(
        <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Thewebsite length={cart.length} datas={datas} add={add}/>}/>
    <Route path='/cart' element={<Weblink cart={cart} clear={clear} />}/>
  </Routes>
  </BrowserRouter>
        </>
    )
}
export default App;

