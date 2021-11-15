import './App2.css';
import profile1 from "./image/photo3.png";
import username from "./image/photo1.png";
import password from "./image/photo2.png";

function SignUp() {
    return (
      <div className="main1">
      <div className="sub-main1">      
        <div>
          <div className="imgs1">
            <div className="container-image1">
              <img src={profile1} alt="profile" className="profile" />
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
              <button>Create Account</button>
            </div>         
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
    )
}

export default SignUp;