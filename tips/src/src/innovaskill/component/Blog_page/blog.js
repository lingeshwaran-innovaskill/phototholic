import React from "react";
import "./blog.css";
import { Link } from "react-router-dom";


// import blog_sec2img1 from "./blog_image/t4.jpg";
import blog_sec2img2 from "./blog_image/t2.jpg";
import blog_sec2img3 from "./blog_image/t3.jpg";
import blog_sec2img4 from "./blog_image/t1.jpg";

import blog_banner from "./blog_image/blog_backround.png";
import ExampleComponent from './text';

import blog_backround from './blog_image/BANNER1.svg';
import Navigation from "../../nav/navigation";
import Footer from "../../footer/footer";
import Navigation1 from "../../nav/navigation12";


function Blog(){
  return (
    <div>
      <Navigation/>
      <div className="container-fluid p-0 m-0">
        <img src={blog_backround} className="img-fluid blog_backround"></img>
        <ExampleComponent />
      </div><br></br>
      
      <section className="blog_section2 container-fluid ">

          <div className="row blog_section2_row p-0 m-0">

            <div className="blog_sec2div col-12 col-sm-11 col-md-6 col-lg-3 ">


                <img src={blog_sec2img2} className="img-fluid" />
                <h2>Diploma in Embedded</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio autem possimus sequi atque temporibus, doloremque nisi voluptates nobis in. Blanditiis, officiis. Animi id nobis vero, totam rem assumenda corrupti labore.  </p>
                <b><span>posted date:</span>17/07/2000</b><br/>
                <b><span>posted by:</span>Innovaskill</b>
           
               {/* <Link to="/project"><button type="button" className="btn btn-primary btn blog_sec2div_button">Read More</button></Link> */}
                
            </div>

            <div className="blog_sec2div col-12 col-sm-11 col-md-6 col-lg-3">
                <img src={blog_sec2img4} className="img-fluid"/>
                <h2>Diploma in Embedded</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio autem possimus sequi atque temporibus, doloremque nisi voluptates nobis in. Blanditiis, officiis. Animi id nobis vero, totam rem assumenda corrupti labore.</p>
                <b><span>posted date:</span>17/07/2000</b><br/>
                <b><span>posted by:</span>Innovaskill</b>

                {/* <Link to="/project"><button type="button" className="btn btn-primary btn blog_sec2div_button">Read More</button></Link> */}

                
            </div>

            <div className="blog_sec2div col-12 col-sm-11 col-md-6 col-lg-3">
                <img src={blog_sec2img2} className="img-fluid"/>
                <h2>Diploma in Embedded</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio autem possimus sequi atque temporibus, doloremque nisi voluptates nobis in. Blanditiis, officiis. Animi id nobis vero, totam rem assumenda corrupti labore.</p>
                <b><span>posted date:</span>17/07/2000</b><br/>
                <b><span>posted by:</span>Innovaskill</b>

                {/* <Link to="/project"><button type="button" className="btn btn-primary btn blog_sec2div_button">Read More</button></Link> */}

                  
            </div>

          </div>

      </section>
            
             <br/>

          <project1 />

          <Footer/>
    </div>
  );
}
export default Blog;



