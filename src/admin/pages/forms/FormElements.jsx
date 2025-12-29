import React from "react";

const FormElements = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <h3 className="page-title">Form Elements</h3>
      </div>

      <div className="row">
        {/* LEFT: Default Form */}
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Default form</h4>
              <p className="card-description">Basic form layout</p>

              <form className="forms-sample">
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                  <label>Email address</label>
                  <input type="email" className="form-control" />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" />
                </div>

                <div className="form-check form-check-flat form-check-primary">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" /> Remember
                    me
                  </label>
                </div>

                <button className="btn btn-gradient-primary me-2">Submit</button>
                <button className="btn btn-light">Cancel</button>
              </form>
            </div>
          </div>
        </div>

        {/* RIGHT: Horizontal Form */}
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Horizontal Form</h4>

              <form className="forms-sample">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Email</label>
                  <div className="col-sm-9">
                    <input type="email" className="form-control" />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Password</label>
                  <div className="col-sm-9">
                    <input type="password" className="form-control" />
                  </div>
                </div>

                <button className="btn btn-gradient-primary me-2">Submit</button>
                <button className="btn btn-light">Cancel</button>
              </form>
            </div>
          </div>
        </div>

        {/* BOTTOM: Basic Form Elements */}
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Basic form elements</h4>

              <form className="forms-sample">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                  <label>Gender</label>
                  <select className="form-select">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Textarea</label>
                  <textarea className="form-control" rows="4"></textarea>
                </div>

                <button className="btn btn-gradient-primary me-2">Submit</button>
                <button className="btn btn-light">Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormElements;
