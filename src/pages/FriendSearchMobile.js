import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PopupSideSI from "../components/PopupSideSI";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./FriendSearchMobile.module.css";
const FriendSearchMobile = () => {
  const navigate = useNavigate();
  const [isPopupSideSIOpen, setPopupSideSIOpen] = useState(false);

  const onFormSearchButtonClick = useCallback(() => {
    window.open("https://www.google.com/");
  }, []);

  const onButtonFindUserClick = useCallback(() => {
    navigate("/friendsearch");
  }, [navigate]);

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
    window.open("https://www.google.com/");
  }, []);

  const onCardButtonPlayGameClick = useCallback(() => {
    navigate("/game");
  }, [navigate]);

  const onCardAvatar1Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onCardUsernameText1Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onCardButtonUnfriendClick = useCallback(() => {
    window.open("https://www.google.com/");
  }, []);

  const onCardButtonPlayGame1Click = useCallback(() => {
    navigate("/game");
  }, [navigate]);

  const onCardAvatar2Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onCardUsernameText2Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onCardButtonAddFriend1Click = useCallback(() => {
    window.open("https://www.google.com/");
  }, []);

  const onCardButtonPlayGame2Click = useCallback(() => {
    navigate("/game");
  }, [navigate]);

  const onButtonLoadMoreClick = useCallback(() => {
    window.open("https://www.google.com/");
  }, []);

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
    navigate("/landing");
  }, [navigate]);

  return (
    <>
      <div className={styles.friendsearchmobile}>
        <div className={styles.header}>
          <div className={styles.headertextnumfriends}>
            You have 25 friends.
          </div>
          <b className={styles.headertextfriends}>Friends</b>
        </div>
        <div className={styles.content1}>
          <b className={styles.textnoresultsfound}>No results found.</b>
          <div className={styles.searchcontainer}>
            <input
              className={styles.formsearch}
              type="text"
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
            className={styles.buttonfinduser}
            onClick={onButtonFindUserClick}
          >
            <b className={styles.finduserbuttontext}>Find a User</b>
          </button>
          <div className={styles.labelfinduserbutton}>Looking for a user?</div>
          <button
            className={styles.buttonreturnhome}
            onClick={onButtonReturnHomeClick}
          >
            <b className={styles.returnhomebuttontext}>Return Home</b>
          </button>
        </div>
        <div className={styles.content2}>
          <div className={styles.carduser1}>
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
                <div className={styles.cardelo}>(elo)</div>
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
          <div className={styles.carduser1}>
            <div className={styles.carduserinfo}>
              <button
                className={styles.cardavatar}
                onClick={onCardAvatar1Click}
              />
              <div className={styles.cardtext}>
                <b
                  className={styles.cardusername}
                  onClick={onCardUsernameText1Click}
                >
                  Username
                </b>
                <div className={styles.cardelo}>(elo)</div>
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
                onClick={onCardButtonPlayGame1Click}
              >
                <b className={styles.actionsaddfriendtext}>Play a Game</b>
              </button>
            </div>
          </div>
          <div className={styles.carduser1}>
            <div className={styles.carduserinfo}>
              <button
                className={styles.cardavatar}
                onClick={onCardAvatar2Click}
              />
              <div className={styles.cardtext}>
                <b
                  className={styles.cardusername}
                  onClick={onCardUsernameText2Click}
                >
                  Username
                </b>
                <div className={styles.cardelo}>(elo)</div>
              </div>
            </div>
            <div className={styles.cardbuttons}>
              <button
                className={styles.cardbuttonaddfriend}
                onClick={onCardButtonAddFriend1Click}
              >
                <b className={styles.actionsaddfriendtext}>Add Friend</b>
              </button>
              <button
                className={styles.cardbuttonplaygame}
                onClick={onCardButtonPlayGame2Click}
              >
                <b className={styles.actionsaddfriendtext}>Play a Game</b>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.content3}>
          <button
            className={styles.buttonloadmore}
            onClick={onButtonLoadMoreClick}
          >
            <b className={styles.finduserbuttontext}>Load More</b>
          </button>
          <div className={styles.labeldisplayingresults}>
            Displaying 3 of 20 results.
          </div>
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
              src="/menubuttonicon.svg"
            />
          </button>
          <div className={styles.pageselectlogo} />
          <img
            className={styles.navlogoIcon}
            alt=""
            src="/navlogo1@2x.png"
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

export default FriendSearchMobile;
