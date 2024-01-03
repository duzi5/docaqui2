import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ServicesButton from "./ServicesButton.jsx"
import "./Services.scss"

const Services = () => {
    const h1Ref = useRef(null);

    useEffect(() => {
        gsap.to(h1Ref.current, {
            scale: 1.2,
            opacity: 0.5,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'power2.inOut'
        });
    }, []);

    return (
        <div className='services'>
            <h1 ref={h1Ref}>Nossos Serviços</h1>
            <ServicesButton texto=" - Emissão Ágil de Documentos e Certidões"/>
            <ServicesButton texto=" - Registro de Contratos em Cartório"/>
            <ServicesButton texto=" - Busca Pré-análise e Gestão de Documentos"/>
        </div>
    );
}

export default Services;