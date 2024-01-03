import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "./Services.scss"

const ServicesButton = (props) => {
    const textRef = useRef(null);

    useEffect(() => {
        const textWidth = textRef.current.getBoundingClientRect().width;
        gsap.to(textRef.current, {
            x: -textWidth / 3,
            duration: 46,
            repeat: -1,
            ease: 'linear',
            stagger: 5
        });
    }, []);

    return (
        <a className='serviceButton'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span ref={textRef}>
            {props.texto}{props.texto}{props.texto}{props.texto}{props.texto}{props.texto}{props.texto}{props.texto}{props.texto}{props.texto}{props.texto}{props.texto}
            </span>
        </a>
    );
}

export default ServicesButton;