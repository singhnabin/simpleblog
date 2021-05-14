import React, { Fragment } from "react";
import "./Header.css";
import { Badge, Nav, Navbar, NavDropdown } from "react-bootstrap";
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
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated } from "../../api";
import { signout } from "../../api/user";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#ffffff" };
  }
};

function Header({ history }) {
  const { user } = isAuthenticated();
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
              {!user && (
                <Link to="/login" style={currentTab(history, "/cart")}>
                  Login
                </Link>
              )}

              {/* <Link to="/auth/signin">Sign Up</Link> */}
            </Fragment>

            {user && (
              <Fragment>
                <Link
                  to="/user/dashboard"
                  style={currentTab(history, "/user/dashboard")}
                >
                  Dashboard
                </Link>
                {user.role === 1 && (
                  <Link
                    to="/admin/dashboard"
                    style={currentTab(history, "/admin/dashboard")}
                  >
                    Admin Dashboard
                  </Link>
                )}

                <Badge variant="dark" className="profile__badge">
                  {user.firstName}
                </Badge>

                <NavDropdown title="Profile" id="collasible-nav-dropdown">
                  <NavDropdown.Item
                    style={currentTab(history, "/admin/dashboard")}
                    onClick={() => {
                      signout(() => history.push("/"));
                    }}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>

                <Avatar src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/86257998_2014992985312926_4094412634177142784_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=W0G0r12feyUAX-dnIkS&_nc_ht=scontent-dfw5-2.xx&oh=57e772185d0a4f45cbc027dbfb2f338b&oe=609350FE" />
              </Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(Header);
