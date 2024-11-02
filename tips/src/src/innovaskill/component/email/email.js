import React, { useState, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import logo from './std_logo.png'
import "./email.css";
import { loadCaptchaEnginge , LoadCanvasTemplate , validateCaptcha } from "react-simple-captcha";
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";

const LoginForm=()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const navigate = useNavigate();

  const userCredentials = [
    { email: "jagadeeshkumar087@gmail.com", password: "password1" },
    { email: "lingeshwaran@gmail.com", password: "password2" },
    { email: "user3@gmail.com", password: "password3" },
    { email: "user4@gmail.com", password: "password4" },
    { email: "user5@gmail.com", password: "password5" },
    { email: "user6@gmail.com", password: "password6" },
    { email: "user7@gmail.com", password: "password7" },
    { email: "user8@gmail.com", password: "password8" },
    { email: "user9@gmail.com", password: "password9" },
    { email: "user10@gmail.com", password: "password10" },
  ];

  useEffect(() => {
    if (showCaptcha) {
      loadCaptchaEnginge(6);
    }
  }, [showCaptcha]);

  const handleLogin = (event) => {
    event.preventDefault();

    const user = userCredentials.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setError("");
      setIsLoggedIn(true);
      setShowLoginForm(false);
      setShowCaptcha(true); // Show captcha after successful login
    } else {
      // setError("Email or password is incorrect.");
      alert("Email or password is incorrect.");
      setIsLoggedIn(false);
    }
  };

  const doSubmit = () => {
    const user_captcha = document.getElementById("user_captcha_input").value;

    if (validateCaptcha(user_captcha) === true) {
      alert("Captcha Matched");
      loadCaptchaEnginge(6);
      document.getElementById("user_captcha_input").value = "";
      navigate("/anotherpage"); // Change this to the desired path
    } else {
      alert("Captcha Does Not Match");
      document.getElementById("user_captcha_input").value = "";
    }
  };

  return (
    <div className="stu_full">
      <div className="d-flex  justify-content-between div_logoo" >
          <div className="ms-sm-2 ms-md-2 ms-lg-5  col-5 col-sm-5 col-md-4 col-lg-2 ">
            <img src={logo} className=" img-fluid" />
          </div>

          <div className="col-4 col-sm-12 col-md-4 col-lg-2 ms-sm-2 ms-md-2 ms-lg-5  mt-3 ">
            <Link to={"/home"}>
              {" "}
              <i class="fa-solid fa-house" id="home_icon"></i>
            </Link>
          </div>
      </div>

      
      {showLoginForm ? (
        <div className="login-box">
          <h2>Student Login</h2>
          <form onSubmit={handleLogin}>
            <div className="input-box mt-5">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email</label>
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Password</label>
              <FaLock className="icon" />
            </div>

            {error && <p className="error">{error}</p>}
            <button type="submit" className="btn btn-primary ">
              Login
            </button>
          </form>
        </div>
      ) : null}

      {showCaptcha && (
        <div className="stu_captcha">
          <div className="col mt-3">
            <input
              placeholder="Enter Captcha"
              id="user_captcha_input"
              name="user_captcha_input"
              type="text"
              className="captcha_input mb-5 "
            />
          </div>
          <LoadCanvasTemplate className="" />

          <div className="col mt-2">
            <button className="btn btn-primary " onClick={doSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
