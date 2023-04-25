import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import '../CSS/UserLogin.css';

import { useSignup } from '../hooks/useSignup';
import ValidateUserRegistration from '../components/ValidateUserRegistration';
import Header from '../components/Header';

function UserRegistration() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [userType, setUserType] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { signup, error, isLoading } = useSignup();

  const [regiValidationError, setRegiValidationError] = useState({});

  return (
    <>
      <Header />

      <div className="title-box-login">
        <h3 className="title-login">Registration</h3>
      </div>

      <div className="light-blue-bg-login">
        <div>
          <form
            className="signup"
            onSubmit={async (e) => {
              e.preventDefault();

              setRegiValidationError(
                ValidateUserRegistration(
                  title,
                  userType,
                  firstName,
                  lastName,
                  email,
                  phone,
                  password,
                  confirmPassword
                )
              );

              await signup(
                title,
                userType,
                firstName,
                lastName,
                email,
                phone,
                password,
                confirmPassword
              );

              // const newUser = {
              //   title,
              //   userType,
              //   firstName,
              //   lastName,
              //   email,
              //   phone,
              //   password,
              //   confirmPassword,

              // };

              // await axios
              //   .post('http://localhost:4000/users/Register', newUser)
              //   .then((res) => {
              //     document.location.href = '/login';
              //   })
              //   .catch((err) => {
              //     console.log(err);
              //     alert('User Registration Failed');
              //   });
            }}
          >
            <div className="top-drop-down">
              <label className="label">Title:</label>
              <select
                id="input"
                className="titleDropDown"
                onChange={(e) => setTitle(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Mr.">Mr.</option>
                <option value="Miss.">Miss.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Rev.">Rev.</option>
              </select>
              {regiValidationError && (
                <div className="error">{regiValidationError.title}</div>
              )}

              <label className="label">I Am:</label>
              <select
                id="input"
                className="iAmDropDown"
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="">Select in hear</option>
                <option value="A Gem Merchant" defaultValue={true}>
                  A Gem Merchant
                </option>
                <option value="A Gem Collector">A Gem Collector</option>
                <option value="A Jeweller">A Jeweller</option>
              </select>
              {regiValidationError && (
                <div className="error">{regiValidationError.userType}</div>
              )}
            </div>
            <label className="label">First Name:</label>
            <input
              id="input"
              className="fNameInput"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              required="required"
              placeholder="Enter your first name hear..."
            />
            {regiValidationError && (
              <div className="error">{regiValidationError.firstName}</div>
            )}

            <label className="label">Last Name:</label>
            <input
              id="input"
              className="lNameInput"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              required="required"
              placeholder="Enter your last name hear..."
            />
            {regiValidationError && (
              <div className="error">{regiValidationError.lastName}</div>
            )}

            <label className="label">Email address:</label>
            <input
              id="input"
              className="emailInput"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required="required"
              placeholder="Enter your Email hear..."
            />
            {regiValidationError && (
              <div className="error">{regiValidationError.email}</div>
            )}

            <label className="label">Phone Number:</label>
            <input
              id="input"
              className="phoneInput"
              type="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required="required"
              placeholder="0761760579 or +94761760579"
            />
            {regiValidationError && (
              <div className="error">{regiValidationError.phone}</div>
            )}

            <label className="label">Password:</label>
            <input
              id="input"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required="required"
              placeholder="Password..."
            />
            {regiValidationError && (
              <div className="error">{regiValidationError.password}</div>
            )}

            <label className="label">Confirm Password:</label>
            <input
              id="input"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              required="required"
              placeholder="Confirm Password..."
            />
            {regiValidationError && (
              <div className="error">{regiValidationError.confirmPassword}</div>
            )}

            {error && <div className="error">{error}</div>}
            <button className="login-btn" type="submit" disabled={isLoading}>
              REGISTER
            </button>
            <button
              className="cancel-btn"
              onClick={() => {
                navigate('/');
              }}
              disabled={isLoading}
            >
              CANCEL
            </button>

            <p className="register-link">
              All ready have an account?{'  '}
              <Link to="/login">
                {' '}
                <strong>LOGIN</strong>{' '}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserRegistration;
