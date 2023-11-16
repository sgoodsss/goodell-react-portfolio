// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"

export default function Contact() {
  // Here we set two state variables for firstName, lastName, email, and message using `useState`
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    // return name === 'firstName' ? setFirstName(value) : setLastName(value);
    if (name === 'firstName') {
      setFirstName(value)
    } else if (name === `lastName`) {
      setLastName(value)
    } else if (name === `email`) {
      setEmail(value)
    } else if (name === 'message') {
      setMessage(value)
    }
    console.log(name, value)
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    emailjs.sendForm('service_zvc8l9p', 'template_7k9msu9', form.current, '5kVytdYiL3Ptrf7Qe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    // Alert the user their first and last name, clear the inputs
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage(``);
  };
  
  return (
    <div>
      <h1>Contact Me</h1>
      <div className="container text-center">
      <h1>
        Hello {firstName} {lastName}
      </h1>
      <form ref={form} className="form" onSubmit={handleFormSubmit}>
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        /> <br />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        /> <br />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="type your email here!"
        /> <br />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="textarea"
          placeholder="What would you like to say?"
        /> <br />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}
