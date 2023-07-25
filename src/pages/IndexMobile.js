import { useState, useCallback } from "react";
import PopupLoginLarge from "../components/PopupLoginLarge";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import PopupSideSO from "../components/PopupSideSO";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./IndexMobile.module.css";
const IndexMobile = () => {
  const [isPopupLoginLargeOpen, setPopupLoginLargeOpen] = useState(false);
  const navigate = useNavigate();
  const [isPopupSideSO1Open, setPopupSideSO1Open] = useState(false);
  const [isPopupSideSOOpen, setPopupSideSOOpen] = useState(false);

  const openPopupLoginLarge = useCallback(() => {
    setPopupLoginLargeOpen(true);
  }, []);

  const closePopupLoginLarge = useCallback(() => {
    setPopupLoginLargeOpen(false);
  }, []);

  const onContent2ButtonHowClick = useCallback(() => {
    navigate("/howtoplay");
  }, [navigate]);

  const onContent3ButtonMeetClick = useCallback(() => {
    navigate("/about");
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

  const openPopupSideSO1 = useCallback(() => {
    setPopupSideSO1Open(true);
  }, []);

  const closePopupSideSO1 = useCallback(() => {
    setPopupSideSO1Open(false);
  }, []);

  const openPopupSideSO = useCallback(() => {
    setPopupSideSOOpen(true);
  }, []);

  const closePopupSideSO = useCallback(() => {
    setPopupSideSOOpen(false);
  }, []);

  const onNavLogoImageClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='heroSectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className={styles.indexmobile}>
        <div
          className={styles.herosection}
          data-scroll-to="heroSectionContainer"
        >
          <div className={styles.chessboardbutton}>
            <img
              className={styles.imgchessboardIcon}
              alt=""
              src="/imgchessboard2@2x.png"
            />
            <button
              className={styles.buttonplay}
              id="heroButtonLogin"
              onClick={openPopupLoginLarge}
            >
              <b className={styles.textplay}>Play Now!</b>
            </button>
          </div>
          <div className={styles.sitelogo}>
            <img
              className={styles.imglogomainIcon}
              alt=""
              src="/imglogomain2@2x.png"
            />
            <b className={styles.textlogoright}>Chess</b>
            <b className={styles.textlogoleft}>Chess</b>
            <div className={styles.textcalltoaction}>Call to Action!</div>
          </div>
        </div>
        <div className={styles.content1}>
          <img
            className={styles.content1imgaiIcon}
            alt=""
            src="/content1imgai2@2x.png"
          />
          <div className={styles.content1textai}>Play Against AI</div>
          <img
            className={styles.content1imgrankingIcon}
            alt=""
            src="/content1imgranking2@2x.png"
          />
          <div className={styles.content1textranking}>Build Your Ranking</div>
          <img
            className={styles.content1imgfriendsIcon}
            alt=""
            src="/content1imgfriends2@2x.png"
          />
          <div className={styles.content1textfriends}>
            Add and Challenge Friends
          </div>
        </div>
        <div className={styles.content2}>
          <img
            className={styles.content2imghowIcon}
            alt=""
            src="/content2imghow3@2x.png"
          />
          <button
            className={styles.content2buttonhow}
            onClick={onContent2ButtonHowClick}
          >
            <b className={styles.content2buttontext}>Learn How to Play</b>
          </button>
          <div className={styles.content2textwe}>We can help.</div>
          <b className={styles.content2textnew}>New to Chess?</b>
        </div>
        <div className={styles.content3}>
          <button
            className={styles.content3buttonmeet}
            onClick={onContent3ButtonMeetClick}
          >
            <b className={styles.content2buttontext}>Meet the Team</b>
          </button>
          <b className={styles.content3textwho}>Who Are We?</b>
          <img
            className={styles.content3imgfsblogoIcon}
            alt=""
            src="/content3imgfsblogo2@2x.png"
          />
        </div>
        <div className={styles.content4}>
          <div className={styles.content4texttreview3}>
            “Why is my ELO negative?!”
          </div>
          <div className={styles.content4rating3}>
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-1.svg"
            />
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-2.svg"
            />
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-2.svg"
            />
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-2.svg"
            />
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-2.svg"
            />
          </div>
          <div className={styles.content4texttname3}>Loser Barista</div>
          <img
            className={styles.content4imgtest3Icon}
            alt=""
            src="/content4imgtest31@2x.png"
          />
          <div className={styles.content4texttreview2}>
            “It was either this or checkers.”
          </div>
          <div className={styles.content4rating2}>
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-1.svg"
            />
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-1.svg"
            />
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-1.svg"
            />
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-1.svg"
            />
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-2.svg"
            />
          </div>
          <div className={styles.content4texttname2}>Another Person</div>
          <img
            className={styles.content4imgtest2Icon}
            alt=""
            src="/content4imgtest31@2x.png"
          />
          <div className={styles.content4texttreview1}>
            “It’s definitely better than that other chess website.”
          </div>
          <div className={styles.content4rating1}>
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-1.svg"
            />
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-1.svg"
            />
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-1.svg"
            />
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-1.svg"
            />
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-1.svg"
            />
          </div>
          <div className={styles.content4texttname1}>Cool Name</div>
          <img
            className={styles.content4imgtest1Icon}
            alt=""
            src="/content4imgtest31@2x.png"
          />
          <b className={styles.content4texttesttitle}>Testimonials</b>
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
            onClick={openPopupSideSO1}
          >
            <img
              className={styles.menubuttonicon}
              alt=""
              src="/menubuttonicon4.svg"
              onClick={openPopupSideSO}
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
      {isPopupLoginLargeOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLoginLarge}
        >
          <PopupLoginLarge onClose={closePopupLoginLarge} />
        </PortalPopup>
      )}
      {isPopupSideSO1Open && (
        <PortalDrawer
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Right"
          onOutsideClick={closePopupSideSO1}
        >
          <PopupSideSO onClose={closePopupSideSO1} />
        </PortalDrawer>
      )}
      {isPopupSideSOOpen && (
        <PortalDrawer
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Right"
          onOutsideClick={closePopupSideSO}
        >
          <PopupSideSO onClose={closePopupSideSO} />
        </PortalDrawer>
      )}
    </>
  );
};

export default IndexMobile;
