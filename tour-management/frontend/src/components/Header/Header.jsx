import React from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";

// we do not have a logo for shop {mehdi :D}
import logo from "../../assets/images/logo.png";
import "./header.css";

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex-align-items-center justify-content-between">
            {/* ========= logo ========= */}
            <div className="logo">
              <img src="" alt="" />
            </div>
            {/* ========= logo end========= */}

            {/* ========= menu start ========= */}
            <div className="navigation">
              <ul className="menu d-flex align-item-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item">
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* ========= menu end========= */}

            <div className="nav__right d-flex align-item-center gap-4">
              <div className="nav__btns d-flex align-item-center gap-4">
                <button className="btn secondary__btn ">
                  <link to="/login">Login</link>
                </button>
                <button className="btn priamry__btn ">
                  <link to="/register">Register</link>
                </button>
              </div>
              <span className="mobile__menu">
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
