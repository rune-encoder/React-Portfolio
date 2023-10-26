import React, { useState } from "react";
import "../styles/Contact.css";
import { isValidEmail, isValidMessage } from "../utils/helpers.js";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const nameMessage = "Please enter your name.";
  const emailMessage = "Please enter a valid email.";
  const messageRequired = "A message is required.";

  const validateFields = () => {
    return name.trim() !== "" && isValidEmail(email) && isValidMessage(message);
  };

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
                onChange={(e) => setName(e.target.value)}
                onBlur={() => {
                  setNameError(name.trim() === "");
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
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => {
                  setEmailError(!isValidEmail(email));
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
                onChange={(e) => setMessage(e.target.value)}
                onBlur={() => {
                  setMessageError(!isValidMessage(message));
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
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="test">
        <h3>Name: {name}</h3>
        <h3>Email: {email}</h3>
        <h3>Message: {message}</h3>
      </div>
    </div>
  );
}
