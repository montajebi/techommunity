import { useCallback, useMemo, useState } from 'react';
import AuthImg from '../assets/auth.jpg';

const Auth = () => {
  const initialState = useMemo(
    () => ({
      fullName: '',
      username: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      avatarURL: '',
    }),
    [],
  );

  const [isSignup, setIsSignup] = useState(true);
  const [form, setForm] = useState(initialState);

  const handleChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      console.log(form);
    },
    [form],
  );

  const switchMode = useCallback(() => {
    setIsSignup((pre) => !pre);
  }, []);

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
          <form onSubmit={handleSubmit} autoComplete="none">
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName">Full name</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  onChange={handleChange}
                />
              </div>
            )}

            <div className="auth__form-container_fields-content_input">
              <label htmlFor="username">Username</label>
              <input name="username" type="text" placeholder="Username" onChange={handleChange} />
            </div>

            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  name="phoneNumber"
                  type="text"
                  placeholder="Phone Number"
                  onChange={handleChange}
                />
              </div>
            )}

            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="avatarURL">Avatar URL</label>
                <input
                  name="avatarURL"
                  type="text"
                  placeholder="Avatar URL"
                  onChange={handleChange}
                />
              </div>
            )}

            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>

            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                />
              </div>
            )}

            <div className="auth__form-container_fields-content_button">
              <button>{isSignup ? 'Sign Up' : 'Sign In'}</button>
            </div>
          </form>

          <div className="auth__form-container_fields-account">
            <p>
              {isSignup ? 'Already have an account?' : `Dont have an account?`}{' '}
              <span onClick={switchMode}>{isSignup ? 'Sign In' : 'Sign Up'}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image">
        <img src={AuthImg} alt="auth" />
      </div>
    </div>
  );
};

export default Auth;
