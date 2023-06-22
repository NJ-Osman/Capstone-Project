import "./LogIn.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem("authenticated" || false)
  );
  const users = [{ username: "Jane", password: "testpassword" }];
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      setauthenticated(true);
      localStorage.setItem("authenticated", true);
    }
  };

  const handleUserNameChange = (e) => {
    setusername(e.target.value)
  }
  
  const handlePasswordChange = (e) => {
    setpassword(e.target.value)
  }
  
  return (
    <div className="form">
      <div className="formHandle">
        <h3 className="loginTitle">Log In</h3>
        <form onSubmit={handleSubmit}>
          <div className="userNameForm">
            <input
              type="text"
              className="userName"
              id="userName"
              placeholder="USERNAME"
              value={username}
              onChange={handleUserNameChange}
            />
          </div>
          <div className="passwordForm">
            <input
              type="password"
              className="Password"
              id="Password"
              placeholder="PASSWORD"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="button-container">
            <Link to={"/"}><input type="SUBMIT"  className="logInButton" /></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
