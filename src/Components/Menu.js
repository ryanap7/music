import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Menu({ title, listObject }) {
  useEffect(() => {
    const allLi = document
      .querySelector(".menuContainer ul")
      .querySelectorAll("li");

    function changeMenuActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allLi.forEach((n) => n.addEventListener("click", changeMenuActive));

    return () => {
      allLi.forEach((n) => n.removeEventListener("click", changeMenuActive));
    };
  }, []);

  return (
    <div className="menuContainer">
      <p className="menu-txt"> {title}</p>

      <ul className="list-menu-container">
        {listObject &&
          listObject.map((li) => (
            <li key={li.id}>
              {li.route === "/" ? (
                <a href={li.route}>
                  <i>{li.icon}</i>
                  <span> {li.name}</span>
                </a>
              ) : (
                <Link to={li.route}>
                  <i>{li.icon}</i>
                  <span> {li.name}</span>
                </Link>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

export { Menu };
