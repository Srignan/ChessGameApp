import { useState, useCallback, useRef, useEffect } from "react"; // * added useRef
import PopupSignUpLarge from "./PopupSignUpLarge";
import PortalPopup from "./PortalPopup";
import PopupForgotLarge from "./PopupForgotLarge";
import { useNavigate } from "react-router-dom";
import styles from "./PopupLoginLarge.module.css";

const PopupLoginLarge = ({ onClose }) => {
  const [isPopupSignUpLargeOpen, setPopupSignUpLargeOpen] = useState(false);
  const [isPopupForgotLargeOpen, setPopupForgotLargeOpen] = useState(false);
  const navigate = useNavigate();

  // Create refs for the username/email and password fields
  const inputUserEmailRef = useRef(null); // *
  const inputPassRef = useRef(null); // *

  const openPopupSignUpLarge = useCallback(() => {
    setPopupSignUpLargeOpen(true);
  }, []);

  const closePopupSignUpLarge = useCallback(() => {
    setPopupSignUpLargeOpen(false);
  }, []);

  const onPopupImgHidePasswordClick = useCallback(() => {
    window.open("Call togglePassword(); here.");
  }, []);

  const onPopupButtonLoginClick = useCallback(() => { // *
    login();
  }, []); // *

  // Create a ref for each input element
  const inputUserEmailRef = useRef(null);
  const inputPassRef = useRef(null);

  // Ref for the error messages.
  const errorsRef = useRef("");

  const login = useCallback(() => { // *
    console.log("Attempting to log in.");
    
    
    const usernameOrEmail = inputUserEmailRef.current.value;
    const password = inputPassRef.current.value;

    console.log("Username or email is: " + usernameOrEmail);
    console.log("Password is: " + password);

    // Reset the errors before the fetch calls
    errorsRef.current.textContent = "";

    // Perform login validation here.

    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ usernameOrEmail, password }),
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Server error logging in; please try again later.');
        }
      })
      .then((data) => {
        if (data.message) {
          console.log('User logged in successfully!');
          // Save cookie
          navigate("/landing");
        } else {
          throw new Error('Login failed.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        throw new Error('There was a server error; please try again later.');
      });
  }, [navigate]); // *

  useEffect(() => {
    // Clear errors on first load.
    errorsRef.current.textContent = "";
  }, []);

  const openPopupForgotLarge = useCallback(() => {
    setPopupForgotLargeOpen(true);
  }, []);

  const closePopupForgotLarge = useCallback(() => {
    setPopupForgotLargeOpen(false);
  }, []);

  return (
    <>
      <div className={styles.popuploginlarge}>
        <div className={styles.popupswap}>
          <div className={styles.popupswapbackground} />
          <div className={styles.popupswapbuttonlogin}>
            <b className={styles.swapbuttonlogintext}>Login</b>
          </div>
          <button
            className={`${styles.popupswapbuttonsignup} ${styles.grow}`}
            id="swapButtonSignUp"
            onClick={openPopupSignUpLarge}
          >
            <b className={styles.swapbuttonregistertext}>Sign Up</b>
          </button>
        </div>
        <button
          className={`${styles.popupimgclosebutton} ${styles.shrink}`}
          id="closeButton"
          onClick={onClose}
        />
        <div className={styles.popupheader}>
          <div className={styles.popuptexterrors}>
            <span className={styles.popuptexterrorsTxt}>
              <span>{`Errors and `}</span>
              <span className={styles.alerts}>alerts</span>
              <span> appear here.</span>
            </span>
          </div>
          <b className={styles.popuptexttitlelogin}>Login</b>
        </div>
        <div className={styles.popupforms}>
          <input
            className={styles.popupinputformpassword}
            type="password"
            placeholder="Password"
            minLength={8}
            required
            id="inputPass"
            ref={inputPassRef} // *
          />
          <button
            className={styles.popupimghidepassword}
            id="viewPassButton"
            onClick={onPopupImgHidePasswordClick}
          />
          <b className={styles.popuptextlabelpassword}>Enter your password:</b>
          <input
            className={styles.popupinputformusername}
            type="text"
            placeholder="Username or Email"
            minLength={3}
            required
            id="inputUserEmail"
            ref={inputUserEmailRef} // *
          />
          <b className={styles.popuptextlabelusername}>
            Enter your username or email:
          </b>
        </div>
        <button
          className={styles.popupbuttonlogin}
          id="buttonLogin"
          onClick={onPopupButtonLoginClick}
        >
          <b className={styles.popupbuttonlogintext}>Login</b>
        </button>
        <b
          className={styles.popupanchorforgotpassword}
          onClick={openPopupForgotLarge}
        >
          <span>{`Forgot your password? Click `}</span>
          <span className={styles.here}>here</span>
          <span>.</span>
        </b>
      </div>
      {isPopupSignUpLargeOpen && (
        <PortalPopup
          placement="Centered"
          onOutsideClick={closePopupSignUpLarge}
        >
          <PopupSignUpLarge onClose={closePopupSignUpLarge} />
        </PortalPopup>
      )}
      {isPopupForgotLargeOpen && (
        <PortalPopup
          placement="Centered"
          onOutsideClick={closePopupForgotLarge}
        >
          <PopupForgotLarge onClose={closePopupForgotLarge} />
        </PortalPopup>
      )}
    </>
  );
};

export default PopupLoginLarge;
