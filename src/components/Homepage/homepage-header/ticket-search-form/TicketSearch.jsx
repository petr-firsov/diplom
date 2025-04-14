import './TicketSearch.css';
import CitySearchField from './__city-search-field/CitySearchField';
// import DateSearchField from './__date-search-field/date-search-field';

export default function TicketSearch() {

    function handleSubmit(e) {
        e.preventDefault();
        const data ={
            from_city_id: e.target['where-from'].id,
            to_city_id: e.target['where-to'].id,
            date_start: e.target['arrival-date'].value,
            date_end: e.target['departure-date'].value
        };
        fetch(`https://students.netoservices.ru/fe-diplom/routes?from_city_id=${data['from_city_id']}&to_city_id=${data['to_city_id']}&date_start=${data['date_start']}&date_end=${data['date_end']}`)    
        .then((response) => response.json())
        .then((result) => console.log(result))
    }

    return (
        <form className="ticket-search" onSubmit={handleSubmit}>

            <div className="ticket-search__segment">
                <span className="ticket-search__title">Направление</span>
                <div className="ticket-search__search-parameter">
                    <CitySearchField name="where-from" placeholderText="Откуда" />
                    <img src="/img/intercity_arrow.png" className="ticket-search__switch-cities-button" />
                    <CitySearchField name="where-to" placeholderText="Куда" />
                </div>
            </div>

            <div className="ticket-search__segment">
                <span className="ticket-search__title">Дата</span>
                <div className="ticket-search__search-parameter">
                    {/* <DateSearchField />
                    <DateSearchField /> */}
                    <input type="date" name="arrival-date" className="ticket-search__date-search-field" placeholder="ДД/MM/ГГ" required></input>
                    <input type="date" name="departure-date" className="ticket-search__date-search-field" placeholder="ДД/ММ/ГГ" required></input>
                </div>
            </div>

            <div className="ticket-search__segment ticket-search__segment_button">
                <button type="submit" className="ticket-search__submit-button ticket-search__interactive-button">НАЙТИ БИЛЕТЫ</button>
            </div>
        </form>
    )
}