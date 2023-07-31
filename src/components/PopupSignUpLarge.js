import { useState, useCallback, useRef, useEffect } from "react";
import PopupLoginLarge from "./PopupLoginLarge";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./PopupSignUpLarge.module.css";
const PopupSignUpLarge = ({ onClose }) => {
  const [isPopupLoginLargeOpen, setPopupLoginLargeOpen] = useState(false);
  const navigate = useNavigate();

  const openPopupLoginLarge = useCallback(() => {
    setPopupLoginLargeOpen(true);
  }, []);

  const closePopupLoginLarge = useCallback(() => {
    setPopupLoginLargeOpen(false);
  }, []);

  const onPopupImgHideConfirmPasswordClick = useCallback(() => {
    window.open("Call toggleConfirmPassword(); here.");
  }, []);

  const onPopupImgHidePasswordClick = useCallback(() => {
    window.open("Call togglePassword(); here.");
  }, []);

  const onPopupButtonSignUpClick = useCallback(() => {
    signUp();
  }, []);

  // Create a ref for each input element
  const inputUserRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputPassRef = useRef(null);
  const inputPassConfirmRef = useRef(null);

  // Ref for the error messages.
  const errorsRef = useRef(null);

  // The new function to grab data from the form
  const signUp = useCallback(() =>
  {
    console.log("Signing up.")
    const username = inputUserRef.current.value;
    const email = inputEmailRef.current.value;
    const password = inputPassRef.current.value;
    const confirmPassword = inputPassConfirmRef.current.value;
    console.log("Username is " + username);
    console.log("Email is " + email);
    console.log("Password is " + password);
    console.log("confirmPassword is " + confirmPassword);

    // Perform all validation/error messages.

    // Call the API endpoint to send the email here.
    fetch('/sendVerifyEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Email sent successfully!');
          errorsRef.current.textContent = "Check your email!";
        } else {
          throw new Error('Email sending failed.');
        }
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        errorsRef.current.textContent = "An error occurred while sending the email.";
      });

    // Prevent re-registering
  }, []);

  // Function that sends a test email. DELETE THIS?
  sendEmail(() =>
  {
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: email, // recipient
      from: 'kevinjunk3332@gmail.com', // All emails sent from my junk email
      subject: 'Chess - Verify your email address',
      text: 'Click below to verify!',
      html: '<strong>To verify your email, click the following link:</strong>',
    }
    sgMail
      .send(msg)
      .then(() => {
      console.log('Email sent!')
    })
    .catch((error) => {
      console.error(error)
    })
  }, []);

    // Runs automatically when the component or page finishes loading.
    useEffect(() => {
      console.log('Page fully loaded!');
  
      errorsRef.current.textContent = "";
    }, []);

  return (
    <>
      <div className={styles.popupsignuplarge}>
        <div className={styles.popupswap}>
          <div className={styles.popupswapbackground} />
          <div className={styles.popupswapbuttonsignup}>
            <b className={styles.swapbuttonsignuptext}>Sign Up</b>
          </div>
          <button
            className={styles.popupswapbuttonlogin}
            id="swapButtonLogin"
            onClick={openPopupLoginLarge}
          >
            <b className={styles.swapbuttonlogintext}>Login</b>
          </button>
        </div>
        <button
          className={styles.popupimgclosebutton}
          id="closeButton"
          onClick={onClose}
        />
        <div className={styles.popupheader}>
          <div className={styles.popuptexterrors}>
            <span ref={errorsRef} className={styles.popuptexterrorsTxt}>
              Errors and alerts appear here.
            </span>
          </div>
          <b className={styles.popuptexttitlesignup}>Sign Up</b>
        </div>
        <div className={styles.popupforms}>
          <input
            ref={inputPassConfirmRef}
            className={styles.popupinputformconfirmpassword}
            type="password"
            placeholder="Confirm Password"
            minLength={8}
            required
            id="inputPassConfirm"
          />
          <button
            className={styles.popupimghideconfirmpassword}
            id="viewPassButton"
            onClick={onPopupImgHideConfirmPasswordClick}
          />
          <b className={styles.popuptextlabelconfirmpassword}>
            Confirm your password:
          </b>
          <input
            ref={inputPassRef}
            className={styles.popupinputformpassword}
            type="password"
            placeholder="New Password"
            minLength={8}
            required
            id="inputPass"
          />
          <button
            className={styles.popupimghidepassword}
            id="viewPassButton"
            onClick={onPopupImgHidePasswordClick}
          />
          <b className={styles.popuptextlabelpassword}>Enter a new password:</b>
          <input
            ref={inputEmailRef}
            className={styles.popupinputformemail}
            type="email"
            placeholder="example@email.com"
            minLength={3}
            required
            id="inputEmail"
          />
          <b className={styles.popuptextlabelemail}>Enter your email:</b>
          <input
            ref={inputUserRef}
            className={styles.popupinputformnewusername}
            type="text"
            placeholder="New Username"
            minLength={3}
            required
            id="inputUser"
          />
          <b className={styles.popuptextlabelnewusername}>
            Enter a new username:
          </b>
        </div>
        <button
          className={styles.popupbuttonsignup}
          id="buttonSignUp"
          onClick={onPopupButtonSignUpClick}
        >
          <b className={styles.popupbuttonsignuptext}>Sign Up</b>
        </button>
      </div>
      {isPopupLoginLargeOpen && (
        <PortalPopup placement="Centered" onOutsideClick={closePopupLoginLarge}>
          <PopupLoginLarge onClose={closePopupLoginLarge} />
        </PortalPopup>
      )}
    </>
  );
};

export default PopupSignUpLarge;
