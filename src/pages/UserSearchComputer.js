import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UserSearchComputer.module.css";
const UserSearchComputer = () => {
  const navigate = useNavigate();

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

  const onCardAvatar3Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onCardUsernameText3Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onCardButtonAddFriend2Click = useCallback(() => {
    window.open("https://www.google.com/");
  }, []);

  const onCardButtonPlayGame3Click = useCallback(() => {
    navigate("/game");
  }, [navigate]);

  const onCardAvatar4Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onCardUsernameText4Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onCardButtonAddFriend3Click = useCallback(() => {
    window.open("https://www.google.com/");
  }, []);

  const onCardButtonPlayGame4Click = useCallback(() => {
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
      "[data-scroll-to='navComputerSIContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFooterImgDiscordClick = useCallback(() => {
    window.open("https://www.google.com/search?q=discord");
  }, []);

  const onDropLogOutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDropFriendsTextClick = useCallback(() => {
    navigate("/friendsearch");
  }, [navigate]);

  const onDropProfileTextClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onNavProfilePicIconClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onNavUsernameTextClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

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
    navigate("/landing");
  }, [navigate]);

  return (
    <div className={styles.usersearchcomputer}>
      <div className={styles.header}>
        <div className={styles.headertextnumusers}>
          There are currently 527 users online.
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
        <div className={styles.carduser1}>
          <div className={styles.carduserinfo}>
            <button className={styles.cardavatar} onClick={onCardAvatarClick} />
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
              <b className={styles.buttonunfriendtext}>Unfriend</b>
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
        <div className={styles.carduser1}>
          <div className={styles.carduserinfo}>
            <button
              className={styles.cardavatar}
              onClick={onCardAvatar3Click}
            />
            <div className={styles.cardtext}>
              <b
                className={styles.cardusername}
                onClick={onCardUsernameText3Click}
              >
                Username
              </b>
              <div className={styles.cardelo}>(elo)</div>
            </div>
          </div>
          <div className={styles.cardbuttons}>
            <button
              className={styles.cardbuttonaddfriend}
              onClick={onCardButtonAddFriend2Click}
            >
              <b className={styles.actionsaddfriendtext}>Add Friend</b>
            </button>
            <button
              className={styles.cardbuttonplaygame}
              onClick={onCardButtonPlayGame3Click}
            >
              <b className={styles.actionsaddfriendtext}>Play a Game</b>
            </button>
          </div>
        </div>
        <div className={styles.carduser1}>
          <div className={styles.carduserinfo}>
            <button
              className={styles.cardavatar}
              onClick={onCardAvatar4Click}
            />
            <div className={styles.cardtext}>
              <b
                className={styles.cardusername}
                onClick={onCardUsernameText4Click}
              >
                Username
              </b>
              <div className={styles.cardelo}>(elo)</div>
            </div>
          </div>
          <div className={styles.cardbuttons}>
            <button
              className={styles.cardbuttonaddfriend}
              onClick={onCardButtonAddFriend3Click}
            >
              <b className={styles.actionsaddfriendtext}>Add Friend</b>
            </button>
            <button
              className={styles.cardbuttonplaygame}
              onClick={onCardButtonPlayGame4Click}
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
          <b className={styles.findfriendbuttontext}>Load More</b>
        </button>
        <div className={styles.labeldisplayingresults}>
          Displaying 5 of 20 results.
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
      <div
        className={styles.navcomputersi}
        data-scroll-to="navComputerSIContainer"
      >
        <div className={styles.dropdown}>
          <div className={styles.dropbackground} />
          <div className={styles.dropselectlogout} />
          <b className={styles.droplogout} onClick={onDropLogOutTextClick}>
            Log Out
          </b>
          <div className={styles.dropselectfriends} />
          <b className={styles.dropfriends} onClick={onDropFriendsTextClick}>
            Friends
          </b>
          <div className={styles.dropselectprofile} />
          <b className={styles.dropprofile} onClick={onDropProfileTextClick}>
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
              onClick={onNavProfilePicIconClick}
            />
            <div className={styles.navelo}>(9001)</div>
            <b className={styles.navusername} onClick={onNavUsernameTextClick}>
              Username
            </b>
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
          <b className={styles.navabout} onClick={onNavAboutTextClick}>
            About
          </b>
          <div className={styles.pageselectlogo} />
          <img
            className={styles.navlogoIcon}
            alt=""
            src="/navlogo@2x.png"
            onClick={onNavLogoImageClick}
          />
        </div>
      </div>
    </div>
  );
};

export default UserSearchComputer;
