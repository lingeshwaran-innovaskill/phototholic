import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// import React from "react";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./admin/requiredSite/protected";
// import RequiredAuth from "./admin/requiredSite/required.user";

import React, { Suspense , useEffect } from "react";
import ScroolToTop from "./scroolTo/scrool";
import { Toaster } from "react-hot-toast";
import Animation from './loading ani/loading';

const RequiredAuth = React.lazy(()=>import("./admin/requiredSite/required.user"));
const Home = React.lazy(()=>import("./home/home"));
const Enquiry = React.lazy(()=>import("./enquiryForm/enquiry"));
const OnlinePayment = React.lazy(()=>import("./onlinepayment/payment"));
const Franchise = React.lazy(()=>import("./Franchise/franchise"));
const Blog = React.lazy(()=>import("./component/Blog_page/blog"));
const ACEL = React.lazy(()=>import("./component/Electrical-Power-System/Autocadd -electrical/ACEL"));
const ETAP = React.lazy(()=>import("./component/Electrical-Power-System/ETAP/ETAP"));
const AES = React.lazy(()=>import("./component/Electronic Automation Engineers/Automoive_Embedded/AES"));
const Elinux = React.lazy(()=>import("./component/Electronic Automation Engineers/Embedded_Linux/Elinux"));
const Embedded = React.lazy(()=>import("./component/Electronic Automation Engineers/Embedded_System/Embedded"));
const IOT = React.lazy(()=>import( "./component/Electronic Automation Engineers/IOT/IOT"));
const MATLAB = React.lazy(()=>import("./component/Electronic Automation Engineers/MATLAB/MATLAB"));
const Pcb = React.lazy(()=>import("./component/Electronic Automation Engineers/Pcb/PCB_Stack"));
const SOLAR = React.lazy(()=>import("./component/Entrepreneural Training/SOLAR/SOLAR"));
const Mernstack = React.lazy(()=>import("./component/Full-Stack-development/MERN_Stackcourse/MERN_Stack"));
const JAVAFD = React.lazy(()=>import( "./component/Full-Stack-development/JAVA_full_Stackcourse/JAVAFD_Stack"));
const MEAN = React.lazy(()=>import("./component/Full-Stack-development/MEAN_Stackcourse/MEAN_Stack"));
const UIUX = React.lazy(()=>import("./component/Full-Stack-development/UI-UX/UIUX"));
const AWS = React.lazy(()=>import("./component/Hardware_Networking/AWS/AWS"));
const CCNA = React.lazy(()=>import("./component/Hardware_Networking/CCNA/CCNA"));
const REDHAT = React.lazy(()=>import("./component/Hardware_Networking/RED-HAT/RHAT"));
const INDAUTO = React.lazy(()=>import("./component/INDUSTRIAL AUTOMATION/INDUSTRIAL AUTOMATIONpage/INDAUTO"));
const Kidspage = React.lazy(()=>import("./component/kidspage/kids_page"));
const C = React.lazy(()=>import("./component/Software Development/C/C"));
const Cplus = React.lazy(()=>import("./component/Software Development/C++/C++"));
const Java = React.lazy(()=>import("./component/Software Development/Java/Java"));
const Python = React.lazy(()=>import("./component/Software Development/Python/Python"));
const AT = React.lazy(()=>import("./component/Software-testing/Automation Testing/AT"));
const MT = React.lazy(()=>import("./component/Software-testing/Manual Testing/MT"));
const CollageLoginForm = React.lazy(()=>import("./collages/students/student"));
const CollageDemo = React.lazy(()=>import("./collages/collages"));
const Navigation1 = React.lazy(()=>import("./nav/navigation12"));
const LoginForm = React.lazy(()=>import("./component/email/email"));
const ObjDel = React.lazy(()=>import("./admin/adminDashboard/components/navigation/nadDocDel"));
const UpdateNav = React.lazy(()=>import("./admin/adminDashboard/components/navigation/nav.update"));
const UpdatePage = React.lazy(()=>import("./admin/adminDashboard/components/navigation/navi"));
const UpdateCourse = React.lazy(()=>import("./admin/adminDashboard/components/courses/courseupdate.form"));
const Courses = React.lazy(()=>import("./admin/adminDashboard/components/courses/course"));
const Dashboard = React.lazy(()=>import( "./admin/adminDashboard/dashboard/dashboard"));
const AdminLogin = React.lazy(()=>import("./admin/adminlogin/admin-login"));
const DM = React.lazy(()=>import("./component/Entrepreneural Training/Digital-Marketing/DM"));
const Salesforce = React.lazy(()=>import("./component/Special-Program/Sales-Force/SF"));
const MAL = React.lazy(()=>import("./component/Special-Program/Machine Learning/MAL"));
const DL = React.lazy(()=>import( "./component/Special-Program/Deep Learning/DL"));
const DATA = React.lazy(()=>import("./component/Special-Program/Data-Science/DATA"));
const DATAAY = React.lazy(()=>import("./component/Special-Program/Data-Analytics/DATAAY"));
const AI = React.lazy(()=>import( "./component/Special-Program/Artificial intelligence/AI"));
const SQL = React.lazy(()=>import("./component/Software-testing/SQL/SQL"));
const Loginpage =React.lazy(()=> import("./collages/students/loginpage"));
const NavUpdate =React.lazy(()=> import('./admin/adminDashboard/components/footer/footer-update'));
const Footer = React.lazy(() => import('./admin/adminDashboard/components/footer/admin-footer'));

// import Home from "./home/home";
// import Enquiry from "./enquiryForm/enquiry";
// import OnlinePayment from "./onlinepayment/payment";
// import Franchise from "./Franchise/franchise";
// import Blog from "./component/Blog_page/blog";
// import ACEL from "./component/Electrical-Power-System/Autocadd -electrical/ACEL";
// import ETAP from "./component/Electrical-Power-System/ETAP/ETAP";
// import SOLAR from "./component/Entrepreneural Training/SOLAR/SOLAR";
// import Mernstack from "./component/Full-Stack-development/MERN_Stackcourse/MERN_Stack";
// import JAVAFD from "./component/Full-Stack-development/JAVA_full_Stackcourse/JAVAFD_Stack";
// import MEAN from "./component/Full-Stack-development/MEAN_Stackcourse/MEAN_Stack";
// import UIUX from "./component/Full-Stack-development/UI-UX/UIUX";
// import AWS from "./component/Hardware_Networking/AWS/AWS";
// import CCNA from "./component/Hardware_Networking/CCNA/CCNA";
// import REDHAT from "./component/Hardware_Networking/RED-HAT/RHAT";
// import INDAUTO from "./component/INDUSTRIAL AUTOMATION/INDUSTRIAL AUTOMATIONpage/INDAUTO";
// import Kidspage from "./component/kidspage/kids_page";
// import C from "./component/Software Development/C/C";
// import Cplus from "./component/Software Development/C++/C++";
// import Java from "./component/Software Development/Java/Java";
// import Python from "./component/Software Development/Python/Python";
// import AT from "./component/Software-testing/Automation Testing/AT";
// import MT from "./component/Software-testing/Manual Testing/MT";
// import SQL from "./component/Software-testing/SQL/SQL";
// import AI from "./component/Special-Program/Artificial intelligence/AI";
// import DATAAY from "./component/Special-Program/Data-Analytics/DATAAY";
// import DATA from "./component/Special-Program/Data-Science/DATA";
// import DL from "./component/Special-Program/Deep Learning/DL";
// import MAL from "./component/Special-Program/Machine Learning/MAL";
// import Salesforce from "./component/Special-Program/Sales-Force/SF";
// import Studentlogin from './component/Studentlogin_page/studentlogin';
// import DM from "./component/Entrepreneural Training/Digital-Marketing/DM";
// import AdminLogin from "./admin/adminlogin/admin-login";
// import Dashboard from "./admin/adminDashboard/dashboard/dashboard";
// import Courses from "./admin/adminDashboard/components/courses/course";
// import UpdateCourse from "./admin/adminDashboard/components/courses/courseupdate.form";
// import UpdatePage from "./admin/adminDashboard/components/navigation/navi";
// import UpdateNav from "./admin/adminDashboard/components/navigation/nav.update";
// import ObjDel from "./admin/adminDashboard/components/navigation/nadDocDel";
// import LoginForm from "./component/email/email";
// import Navigation1 from "./nav/navigation12";
// import CollageDemo from "./collages/collages";
// import CollageLoginForm from "./collages/students/student";
// import Loginpage from "./collages/students/loginpage";
// import Footer from "./admin/adminDashboard/components/footer/admin-footer";
// import NavUpdate from "./admin/adminDashboard/components/footer/footer-update";
// import AES from "./component/Electronic Automation Engineers/Automoive_Embedded/AES";
// import Elinux from "./component/Electronic Automation Engineers/Embedded_Linux/Elinux";
// import Embedded from "./component/Electronic Automation Engineers/Embedded_System/Embedded";
// import IOT from "./component/Electronic Automation Engineers/IOT/IOT";
// import MATLAB from "./component/Electronic Automation Engineers/MATLAB/MATLAB";
// import Pcb from "./component/Electronic Automation Engineers/Pcb/PCB_Stack";

function Main(){

    const handle =(e)=>{
        e.preventDefault();
    }

    return (<>
    <AuthProvider>

    {/* <div onContextMenu={handle}> */}

    <Toaster/>

        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />

        <BrowserRouter>

            <ScroolToTop/>

            <Routes>
                <Route path="/"     element={<Suspense fallback={<Animation/>}> <Home/> </Suspense> }/>
                <Route path="/home"      element={<Suspense fallback={<Animation/>}> <Home/> </Suspense> }/>
                <Route path="/enquiry-form"   element={<Suspense fallback={<Animation/>}> < Enquiry/> </Suspense> }/>
                <Route path="/online-payment"  element={<Suspense fallback={<Animation/>}> <OnlinePayment/> </Suspense> }/>
                <Route path="/mern-stack"   element={ <Suspense fallback={<Animation/>}>  <Mernstack/> </Suspense>}/>
                <Route path="/kids"    element={ <Suspense fallback={<Animation/>}> <Kidspage/> </Suspense>}/>
                <Route path="/franchise-opportunity" element={<Suspense fallback={<Animation/>}> <Franchise/> </Suspense>}/>
                <Route path="/blog" element={<Suspense fallback={<Animation/>}> <Blog/> </Suspense> }/>
                <Route path="/acel" element={<Suspense fallback={<Animation/>}> <ACEL/> </Suspense>}/>
                <Route path="/etap" element={<Suspense fallback={<Animation/>}> <ETAP/> </Suspense>}/>
                <Route path="/embedded" element={<Suspense fallback={<Animation/>}> <Embedded/> </Suspense>}/>
                <Route path="/pcb"      element={<Suspense fallback={<Animation/>}> <Pcb/> </Suspense>}/>
                <Route path="/automotive-embedded-system" element={<Suspense fallback={<Animation/>}> <AES/> </Suspense>}/>
                <Route path="/embedded-linux" element={<Suspense fallback={<Animation/>}> <Elinux/> </Suspense>}/>
                <Route path="/matlab" element={<Suspense fallback={<Animation/>}> <MATLAB/> </Suspense>}/>
                <Route path="/iot" element={<Suspense fallback={<Animation/>}> <IOT/> </Suspense>}/> 
                <Route path="/solar" element={<Suspense fallback={<Animation/>}> <SOLAR/> </Suspense>}/>
                <Route path="/java-stack" element={<Suspense fallback={<Animation/>}> <JAVAFD/> </Suspense>}/>
                <Route path="/mean-stack" element={<Suspense fallback={<Animation/>}> <MEAN/> </Suspense>}/>
                <Route path="/ui-ux" element={<Suspense fallback={<Animation/>}> <UIUX/> </Suspense>}/>
                <Route path="/aws" element={<Suspense fallback={<Animation/>}> <AWS/> </Suspense>}/>
                <Route path="/ccna" element={<Suspense fallback={<Animation/>} > <CCNA/> </Suspense>}/>
                <Route path="/redhat-linux" element={<Suspense fallback={<Animation/>}> <REDHAT/> </Suspense>}/>
                <Route path="/industrial-auto" element={<Suspense fallback={<Animation/>}> <INDAUTO/> </Suspense>}/>
                <Route path="/c"   element={<Suspense fallback={<Animation/>}> <C/> </Suspense>}/>
                <Route path="/C++" element={<Suspense fallback={<Animation/>}> <Cplus/> </Suspense>}/>
                <Route path="/java" element={<Suspense fallback={<Animation/>}> <Java/> </Suspense>}/>
                <Route path="/python" element={<Suspense fallback={<Animation/>}> <Python/> </Suspense>}/>
                <Route path="/automation-testing" element={<Suspense fallback={<Animation/>}> <AT/> </Suspense>}/>
                <Route path="/manual-testing" element={<Suspense fallback={<Animation/>}> <MT/> </Suspense>}/>
                <Route path="/sql" element={<Suspense fallback={<Animation/>}>  <SQL/> </Suspense> }/>
                <Route path="/artificial-intelligence" element={<Suspense fallback={<Animation/>}> <AI/> </Suspense>}/>
                <Route path="/data-analyst" element={<Suspense fallback={<Animation/>}> <DATAAY/> </Suspense>}/>
                <Route path="/data-science" element={<Suspense fallback={<Animation/>}> <DATA/> </Suspense>}/>
                <Route path="/deep-learning" element={<Suspense fallback={<Animation/>}> <DL/> </Suspense>}/>
                <Route path="/machine-learning" element={<Suspense fallback={<Animation/>}> <MAL/> </Suspense>}/>
                <Route path="/sales-force" element={<Suspense fallback={<Animation/>}> <Salesforce/> </Suspense>}/>
                <Route path="/student-login" element={<Suspense fallback={<Animation/>}> <LoginForm/> </Suspense>} />
                <Route path="/digital-marketing"  element={<Suspense fallback={<Animation/>}> <DM/> </Suspense>} />
                <Route path="/collages" element={<Suspense fallback={<Animation/>}> <CollageDemo/> </Suspense>}/>
                <Route path="/pmc" element={<Suspense fallback={<Animation/>}> <CollageLoginForm/> </Suspense>}/>
                <Route path="/pmc-students" element={<Suspense fallback={<Animation/>}> <Loginpage/> </Suspense>}/>
                <Route path="/admin" element={<Suspense fallback={<Animation/>}> <AdminLogin/> </Suspense> }/>
                <Route path="/admin-dashboard"  element={<Suspense fallback={<Animation/>}> <RequiredAuth> <Dashboard/> </RequiredAuth> </Suspense> }/>
                <Route path="/course"          element={<Suspense fallback={<Animation/>}> <RequiredAuth> <Courses/> </RequiredAuth> </Suspense>  }/>
                <Route path="/course-update"    element={<Suspense fallback={<Animation/>}> <RequiredAuth>  <UpdateCourse/> </RequiredAuth> </Suspense>}/>
                <Route path="/navigation"      element={<Suspense fallback={<Animation/>}> <RequiredAuth>  <UpdatePage/> </RequiredAuth> </Suspense> }/>
                <Route path="/nav-update"      element={ <Suspense fallback={<Animation/>}> <RequiredAuth>  <UpdateNav/> </RequiredAuth> </Suspense>}/>
                <Route path="/nav-update-obj"   element={ <Suspense fallback={<Animation/>}> <RequiredAuth>  <ObjDel/> </RequiredAuth> </Suspense>}/>
                <Route path="/footer"          element={<Suspense fallback={<Animation/>}>  <RequiredAuth>  <Footer/> </RequiredAuth> </Suspense> }/>
                <Route path="/footer-update"    element={<Suspense fallback={<Animation/>}> <RequiredAuth>  <NavUpdate/> </RequiredAuth> </Suspense> }/>
            </Routes>

        </BrowserRouter>

    </AuthProvider>

    {/* </div> */}
    </>);
}

export default Main;
