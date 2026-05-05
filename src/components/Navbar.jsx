import React from "react";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-left"></div>

      <div className="nav-logo">
        <img
          src="/logo.png"
          alt="CO-TEA Logo"
        />
      </div>

      <div className="nav-right">
        <a href="#" className="nav-contact">
          <Phone size={20} />
          <span>Contact Us</span>
        </a>
      </div>
    </nav>
  );
}