import React, { useState } from 'react';
import './Header.scss';
import signature from '../../static/images/signature.png';

const Header = ({ setToggleContactMe }) => {
    const [toggleBurgerMenu, setToggleBurgerMenu] = useState(false);

    const downloadFile = () => {
        window.open("http://usamamubarikali.github.io/portfolio/Usama_Ali_Resume.pdf", '_blank').focus();
    }

    return (
        <div className="main__div">
            <div id="nav-icon1" onClick={() => setToggleBurgerMenu(!toggleBurgerMenu)} className={toggleBurgerMenu ? "open" : null}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="header__container">
                <img className="logo" alt="Usama Ali Portfolio" src={signature} />
                <div className={toggleBurgerMenu ? "header__div--mobilestyle" : "header__div"} >
                    <span className="header__resume" onClick={downloadFile}>Resume</span>
                    <span className="header__letsconnect" onClick={() => setToggleContactMe(true)}>Lets Connect</span>
                </div>
            </div>
        </div>
    )
}


export default Header;
