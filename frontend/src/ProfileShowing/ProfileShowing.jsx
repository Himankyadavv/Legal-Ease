import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";


function ProfileShowing() {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        // Get the user's name from local storage
        const storeName = localStorage.getItem("userName");
        setUserName(storeName || "guest");
    }
    )

  return (
    <div className="profilediv">
      <header>
        <div className="logo">
          <img
            className="imagelogo"
            src="./Images/icons8-legal-64 (2).png"
            alt="Legalease"
          />
          <div className="legalease">
            <p className="webname">Legal-Ease</p>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/messages">Messages</Link>
            </li>
            <li>Articles</li>
            <li>Category</li>
          </ul>
        </nav>
        <div className="buttons">
          <button className="login">
            <Link to="/signup">{userName}</Link>
          </button>
          <button className="profile">
            <Link to="/Formpage">Create profile</Link>
          </button>
        </div>
      </header>
    </div>
  );
}

export default ProfileShowing;
