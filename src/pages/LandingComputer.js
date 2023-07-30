import { useState, useCallback } from "react";
import PopupNoAPI from "../components/PopupNoAPI";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import SideBarDrop from "../components/SideBarDrop";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./LandingComputer.module.css";
const LandingComputer = () => {
  const [isPopupNoAPIOpen, setPopupNoAPIOpen] = useState(false);
  const navigate = useNavigate();
  const [isSideBarDropOpen, setSideBarDropOpen] = useState(false);

  const onHeaderButtonProfileClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onButtonLogOutClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonFindUserClick = useCallback(() => {
    navigate("/usersearch");
  }, [navigate]);

  const onButtonFindFriendClick = useCallback(() => {
    navigate("/friendsearch");
  }, [navigate]);

  const onButtonPlayOnlineClick = useCallback(() => {
    navigate("/friendsearch");
  }, [navigate]);

  const openPopupNoAPI = useCallback(() => {
    setPopupNoAPIOpen(true);
  }, []);

  const closePopupNoAPI = useCallback(() => {
    setPopupNoAPIOpen(false);
  }, []);

  const onContent2ButtonHowClick = useCallback(() => {
    navigate("/howtoplay");
  }, [navigate]);

  const onFooterImgGitHubClick = useCallback(() => {
    window.open("https://www.google.com/search?q=github");
  }, []);

  const onFooterButtonBackClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='navComputerSIContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFooterImgDiscordClick = useCallback(() => {
    window.open("https://www.google.com/search?q=discord");
  }, []);

  const openSideBarDrop = useCallback(() => {
    setSideBarDropOpen(true);
  }, []);

  const closeSideBarDrop = useCallback(() => {
    setSideBarDropOpen(false);
  }, []);

  const onNavContactTextClick = useCallback(() => {
    navigate("/contactus");
  }, [navigate]);

  const onNavHowTextClick = useCallback(() => {
    navigate("/howtoplay");
  }, [navigate]);

  const onNavAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onNavLogoImageClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='navAboutText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className={styles.landingcomputer}>
        <div className={styles.header}>
          <button
            className={styles.headerbuttonprofile}
            onClick={onHeaderButtonProfileClick}
          >
            <b className={styles.headerbuttontext}>Visit Profile</b>
          </button>
          <b className={styles.headertextwelcomeusername}>Welcome, Username!</b>
        </div>
        <div className={styles.content1}>
          <div className={styles.content1divider} />
          <button className={styles.buttonlogout} onClick={onButtonLogOutClick}>
            <b className={styles.logoutbuttontext}>Log Out</b>
          </button>
          <button
            className={styles.buttonfinduser}
            onClick={onButtonFindUserClick}
          >
            <b className={styles.headerbuttontext}>Find a User</b>
          </button>
          <button
            className={styles.buttonfindfriend}
            onClick={onButtonFindFriendClick}
          >
            <b className={styles.headerbuttontext}>Find a Friend</b>
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
            src="/imgplayonline@2x.png"
          />
          <div className={styles.buttoncomingsoon}>
            <b className={styles.comingsoonbuttontext}>Coming Soon!</b>
          </div>
          <button className={styles.buttonplayai} onClick={openPopupNoAPI}>
            <b className={styles.playaibuttontext}>Play Against AI</b>
          </button>
          <img
            className={styles.imgplayaiIcon}
            alt=""
            src="/imgplayai@2x.png"
          />
        </div>
        <div className={styles.content2}>
          <button
            className={styles.content2buttonhow}
            onClick={onContent2ButtonHowClick}
          >
            <b className={styles.headerbuttontext}>Learn How to Play</b>
          </button>
          <img
            className={styles.content2imghowIcon}
            alt=""
            src="/content2imghow@2x.png"
          />
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
            <b className={styles.logoutbuttontext}>Back to Top</b>
          </button>
          <button
            className={styles.footerimgdiscord}
            onClick={onFooterImgDiscordClick}
          />
        </div>
        <div
          className={styles.navcomputersi}
          data-scroll-to="navComputerSIContainer"
        >
          <div className={styles.navbar}>
            <div className={styles.navbarbackground} />
            <div className={styles.navprofilecorner} onClick={openSideBarDrop}>
              <img
                className={styles.navprofilepicIcon}
                alt=""
                src="/navprofilepic@2x.png"
              />
              <div className={styles.navelo}>(0)</div>
              <b className={styles.navusername}>Username</b>
            </div>
            <div className={styles.pageselectcontact} />
            <b className={styles.navcontact} onClick={onNavContactTextClick}>
              Contact Us
            </b>
            <div className={styles.pageselecthow} />
            <b className={styles.navhow} onClick={onNavHowTextClick}>
              How to Play
            </b>
            <div className={styles.pageselectabout} />
            <b
              className={styles.navabout}
              data-scroll-to="navAboutText"
              onClick={onNavAboutTextClick}
            >
              About
            </b>
            <div className={styles.pageselectlogo} />
            <img
              className={styles.navlogoIcon}
              alt=""
              src="/navlogo2@2x.png"
              onClick={onNavLogoImageClick}
            />
          </div>
        </div>
      </div>
      {isPopupNoAPIOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupNoAPI}
        >
          <PopupNoAPI onClose={closePopupNoAPI} />
        </PortalPopup>
      )}
      {isSideBarDropOpen && (
        <PortalDrawer
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Right"
          onOutsideClick={closeSideBarDrop}
        >
          <SideBarDrop onClose={closeSideBarDrop} />
        </PortalDrawer>
      )}
    </>
  );
};

export default LandingComputer;