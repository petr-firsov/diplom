import { useState } from "react";

export default function CitySearchField({name, placeholderText}) { 
    const [cityOptions, setCityOptions] = useState([]);
    function showCityOptions(e) {
        let loadedCities = [];
        fetch(`https://students.netoservices.ru/fe-diplom/routes/cities?name=${e.target.value}`)
        .then((response) => response.json())
        .then(data => {
            if (data !== undefined && data.length !== undefined) {
                for (let i = 0; i < data.length; i++) {
                        let city = {name: data[i].name, id: data[i]._id}
                        loadedCities.push(city)
                }
                setCityOptions(loadedCities);
            }
        });
    }

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
            className="ticket-search__city-search-field" 
            id={selectedCityId}
            name={name} 
            placeholder={placeholderText} 
            list={name}           
            onInput={showCityOptions} 
            onBlur={setSelectedCity}
            required />
        </>

    )
}
