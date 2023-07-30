import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PopupSideSI.module.css";
const PopupSideSI = ({ onClose }) => {
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

  const onDropLogOutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDropProfileTextClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onDropAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onDrophowToPlayTextClick = useCallback(() => {
    navigate("/howtoplay");
  }, [navigate]);

  const onDropContactUsTextClick = useCallback(() => {
    navigate("/contactus");
  }, [navigate]);

  const onDropFriendsTextClick = useCallback(() => {
    navigate("/friendsearch");
  }, [navigate]);

  return (
    <div className={styles.popupsidesi} data-animate-on-scroll>
      <div className={styles.closespacer} />
      <img
        className={styles.closebuttonicon}
        alt=""
        src="/closebuttonicon.svg"
        onClick={onClose}
      />
      <div className={styles.welcome}>
        <b className={styles.welcomeheader}>Welcome, Username!</b>
        <b className={styles.welcomeusername}>Username!</b>
      </div>
      <div className={styles.sibuttons}>
        <div className={styles.logout}>
          <b className={styles.droplogout} onClick={onDropLogOutTextClick}>
            Log Out
          </b>
        </div>
        <div className={styles.profile}>
          <b className={styles.dropprofile} onClick={onDropProfileTextClick}>
            Profile
          </b>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.about}>
        <b className={styles.dropabout} onClick={onDropAboutTextClick}>
          About
        </b>
      </div>
      <div className={styles.howtoplay}>
        <b className={styles.drophowtoplay} onClick={onDrophowToPlayTextClick}>
          How to Play
        </b>
      </div>
      <div className={styles.contactus}>
        <b className={styles.dropcontactus} onClick={onDropContactUsTextClick}>
          Contact Us
        </b>
      </div>
      <div className={styles.friends}>
        <b className={styles.dropfriends} onClick={onDropFriendsTextClick}>
          Friends
        </b>
      </div>
    </div>
  );
};

export default PopupSideSI;
