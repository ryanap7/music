import React from "react";
import "../styles/RightMenu.css";
import { MenuList } from "./MenuList";
import { Menu } from "./Menu";
import "animate.css";

function RightMenu() {
  return (
    <div className="rightContainer animate__animated animate__fadeInRight">
      <Menu title={"Menu"} listObject={MenuList} />
    </div>
  );
}

export { RightMenu };
