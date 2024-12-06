import { useState, useRef, useCallback, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '../../../utils/hooks/useDebounce';
import { AuthContext } from '../../../utils/context/AuthContext';
import axios from 'axios';
import './Login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFieldsDirty, setIsFieldsDirty] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const userInputDebounce = useDebounce({ email, password }, 2000);
  const [debounceState, setDebounceState] = useState(false);
  const [status, setStatus] = useState('idle');
  const navigate = useNavigate();

  const { setAuthData } = useContext(AuthContext);

  //alert-box
  const [alertMessage, setAlertMessage] = useState('');

  const handleShowPassword = useCallback(() => {
    setIsShowPassword((value) => !value);
  }, []);

  const handleOnChange = (event, type) => {
    setDebounceState(false);
    setIsFieldsDirty(true);

    switch (type) {
      case 'email':
        setEmail(event.target.value);
        break;

      case 'password':
        setPassword(event.target.value);
        break;

      default:
        break;
    }
  };

  let apiEndpoint;

  if (window.location.pathname.includes('/admin')) {
    apiEndpoint = '/admin/login';
  } else {
    apiEndpoint = '/user/login';
  }

  const handleLogin = async () => {
    const data = { email, password };
    setStatus('loading');
    console.log(data);

    await axios({
      method: 'post',
      url: apiEndpoint,
      data,
      headers: { 'Access-Control-Allow-Origin': '*' },
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem('accessToken', res.data.access_token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        setAuthData({
          accessToken: res.data.access_token,
          user: res.data.user,
        });
        setAlertMessage(res.data.message);
        setTimeout(() => {
          if (res.data.user.role === 'admin') {
            navigate('/main/dashboard');
          } else {
            navigate('/home')
          }
          setStatus('idle');
        }, 3000);
      })
      .catch((e) => {
        console.log(e);
        setAlertMessage(e.response?.data?.message || e.message);
        setTimeout(() => {
          setAlertMessage('');
          setStatus('idle');
        }, 3000);
      });
  };

  const { auth } = useContext(AuthContext);

  useEffect(() => {
    console.log('Auth Set Updated:', auth);
  }, [auth]);

  useEffect(() => {
    setDebounceState(true);
  }, [userInputDebounce]);

  return (
    <div>
      <div className="bg-Login">
        <div className="Login-Form">
          {alertMessage && (
            <div className="text-message-box">
              {alertMessage}
            </div>
          )}
          <h1 className="text-title"><strong>Sign In</strong></h1>
          <p className="text-description">Watch What You Want, Not What You’re Told.</p>
          <form className='box-form'>
            <label htmlFor="email"><strong>E-mail:</strong></label>
            <input
              type="text"
              id="email"
              name="email"
              ref={emailRef}
              onChange={(e) => handleOnChange(e, 'email')}
            />
            <div className='error-display'>
              {debounceState && isFieldsDirty && email === '' && (
                <span className="text-danger-login"><strong>This field is required</strong></span>
              )}
            </div>

            <label htmlFor="password"><strong>Password:</strong></label>
            <input
              type={isShowPassword ? 'text' : 'password'}
              id="password"
              name="password"
              ref={passwordRef}
              onChange={(e) => handleOnChange(e, 'password')}
            />
            <div className='error-display'>
              {debounceState && isFieldsDirty && password === '' && (
                <span className="text-danger-login"><strong>This field is required</strong></span>
              )}
            </div>

            <div className='selection-login'>
              <div className="form-check">
                <input
                  type="checkbox"
                  id="showPassword"
                  onClick={handleShowPassword}
                />
                <div className='showpassword-login' htmlFor="showPassword">
                  {isShowPassword ? 'Hide' : 'Show'} Password
                </div>
              </div>
              <a className='forgotpassword-login' href='/reset-password'>
                Forgot Password?
              </a>
            </div>

            <div className='button-box-login'>
              <button
                type="button"
                className="btn"
                disabled={status === 'loading'}
                onClick={() => {
                  if (email && password) {
                    handleLogin();
                  } else {
                    setIsFieldsDirty(true);
                    if (email === '') {
                      emailRef.current.focus();
                    }
                    if (password === '') {
                      passwordRef.current.focus();
                    }
                  }
                }}
              >
                {status === 'idle' ? 'Login' : 'Loading...'}
              </button>

              <div className="text-center">
                <a href="/register">New to Dontflix? Sign up now</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
