import React from 'react';
import './Footer.scss';
import StartProject from './StartProject';
import signature from '../../static/images/signature-white.png';
import {ReactComponent as LinkedIn} from "../../static/svgs/linkedin.svg";
import {ReactComponent as GitHub} from "../../static/svgs/github.svg";
import {ReactComponent as StackOverflow} from "../../static/svgs/stackoverflow.svg";
import {ReactComponent as Instagram} from "../../static/svgs/instagram.svg";

const Footer = () => {
    return (
        <div className="footer__maindiv">
            <StartProject />
            <div className="footer__innerdiv">
                <img className="logo" alt="Usama Ali Portfolio" src={signature} />
                <h5>Living, learning, & leveling up one day at a time.</h5>
                <div className="social-links">
                    <LinkedIn className="footer__svgs"/>
                    <GitHub className="footer__svgs" />
                    <StackOverflow className="footer__svgs" />
                    <Instagram className="footer__svgs" />
                </div>
                <p>Created by Usama Ali © {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}

export default Footer;
