import { useState, useCallback } from "react";
import PopupLeaveLarge from "../components/PopupLeaveLarge";
import PortalPopup from "../components/PortalPopup";
import styles from "./GameComputer.module.css";
import "./chessBoard.js";

const GameComputer = () => {
  const [isPopupLeaveLargeOpen, setPopupLeaveLargeOpen] = useState(false);
  const [isPopupLeaveLarge1Open, setPopupLeaveLarge1Open] = useState(false);
  const [isPopupLeaveLarge2Open, setPopupLeaveLarge2Open] = useState(false);
  const [isPopupLeaveLarge3Open, setPopupLeaveLarge3Open] = useState(false);
  const [isPopupLeaveLarge4Open, setPopupLeaveLarge4Open] = useState(false);
  const [isPopupLeaveLarge5Open, setPopupLeaveLarge5Open] = useState(false);
  const [isPopupLeaveLarge6Open, setPopupLeaveLarge6Open] = useState(false);
  const [isPopupLeaveLarge7Open, setPopupLeaveLarge7Open] = useState(false);
  const [isPopupLeaveLarge8Open, setPopupLeaveLarge8Open] = useState(false);
  const [isPopupLeaveLarge9Open, setPopupLeaveLarge9Open] = useState(false);

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
      "[data-scroll-to='navigationBarSIContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFooterImgDiscordClick = useCallback(() => {
    window.open("https://www.google.com/search?q=discord");
  }, []);

  const openPopupLeaveLarge1 = useCallback(() => {
    setPopupLeaveLarge1Open(true);
  }, []);

  const closePopupLeaveLarge1 = useCallback(() => {
    setPopupLeaveLarge1Open(false);
  }, []);

  const openPopupLeaveLarge2 = useCallback(() => {
    setPopupLeaveLarge2Open(true);
  }, []);

  const closePopupLeaveLarge2 = useCallback(() => {
    setPopupLeaveLarge2Open(false);
  }, []);

  const openPopupLeaveLarge3 = useCallback(() => {
    setPopupLeaveLarge3Open(true);
  }, []);

  const closePopupLeaveLarge3 = useCallback(() => {
    setPopupLeaveLarge3Open(false);
  }, []);

  const openPopupLeaveLarge4 = useCallback(() => {
    setPopupLeaveLarge4Open(true);
  }, []);

  const closePopupLeaveLarge4 = useCallback(() => {
    setPopupLeaveLarge4Open(false);
  }, []);

  const openPopupLeaveLarge5 = useCallback(() => {
    setPopupLeaveLarge5Open(true);
  }, []);

  const closePopupLeaveLarge5 = useCallback(() => {
    setPopupLeaveLarge5Open(false);
  }, []);

  const openPopupLeaveLarge6 = useCallback(() => {
    setPopupLeaveLarge6Open(true);
  }, []);

  const closePopupLeaveLarge6 = useCallback(() => {
    setPopupLeaveLarge6Open(false);
  }, []);

  const openPopupLeaveLarge7 = useCallback(() => {
    setPopupLeaveLarge7Open(true);
  }, []);

  const closePopupLeaveLarge7 = useCallback(() => {
    setPopupLeaveLarge7Open(false);
  }, []);

  const openPopupLeaveLarge8 = useCallback(() => {
    setPopupLeaveLarge8Open(true);
  }, []);

  const closePopupLeaveLarge8 = useCallback(() => {
    setPopupLeaveLarge8Open(false);
  }, []);

  const openPopupLeaveLarge9 = useCallback(() => {
    setPopupLeaveLarge9Open(true);
  }, []);

  const closePopupLeaveLarge9 = useCallback(() => {
    setPopupLeaveLarge9Open(false);
  }, []);

  return (
    <>
      <div className={styles.gamecomputer}>
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
          <div className={styles.chessboardcontainer} id="divChessboardContainer">
            <div id="chessBoard"></div>
	    <script src="chessBoard.js"></script>
          </div>
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
        <div
          className={styles.navigationbarsi}
          data-scroll-to="navigationBarSIContainer"
        >
          <div className={styles.dropdown}>
            <div className={styles.dropbackground} />
            <div className={styles.dropselectlogout} />
            <b className={styles.droplogout} onClick={openPopupLeaveLarge1}>
              Log Out
            </b>
            <div className={styles.dropselectfriends} />
            <b className={styles.dropfriends} onClick={openPopupLeaveLarge2}>
              Friends
            </b>
            <div className={styles.dropselectprofile} />
            <b className={styles.dropprofile} onClick={openPopupLeaveLarge3}>
              Profile
            </b>
          </div>
          <div className={styles.navbar}>
            <div className={styles.navbarbackground} />
            <div className={styles.navprofilecorner}>
              <img
                className={styles.navprofilepicIcon}
                alt=""
                src="/navprofilepic@2x.png"
                onClick={openPopupLeaveLarge4}
              />
              <div className={styles.navelo}>(9001)</div>
              <b className={styles.navusername} onClick={openPopupLeaveLarge5}>
                Username
              </b>
            </div>
            <div className={styles.pageselectcontact} />
            <b className={styles.navcontact} onClick={openPopupLeaveLarge6}>
              Contact Us
            </b>
            <div className={styles.pageselecthow} />
            <b className={styles.navhow} onClick={openPopupLeaveLarge7}>
              How to Play
            </b>
            <div className={styles.pageselectabout} />
            <b className={styles.navabout} onClick={openPopupLeaveLarge8}>
              About
            </b>
            <div className={styles.pageselectlogo} />
            <img
              className={styles.navlogoIcon}
              alt=""
              src="/navlogo@2x.png"
              onClick={openPopupLeaveLarge9}
            />
          </div>
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
      {isPopupLeaveLarge1Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLeaveLarge1}
        >
          <PopupLeaveLarge onClose={closePopupLeaveLarge1} />
        </PortalPopup>
      )}
      {isPopupLeaveLarge2Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLeaveLarge2}
        >
          <PopupLeaveLarge onClose={closePopupLeaveLarge2} />
        </PortalPopup>
      )}
      {isPopupLeaveLarge3Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLeaveLarge3}
        >
          <PopupLeaveLarge onClose={closePopupLeaveLarge3} />
        </PortalPopup>
      )}
      {isPopupLeaveLarge4Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLeaveLarge4}
        >
          <PopupLeaveLarge onClose={closePopupLeaveLarge4} />
        </PortalPopup>
      )}
      {isPopupLeaveLarge5Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLeaveLarge5}
        >
          <PopupLeaveLarge onClose={closePopupLeaveLarge5} />
        </PortalPopup>
      )}
      {isPopupLeaveLarge6Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLeaveLarge6}
        >
          <PopupLeaveLarge onClose={closePopupLeaveLarge6} />
        </PortalPopup>
      )}
      {isPopupLeaveLarge7Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLeaveLarge7}
        >
          <PopupLeaveLarge onClose={closePopupLeaveLarge7} />
        </PortalPopup>
      )}
      {isPopupLeaveLarge8Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLeaveLarge8}
        >
          <PopupLeaveLarge onClose={closePopupLeaveLarge8} />
        </PortalPopup>
      )}
      {isPopupLeaveLarge9Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLeaveLarge9}
        >
          <PopupLeaveLarge onClose={closePopupLeaveLarge9} />
        </PortalPopup>
      )}
    </>
  );
};

export default GameComputer;
