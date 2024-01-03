import React from 'react';
import "./MenuLateral.scss"
const MenuLateral = () => {
    return (
        <div id="menuLateral">
            <ul className="botoes">
            <li id='home' className='menuLink'> Home</li>    
            <li id='quemSomos' className='menuLink'> Quem Somos</li>    
            <li id="nossosServiços" className='menuLink'> Nossos Serviços</li>    
            <li id='contato' className='menuLink'> Contato</li>    
            </ul>            
        </div>
    );
}

export default MenuLateral;
