import './welcome-block.css'
import TicketSearch from '../ticket-search-form/TicketSearch'

export default function WelcomeBlock() {
    return (
        <header className="welcome-block">
            <img className="header__background-image" src="/public/img/background-train.png" />
            <div className="content-container header__container">
                <div className="header__content">
                    <div className="header__tagline">
                        <div className="tagline">
                            <span className="tagline_first-line">Вся жизнь - </span>
                            <span className="tagline_second-line">путешествие!</span>
                        </div>
                    </div>  
                    <TicketSearch />
                </div>
            </div>
        </header>
    )
}