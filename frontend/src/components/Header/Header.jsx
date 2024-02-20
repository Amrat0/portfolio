import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

import "./Header.css";
const Header = () => {
  const [open, setOpen] = useState(false);

  const closeDrawer = () => {
    setOpen(false);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const LinkButton = ({ url = "/", title = "Home" }) => (
    <Link to={url}>
      <Button onClick={closeDrawer} variant="dark">
        {title}
      </Button>
    </Link>
  );

  return (
    <>
      <div id="nav">
        {open && <div className="drawer-overlay" onClick={toggleDrawer}></div>}
        <i onClick={toggleDrawer} className="ri-menu-4-fill"></i>
        <Drawer anchor="left" open={open} onClose={toggleDrawer}>
          <div style={{ width: "240px" }}>
            <div className="header">
              <h4>AMRAT</h4>
            </div>
          </div>
          <div className="linee">
            <div className="DrawerBody">
              <a
                href="/account"
                style={{
                  fontSize: "35px",
                  marginBottom: "20px",
                  color: "rgb(58, 0, 0.9)",
                }}
              >
                {" "}
                <CgProfile /> <span></span>{" "}
              </a>
              <LinkButton url="/" title="Home" />
              <span></span>
              <LinkButton url="/about" title="About" />
              <span></span>
              <LinkButton url="/projects" title="Project" />
              <span></span>
              <LinkButton url="/contact" title="Contact Us" />
              <span></span>
            </div>
          </div>
          <div></div>
        </Drawer>
        <div id="right">
          <a href="/">
            Home <span></span>{" "}
          </a>
          <a
            href="/account"
            style={{ fontSize: "32px", margin: "0%", height: "32px" }}
          >
            {" "}
            <CgProfile /> <span></span>{" "}
          </a>
        </div>
      </div>
    </>
  );
};
export default Header;
