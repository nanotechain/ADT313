import React, { useRef, useState, useEffect } from 'react';
import './ForgotPassword.css';
import axios from 'axios';
import { useDebounce } from '../../../utils/hooks/useDebounce';
import { useNavigate } from 'react-router-dom';


function ForgotPassword() {
  const [isError, setIsError] = useState('failed');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const userInputDebounce = useDebounce({ email, newPassword, reenterPassword }, 2000);
  const EmailRef = useRef();
  const NewPasswordRef = useRef();
  const ReenterPasswordRef = useRef();
  const [isFieldsDirty, setIsFieldsDirty] = useState(false);
  const [debounceState, setDebounceState] = useState(false);
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState('');
  const [status, setStatus] = useState('idle');

  let apiEndpoint;

  if (window.location.pathname.includes('/admin')) {
    apiEndpoint = '/admin/login';
  } else {
    apiEndpoint = '/user/resetpass';
  };

  const handleOnChange = (event, type) => {
    setDebounceState(false);
    setIsFieldsDirty(true);

    switch (type) {
      case 'email':
        setEmail(event.target.value);
        break;

      case 'newpassword':
        setNewPassword(event.target.value);
        break;

      case 'reenterpassword':
        setReenterPassword(event.target.value);
        break;

      default:
        break;
    }
  };

  const handleResetPassword = async () => {
    const password = newPassword;
    const data = { email, password };

    if (!newPassword || !reenterPassword) {
      setAlertMessage("Please fill in both password fields.");
      setIsError('failed');
      setTimeout(() => {
        setAlertMessage('');
        setIsError('failed');
      }, 2000);
    } else if (newPassword !== reenterPassword) {
      setAlertMessage("Mismatch Password. Please try again.");
      setIsError('failed');
      setStatus('loading');
      setTimeout(() => {
        setAlertMessage('');
        setIsError('failed');
        setStatus('idle');
      }, 2000);
    } else {
      setStatus('loading');

      await axios({
        method: 'patch',
        url: apiEndpoint,
        data,
        headers: { 'Access-Control-Allow-Origin': '*' },
      }).then((response) => {
        setIsError('success')
        setAlertMessage(response.data.message);
        setTimeout(() => {
          navigate('/');
          setStatus('idle');
        }, 3000)
      }).catch((error) => {
        setIsError('failed')
        setAlertMessage(error.response?.data?.message || error.message);
        setTimeout(() => {
          setAlertMessage('');
          setStatus('idle');
        }, 3000);
      })
    }
  };

  useEffect(() => {
    setDebounceState(true);
  }, [userInputDebounce]);

  return (
    <div className='color-page'>
      <div className='ResetPassword-Form'>
        {!alertMessage && (
          <span className='cancel-reset-btn' onClick={() => navigate('/')}>&times;</span>
        )}
        {alertMessage && (
          <div className={`text-message-box-${isError}`}>
            {alertMessage}
          </div>
        )}
        <h1 className="text-title-reset"><strong>Reset Password</strong></h1>
        <hr></hr>
        <form className='box-form-reset'>
          <label htmlFor="email"><strong>E-mail:</strong></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Your Email'
            ref={EmailRef}
            onChange={(e) => handleOnChange(e, 'email')}
          />
          <div className='error-display'>
            {debounceState && isFieldsDirty && email === '' && (
              <span className="text-danger-reset"><strong>This field is required</strong></span>
            )}
          </div>

          <label htmlFor="password"><strong>New Password:</strong></label>
          <input
            type='password'
            id="new-password"
            name="newpassword"
            placeholder='New Password'
            ref={NewPasswordRef}
            onChange={(e) => handleOnChange(e, 'newpassword')}
          />
          <div className='error-display'>
            {debounceState && isFieldsDirty && newPassword === '' && (
              <span className="text-danger-reset"><strong>This field is required</strong></span>
            )}
          </div>

          <label htmlFor="password"><strong>Re-enter Password:</strong></label>
          <input
            type='password'
            id="reenter-password"
            name="reenterpassword"
            placeholder='Re-enter Password'
            ref={ReenterPasswordRef}
            onChange={(e) => handleOnChange(e, 'reenterpassword')}
          />
          <div className='error-display'>
            {debounceState && isFieldsDirty && reenterPassword === '' && (
              <span className="text-danger-reset"><strong>This field is required</strong></span>
            )}
          </div>

          <div className='button-box-reset'>
            <button
              type="button"
              className="btn"
              disabled={status === 'loading'}
              onClick={() => {
                if (email && newPassword && reenterPassword) {
                  handleResetPassword();
                } else {
                  setIsFieldsDirty(true);
                  if (email === '') {
                    EmailRef.current.focus();
                  }
                  if (newPassword === '') {
                    NewPasswordRef.current.focus();
                  }
                  if (reenterPassword === '') {
                    ReenterPasswordRef.current.focus();
                  }
                }
              }}
            >
              {status === 'idle' ? 'Change Password' : 'Loading...'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword