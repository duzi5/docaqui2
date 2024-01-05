import React, { useEffect, useRef} from 'react';
import { createRoot } from 'react-dom/client';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger.js';// Substitua pelo caminho correto do seu vídeo
import MenuHeader from './components/MenuHeader/MenuHeader.jsx';
import MenuLateral from './components/MenuLateral/MenuLateral.jsx';
import Presentation from './components/Presentation/Presentation.jsx';
import Services from './components/Services/Services.jsx';
import Diferencials from './components/Diferencials/Diferencials.jsx';
import Lenis from '@studio-freight/lenis'

function App() {// Adiciona a referência para o vídeo
    useEffect(()=>{
        const lenis = new Lenis()
    
        lenis.on('scroll', (e) => {
          console.log(e)
        })
        
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
        gsap.registerPlugin(ScrollTrigger)
    }, [])

    return (
        <div id='app'>
            <MenuLateral />
            <MenuHeader />
            <Presentation />
            <Services/>
            <Diferencials />
                        <div className='espaco'></div>
            <div className='espaco'></div>
            <div className='espaco'></div>
            <div className='espaco'></div>
        </div>
    )
}       

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
