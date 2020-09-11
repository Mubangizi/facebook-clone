import React from "react";
import "./Header.css";
import FacebookLogo from "./assets/facebook_logo.png";
import SearchIcon from "@material-ui/icons/Search";
import FlagIcon from "@material-ui/icons/Flag";
import HomeIcon from "@material-ui/icons/Home";
import { Avatar, IconButton } from "@material-ui/core";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SubscriptionOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={FacebookLogo} alt="facebook" />
        <div className="header__input">
          <SearchIcon />
          <input />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option">
          <HomeIcon fontSize="Large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="Large" />
        </div>
        <div className="header__option">
          <SubscriptionOutlinedIcon fontSize="Large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="Large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="Large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>Mubangizi Allan</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
