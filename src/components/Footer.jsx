import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h2>CO-TEA</h2>
          <p>
            Premium Tea + Coffee Blend for Better Mornings.
            One cup. Two worlds. Perfect balance.
          </p>
        </div>

        <div className="footer-center">
          <p>© 2026 CO-TEA. All rights reserved.</p>
        </div>

        <div className="footer-right">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaFacebookF />
          </a>
        </div>

      </div>
    </footer>
  );
}