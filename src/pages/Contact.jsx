import React, { useState } from "react";
import "../styles/Contact.css";
import { isValidName, isValidEmail, isValidMessage } from "../utils/helpers.js";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const nameMessage = "Please enter your name.";
  const emailMessage = "Please enter a valid email.";
  const messageRequired = "A message is required.";

  const validateFields = () => {
    return isValidName(name) && isValidEmail(email) && isValidMessage(message);
  };

  const updateFormValidity = () => {
    const isValid =
      isValidName(name) && isValidEmail(email) && isValidMessage(message);
    setFormValid(isValid);
  };

  // ! CREATE BACKEND FUNCTIONALITY TO SEND FORM DATA TO EMAIL
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateFields()) {
      setSuccessMessage(`${name}, your form has been submitted!`);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setSuccessMessage("");
    }
  };

  // ! ADD MORE INFORMATION ABOUT CONTACTING ME
  return (
    <div className="cont-container gap-6 grid laptop:grid-cols-2">
      <div>
        <h3>Contact Me</h3>
        <div className="form-group">
          <form onSubmit={handleFormSubmit}>
            <div className="form-section">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  updateFormValidity();
                }}
                onBlur={() => {
                  setNameError(!isValidName(name));
                  updateFormValidity();
                  setSuccessMessage("");
                }}
                type="text"
                placeholder="name"
              />
              {nameError && <span className="error">{nameMessage}</span>}
            </div>
            <div className="form-section">
              <label htmlFor="email">Email Address:</label>
              <input
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  updateFormValidity();
                }}
                onBlur={() => {
                  setEmailError(!isValidEmail(email));
                  updateFormValidity();
                  setSuccessMessage("");
                }}
                type="email"
                placeholder="email"
              />
              {emailError && <span className="error">{emailMessage}</span>}
            </div>
            <div className="form-section">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  updateFormValidity();
                }}
                onBlur={() => {
                  setMessageError(!isValidMessage(message));
                  updateFormValidity();
                  setSuccessMessage("");
                }}
                type="text"
                placeholder="message"
              />
              {messageError && <span className="error">{messageRequired}</span>}
            </div>
            {successMessage && (
              <span className="success">{successMessage}</span>
            )}
            <button
              type="submit"
              className={formValid ? "" : "disabled"}
              disabled={!formValid}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* ! ADD MORE INFORMATION ABOUT CONTACTING ME */}
    </div>
  );
}
