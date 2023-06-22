import { Link } from "react-router-dom";
import { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
      const navigate = useNavigate();
      const [username, setusername] = useState("");
      const [password, setpassword] = useState("");
      const [authenticated, setauthenticated] = useState(
        localStorage.getItem(localStorage.getItem("authenticated") || false)
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
          setusername(e.target.value);
        };

        const handlePasswordChange = (e) => {
          setpassword(e.target.value);
        };


    return (
      <div className="form">
        <div className="formHandle">
          <h3 className="signupTitle">Sign Up</h3>
          <form onSubmit={handleSubmit}>
            <div className="userNameForm">
              <input
                type="text"
                className="userName"
                id="userName"
                value={username}
                placeholder="USERNAME"
                onChange={handleUserNameChange}
              />
            </div>
            <div className="passwordForm">
              <input
                type="password"
                className="Password"
                id="Password"
                placeholder="PASSWORD"
                onChange={handlePasswordChange}
              />
            </div>
            <div className="button-container">
              <Link to={"/"}><input type="submit" className="signUpButton" /></Link>
            </div>
          </form>
        </div>
      </div>
    );
};
