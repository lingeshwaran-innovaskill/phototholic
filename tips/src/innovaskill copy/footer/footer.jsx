import { NavLink } from 'react-router-dom';
import './footer.css';

import logo from './images/logo.png';
import { useState } from 'react';


function Footer() {

    const icons = [
        {
            iconname: "fa-brands fa-instagram",
            links: "https://www.instagram.com/innovaskill/?hl=en"
        },
        {
            iconname: "fa-brands fa-facebook",
            links: "https://www.facebook.com/Innovaskilltechnologies"
        },
        {
            iconname: "fa-brands fa-linkedin",
            links: "https://in.linkedin.com/in/innovaskill-technologies-088943214?trk=org-employees&original_referer=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Finnovaskill"
        },
        {
            iconname: "fa-brands fa-youtube",
            links: "https://www.youtube.com/@innovaskill2682/featured"
        },

    ];

    return (<>
        <div className="footer-main">

            <div className='footer-body'>

                <div className='footer-content-1'>

                    <div className='footer-head'>
                        <img src={logo} />
                    </div>
                    <div className='footer-content'>
                        <p> Innovaskill Technologies is a global training company which provides tailor-fit courses to suit individual customer's requirement with our Industry Ready Learning Management System. Our training and development programs will help you to learn and acquire new skills.</p>
                        <div className='footer-media-icon'>
                            {icons.map((e) => {
                                return (<>
                                    <a href={e.links} target='blank'>
                                        <i class={e.iconname}></i>
                                    </a>
                                </>)
                            })}
                        </div>
                    </div>
                </div>

                <div className='footer-content-2'>
                    <div className='footer-head'>
                        <h2> Training Domain : </h2>
                    </div>
                    <div className='footer-content'>
                        <NavLink> Electronic Design Automation </NavLink>
                        <NavLink> Industrial Automation </NavLink>
                        <NavLink> Data Science </NavLink>
                        <NavLink> Software Development </NavLink>
                        <NavLink> Full Stack Development </NavLink>
                        <NavLink> Mechanical Design </NavLink>
                    </div>

                </div>

                <div className='footer-content-2'>
                    <div className='footer-head'>
                        <h2> Our Service : </h2>
                    </div>
                    <div className='footer-content'>
                        <NavLink> Website Design Development </NavLink>
                        <NavLink> mobile App Development </NavLink>
                        <NavLink> Data Science </NavLink>
                        <NavLink> Collage Academic Project </NavLink>
                        <NavLink> intership </NavLink>
                        <NavLink> PLC Control Panel </NavLink>
                    </div>
                </div>

                <div className='footer-content-address'>

                    <div className='footer-add-div'>
                        <h2> Corporate Office Banglore :</h2>
                        <div className='footer-addres'>
                            <a href='https://www.google.com/maps/place/Innovaskill+Technologies/@12.9163777,77.601665,18z/data=!4m6!3m5!1s0x3bae1561a753b37d:0x1ce340f91823652d!8m2!3d12.9165529!4d77.6025501!16s%2Fg%2F11j5d3hfgj?entry=ttu' target='blank'>
                                #47, 100 Feet Ring Rd, Vysya Bank Colony, BTM 2nd Stage, BTM Layout, Bengaluru, Karnataka 560076
                            </a>
                        </div>
                    </div>
                    <div className='footer-add-div'>
                        <h2> Chennai Branch :</h2>
                        <div className='footer-addres'>
                            <a href='https://www.google.com/maps/place/Innovaskill+Maraimalai+Nagar/@12.7972375,80.0194649,17z/data=!3m2!4b1!5s0x3a52f9e2e355d01d:0xa043b2d339b62a26!4m14!1m7!3m6!1s0x3bae1561a753b37d:0x1ce340f91823652d!2sInnovaskill+Technologies!8m2!3d12.9165529!4d77.6025501!16s%2Fg%2F11j5d3hfgj!3m5!1s0x3a52f9d564d8eb59:0x95ba50c1edcf4b6b!8m2!3d12.7972323!4d80.0220398!16s%2Fg%2F11vfbjxj30?entry=ttu' target='blank'>
                                1st Floor, No 48, HIG, Vallal MGR Salai, above Omprakash Honda, NH-1, Maraimalai Nagar, Tamil Nadu 603209
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </>)
}
export default Footer;