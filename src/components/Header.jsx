import { Link } from "react-router"
import './Header.css'

export default function Header() {
    return (
        <header className="header">
                <div className="content-container content-container_logo">
                        <div className="logo">Лого</div>
                </div>
                <div className="content-container content-container_menu">
                        <nav className="menu">
                            <a className="menu__item">О нас</a>
                            <a className="menu__item">Как это работает</a>
                            <a className="menu__item">Отзывы</a>
                            <a className="menu__item">Контакты</a>
                        </nav>
                </div>
        </header>

    )
}