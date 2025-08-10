import React, { useState, useContext } from "react";
import classes from "../Auth/Signup.module.css";
import { Link,Navigate, useNavigate} from "react-router-dom";
//authentication starts
import { auth } from "../../../Utility/Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../../components/DataProvider/DataProvider.jsx";
import { Type } from "../../../Utility/Action.type.jsx";
import { ClipLoader } from "react-spinners";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  const [{ user }, dispatch] = useContext(DataContext);
  const navigete=useNavigate()
  console.log(user);
  const authHandler = async (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    if (e.target.name == "signin") {
      setLoading({ ...loading, signIn: true });
      //firebase auth
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigete("/")
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signIn: false });
          // console.log(err);
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          
          // console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigete("/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUp: false });
          // console.log(err);
        });
    }
  };
  //  console.log(password,email)
  return (
    <>
      {/* logo */}
      <section className={classes.login}>
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyVy5KIo9m5mAxaF0FNQSISSMy24NUCKrEaBBU--52-JHiN7BNn3G1G0rHVxrOTVCG6KY&usqp=CAU"
            alt=""
          />
        </Link>
        {/* Form */}
        <div className={classes.login_container}>
          <h1>Sign In</h1>

          <form action="">
            <div>
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
              />
            </div>
            <button
              type="submit"
              onClick={authHandler}
              name="signin"
              className={classes.login_signInBtn}
            >
              {" "}
              {loading.signIn ? (
                <ClipLoader color="#000" size={15} />
              ) : (
                "Sign In"
              )}
            </button>
          </form>
          {/* agreement */}
          <p>
            By signing in you agree to the AMAZON FAKE CLON conditions of use &
            sale.Please see our privacy Notice and our Cookies Notice
          </p>
          {/* create account btn */}
          <button
            type="submit"
            onClick={authHandler}
            name="signup"
            className={classes.login_register_btn}
          >
            {loading.signUp ? (
              <ClipLoader color="#000" size={15} />
            ) : (
              "Create Your Amazon Account"
            )}
          </button>
          {error && (
            <small style={{ paddingTop: "10px", color: "red" }}>{error}</small>
          )}
        </div>
      </section>
    </>
  );
}

export default Auth;
