function Navbar() {
    return(
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">
                    <img src="assets/img/logo.png" alt="" className="nav__logo-img"/>
                        Halloween
                </a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">Home</a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">About</a>
                        </li>

                        <li className="nav__item">
                            <a href="#trick" className="nav__link">Candy</a>
                        </li>

                        <li className="nav__item">
                            <a href="#new" className="nav__link">New</a>
                        </li>

                        <a href="#" className="button button--ghost">Support</a>
                    </ul>

                    <div className="nav__close" id="nav-close">
                        <i className='bx bx-x'></i>
                    </div>

                    <img src="assets/img/nav-img.png" alt="" className="nav__img"/>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-grid-alt'></i>
                </div>

            </nav>
        </header>

    )
}
export default Navbar