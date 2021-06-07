import React from 'react'
import './index.css'


const Headerflex = props => {
    return(
        <header className="cabecalho2">
            <div className="logo2">
                <a href="/inicio">
                    <img src="https://picsum.photos/200/80" alt="logo"/>
                </a>
            </div>

            
        <nav className="menu2">
            <ul>
                <li>
                <a href="#home">HOME</a>    
                </li>

                <li>
                <a href="#about">ABOUT</a>
                </li>

                <li>
                <a href="#cursos">CURSOS</a>
                </li>

                <li>
                <a href="#contato">CONTATO</a>    
                </li>
            </ul>
        </nav>

        <aside className="autenticacao2">
            <a href="#login">Login</a>
            <a href="#registrar" className="botao destaque">Registrar</a>
        </aside>




        </header>
    )
}

export default Headerflex