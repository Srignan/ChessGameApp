import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PopupSideSI from "../components/PopupSideSI";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./LandingMobile.module.css";
const LandingMobile = () => {
  const navigate = useNavigate();
  const [isPopupSideSIOpen, setPopupSideSIOpen] = useState(false);

  const onHeaderButtonProfileClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onButtonLogOutClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonComingSoonClick = useCallback(() => {
    window.open("https://www.google.com/");
  }, []);

  const onButtonPlayAIClick = useCallback(() => {
    window.open("https://www.google.com/");
  }, []);

  const onButtonFindUserClick = useCallback(() => {
    navigate("/usersearch");
  }, [navigate]);

  const onButtonFindFriendClick = useCallback(() => {
    navigate("/friendsearch");
  }, [navigate]);

  const onButtonPlayOnlineClick = useCallback(() => {
    navigate("/game");
  }, [navigate]);

  const onContent2ButtonHowClick = useCallback(() => {
    navigate("/howtoplay");
  }, [navigate]);

  const onFooterImgGitHubClick = useCallback(() => {
    window.open("https://www.google.com/search?q=github");
  }, []);

  const onFooterButtonBackClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='navMobileContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFooterImgDiscordClick = useCallback(() => {
    window.open("https://www.google.com/search?q=discord");
  }, []);

  const openPopupSideSI = useCallback(() => {
    setPopupSideSIOpen(true);
  }, []);

  const closePopupSideSI = useCallback(() => {
    setPopupSideSIOpen(false);
  }, []);

  const onNavLogoImageClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='headerContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className={styles.landingmobile}>
        <div className={styles.header} data-scroll-to="headerContainer">
          <div className={styles.usernameandbuttoncontainer}>
            <b className={styles.headertextwelcomeusername}>
              Welcome, Username!
            </b>
            <button
              className={styles.headerbuttonprofile}
              onClick={onHeaderButtonProfileClick}
            >
              <b className={styles.headerbuttontext}>Visit Profile</b>
            </button>
          </div>
        </div>
        <div className={styles.content1}>
          <button className={styles.buttonlogout} onClick={onButtonLogOutClick}>
            <b className={styles.logoutbuttontext}>Log Out</b>
          </button>
          <button
            className={styles.buttoncomingsoon}
            onClick={onButtonComingSoonClick}
          >
            <b className={styles.comingsoonbuttontext}>Coming Soon!</b>
          </button>
          <button className={styles.buttonplayai} onClick={onButtonPlayAIClick}>
            <b className={styles.playaibuttontext}>Play Against AI</b>
          </button>
          <img
            className={styles.imgplayaiIcon}
            alt=""
            src="/imgplayai1@2x.png"
          />
          <button
            className={styles.buttonfinduser}
            onClick={onButtonFindUserClick}
          >
            <b className={styles.finduserbuttontext}>Find a User</b>
          </button>
          <button
            className={styles.buttonfindfriend}
            onClick={onButtonFindFriendClick}
          >
            <b className={styles.finduserbuttontext}>Find a Friend</b>
          </button>
          <button
            className={styles.buttonplayonline}
            onClick={onButtonPlayOnlineClick}
          >
            <b className={styles.playonlinebuttontext}>Play Online</b>
          </button>
          <img
            className={styles.imgplayonlineIcon}
            alt=""
            src="/imgplayonline1@2x.png"
          />
        </div>
        <div className={styles.content2}>
          <img
            className={styles.content2imghowIcon}
            alt=""
            src="/content2imghow5@2x.png"
          />
          <button
            className={styles.content2buttonhow}
            onClick={onContent2ButtonHowClick}
          >
            <b className={styles.finduserbuttontext}>Learn How to Play</b>
          </button>
          <div className={styles.content2textwe}>We can help.</div>
          <b className={styles.content2textnew}>New to Chess?</b>
        </div>
        <div className={styles.footer}>
          <button
            className={styles.footerimggithub}
            onClick={onFooterImgGitHubClick}
          />
          <div className={styles.footertextcopyright}>
            © 2023 FullStack Bros. All rights reserved.
          </div>
          <button
            className={styles.footerbuttonback}
            onClick={onFooterButtonBackClick}
          >
            <b className={styles.footerbuttontext}>Back to Top</b>
          </button>
          <button
            className={styles.footerimgdiscord}
            onClick={onFooterImgDiscordClick}
          />
        </div>
        <div className={styles.navmobile} data-scroll-to="navMobileContainer">
          <div className={styles.navbarbackground} />
          <button
            className={styles.hamburgermenubutton}
            id="navButtonMenu"
            onClick={openPopupSideSI}
          >
            <img
              className={styles.menubuttonicon}
              alt=""
              src="/menubuttonicon9.svg"
            />
          </button>
          <div className={styles.pageselectlogo} />
          <img
            className={styles.navlogoIcon}
            alt=""
            src="/navlogo3@2x.png"
            onClick={onNavLogoImageClick}
          />
        </div>
      </div>
      {isPopupSideSIOpen && (
        <PortalDrawer
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Right"
          onOutsideClick={closePopupSideSI}
        >
          <PopupSideSI onClose={closePopupSideSI} />
        </PortalDrawer>
      )}
    </>
  );
};

export default LandingMobile;
