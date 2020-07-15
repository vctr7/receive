import React, { Component } from "react";

const Footer = props => {
  return (
    <footer>
      <p className="footer-links">
        <a
          href="https://github.com/vctr7/Recieve"
          target="_blank"
        >
          View Source on Github
        </a>
        <span> / </span>
        <a href="mailto:contact@sivadass.in" target="_blank">
          Need any help?
        </a>
        <span> / </span>
        <a href="https://twitter.com/NSivadass" target="_blank">
          Say Hi on Twitter
        </a>
        <span> / </span>
        <a href="https://sivadass.in" target="_blank">
          Read My Blog
        </a>
      </p>
      <p>
        &copy; 2020 <strong>RECIEVE</strong> - Your Price
      </p>
    </footer>
  );
};

export default Footer;
