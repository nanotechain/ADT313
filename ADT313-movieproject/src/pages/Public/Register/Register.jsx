import { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '../../../utils/hooks/useDebounce';
import axios from 'axios';
import './Register.css'

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [isFieldsDirty, setIsFieldsDirty] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const middleNameRef = useRef();
  const lastNameRef = useRef();
  const contactNoRef = useRef();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const userInputDebounce = useDebounce({ email, password, firstName, middleName, lastName, contactNo }, 2000);
  const [debounceState, setDebounceState] = useState(false);
  const [status, setStatus] = useState('idle');
  const [alertMessage, setAlertMessage] = useState('');
  const [isError, setIsError] = useState("failed");
  const navigate = useNavigate();

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
      case 'firstName':
        setFirstName(event.target.value);
        break;
      case 'middleName':
        setMiddleName(event.target.value);
        break;
      case 'lastName':
        setLastName(event.target.value);
        break;
      case 'contactNo':
        setContactNo(event.target.value);
        break;
      default:
        break;
    }
  };

  let apiEndpoint;

  if (window.location.pathname.includes('/admin')) {
    apiEndpoint = '/admin/register';
  } else {
    apiEndpoint = '/user/register';
  };

  const handleRegister = async () => {
    const data = { email, password, firstName, middleName, lastName, contactNo };
    setStatus('loading');
    await axios({
      method: 'post',
      url: apiEndpoint,
      data,
      headers: { 'Access-Control-Allow-Origin': '*' },
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem('accessToken', res.data.access_token);

        // Show the alert message
        setIsError("success");
        setAlertMessage(res.data.message);
        setTimeout(() => {
          navigate('/');
          setStatus('idle');
        }, 3000);
      })
      .catch((e) => {
        console.log(e);
        setStatus('idle');

        // Show the alert message for account existence or other errors
        setIsError("failed");
        setAlertMessage(e.response?.data?.message || e.message);
        setTimeout(() => setAlertMessage(''), 3000);
      });
  };

  useEffect(() => {
    setDebounceState(true);
  }, [userInputDebounce]);

  return (
    <div className='bg-Register'>
      <div className='Register-Form'>
        {alertMessage && (
          <div className={`text-message-box-${isError}`}>
            {alertMessage}
          </div>
        )}
        <div>
          <h1 className="text-title"><strong>Sign Up</strong></h1>
          <p className="text-description"> Watch, Relax, Enjoy, Your New Addiction Awaits.</p>
          <form className='box-form'>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              ref={firstNameRef}
              onChange={(e) => handleOnChange(e, 'firstName')}
              required
            />
            <div className='error-display-register'>
              {debounceState && isFieldsDirty && firstName === '' && (
                <strong className="text-danger-register">This field is required</strong>
              )}
            </div>

            <label htmlFor="middleName">Middle Name:</label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              ref={middleNameRef}
              onChange={(e) => handleOnChange(e, 'middleName')}
              required
            />
            <div className='error-display-register'>
              {debounceState && isFieldsDirty && middleName === '' && (
                <strong className="text-danger-register">This field is required</strong>
              )}
            </div>

            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              ref={lastNameRef}
              onChange={(e) => handleOnChange(e, 'lastName')}
              required
            />
            <div className='error-display-register'>
              {debounceState && isFieldsDirty && lastName === '' && (
                <strong className="text-danger-register">This field is required</strong>
              )}
            </div>
            
            <label htmlFor="contactNo">Contact Number:</label>
            <input
              type="text"
              id="contactNo"
              name="contactNo"
              ref={contactNoRef}
              onChange={(e) => handleOnChange(e, 'contactNo')}
              required
            />
            <div className='error-display-register'>
              {debounceState && isFieldsDirty && contactNo === '' && (
                <strong className="text-danger-register">This field is required</strong>
              )}
            </div>

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              ref={emailRef}
              onChange={(e) => handleOnChange(e, 'email')}
              required
            />
            <div className='error-display-register'>
              {debounceState && isFieldsDirty && email === '' && (
                <strong className="text-danger-register">This field is required</strong>
              )}
            </div>

            <label htmlFor="password">Password:</label>
            <input
              type={isShowPassword ? 'text' : 'password'}
              id="password"
              name="password"
              ref={passwordRef}
              onChange={(e) => handleOnChange(e, 'password')}
              required
            />
            <div className='error-display-register'>
              {debounceState && isFieldsDirty && password === '' && (
                <strong className="text-danger-register">This field is required</strong>
              )}
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="showPassword"
                onClick={handleShowPassword}
              />
              <div className="form-check-label" htmlFor="showPassword">
                {isShowPassword ? 'Hide' : 'Show'} Password
              </div>
            </div>

            <div className="button-box-register">
              <button
                type="button"
                className="btn btn-primary"
                disabled={status === 'loading'}
                onClick={() => {
                  if (email && password && firstName && middleName && lastName && contactNo) {
                    handleRegister();
                  } else {
                    setIsFieldsDirty(true);
                    if (email === '') emailRef.current.focus();
                    if (password === '') passwordRef.current.focus();
                  }
                }}
              >
                {status === 'idle' ? 'Register' : 'Loading...'}
              </button>
              <div className="text-center">
                <a href="/">Already have an account? Login</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
