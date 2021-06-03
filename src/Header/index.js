import React from 'react'
import './index.css'


const Header = props => {
    return(
        <header className="cabecalho">
            <div className="logo">
                <a href="/inicio">
                    <img src="https://picsum.photos/200/80" alt="logo"/>
                </a>
            </div>

            <button className="menu-toggle">
                <i ></i>
            </button>

        <nav className="menu">
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

        <aside className="autenticacao">
            <a href="#login">Login</a>
            <a href="#registrar" className="botao destaque">Registrar</a>
        </aside>




        </header>
    )
}

export default Header