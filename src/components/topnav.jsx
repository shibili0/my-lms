import React from "react";
import { FaBell } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
function Topnav() {
  return (
    <>
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="topnavbell"> <FaBell
                    className="bellicon"
                    style={{ color: "#EF115E", fontSize: "25px" }}
                  />
                 
                </li>

                <li className="nav-item">
                <Link to="/">
                  <img
                    className="rounded-circle"
                    src={require("./images/propic.jpeg")}
                    style={{
                      width: "55px",
                      height: "55px",
                      border: "2px solid #EF115E",
                    }}
                    alt="profileImage"
                  ></img>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <Outlet />
    </>
  );
}

export default Topnav;
