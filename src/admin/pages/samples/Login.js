import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth">
          <div className="row flex-grow">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left p-5">
                <div className="brand-logo">
                  <img src="/admin-assets/images/logo.svg" alt="logo" />
                </div>

                <h4>Hello! let’s get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>

                <form className="pt-3">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Username"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Password"
                    />
                  </div>

                  <div className="mt-3 d-grid gap-2">
                    <button
                      type="submit"
                      className="btn btn-gradient-primary btn-lg font-weight-medium auth-form-btn"
                    >
                      SIGN IN
                    </button>
                  </div>

                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />{" "}
                        Keep me signed in
                      </label>
                    </div>

                    {/* ✅ FIXED */}
                    <Link to="/forgot-password" className="auth-link text-primary">
                      Forgot password?
                    </Link>
                  </div>

                  <div className="text-center mt-4 font-weight-light">
                    Don’t have an account?{" "}
                    {/* ✅ FIXED */}
                    <Link to="/register" className="text-primary">
                      Create
                    </Link>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;