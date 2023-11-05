import React, { Fragment, useRef, useState } from "react";
import "./Login.css";
import pic from "../../images/chatbot.gif";
import { AiOutlineMail } from "react-icons/ai";
import { PiPasswordLight } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const loginTab = useRef(null);

  const loginSubmit = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("email", email);
    myForm.append("password", password);
    console.log(myForm);
    try {
      const response = await fetch(
        "https://backend-sih-project-5wz7dep6ya-uc.a.run.app/authenticate",
        {
          method: "POST", // Use the appropriate HTTP method (e.g., POST, PUT)
          body: myForm,
        }
      );

      if (response.ok) {
        const responseData = await response.json();

        if (responseData) {
          console.log(responseData);
          navigate("/form");
          // Registration was successful
          // You can handle the success response here, such as redirecting the user or showing a success message
        } else {
          // Registration failed
          // Handle the error response here, such as showing an error message to the user
          console.error("login failed.");
          console.log(responseData);
        }
      }
      else {
        // Handle the case where the API request returns an error status code
        console.error(`API request failed with status: ${response.status}`);
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Network error:", error);
    }
  };

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <Fragment>
      <div className="container">
        <img src={pic} alt="pic" />
        <form className="signUpForm" ref={loginTab} onSubmit={loginSubmit}>
          <div className="details">
            <AiOutlineMail className="icons" />
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={registerDataChange}
            />
          </div>
          <div className="details">
            <PiPasswordLight className="icons" />
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              value={password}
              onChange={registerDataChange}
            />
          </div>
          <div className="buttons">
            <input type="submit" value="Login" />
            <Link to="/signup">Signup</Link>
          </div>
        </form>
        <img src={pic} alt="pic" className="pic2" />
      </div>
    </Fragment>
  );
};

export default Login;
