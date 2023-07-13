import React from "react";
import Input from "./compenent/Ui/Input";
import Submit from "./compenent/Ui/Submit";
import Inputwraper from "./compenent/Ui/Inputwrapp";
import Sliders from "./compenent/Login/Sliders"
import LOGO from './images/blackIogo.svg'
import { BrowserRouter as Router } from "react-router-dom";

export default function LoginUser() {
  return (
    <Router>
    <div className="W-full h-screen bg-white flex">
      <div className="w-1/2 px-24 flex flex-col justify-center ">
        <div>
          <div className="mx-auto w-3/4 flex flex-col items-center gap-3 mb-10">
          <img  className='h-16 w-16 rounded-full mb-8' src={LOGO} alt="" />
            <h1 className="font-semibold text-4xl leading-[20px]">
              This is Reset Password Page
            </h1>
          </div>
          <form method="post">
            <Inputwraper>
              <label htmlFor="InputPassword" className="text-[#484951] font-medium text-lg">
                Password
              </label>
              <Input
                type="password"
                name="change_password_form[plainPassword][first]"
                id="inputEmail"
                placeholder="Enter your password"
                required
                autoFocus
              />
            </Inputwraper>
            <Inputwraper>
              <label htmlFor="inputRepeatPassword" className="text-[#484951] font-medium text-lg">
                Repeat password
              </label>
              <Input
                type="password"
                name="change_password_form[plainPassword][second]"
                id="inputPassword"
                placeholder="repeat your password"
                required
              />
            </Inputwraper>

            <Submit value="Reset Password" />
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
