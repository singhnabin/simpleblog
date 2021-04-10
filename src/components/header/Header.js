import React, { Fragment } from "react";
import "./Header.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Avatar } from "@material-ui/core";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CachedIcon from "@material-ui/icons/Cached";
import HistoryIcon from "@material-ui/icons/History";
import SettingsIcon from "@material-ui/icons/Settings";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import HelpIcon from "@material-ui/icons/Help";
import ChatIcon from "@material-ui/icons/Chat";
import DescriptionIcon from "@material-ui/icons/Description";
import { Link } from "react-router-dom";

function Header() {
  const isloggedIn = false;
  const account = [
    { Icon: CardGiftcardIcon, text: "Free Stocks", href: "/" },
    { Icon: AccountBalanceWalletIcon, text: "Account", href: "/" },
    { Icon: AccountBalanceIcon, text: "Banking", href: "/user/banking" },
    { Icon: CachedIcon, text: "Recurring", href: "/" },
    { Icon: HistoryIcon, text: "History", href: "/user/history" },
    { Icon: SettingsIcon, text: "Settings", href: "/" },
    { Icon: InsertDriveFileIcon, text: "Document", href: "/" },
    { Icon: HelpIcon, text: "Help", href: "/support" },
    { Icon: DescriptionIcon, text: "Disclosure", href: "/" },
    { Icon: ChatIcon, text: "Contact Us", href: "/" },
    { Icon: ExitToAppIcon, text: "Logout", href: "/" },
  ];

  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark">
        <Navbar.Brand href="/">
          <img
            src={
              "https://i.pinimg.com/originals/9d/16/87/9d1687fe53247d0da876e4bff2e3ce64.png"
            }
            alt=""
            height="80px"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Fragment>
              <Link to="/auth/login">Login</Link>
              <Link to="/auth/signin">Sign Up</Link>
            </Fragment>
            {isloggedIn && (
              <Avatar src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/69841538_3064012920307642_7407430817242152960_n.jpg?_nc_cat=111&ccb=3&_nc_sid=174925&_nc_ohc=_brErnEUkf0AX_ZwTwz&_nc_ht=scontent-dfw5-1.xx&oh=621c6dc001c4fca43775447b210cc24b&oe=6065DD93" />
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
