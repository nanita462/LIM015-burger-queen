import React from "react";
//import Coffee from "../../assets/cafe.png";
import { Link } from "react-router-dom";
import "./404.scss";

function NotFoundPage() {
  return (
    <div className="not-found">
      {/* <div className="not-found-img-cont">
        <img className="not-found-img" alt="404" src={Coffee} />
      </div> */}
      <div className="not-found-message">
        <p className="message-first-line">Are you lost?</p>
        <p>
          This is the way to go

          <Link to="/">
            <span className="not-found-home">  Home</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
