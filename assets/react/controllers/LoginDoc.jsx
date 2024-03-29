import React, { useState } from "react";
import Input from "./compenent/Ui/Input";
import Submit from "./compenent/Ui/Submit";
import Inputwraper from "./compenent/Ui/Inputwrapp";
import Sliders from "./compenent/Login/Sliders";
import LOGO from './images/blackIogo.svg';
import { BrowserRouter as Router } from "react-router-dom";

export default function LoginUser(props) {
  const { error, last_username } = props;
  const [isFormEmpty, setIsFormEmpty] = useState(false);

  function handleFormSubmit(event) {
    event.preventDefault();
    const emailInput = event.target.elements.email;
    const passwordInput = event.target.elements.password;

    if (!emailInput.value || !passwordInput.value) {
      setIsFormEmpty(true);
    } else {
      setIsFormEmpty(false);
      event.target.submit();
    }
  }

  return (
    <Router>
      <div className="W-full h-screen bg-white flex">
        <div className="w-1/2 px-24 flex flex-col justify-center ">
          <div>
            <div className="mx-auto w-3/4 flex flex-col items-center gap-3 mb-10">
              <img className='h-16 w-16 rounded-full mb-8' src={LOGO} alt="" />
              <h1 className="font-semibold text-4xl leading-[20px]">
                This is Doctors Login Page !
              </h1>
              <p className="font-medium text-[14px] text-[#5D5F6C]">
                unique login only for the doctors
              </p>
            </div>
            <form onSubmit={handleFormSubmit} method="post">
            {isFormEmpty && (
                <div className="alert alert-danger mt-4">
                  Please fill in both email and password fields.
                </div>
              )}
              {error && (
                <div className="alert alert-danger">
                  {error.messageKey ? error.messageKey : 'Invalid Credentials : Check you Password and Email '}
                </div>
              )}

              {props.app_user && (
                <div className="mb-3">
                  You are logged in as {props.app_user.userIdentifier},{" "}
                  <a href="/Logout">Logout</a>
                </div>
              )}

              <Inputwraper>
                <label htmlFor="inputEmail" className="text-[#484951] font-medium text-lg">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  id="inputEmail"
                  placeholder="Enter your email"
                  defaultValue={last_username}
                  required
                  autoFocus
                />
              </Inputwraper>
              <Inputwraper>
                <label htmlFor="inputPassword" className="text-[#484951] font-medium text-lg">
                  Password
                </label>
                <Input
                  type="password"
                  name="password"
                  id="inputPassword"
                  placeholder="Enter your password"
                  required
                />
                <a
                  href="/reset-password"
                  className="text-[#252733] cursor-pointer text-right mt-2 font-medium"
                >
                  Forgot Password ?
                </a>
              </Inputwraper>
              <input type="hidden" name="_csrf_token" value={props.csrf_token} />



              <Submit value="Log In" />

              <p className="font-semibold text-base text-center mt-4 text-[#5E5E60]">
                Return To Login User Page{" "}
                <a href="/login" className="text-[#1B53F5] cursor-pointer">
                  Log in here
                </a>
              </p>
            </form>
          </div>
        </div>
        <div className="bg-white w-1/2 h-full relative">
          <Sliders></Sliders>
        </div>
      </div>
    </Router>
  );
}