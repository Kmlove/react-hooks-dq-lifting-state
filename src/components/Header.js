import React, { useState } from "react";
import Menu from "./Menu";

function Header({darkMode, dmCallback}) {

  return (
    <div className={`ui fixed menu ${darkMode ? "inverted" : ""}`}>
      <div className="menu item">Fwitter</div>
      <div className="right menu">
        <Menu darkMode={darkMode} dmCallback={dmCallback}/>
      </div>
    </div>
  );
}

export default Header;
