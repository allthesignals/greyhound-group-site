import * as React from "react";
import smLogo from "../img/logo-sm.png";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="bg-gg-lavender p-12">
        <div className="bg-gg-light-gray w-full rounded-3xl border-gg-dark-green p-12">
          <span> 12 NW 13th St, Suite 1 — Oklahoma City OK 73103</span>
          <img
            className="ml-auto h-16"
            src={smLogo}
            alt="Greyhound Group"
          />
        </div>
      </footer>
    );
  }
};

export default Footer;
