import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        {" "}
        © 2023 Stopwatch <br />
        Made with ❤️ by :{" "}
        <a className="text-dark" href="https://mdbootstrap.com/">
          Arpitam Saha
        </a>
      </div>
    </footer>
  );
};

export default Footer;
