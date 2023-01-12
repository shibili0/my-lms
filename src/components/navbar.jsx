import React from "react";
import { Outlet, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            {/* <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button> */}
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                
                <li class="nav-item">
                  <NavLink class="nav-link active" to="/dashboard">
                    <li>Dashboard</li>
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link active" to="/courses">
                    <li>Courses</li>
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link active" to="/library">
                    <li>Library</li>
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link active" to="/mylists">
                    <li>My Lists</li>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
