import React from "react";
import classes from "../Auth/Signup.module.css";
import { Link } from "react-router-dom";
function Auth() {
  return (
    <>
    {/* logo */}
      <section className={classes.login}>
        <Link>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyVy5KIo9m5mAxaF0FNQSISSMy24NUCKrEaBBU--52-JHiN7BNn3G1G0rHVxrOTVCG6KY&usqp=CAU"
            alt=""
          />
        </Link>
        {/* Form */}
        <div>
          <h1>Sign In</h1>
          <form action="">



            
          </form>
        </div>
      </section>

    </>
  );
}

export default Auth;
