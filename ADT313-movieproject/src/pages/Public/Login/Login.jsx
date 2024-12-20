import React, { useState, useRef, useCallback, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '../../../utils/hooks/useDebounce';
import { AuthContext } from '../../../utils/context/AuthContext';
import axios from 'axios';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isFieldsDirty, setIsFieldsDirty] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [status, setStatus] = useState('idle');
  const [alertMessage, setAlertMessage] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { setAuthData, auth } = useContext(AuthContext);

  const debouncedFormData = useDebounce(formData, 2000);
  const [debounceState, setDebounceState] = useState(false);

  const handleShowPassword = useCallback(() => {
    setIsShowPassword((prev) => !prev);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setDebounceState(false);
    setIsFieldsDirty(true);
  };

  const apiEndpoint = window.location.pathname.includes('/admin')
    ? '/admin/login'
    : '/user/login';

  const handleLogin = async () => {
    setStatus('loading');
    try {
      const res = await axios.post(apiEndpoint, formData, {
        headers: { 'Access-Control-Allow-Origin': '*' },
      });
      localStorage.setItem('accessToken', res.data.access_token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setAuthData({
        accessToken: res.data.access_token,
        user: res.data.user,
      });
      setAlertMessage(res.data.message);
      setTimeout(() => {
        navigate(res.data.user.role === 'admin' ? '/main/dashboard' : '/home');
        setStatus('idle');
      }, 3000);
    } catch (error) {
      setAlertMessage(error.response?.data?.message || error.message);
      setTimeout(() => {
        setAlertMessage('');
        setStatus('idle');
      }, 3000);
    }
  };

  useEffect(() => {
    console.log('Auth Set Updated:', auth);
  }, [auth]);

  useEffect(() => {
    setDebounceState(true);
  }, [debouncedFormData]);

  return (
    <div class="bg-Login">
      <div class="Login-Form">
        {alertMessage && <div class="text-message-box">{alertMessage}</div>}
        <h1 class="txt-LogIn">
          <strong>Sign In</strong>
        </h1>
        <p class="txt-description">Watch What You Want, Not What You're Told.</p>
        <form onSubmit={(e) => e.preventDefault()} action="box-form">
          <div class="form-control">
            <input
              type="email"
              id="email"
              name="email"
              ref={emailRef}
              value={formData.email}
              onChange={handleChange}
              required
              class=""
              placeholder=""
            />
            <label htmlFor="email">Email</label>
          </div>
          <div class="error-display">
            {debounceState && isFieldsDirty && formData.email === '' && (
              <span class="text-danger-login">
                <strong>This field is required</strong>
              </span>
            )}
          </div>

          <div class="form-control">
            <input
              type={isShowPassword ? 'text' : 'password'}
              id="password"
              name="password"
              ref={passwordRef}
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password"
            />
            
            
          </div>
          <div class="error-display">
            {debounceState && isFieldsDirty && formData.password === '' && (
              <span class="text-danger-login">
                <strong>This field is required</strong>
              </span>
            )}
          </div>

          <div class="selection-login">
            <button
              type="button"
              class="show-password-btn"
              onClick={handleShowPassword}
              aria-label={isShowPassword ? "Hide password" : "Show password"}
            >
            </button>
            <a class="forgotpassword-login" href="/reset-password">
              Forgot Password?
            </a>
          </div>

          <div class="button-box-login">
            <button
              type="button"
              class="btn"
              disabled={status === 'loading'}
              onClick={() => {
                if (formData.email && formData.password) {
                  handleLogin();
                } else {
                  setIsFieldsDirty(true);
                  if (!formData.email) emailRef.current.focus();
                  if (!formData.password) passwordRef.current.focus();
                }
              }}
            >
              {status === 'idle' ? 'Sign In' : 'Loading...'}
            </button>

            <div class="text-center">
              <a href="/register">New to Dontflix? Sign up now</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
