import Navigation from "./Header/navigation/Navigation";
import Tagline from "./Header/tagline/tagline";
import TicketSearchForm from "./Header/ticket-search-form/TicketSearchForm";
import './Header/tagline/tagline.css';
import './Header.css'

export default function Header() {
    return (    
        <header className="header header_home">
          <Navigation />
                <section className="content-container content-container_header">
                    <Tagline />
                    <TicketSearchForm />
                </section>
        </header>
    )
}