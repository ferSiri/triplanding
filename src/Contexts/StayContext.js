import React, { createContext, useState } from 'react';

export const StayContext = createContext();

const StayContextProvider = (props) => {

    const [selectedStay, setStay] = useState({});
    const setSelectedStay = (selected) => {
        setStay(selected)
    }
    //se guarda no solo el id de stay, sino todo el objeto, para poder desplegar el título de las cards
    return (
        <StayContext.Provider value={{ selectedStay, setSelectedStay }}>
            {props.children}
        </StayContext.Provider>
    );
}

export default StayContextProvider;