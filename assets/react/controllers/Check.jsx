import React from "react";
import img1 from "./images/check.png";
import LOGO from "./images/blackIogo.svg";
import { BrowserRouter as Router } from "react-router-dom";

export default function Check() {
  return (
    <Router>
      <div className="h-screen bg-white flex justify-center items-center">
        <div className="w-1/2 px-24 flex flex-col justify-center items-center">
          <div className="mx-auto w-3/4 flex flex-col items-center gap-3 mb-10">
            <img
              className="h-16 w-16 rounded-full mb-8"
              src={LOGO}
              alt=""
            />
            <h1 className="font-semibold text-4xl leading-[20px]">
              Welcome Back To Login !
            </h1>
          </div>
          <div className="flex flex-col items-center gap-7">
            <div className="border-[1px] border-[#2FD47B] w-20 h-20 rounded-full flex justify-center items-center">
              <img src={img1} alt="" />
            </div>
            <h1 className="text-[#252733] font-semibold text-4xl uppercase">
              Check your Inbox
            </h1>
            <p className="text-[#5D5F6C] text-center">
              The token to reset your password has been sent to your email !{" "}
              <a href="/login" className="no-underline">Back to login</a>{" "}
            </p>
          </div>
        </div>
      </div>
    </Router>
  );
}