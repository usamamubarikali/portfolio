import React from 'react';
import './Footer.scss';
import StartProject from './StartProject';
import signature from '../../static/images/signature-white.png';
import {ReactComponent as LinkedIn} from "../../static/svgs/linkedin.svg";
import {ReactComponent as GitHub} from "../../static/svgs/github.svg";
import {ReactComponent as StackOverflow} from "../../static/svgs/stackoverflow.svg";
import {ReactComponent as Twitter} from "../../static/svgs/twitter.svg";

const Footer = () => {
    return (
        <div className="footer__maindiv">
            <StartProject />
            <div className="footer__innerdiv">
                <a href="#"><img className="logo" alt="Usama Ali Portfolio" src={signature} /></a>
                <h5>Living, learning, & leveling up one day at a time.</h5>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/usamaali/" target="_blank"><LinkedIn className="footer__svgs"/></a>
                    <a href="https://github.com/usamamubarikali" target="_blank"><GitHub className="footer__svgs" /></a>
                    <a href="https://stackoverflow.com/users/15599830/usama-ali" target="_blank"><StackOverflow className="footer__svgs" /></a>
                    <a href="https://twitter.com/UsamaMubarikAli" target="_blank"><Twitter className="footer__svgs" /></a>
                </div>
                <p>Created by Usama Ali © {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}

export default Footer;
