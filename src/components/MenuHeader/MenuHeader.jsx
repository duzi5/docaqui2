import React, { useEffect, useRef } from "react";
import Logo from "./Logo.jsx";
import "./MenuHeader.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import nuvem from "./nuvem2.png";
import ql from "./nuvem.png";
import ee from "./predios2.jpg";
gsap.registerPlugin(ScrollTrigger);
const MenuHeader = () => {
  const menuRef = useRef();
  const logoRef = useRef();
  const docAquiRef = useRef();
  const nuvem1Ref = useRef(null);
  const nuvem2Ref = useRef(null);
  const nuvem3Ref = useRef(null);
  const nuvem4Ref = useRef(null);
  const nuvem5Ref = useRef(null);
  const nuvem6Ref = useRef(null);
  const nuvem7Ref = useRef(null);
  const nuvem8Ref = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#menuHeader",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: "#menuHeader",
        pinSpacing: false
      },
    });

    tl.to(
        ["#predios", ".nuvens"],
        {
            scale: 0.8,
            y: -90,
        }
        );
        tl.to(
          [".nuvem"],
          {
              opacity: 0
          },
      
          0)
   
            tl.to(
                logoRef.current,
                {
                    width: "30px", // Diminui o tamanho do logo// Posiciona o logo em relação ao menu
                    // Posiciona o logo 10px à esquerda dentro do menu
                },

                )
                .to(
                    docAquiRef.current,
                    {
                        fontSize: "1.3rem", // Diminui o tamanho do logo// Posiciona o logo em relação ao menu
                        // Posiciona o logo 10px à esquerda dentro do menu
                    },
                
                "<")
                    .to(menuRef.current, {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "50px",
                        zIndex: 1000,
                        // outros estilos necessários
                      },"<");
                    gsap.fromTo(
                        nuvem1Ref.current,
                        { x: "-100%" },
                        { x: "100%", duration: 50, repeat: -1, ease: "none" }
                        );
                        
                        // Repita o processo para as outras nuvens com diferentes durações
                        gsap.fromTo(
                            nuvem2Ref.current,
                            { x: "-100%" },
                            { x: "100%", duration: 60, repeat: -1, ease: "none" }
                            );
                            
                            gsap.fromTo(
                                nuvem3Ref.current,
                                { x: "-100%" },
                                { x: "100%", duration: 50, repeat: -1, ease: "none" }
                                );
                                
                                gsap.fromTo(
                                    nuvem4Ref.current,
                                    { x: "-100%" },
                                    { x: "100%", duration: 50, repeat: -1, ease: "none" }
                                    );
                                    gsap.fromTo(
                                        nuvem6Ref.current,
                                        { x: "-100%" },
                                        { x: "100%", duration: 22, repeat: -1, ease: "none" }
                                        );
                                        
                                        // Repita o processo para as outras nuvens com diferentes durações
                                        gsap.fromTo(
                                            nuvem7Ref.current,
                                            { x: "-100%", bottom: "12%" },
                                            { x: "100%", duration: 14, repeat: -1, ease: "none" }
                                            );
                                            
                                            gsap.fromTo(
                                                nuvem8Ref.current,
                                                { x: "-100%", bottom: "12%" },
                                                
                                                { x: "100%", duration: 44, repeat: -1, ease: "none" }
                                                );
                                                
                                                gsap.fromTo(
                                                    nuvem5Ref.current,
                                                    { x: "-100%", bottom: "12%" },
                                                    
                                                    { x: "100%", duration: 15, repeat: -1, ease: "none" }
                                                    );
                                                
  }, []);
  // useEffect(() => {
  //     nuvensRef.current.forEach((nuvem, index) => {
  //       const x = gsap.utils.random(100, 200); // posição x aleatória
  //       const y = gsap.utils.random(100, 200); // posição y aleatória
  //       gsap.to(nuvem, {
  //         x: x,
  //         y: y,
  //         repeat: -1,
  //         yoyo: true,
  //         ease: "none",
  //         duration: 2
  //       });
  //     });
  //   }, []);
  return (
    <div ref={menuRef} id="menuHeader">
      <Logo ref={logoRef} />
      <h1 ref={docAquiRef}>DocAqui</h1>
     <div className="nuvens">
     <img ref={nuvem1Ref} className="nuvem nuvem1" alt="" />
      <img ref={nuvem2Ref} className="nuvem nuvem2" src={ql} alt="" />
      <img ref={nuvem3Ref} className="nuvem nuvem3" src={ql} alt="" />
      <img ref={nuvem4Ref} className="nuvem nuvem4" src={ql} alt="" />
 
      <img ref={nuvem5Ref} className="nuvem nuvem5" alt="" />
      <img ref={nuvem6Ref} className="nuvem nuvem6" src={ql} alt="" />
      <img ref={nuvem8Ref} className="nuvem nuvem8" src={ql} alt="" />
      <img ref={nuvem7Ref} className="nuvem nuvem7" src={ql} alt="" />
     </div>
      <img id="predios" src={ee} alt="" srcset="" />
    </div>
  );
};

export default MenuHeader;
