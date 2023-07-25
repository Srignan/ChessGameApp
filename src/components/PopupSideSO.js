import { useState, useCallback, useEffect } from "react";
import PopupSignUpLarge from "./PopupSignUpLarge";
import PortalPopup from "./PortalPopup";
import PopupLoginLarge from "./PopupLoginLarge";
import { useNavigate } from "react-router-dom";
import styles from "./PopupSideSO.module.css";
const PopupSideSO = ({ onClose }) => {
  const [isPopupSignUpLargeOpen, setPopupSignUpLargeOpen] = useState(false);
  const [isPopupLoginLargeOpen, setPopupLoginLargeOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const openPopupSignUpLarge = useCallback(() => {
    setPopupSignUpLargeOpen(true);
  }, []);

  const closePopupSignUpLarge = useCallback(() => {
    setPopupSignUpLargeOpen(false);
  }, []);

  const openPopupLoginLarge = useCallback(() => {
    setPopupLoginLargeOpen(true);
  }, []);

  const closePopupLoginLarge = useCallback(() => {
    setPopupLoginLargeOpen(false);
  }, []);

  const onDropAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onDrophowToPlayTextClick = useCallback(() => {
    navigate("/howtoplay");
  }, [navigate]);

  const onDropContactUsTextClick = useCallback(() => {
    navigate("/contactus");
  }, [navigate]);

  return (
    <>
      <div className={styles.popupsideso} data-animate-on-scroll>
        <div className={styles.closespacer} />
        <img
          className={styles.closebuttonicon}
          alt=""
          src="/closebuttonicon.svg"
          onClick={onClose}
        />
        <div className={styles.welcome}>
          <b className={styles.welcomeheader}>Welcome!</b>
        </div>
        <div className={styles.sobuttons}>
          <div className={styles.signup}>
            <div className={styles.dropselectsignup} />
            <b className={styles.dropsignup} onClick={openPopupSignUpLarge}>
              Sign Up
            </b>
          </div>
          <div className={styles.login}>
            <div className={styles.dropselectlogin} />
            <b className={styles.droplogin} onClick={openPopupLoginLarge}>
              Login
            </b>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.about}>
          <div className={styles.dropselectabout} />
          <b className={styles.dropabout} onClick={onDropAboutTextClick}>
            About
          </b>
        </div>
        <div className={styles.howtoplay}>
          <div className={styles.dropselecthowtoplay} />
          <b
            className={styles.drophowtoplay}
            onClick={onDrophowToPlayTextClick}
          >
            How to Play
          </b>
        </div>
        <div className={styles.contactus}>
          <div className={styles.dropselectcontactus} />
          <b
            className={styles.dropcontactus}
            onClick={onDropContactUsTextClick}
          >
            Contact Us
          </b>
        </div>
      </div>
      {isPopupSignUpLargeOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupSignUpLarge}
        >
          <PopupSignUpLarge onClose={closePopupSignUpLarge} />
        </PortalPopup>
      )}
      {isPopupLoginLargeOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLoginLarge}
        >
          <PopupLoginLarge onClose={closePopupLoginLarge} />
        </PortalPopup>
      )}
    </>
  );
};

export default PopupSideSO;
