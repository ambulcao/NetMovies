import React, { useState, useEffect } from 'react';
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrolly > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
           // window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img 
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg"
                alt="NetMovies Logo"
            />
            <img
                className="nav_avatar"
                src="https://occ-0-1350-360.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABd0VJiB-jlZOa4mPM_JZLqrwJamcrjh4ZVC5RcX3P3tEVQ-uJNJ36uHQcaIQvtthwlh1Xj_6lCjDxONOY6wr8ow.png?r=f71"
                alt="NetMovies Avater"
            />
        </div>
    )
}

export default Nav;