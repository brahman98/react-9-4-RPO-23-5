import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Header() {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <header className={`header theme-${theme}`}>
            <h1>SOCIAL NETWORK</h1>
            <p>for communicate</p>
            <nav className="navigation">
                <Link className={`nav-link theme-${theme}`} to="/">Главная</Link>
                <Link className={`nav-link theme-${theme}`} to="/profile">Профиль</Link>
                <Link className={`nav-link theme-${theme}`} to="/settings">Настройки</Link>
                <Link className={`nav-link theme-${theme}`} to="/about">О проекте</Link>
                <button onClick={toggleTheme}>
                    {theme === "light" ? "DARK" : "LIGHT"}
                </button>
            </nav>
        </header>
    )
}

export default Header;