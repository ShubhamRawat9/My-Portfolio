import React, { useState } from 'react'
import "./Navbar.css"

export default function Navbar() {
    /*================ Toggle Menu ================*/
    const [Toggle, showMenu] = useState(false);

    return (
        <>
            <header className="header">
                <nav className="nav container">
                    <a href="index.html" className="nav-logo">
                        Shubham Rawat
                    </a>

                    <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
                        <ul className="nav-list grid">
                            <li className="nav-item">
                                <a href="#home" className="nav-link active-link">
                                    <i className="uil uil-estate nav-icon" />
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#about" className="nav-link">
                                    <i className="uil uil-user nav-icon" />
                                    About
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#skills" className="nav-link">
                                    <i className="uil uil-file-alt nav-icon" />
                                    Skills
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#services" className="nav-link">
                                    <i className="uil uil-briefcase-alt nav-icon" />
                                    Services
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#portfolio" className="nav-link">
                                    <i className="uil uil-scenery nav-icon" />
                                    Portfolio
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#contact" className="nav-link">
                                    <i className="uil uil-message nav-icon" />
                                    Contact
                                </a>
                            </li>
                        </ul>

                        <i className="uil uil-times nav-close"
                            onClick={() => showMenu(!Toggle)}
                        />
                    </div>

                    <div className="nav-toggle"
                        onClick={() => showMenu(!Toggle)}
                    >
                        <i className='uil uil-apps' />
                    </div>
                </nav>
            </header>
        </>
    )
}
