import React, { useEffect, useRef } from 'react';
import './Intro2.scss';
import video from "./video4.mp4";
import logoSvg from './logo.svg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Intro2 = () => {


    return (
    <>
        <div id="intro2">
        
        <div className="video-container">
                <h1 id="docaqui" ref={logoRef}>DocAqui</h1>
        </div>
    </div>
       
    </>
    );
};

export default Intro2;