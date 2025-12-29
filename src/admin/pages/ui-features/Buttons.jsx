import React from "react";

const Buttons = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <h3 className="page-title">Buttons</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">UI Elements</li>
            <li className="breadcrumb-item active">Buttons</li>
          </ol>
        </nav>
      </div>

      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <div className="card">

            {/* Gradient Buttons */}
            <div className="card-body">
              <h4 className="card-title">Gradient buttons</h4>
              <p className="card-description">
                Add class <code>.btn-gradient-&#123;color&#125;</code>
              </p>
              <div className="template-demo">
                <button className="btn btn-gradient-primary btn-fw">Primary</button>
                <button className="btn btn-gradient-secondary btn-fw">Secondary</button>
                <button className="btn btn-gradient-success btn-fw">Success</button>
                <button className="btn btn-gradient-danger btn-fw">Danger</button>
                <button className="btn btn-gradient-warning btn-fw">Warning</button>
                <button className="btn btn-gradient-info btn-fw">Info</button>
                <button className="btn btn-gradient-light btn-fw">Light</button>
                <button className="btn btn-gradient-dark btn-fw">Dark</button>
              </div>
            </div>

            {/* Rounded Buttons */}
            <div className="card-body">
              <h4 className="card-title">Rounded buttons</h4>
              <p className="card-description">Add class <code>.btn-rounded</code></p>
              <div className="template-demo">
                <button className="btn btn-gradient-primary btn-rounded btn-fw">Primary</button>
                <button className="btn btn-gradient-secondary btn-rounded btn-fw">Secondary</button>
                <button className="btn btn-gradient-success btn-rounded btn-fw">Success</button>
                <button className="btn btn-gradient-danger btn-rounded btn-fw">Danger</button>
                <button className="btn btn-gradient-warning btn-rounded btn-fw">Warning</button>
                <button className="btn btn-gradient-info btn-rounded btn-fw">Info</button>
              </div>
            </div>

            {/* Outline Buttons */}
            <div className="card-body">
              <h4 className="card-title">Outlined buttons</h4>
              <p className="card-description">
                Add class <code>.btn-outline-&#123;color&#125;</code>
              </p>
              <div className="template-demo">
                <button className="btn btn-outline-primary btn-fw">Primary</button>
                <button className="btn btn-outline-secondary btn-fw">Secondary</button>
                <button className="btn btn-outline-success btn-fw">Success</button>
                <button className="btn btn-outline-danger btn-fw">Danger</button>
                <button className="btn btn-outline-warning btn-fw">Warning</button>
                <button className="btn btn-outline-info btn-fw">Info</button>
              </div>
            </div>

            {/* Normal Buttons */}
            <div className="card-body">
              <h4 className="card-title">Normal buttons</h4>
              <div className="template-demo">
                <button className="btn btn-primary">Primary</button>
                <button className="btn btn-secondary">Secondary</button>
                <button className="btn btn-success">Success</button>
                <button className="btn btn-danger">Danger</button>
                <button className="btn btn-warning">Warning</button>
                <button className="btn btn-info">Info</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Buttons;
