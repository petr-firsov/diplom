import { Link } from "react-router"
import './Header.css'

export default function Header() {
    return (
        <header className="header">
                <div className="content-container logo-container">
                        <span className="logo">Лого</span>
                </div>
                <div className="content-container menu">
                        <nav className="menu__list">
                            <a className="menu__item">О нас</a>
                            <a className="menu__item">Как это работает</a>
                            <a className="menu__item">Отзывы</a>
                            <a className="menu__item">Контакты</a>
                        </nav>
                </div>
        </header>

    )
}