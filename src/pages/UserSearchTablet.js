import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PopupSideSI from "../components/PopupSideSI";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./UserSearchTablet.module.css";
const UserSearchTablet = () => {
  const navigate = useNavigate();
  const [isPopupSideSIOpen, setPopupSideSIOpen] = useState(false);

  const onButtonFindFriendClick = useCallback(() => {
    navigate("/friendsearch");
  }, [navigate]);

  const onFormSearchButtonClick = useCallback(() => {
    window.open("https://www.google.com/");
  }, []);

  const onButtonReturnHomeClick = useCallback(() => {
    navigate("/landing");
  }, [navigate]);

  const onCardAvatarClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onCardUsernameTextClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onCardButtonAddFriendClick = useCallback(() => {
    window.open("Call addFriend(); here.");
  }, []);

  const onCardButtonPlayGameClick = useCallback(() => {
    navigate("/game");
  }, [navigate]);

  const onCardButtonUnfriendClick = useCallback(() => {
    window.open("Call unFriend(); here.");
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

  const onNavLogoImageClick = useCallback(() => {
    navigate("/landing");
  }, [navigate]);

  return (
    <>
      <div className={styles.usersearchtablet}>
        <div className={styles.header}>
          <div className={styles.headertextnumusers}>
            Search all users on the site below.
          </div>
          <b className={styles.headertextusers}>Users</b>
        </div>
        <div className={styles.content1}>
          <b className={styles.textnoresultsfound}>No results found.</b>
          <button
            className={styles.buttonfindfriend}
            onClick={onButtonFindFriendClick}
          >
            <b className={styles.findfriendbuttontext}>Find a Friend</b>
          </button>
          <div className={styles.labelfindfriendbutton}>
            Looking for a friend?
          </div>
          <div className={styles.searchcontainer}>
            <input
              className={styles.formsearch}
              type="search"
              placeholder="Search"
              maxLength={18}
              id="inputSearch"
            />
            <button
              className={styles.formsearchbutton}
              onClick={onFormSearchButtonClick}
            />
          </div>
          <div className={styles.labelformsearch}>Search by name or ID:</div>
          <button
            className={styles.buttonreturnhome}
            onClick={onButtonReturnHomeClick}
          >
            <b className={styles.returnhomebuttontext}>Return Home</b>
          </button>
        </div>
        <div className={styles.content2}>
          <div className={styles.carduser}>
            <div className={styles.carduserinfo}>
              <button
                className={styles.cardavatar}
                onClick={onCardAvatarClick}
              />
              <div className={styles.cardtext}>
                <b
                  className={styles.cardusername}
                  onClick={onCardUsernameTextClick}
                >
                  Username
                </b>
                <div className={styles.cardelo}>(0)</div>
              </div>
            </div>
            <div className={styles.cardbuttons}>
              <button
                className={styles.cardbuttonaddfriend}
                onClick={onCardButtonAddFriendClick}
              >
                <b className={styles.actionsaddfriendtext}>Add Friend</b>
              </button>
              <button
                className={styles.cardbuttonplaygame}
                onClick={onCardButtonPlayGameClick}
              >
                <b className={styles.actionsaddfriendtext}>Play a Game</b>
              </button>
            </div>
          </div>
          <div className={styles.carduser}>
            <div className={styles.carduserinfo}>
              <button
                className={styles.cardavatar}
                onClick={onCardAvatarClick}
              />
              <div className={styles.cardtext}>
                <b
                  className={styles.cardusername}
                  onClick={onCardUsernameTextClick}
                >
                  Username
                </b>
                <div className={styles.cardelo}>(0)</div>
              </div>
            </div>
            <div className={styles.cardbuttons}>
              <button
                className={styles.cardbuttonunfriend}
                onClick={onCardButtonUnfriendClick}
              >
                <b className={styles.buttoncanceltext}>Unfriend</b>
              </button>
              <button
                className={styles.cardbuttonplaygame}
                onClick={onCardButtonPlayGameClick}
              >
                <b className={styles.actionsaddfriendtext}>Play a Game</b>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.content3} />
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
              src="/menubuttonicon11.svg"
            />
          </button>
          <div className={styles.pageselectlogo} />
          <img
            className={styles.navlogoIcon}
            alt=""
            src="/navlogo@2x.png"
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

export default UserSearchTablet;
