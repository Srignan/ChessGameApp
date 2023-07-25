import { useState, useCallback } from "react";
import PopupLeaveLarge from "../components/PopupLeaveLarge";
import PortalPopup from "../components/PortalPopup";
import PopupSideSI from "../components/PopupSideSI";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./GameTablet.module.css";
const GameTablet = () => {
  const [isPopupLeaveLargeOpen, setPopupLeaveLargeOpen] = useState(false);
  const [isPopupLeaveLarge1Open, setPopupLeaveLarge1Open] = useState(false);
  const [isPopupSideSIOpen, setPopupSideSIOpen] = useState(false);

  const onButtonAddFriendClick = useCallback(() => {
    window.open("https://www.google.com/");
  }, []);

  const onButtonConcedeClick = useCallback(() => {
    window.open("https://www.google.com/");
  }, []);

  const openPopupLeaveLarge = useCallback(() => {
    setPopupLeaveLargeOpen(true);
  }, []);

  const closePopupLeaveLarge = useCallback(() => {
    setPopupLeaveLargeOpen(false);
  }, []);

  const onFooterImgGitHubClick = useCallback(() => {
    window.open("https://www.google.com/search?q=github");
  }, []);

  const onFooterButtonBackClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='navTabletContainer']"
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

  const openPopupLeaveLarge1 = useCallback(() => {
    setPopupLeaveLarge1Open(true);
  }, []);

  const closePopupLeaveLarge1 = useCallback(() => {
    setPopupLeaveLarge1Open(false);
  }, []);

  return (
    <>
      <div className={styles.gametablet}>
        <div className={styles.content1Topuser}>
          <div className={styles.textuser1score}>Score: 5</div>
          <img
            className={styles.imguser1avatarIcon}
            alt=""
            src="/imguser1avatar@2x.png"
          />
          <div className={styles.textuser1elo}>(elo)</div>
          <b className={styles.textuser1}>Username1</b>
        </div>
        <div className={styles.content2Chess}>
          <div className={styles.content2divider} />
          <div
            className={styles.chessboardcontainer}
            id="divChessboardContainer"
          />
        </div>
        <div className={styles.content3Bottomuser}>
          <div className={styles.textuser2score}>Score: 5</div>
          <img
            className={styles.imguser2avatarIcon}
            alt=""
            src="/imguser1avatar@2x.png"
          />
          <div className={styles.textuser2elo}>(elo)</div>
          <button
            className={styles.buttonaddfriend}
            onClick={onButtonAddFriendClick}
          >
            <b className={styles.addfriendbuttontext}>Add Friend</b>
          </button>
          <b className={styles.textuser2}>Username2</b>
        </div>
        <div className={styles.content4Buttons}>
          <div className={styles.content4divider} />
          <button
            className={styles.buttonconcede}
            onClick={onButtonConcedeClick}
          >
            <b className={styles.concedebuttontext}>Concede</b>
          </button>
          <button className={styles.buttonleave} onClick={openPopupLeaveLarge}>
            <b className={styles.concedebuttontext}>Leave Match</b>
          </button>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerdivider} />
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
        <div className={styles.navtablet} data-scroll-to="navTabletContainer">
          <div className={styles.navbarbackground} />
          <button
            className={styles.hamburgermenubutton}
            id="navButtonMenu"
            onClick={openPopupSideSI}
          >
            <img
              className={styles.menubuttonicon}
              alt=""
              src="/menubuttonicon.svg"
            />
          </button>
          <div className={styles.pageselectlogo} />
          <img
            className={styles.navlogoIcon}
            alt=""
            src="/navlogo@2x.png"
            onClick={openPopupLeaveLarge1}
          />
        </div>
      </div>
      {isPopupLeaveLargeOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLeaveLarge}
        >
          <PopupLeaveLarge onClose={closePopupLeaveLarge} />
        </PortalPopup>
      )}
      {isPopupSideSIOpen && (
        <PortalDrawer
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Right"
          onOutsideClick={closePopupSideSI}
        >
          <PopupSideSI onClose={closePopupSideSI} />
        </PortalDrawer>
      )}
      {isPopupLeaveLarge1Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLeaveLarge1}
        >
          <PopupLeaveLarge onClose={closePopupLeaveLarge1} />
        </PortalPopup>
      )}
    </>
  );
};

export default GameTablet;
