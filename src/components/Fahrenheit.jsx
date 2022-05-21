import React from 'react';

const Fahrenheit = ( {temp, tempMin, tempMax} ) => {
     
    const tempFahrenheit = parseInt((temp - 273.15) * 1.8000 + 32)
    const tempMinF = parseInt((tempMin - 273.15) * 1.8000 + 32)
    const tempMaxF = parseInt((tempMax - 273.15) * 1.8000 + 32)

    return (
        <div>
            <p><i class="fa-solid fa-temperature-half"></i> <strong>{tempFahrenheit} °F</strong> </p>
            <p>Min. Temperature</p>
            <p><i class="fa-solid fa-temperature-arrow-down"></i>  {tempMinF} °F</p>
            <p>Max. Temperature</p>
            <p><i class="fa-solid fa-temperature-arrow-up"></i> {tempMaxF} °F</p>
        </div>
    );
};

export default Fahrenheit;