import React from 'react';

const Centigrados = ({ temp, tempMin, tempMax }) => {

    const tempCentigrados = parseInt(temp - 273.15)

    const tempMinC = parseInt(tempMin - 273.15)

    const tempMaxC = parseInt(tempMax - 273.15)
    

    return (
        <div>
            <p className='temperature'><i class="fa-solid fa-temperature-half">  </i> <strong>{tempCentigrados} °C</strong> </p>
            <p>Min. Temperature</p>
            <p><i class="fa-solid fa-temperature-arrow-down"></i> {tempMinC} °C</p>
            <p>Max. Temperature</p>
            <p><i class="fa-solid fa-temperature-arrow-up"></i> {tempMaxC} °C</p>
        </div>
    );
};

export default Centigrados;