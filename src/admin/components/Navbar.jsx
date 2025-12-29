import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
        <a className="navbar-brand brand-logo" href="/">
          <img src="/admin-assets/images/logo.svg" alt="logo" />
        </a>
        <a className="navbar-brand brand-logo-mini" href="/">
          <img src="/admin-assets/images/logo-mini.svg" alt="logo" />
        </a>
      </div>

      <div className="navbar-menu-wrapper d-flex align-items-stretch">
        <button
          className="navbar-toggler navbar-toggler align-self-center"
          type="button"
          data-toggle="minimize"
        >
          <span className="mdi mdi-menu"></span>
        </button>

        <div className="search-field d-none d-md-block">
          <form className="d-flex align-items-center h-100">
            <div className="input-group">
              <div className="input-group-prepend bg-transparent">
                <i className="input-group-text border-0 mdi mdi-magnify"></i>
              </div>
              <input
                type="text"
                className="form-control bg-transparent border-0"
                placeholder="Search projects"
              />
            </div>
          </form>
        </div>

        <ul className="navbar-nav navbar-nav-right">
          {/* Profile */}
          <li className="nav-item nav-profile dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
            >
              <div className="nav-profile-img">
                <img src="/admin-assets/images/faces/face1.jpg" alt="profile" />
                <span className="availability-status online"></span>
              </div>
              <div className="nav-profile-text">
                <p className="mb-1 text-black">David Greymaax</p>
              </div>
            </a>

            <div className="dropdown-menu navbar-dropdown">
              <a className="dropdown-item" href="#">
                <i className="mdi mdi-cached me-2 text-success"></i>
                Activity Log
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                <i className="mdi mdi-logout me-2 text-primary"></i>
                Signout
              </a>
            </div>
          </li>

          {/* Fullscreen */}
          <li className="nav-item d-none d-lg-block full-screen-link">
            <a className="nav-link" href="#">
              <i className="mdi mdi-fullscreen"></i>
            </a>
          </li>

          {/* Messages */}
          <li className="nav-item dropdown">
            <a
              className="nav-link count-indicator dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
            >
              <i className="mdi mdi-email-outline"></i>
              <span className="count-symbol bg-warning"></span>
            </a>

            <div className="dropdown-menu dropdown-menu-end navbar-dropdown preview-list">
              <h6 className="p-3 mb-0">Messages</h6>
              <div className="dropdown-divider"></div>

              {["face4.jpg", "face2.jpg", "face3.jpg"].map((img, i) => (
                <a className="dropdown-item preview-item" href="#" key={i}>
                  <div className="preview-thumbnail">
                    <img
                      src={`/admin-assets/images/faces/${img}`}
                      alt="msg"
                      className="profile-pic"
                    />
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">
                      New message received
                    </h6>
                    <p className="text-gray mb-0">Just now</p>
                  </div>
                </a>
              ))}

              <div className="dropdown-divider"></div>
              <h6 className="p-3 mb-0 text-center">View all messages</h6>
            </div>
          </li>

          {/* Notifications */}
          <li className="nav-item dropdown">
            <a
              className="nav-link count-indicator dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
            >
              <i className="mdi mdi-bell-outline"></i>
              <span className="count-symbol bg-danger"></span>
            </a>

            <div className="dropdown-menu dropdown-menu-end navbar-dropdown preview-list">
              <h6 className="p-3 mb-0">Notifications</h6>
              <div className="dropdown-divider"></div>

              <a className="dropdown-item preview-item" href="#">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-success">
                    <i className="mdi mdi-calendar"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject mb-1">Event today</h6>
                  <p className="text-gray">Reminder</p>
                </div>
              </a>
            </div>
          </li>

          {/* Power */}
          <li className="nav-item nav-logout d-none d-lg-block">
            <a className="nav-link" href="#">
              <i className="mdi mdi-power"></i>
            </a>
          </li>
        </ul>

        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
