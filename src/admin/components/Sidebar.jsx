import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">

        {/* Profile */}
        <li className="nav-item nav-profile">
          <Link to="/admin" className="nav-link">
            <div className="nav-profile-image">
              <img src="/admin-assets/images/faces/face1.jpg" alt="profile" />
              <span className="login-status online"></span>
            </div>
            <div className="nav-profile-text d-flex flex-column">
              <span className="font-weight-bold mb-2">David Grey. H</span>
              <span className="text-secondary text-small">Project Manager</span>
            </div>
          </Link>
        </li>

        {/* Dashboard */}
        <li className="nav-item">
          <Link className="nav-link" to="/admin">
            <span className="menu-title">Dashboard</span>
            <i className="mdi mdi-home menu-icon"></i>
          </Link>
        </li>

        {/* UI Elements */}
        <li className="nav-item">
          <button
            className="nav-link"
            data-bs-toggle="collapse"
            data-bs-target="#ui-basic"
            type="button"
          >
            <span className="menu-title">Basic UI Elements</span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-crosshairs-gps menu-icon"></i>
          </button>

          <div className="collapse" id="ui-basic">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link className="nav-link" to="/admin/buttons">Buttons</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/dropdowns">Dropdowns</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/typography">Typography</Link>
              </li>
            </ul>
          </div>
        </li>

        {/* Icons */}
        <li className="nav-item">
          <button
            className="nav-link"
            data-bs-toggle="collapse"
            data-bs-target="#icons"
            type="button"
          >
            <span className="menu-title">Icons</span>
            <i className="mdi mdi-contacts menu-icon"></i>
          </button>

          <div className="collapse" id="icons">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link className="nav-link" to="/admin/icons">Font Awesome</Link>
              </li>
            </ul>
          </div>
        </li>

        {/* Forms */}
        <li className="nav-item">
          <button
            className="nav-link"
            data-bs-toggle="collapse"
            data-bs-target="#forms"
            type="button"
          >
            <span className="menu-title">Forms</span>
            <i className="mdi mdi-format-list-bulleted menu-icon"></i>
          </button>

          <div className="collapse" id="forms">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link className="nav-link" to="/admin/forms">
                  Form Elements
                </Link>
              </li>
            </ul>
          </div>
        </li>

        {/* Charts */}
        <li className="nav-item">
          <button
            className="nav-link"
            data-bs-toggle="collapse"
            data-bs-target="#charts"
            type="button"
          >
            <span className="menu-title">Charts</span>
            <i className="mdi mdi-chart-bar menu-icon"></i>
          </button>

          <div className="collapse" id="charts">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link className="nav-link" to="/admin/charts">ChartJs</Link>
              </li>
            </ul>
          </div>
        </li>

        {/* Tables */}
        <li className="nav-item">
          <button
            className="nav-link"
            data-bs-toggle="collapse"
            data-bs-target="#tables"
            type="button"
          >
            <span className="menu-title">Tables</span>
            <i className="mdi mdi-table-large menu-icon"></i>
          </button>

          <div className="collapse" id="tables">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link className="nav-link" to="/admin/tables">
                  Basic Table
                </Link>
              </li>
            </ul>
          </div>
        </li>

        {/* Auth */}
        <li className="nav-item">
          <button
            className="nav-link"
            data-bs-toggle="collapse"
            data-bs-target="#auth"
            type="button"
          >
            <span className="menu-title">User Pages</span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-lock menu-icon"></i>
          </button>

          <div className="collapse" id="auth">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link className="nav-link" to="/admin/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/register">Register</Link>
              </li>
            </ul>
          </div>
        </li>

        {/* Documentation */}
        <li className="nav-item">
          <a className="nav-link" href="https://bootstrapdash.com/demo/purple-admin-free/" target="_blank" rel="noopener noreferrer">
            <span className="menu-title">Documentation</span>
            <i className="mdi mdi-file-document-box menu-icon"></i>
          </a>
        </li>

      </ul>
    </nav>
  );
};

export default Sidebar;
