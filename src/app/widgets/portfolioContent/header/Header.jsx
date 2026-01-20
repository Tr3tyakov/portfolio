import "./Header.css";

const Header = () => (
    <header className="header">
        <div className="container">
            <nav className="nav">
                <a href="#main" className="nav__link">Главная</a>
                <a href="#about" className="nav__link">Обо мне</a>
                <a href="#portfolio" className="nav__link">Портфолио</a>
                <a href="#contacts" className="nav__link">Контакты</a>
            </nav>
        </div>
    </header>
);

export default Header;