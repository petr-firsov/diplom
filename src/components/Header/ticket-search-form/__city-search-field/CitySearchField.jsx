import { useState } from "react";

export default function CitySearchField({name, placeholderText}) { 

    const [cityOptions, setCityOptions] = useState([]);
    async function showCityOptions(e) {
        let loadedCities = [];
        const citySuggestionsResponse = await fetch(`https://students.netoservices.ru/fe-diplom/routes/cities?name=${e.target.value}`);
        const citySuggestions = citySuggestionsResponse.json();
        const data = await citySuggestions;
        // Если citySuggestions содержит только один город, и он совпадает с введенным значением, очищаем список опций
        if (data.length === 1 && data[0].name === e.target.value) {
            setCityOptions([]);
        // Если citySuggestions не является пустым или неопределенным, и содержит массив городов, то отображаем их
        } else if (data !== undefined && data.length !== undefined) {
            for (let i = 0; i < data.length; i++) {
                    let city = {name: data[i].name, id: data[i]._id}
                    loadedCities.push(city)
            }
            setCityOptions(loadedCities);
        }  
    };

    const [selectedCityId, setSelectedCityId] = useState('');
    function setSelectedCity(e) {
        const selectedCityObject = cityOptions.find(object => object.name === e.target.value);
        if (selectedCityObject !== undefined) {
            setSelectedCityId(selectedCityObject.id);    
        }
    }

    return (
        <>
            <datalist id={name}>
                {cityOptions.map(city => {
                    return ( <option key={city.id}>{city.name}</option> )
                })}
            </datalist>
            <input 
            type="text" 
            className="ticket-search-form__city-search-field" 
            id={selectedCityId}
            name={name} 
            list={name}           

            placeholder={placeholderText} 
            onInput={showCityOptions} 
            onBlur={setSelectedCity} 
            required />
        </>

    )
}
