import './homepage-header.css'
import TicketSearch from './ticket-search-form/TicketSearch'

export default function HomepageHeader() {
    return (
        <header className="homepage-header">
            <img className="homepage-header__background-image" src="/img/background-train.png" />
            <div className="content-container content-container_homepage-header">
                <div className="homepage-header__content">
                    <div className="tagline">
                        <div className="tagline__text">
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