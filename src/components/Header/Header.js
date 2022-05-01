import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.svg" />
      <div className={styles.loginBlock}>
		  {
			  props.isAuth 
			  ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
			  : <NavLink to={"/login"}>Login</NavLink>
		  }
        
      </div>
    </header>
  );
};

export default Header;
