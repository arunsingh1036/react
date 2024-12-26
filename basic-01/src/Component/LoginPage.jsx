import { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {

  const[action, setAction] = useState("Sign Up");
  return (
    <>
      <div className="containar">
        <div className="containar-box">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action==="Login"?<div></div>:<div className="input">
            <input type="text" placeholder="Enter Your name" />
          </div>}
          
          <div className="input">
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="input">
            <input type="password" placeholder="Enter Your Password" />
          </div>
        </div>
        {action=="Sign Up"? <div></div>:<div className="forgot-password">Lost Passwoad? <span>Click Here</span></div>}
        
        <div className="submit-container">
          <div className={action==="Login"?"submit gray":"submit" } onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
