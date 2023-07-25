import { useState, useCallback } from "react";
import PopupLoginLarge from "./PopupLoginLarge";
import PortalPopup from "./PortalPopup";
import styles from "./PopupForgotLarge.module.css";
const PopupForgotLarge = ({ onClose }) => {
  const [isPopupLoginLargeOpen, setPopupLoginLargeOpen] = useState(false);

  const openPopupLoginLarge = useCallback(() => {
    setPopupLoginLargeOpen(true);
  }, []);

  const closePopupLoginLarge = useCallback(() => {
    setPopupLoginLargeOpen(false);
  }, []);

  const onPopupButtonForgotSendClick = useCallback(() => {
    window.open("https://www.google.com/");
  }, []);

  return (
    <>
      <div className={styles.popupforgotlarge}>
        <div className={styles.popupheader}>
          <div className={styles.popuptextnoworries}>No worries!</div>
          <b className={styles.popuptexttitleforgot}>Forgot Password?</b>
        </div>
        <button
          className={styles.popupimgclosebutton}
          id="closeButton"
          onClick={onClose}
        />
        <div className={styles.popupinformation}>
          <div className={styles.popuptexterrors}>
            <span className={styles.popuptexterrorsTxt}>
              <span>{`Errors and `}</span>
              <span className={styles.alerts}>alerts</span>
              <span> appear here.</span>
            </span>
          </div>
          <div className={styles.popuptextinstructions}>
            Enter your email below and we’ll send you a link to reset it.
          </div>
        </div>
        <div className={styles.popupforms}>
          <input
            className={styles.popupinputformemailforgot}
            type="email"
            placeholder="example@email.com"
            minLength={3}
            required
            id="inputEmail"
          />
          <b className={styles.popuptextlabelemailforgot}>Enter your email:</b>
        </div>
        <div className={styles.popupforgotbuttons}>
          <button
            className={styles.popupbuttonforgotback}
            id="buttonGoBack"
            onClick={openPopupLoginLarge}
          >
            <b className={styles.popupbuttongobacktext}>Go Back</b>
          </button>
          <button
            className={styles.popupbuttonforgotsend}
            id="buttonSendEmail"
            onClick={onPopupButtonForgotSendClick}
          >
            <b className={styles.popupbuttonsendemailtext}>Send Email</b>
          </button>
        </div>
      </div>
      {isPopupLoginLargeOpen && (
        <PortalPopup placement="Centered" onOutsideClick={closePopupLoginLarge}>
          <PopupLoginLarge onClose={closePopupLoginLarge} />
        </PortalPopup>
      )}
    </>
  );
};

export default PopupForgotLarge;
