import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaMugHot } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { asyncSetSong } from "../Redux/Song/action";
import "../styles/Navbar.css";

function Navbar() {
    const currentUrl = window.location.href;
    const path = currentUrl.split("/")[3];

    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        if (keyword) {
            dispatch(asyncSetSong(keyword));
        } else {
            dispatch(asyncSetSong("a"));
        }
    }, [keyword]);

    return (
        <nav className="navbar">
            <div className="logoContainer">
                <div className="logo">
                    <i>
                        <FaMugHot />
                    </i>
                    <h2 className="judul">MusiCo</h2>
                </div>
                {path === "" && (
                    <div className="searchBox">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                        <i>
                            <BiSearchAlt />
                        </i>
                    </div>
                )}
            </div>
        </nav>
    );
}

export { Navbar };
