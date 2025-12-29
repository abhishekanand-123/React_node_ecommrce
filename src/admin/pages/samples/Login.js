import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', formData);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-brand">
          <i className="mdi mdi-layers-triple"></i>
          <span>Purple</span>
        </div>
        
        <h4 className="auth-title">Hello! let's get started</h4>
        <h6 className="auth-subtitle">
          Sign in to continue.
        </h6>

        <form onSubmit={handleSubmit}>
          <div className="auth-form-group">
            <input
              type="email"
              name="email"
              className="auth-input"
              placeholder="Username"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="auth-form-group">
            <input
              type="password"
              name="password"
              className="auth-input"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="auth-btn">
            SIGN IN
          </button>

          <div className="auth-links">
            <div className="auth-remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Keep me signed in</label>
            </div>
            <a href="#" className="auth-forgot">Forgot password?</a>
          </div>

          <div className="auth-footer">
            Don't have an account? <Link to="/admin/register" className="text-primary">Create</Link>
          </div>
        </form>
      </div>

      <style>{`
        .auth-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f2edf3;
          padding: 20px;
        }
        .auth-card {
          background: #fff;
          border-radius: 4px;
          padding: 40px 50px;
          width: 100%;
          max-width: 450px;
          box-shadow: 0 0 20px rgba(0,0,0,0.05);
        }
        .auth-brand {
          display: flex;
          align-items: center;
          margin-bottom: 30px;
        }
        .auth-brand i {
          font-size: 40px;
          color: #9a55ff;
          margin-right: 10px;
        }
        .auth-brand span {
          font-size: 28px;
          font-weight: 700;
          color: #9a55ff;
        }
        .auth-title {
          font-size: 24px;
          font-weight: 500;
          color: #1f1f1f;
          margin-bottom: 10px;
        }
        .auth-subtitle {
          font-size: 14px;
          color: #8e94a9;
          margin-bottom: 30px;
          font-weight: 400;
        }
        .auth-form-group {
          margin-bottom: 20px;
        }
        .auth-input {
          width: 100%;
          padding: 15px 20px;
          border: 1px solid #e8ecf1;
          border-radius: 4px;
          font-size: 14px;
          color: #1f1f1f;
          background: #fff;
          transition: border-color 0.3s;
        }
        .auth-input:focus {
          outline: none;
          border-color: #9a55ff;
        }
        .auth-input::placeholder {
          color: #c9c8c8;
        }
        .auth-btn {
          width: 100%;
          padding: 15px;
          background: linear-gradient(to right, #da8cff, #9a55ff);
          color: #fff;
          border: none;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 1px;
          cursor: pointer;
          margin-top: 10px;
          transition: opacity 0.3s;
        }
        .auth-btn:hover {
          opacity: 0.9;
        }
        .auth-links {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
        }
        .auth-remember {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .auth-remember input[type="checkbox"] {
          width: 16px;
          height: 16px;
          cursor: pointer;
          accent-color: #9a55ff;
        }
        .auth-remember label {
          font-size: 14px;
          color: #8e94a9;
          cursor: pointer;
        }
        .auth-forgot {
          font-size: 14px;
          color: #9a55ff;
          text-decoration: none;
        }
        .auth-forgot:hover {
          text-decoration: underline;
        }
        .auth-footer {
          text-align: center;
          margin-top: 25px;
          font-size: 14px;
          color: #8e94a9;
        }
        .auth-footer a {
          color: #9a55ff;
          text-decoration: none;
          font-weight: 500;
        }
        .text-primary {
          color: #9a55ff !important;
        }
      `}</style>
    </div>
  );
};

export default Login;
