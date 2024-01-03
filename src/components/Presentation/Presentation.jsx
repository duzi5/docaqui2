import React, { useEffect } from 'react';
import "./Presentation.scss"
import gsap from 'gsap';
import aceito from "./aceito.jpg";

const Presentation = () => {
    useEffect(()=>{
        const textElements = gsap.utils.toArray('.text');

textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 70%',
      end: 'center 30%',
      scrub: 2,

    },
  });


  gsap.to('#aceito', {
    scrollTrigger:{
        trigger: '#aceito',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,

    },
    xPercent: 40,
    height: '20vh',
    width: 'auto'

  })






});



    },[])
    return (
        <div id="presentation">
  <img id="aceito" src={aceito} alt="" srcset="" />
            <div class="container">
  <h1 class="text">Descomplicamos<span>FACILITE</span></h1>
  <h1 class="text">os mercados <span>SUA</span></h1>
  <h1 class="text">financeiro e de capitais!<span>VIDA</span></h1>
  <br />
  <br />
  <br />
  {/* <h1 class="text">HOVER ON ME<span><a href="https://stacksorted.com/text-effects/minh-pham" target="_blank">SOURCE</a></span></h1>
  <h1 class="text">LIKE THIS?<span><a href="https://twitter.com/juxtopposed" target="_blank">LET'S CONNECT</a></span></h1> */}
  <h1 className="text text2">Uma equipe de especialistas<span>FACILITE</span></h1>
  <h1 className="text text2">tornando a emissão<span>SUA</span></h1>
  <h1 className="text text2"> de documentos para<span>VIDA</span></h1>
  <h1 className="text text2"> DUE DELIGENCE  <span>SUPER</span></h1>
  <h1 className="text text2">SUPER RÁPIDA E SIMPLES<span>RÁPIDO</span></h1>
</div>
        </div>
    );
}

export default Presentation;
