import './TicketSearchForm.css';
import CitySearchField from './__city-search-field/CitySearchField';
import { useSearchParams } from 'react-router-dom';


export default function TicketSearchForm() {

    const [searchParams, setSearchParams] = useSearchParams();
    
    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            where_from: e.target['where_from'].id,
            where_to: e.target['where_to'].id,
            arrival_date: e.target['arrival_date'].value,
            departure_date: e.target['departure_date'].value
        };
        setSearchParams(data);
    }

    return (
        <form className="ticket-search-form">

            <div className="ticket-search-form__segment">
                <span className="ticket-search-form__title">Направление</span>
                <div className="ticket-search-form__search-parameter">
                    <CitySearchField name="where_from" placeholderText="Откуда" />
                    <img src="/img/intercity_arrow.png" className="ticket-search-form__switch-cities-button" />
                    <CitySearchField name="where_to" placeholderText="Куда" />
                </div>
            </div>

            <div className="ticket-search-form__segment">
                <span className="ticket-search-form__title">Дата</span>
                <div className="ticket-search-form__search-parameter">
                    <input type="date" name="arrival_date" className="ticket-search-form__date-search-field" placeholder="ДД/MM/ГГ" required></input>
                    <input type="date" name="departure_date" className="ticket-search-form__date-search-field" placeholder="ДД/ММ/ГГ" required></input>
                </div>
            </div>

            <div className="ticket-search-form__segment ticket-search-form__segment_button">
                <button type="submit" className="ticket-search-form__submit-button ticket-search-form__interactive-button">НАЙТИ БИЛЕТЫ</button>
            </div>
        </form>
    )
}