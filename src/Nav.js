import React from 'react';
import "./Nav.css";

function Nav() {
    return (
        <div className="nav">
            <img 
                className="nav_logo"
                //src="https://drive.google.com/file/d/1tRtITjyPGl3Br_N33wpuh-mnM4JoMsa7/view?usp=sharing"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg"
                alt="NetMovies Logo"
            />

            <img
                className="nav_avatar"
                src="https://pbs.twimg.com/profile_images/124011999041155"
                alt="NetMovies Avater"
            />
        </div>
    )
}

export default Nav;