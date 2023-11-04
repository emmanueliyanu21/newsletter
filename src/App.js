import {useState} from 'react'
import './App.css';

import image from './assets/images/illustration-sign-up-desktop.svg'

function App() {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isDirty, setIsDirty] = useState(false);
  const [messageActive, setMessageActive] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === '') {
      setMessage('Please enter your email address');
      setIsDirty(!isDirty)
      return;
    }

    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address');
      setIsDirty(!isDirty)
      return;
    }

    // If validation passes, you can submit the form here
    // You may send the email to the server, for example.

    // Clear the input field
    setEmail('');

    // Show a success message
    setMessage('Thank you for subscribing!');
    setMessageActive(true);
  };

  const dismissMessage = () => {
    setMessageActive(false);
  };

  return (
    <>
      <div className="content-wrapper">
        
        <div className="newsletter">
        <div>
          <div className="newsletter-wrapper">
            <h2>Stay updated!</h2>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="hsl(4, 100%, 67%)" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48Zm108.25 138.29l-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32l122.59-145.91a16 16 0 0 1 24.5 20.58Z"/></svg><span>Product discovery and building what matters</span></li>
              <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="hsl(4, 100%, 67%)" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48Zm108.25 138.29l-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32l122.59-145.91a16 16 0 0 1 24.5 20.58Z"/></svg><span>Measuring to ensure updates are a success</span></li>
              <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="hsl(4, 100%, 67%)" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48Zm108.25 138.29l-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32l122.59-145.91a16 16 0 0 1 24.5 20.58Z"/></svg><span>And much more!</span></li>
            </ul>
            <div className="newsletter-email-address">
              <form id="newsletterForm" onSubmit={handleSubmit}>
                <div className="text-header">
                <label for="">Email address</label> {message && isDirty && <span>{message}</span>}
                </div>
                <input id="email" type="text" placeholder="email@company.com" onChange={(e) => setEmail(e.target.value)} className={message && isDirty ? 'error' : ''} />
                <button type="submit" className="button">Subscribe to monthly newsletter</button>
              </form>
            </div>
          </div>
          </div>
          <div className="newsletter-image">
            <img src={image} alt="" />
          </div>
        </div>
        {messageActive && (
        <div className="newsletter-message">
          <div>
            <h2>Thanks for subscribing!</h2>
            <p>
            A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription.
            </p>
            <button onClick={dismissMessage} className="button">Dismiss message</button>
          </div>
        </div>
        )}
      </div>
    </>
  );
}

export default App;
