import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className=" topbar">
      <div className="bar">
        <ul className="list">
          <li>
            <a className="sid" href="">
              Home Budget
            </a>
          </li>
          <li>
            <a href="#proo"> Income</a>
          </li>
          <li>
            <a href="#linee"> Expenses</a>
          </li>
          <li>
            <a href="#mf">Investment</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Topbar;
