import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Index from "./pages/Index";
import IndexTablet from "./pages/IndexTablet";
import IndexMobile from "./pages/IndexMobile";
import UserSearchComputer from "./pages/UserSearchComputer";
import LandingComputer from "./pages/LandingComputer";
import ProfileComputer from "./pages/ProfileComputer";
import GameComputer from "./pages/GameComputer";
import GameTablet from "./pages/GameTablet";
import GameMobile from "./pages/GameMobile";
import ResetPasswordComputer from "./pages/ResetPasswordComputer";
import ResetPasswordTablet from "./pages/ResetPasswordTablet";
import ResetPasswordMobile from "./pages/ResetPasswordMobile";
import AboutComputer from "./pages/AboutComputer";
import HowToPlayComputer from "./pages/HowToPlayComputer";
import ContactUsComputer from "./pages/ContactUsComputer";
import AboutTablet from "./pages/AboutTablet";
import AboutMobile from "./pages/AboutMobile";
import HowToPlayTablet from "./pages/HowToPlayTablet";
import HowToPlayMobile from "./pages/HowToPlayMobile";
import ContactUsTablet from "./pages/ContactUsTablet";
import ContactUsMobile from "./pages/ContactUsMobile";
import FriendSearchComputer from "./pages/FriendSearchComputer";
import LandingTablet from "./pages/LandingTablet";
import LandingMobile from "./pages/LandingMobile";
import ProfileTablet from "./pages/ProfileTablet";
import ProfileMobile from "./pages/ProfileMobile";
import UserSearchTablet from "./pages/UserSearchTablet";
import UserSearchMobile from "./pages/UserSearchMobile";
import FriendSearchTablet from "./pages/FriendSearchTablet";
import FriendSearchMobile from "./pages/FriendSearchMobile";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Chess";
        metaDescription = "";
        break;
      case "/usersearch":
        title = "Users | Chess";
        metaDescription = "";
        break;
      case "/gametablet":
        title = "Game | Chess";
        metaDescription = "";
        break;
      case "/gamemobile":
        title = "Game | Chess";
        metaDescription = "";
        break;
      case "/landing":
        title = "Home | Chess";
        metaDescription = "";
        break;
      case "/profile":
        title = "Profile | Chess";
        metaDescription = "";
        break;
      case "/game":
        title = "Game | Chess";
        metaDescription = "";
        break;
      case "/resetpasswordcomputer":
        title = "Reset Password | Chess";
        metaDescription = "";
        break;
      case "/resetpasswordtablet":
        title = "Reset Password | Chess";
        metaDescription = "";
        break;
      case "/resetpasswordmobile":
        title = "Reset Password | Chess";
        metaDescription = "";
        break;
      case "/about":
        title = "About | Chess";
        metaDescription = "";
        break;
      case "/howtoplay":
        title = "How to Play | Chess";
        metaDescription = "";
        break;
      case "/contactus":
        title = "Contact Us | Chess";
        metaDescription = "";
        break;
      case "/indextablet":
        title = "Chess";
        metaDescription = "";
        break;
      case "/indexmobile":
        title = "Chess";
        metaDescription = "";
        break;
      case "/abouttablet":
        title = "About | Chess";
        metaDescription = "";
        break;
      case "/aboutmobile":
        title = "About | Chess";
        metaDescription = "";
        break;
      case "/howtoplaytablet":
        title = "How to Play | Chess";
        metaDescription = "";
        break;
      case "/howtoplaymobile":
        title = "How to Play | Chess";
        metaDescription = "";
        break;
      case "/contactustablet":
        title = "Contact Us | Chess";
        metaDescription = "";
        break;
      case "/contactusmobile":
        title = "Contact Us | Chess";
        metaDescription = "";
        break;
      case "/friendsearch":
        title = "Friends | Chess";
        metaDescription = "";
        break;
      case "/landingtablet":
        title = "Home | Chess";
        metaDescription = "";
        break;
      case "/landingmobile":
        title = "Home | Chess";
        metaDescription = "";
        break;
      case "/profiletablet":
        title = "Profile | Chess";
        metaDescription = "";
        break;
      case "/profilemobile":
        title = "Profile | Chess";
        metaDescription = "";
        break;
      case "/usersearchtablet":
        title = "Users | Chess";
        metaDescription = "";
        break;
      case "/usersearchmobile":
        title = "Users | Chess";
        metaDescription = "";
        break;
      case "/friendsearchtablet":
        title = "Friends | Chess";
        metaDescription = "";
        break;
      case "/friendsearchmobile":
        title = "Friends | Chess";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/usersearch" element={<UserSearchComputer />} />
      <Route path="/gametablet" element={<GameTablet />} />
      <Route path="/gamemobile" element={<GameMobile />} />
      <Route path="/landing" element={<LandingComputer />} />
      <Route path="/profile" element={<ProfileComputer />} />
      <Route path="/game" element={<GameComputer />} />
      <Route
        path="/resetpasswordcomputer"
        element={<ResetPasswordComputer />}
      />
      <Route path="/resetpasswordtablet" element={<ResetPasswordTablet />} />
      <Route path="/resetpasswordmobile" element={<ResetPasswordMobile />} />
      <Route path="/about" element={<AboutComputer />} />
      <Route path="/howtoplay" element={<HowToPlayComputer />} />
      <Route path="/contactus" element={<ContactUsComputer />} />
      <Route path="/indextablet" element={<IndexTablet />} />
      <Route path="/indexmobile" element={<IndexMobile />} />
      <Route path="/abouttablet" element={<AboutTablet />} />
      <Route path="/aboutmobile" element={<AboutMobile />} />
      <Route path="/howtoplaytablet" element={<HowToPlayTablet />} />
      <Route path="/howtoplaymobile" element={<HowToPlayMobile />} />
      <Route path="/contactustablet" element={<ContactUsTablet />} />
      <Route path="/contactusmobile" element={<ContactUsMobile />} />
      <Route path="/friendsearch" element={<FriendSearchComputer />} />
      <Route path="/landingtablet" element={<LandingTablet />} />
      <Route path="/landingmobile" element={<LandingMobile />} />
      <Route path="/profiletablet" element={<ProfileTablet />} />
      <Route path="/profilemobile" element={<ProfileMobile />} />
      <Route path="/usersearchtablet" element={<UserSearchTablet />} />
      <Route path="/usersearchmobile" element={<UserSearchMobile />} />
      <Route path="/friendsearchtablet" element={<FriendSearchTablet />} />
      <Route path="/friendsearchmobile" element={<FriendSearchMobile />} />
    </Routes>
  );
}
export default App;
