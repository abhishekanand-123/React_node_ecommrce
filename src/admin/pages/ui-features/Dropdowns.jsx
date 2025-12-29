import React from "react";

const Dropdowns = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <h3 className="page-title">Dropdowns</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">UI Elements</li>
            <li className="breadcrumb-item active">Dropdowns</li>
          </ol>
        </nav>
      </div>

      <div className="row">
        <div className="col-lg-12 grid-margin">
          <div className="card">

            {/* GRADIENT DROPDOWNS */}
            <div className="card-body">
              <h4 className="card-title">Gradient Dropdown</h4>
              <p className="card-description">
                Add class <code>.btn-gradient-&#123;color&#125;</code>
              </p>

              <div className="template-demo d-flex flex-wrap gap-2">
                {[
                  "primary",
                  "secondary",
                  "danger",
                  "warning",
                  "success",
                  "info",
                ].map((color, i) => (
                  <div className="dropdown" key={i}>
                    <button
                      className={`btn btn-gradient-${color} dropdown-toggle`}
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      Dropdown
                    </button>
                    <div className="dropdown-menu">
                      <h6 className="dropdown-header">Settings</h6>
                      <button className="dropdown-item">Action</button>
                      <button className="dropdown-item">Another action</button>
                      <button className="dropdown-item">Something else here</button>
                      <div className="dropdown-divider"></div>
                      <button className="dropdown-item">Separated link</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BASIC DROPDOWNS */}
            <div className="card-body">
              <h4 className="card-title">Basic dropdown</h4>
              <div className="template-demo d-flex flex-wrap gap-2">
                {[
                  "primary",
                  "secondary",
                  "danger",
                  "warning",
                  "success",
                  "info",
                ].map((color, i) => (
                  <div className="dropdown" key={i}>
                    <button
                      className={`btn btn-${color} dropdown-toggle`}
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      Dropdown
                    </button>
                    <div className="dropdown-menu">
                      <h6 className="dropdown-header">Settings</h6>
                      <button className="dropdown-item">Action</button>
                      <button className="dropdown-item">Another action</button>
                      <button className="dropdown-item">Something else here</button>
                      <div className="dropdown-divider"></div>
                      <button className="dropdown-item">Separated link</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* OUTLINE DROPDOWNS */}
            <div className="card-body">
              <h4 className="card-title">Dropdown outline</h4>
              <div className="template-demo d-flex flex-wrap gap-2">
                {[
                  "primary",
                  "secondary",
                  "danger",
                  "warning",
                  "success",
                  "info",
                ].map((color, i) => (
                  <div className="dropdown" key={i}>
                    <button
                      className={`btn btn-outline-${color} dropdown-toggle`}
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      Dropdown
                    </button>
                    <div className="dropdown-menu">
                      <h6 className="dropdown-header">Settings</h6>
                      <button className="dropdown-item">Action</button>
                      <button className="dropdown-item">Another action</button>
                      <button className="dropdown-item">Something else here</button>
                      <div className="dropdown-divider"></div>
                      <button className="dropdown-item">Separated link</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdowns;
