import logo from './logo.svg';
import './App.css';
import CookieConsent from "react-cookie-consent";
import Popup from './components/CustomPopUp';
import React, { useState } from 'react';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [isCookie, setIsCokie] = useState(true);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const toggleconfirm = () => {
    setIsOpen(!isOpen);
    setIsCokie(!isCookie);
  }

  return (
    <div className="App">
      {isOpen &&

        <Popup
          content={<>
            <h2>Cookie Settings</h2>
            <p>When you visit any of our websites, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and manage your preferences. Please note, blocking some types of cookies may impact your experience of the site and the services we are able to offer.</p>

            <div className='policys'>
              <div className='policy'>
                <input type={'checkbox'} id={"strictly"} checked />
                <label for="strictly">Strictly Necessary</label>
              </div>
              <div className='policy'>
                <input type={'checkbox'} id={"Performance"} />
                <label for="Performance">Performance Cookies</label>
              </div>
              <div className='policy'>
                <input type={'checkbox'} id={"Functional"} />
                <label for="Functional">Functional Cookies</label>
              </div>
            </div>

          </>}
          handleClose={togglePopup}
          handleConfirm={toggleconfirm}
        ></Popup>}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {isCookie && <CookieConsent

        location="bottom"
        buttonText="Accept all cookies"
        debug={true}
        enableDeclineButton
        declineButtonText="Necessary cookies only"
        flipButtons

        disableStyles={true}
        buttonClasses="btn btn-primary"
        declineButtonClasses="btn btn-decline"
        containerClasses="alert"

      >
        <div>
          Your privacy

          By clicking “Accept all cookies”, you agree ouaismaisbon can store cookies on your device and disclose information in accordance with our <a href='/policy'>Cookie Policy.</a>
        </div>

        <button class="btn btnMy" onClick={togglePopup}>
          Customize settings
        </button>

      </CookieConsent>}
    </div>
  );
}

export default App;
