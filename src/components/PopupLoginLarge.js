import { useState, useCallback } from "react";
import PopupSignUpLarge from "./PopupSignUpLarge";
import PortalPopup from "./PortalPopup";
import PopupForgotLarge from "./PopupForgotLarge";
import { useNavigate } from "react-router-dom";
import styles from "./PopupLoginLarge.module.css";
const PopupLoginLarge = ({ onClose }) => {
  const [isPopupSignUpLargeOpen, setPopupSignUpLargeOpen] = useState(false);
  const [isPopupForgotLargeOpen, setPopupForgotLargeOpen] = useState(false);
  const navigate = useNavigate();

  const openPopupSignUpLarge = useCallback(() => {
    setPopupSignUpLargeOpen(true);
  }, []);

  const closePopupSignUpLarge = useCallback(() => {
    setPopupSignUpLargeOpen(false);
  }, []);

  const onPopupImgHidePasswordClick = useCallback(() => {
    window.open("https://www.google.com/");
  }, []);

  const onPopupButtonLoginClick = useCallback(() => {
    navigate("/landing");
  }, [navigate]);

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
            className={styles.popupswapbuttonsignup}
            id="swapButtonSignUp"
            onClick={openPopupSignUpLarge}
          >
            <b className={styles.swapbuttonregistertext}>Sign Up</b>
          </button>
        </div>
        <button
          className={styles.popupimgclosebutton}
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
