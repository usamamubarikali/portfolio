import React, { useEffect, useState } from 'react';
import './Banner.scss';
import Avatar from 'avataaars';
import Particles from 'react-particles-js';

const Banner = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [scroll, setScroll] = useState(window.scrollY);
    
    const handleResize = () => {
        setWindowSize(window.innerWidth)
    }
    
    const handleOnScroll = () => {
        setScroll(window.scrollY)
    }

    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        window.addEventListener('scroll', handleOnScroll);
    })

    return (
        <div className="banner__div">
            <Particles className="particles" 
                params={{
                    "particles": {
                        "number": {
                            "value": windowSize / 35
                        },
                        "size": {
                            "value": 3
                        },
                        "color": {
                            "value": ['#026440']
                        },
                        "line_linked": {
                            "color": '#026440',
                            "opacity": 0.5
                          }
                    }
                }}
                />
            <div className="banner__text">
                <h1 className="banner__h1">Full Stack Web & AWS Developer</h1>
                <p className="banner__p">I work on Automation and Web Development, and I love doing it.</p>
            </div>
            <Avatar
                avatarStyle='Transparent'
                topType='ShortHairShortCurly'
                accessoriesType='Blank'
                hairColor='Black'
                facialHairType='Blank'
                clotheType='Hoodie'
                clotheColor='Heather'
                eyeType= {scroll < 45 ? 'Happy':'WinkWacky'}
                eyebrowType='Default'
                mouthType= {scroll < 45 ? 'Smile':'Tongue'}
                skinColor='Tanned'
            />
        </div>
    )
}

export default Banner;
