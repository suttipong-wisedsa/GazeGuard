import './App.css';
import profile from "./image/LOGO.png";
import username from "./image/photo1.png";
import password from "./image/photo2.png";
import LinkPage from "./LinkPage";
import { BrowserRouter, Route, Link ,Router, Switch } from "react-router-dom";
function Login() {
    return (
      
    <div className="main">
      <div className="sub-main">      
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login</h1>
        
            <div>
              <img src={username} alt="email" className="username2" />
              <input type="text" placeholder="User name" className="name" />
            </div>
            <div className="input2">
              <img src={password} alt="pass" className="username" />
              <input type="password" placeholder="Password" className="name" />
            </div>
            <div className="login-button">
              <button>LogIn</button>
            </div>
          <div className="Link">
          <a href="/">SignIn With Google</a>  or  <a href="/">SignUp</a>
          </div>          
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
    
    )
}

export default Login;