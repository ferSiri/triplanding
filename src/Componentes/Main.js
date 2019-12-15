import React, { useContext } from 'react';

import { StayContext } from '../Contexts/StayContext';

import StaysContainer from './StaysContainer';
import CardsContainer from './CardsContainer';

function Main() {
    const { selectedStay } = useContext(StayContext);
    const title = selectedStay.customId > 0 ? selectedStay.label.substring(10, 20) : "todas las estadías"

    return (
        <div className='fuenteGral containerApp'>
            <div className='marca containerDiv'>
                <img className='logo' src='../dist/logo.png'></img>
                <p className='leyendaLogo'>Viajar es la guita mejor invertida</p>
            </div>
            <div className='barraStays'>
                <p className='tituloEstadias'>Los vuelos más baratos para tu estadía en <b>Miami</b></p>
                <div className='containerDiv containerApp'>
                    <div className='barraStaysCont'>
                        <StaysContainer />
                    </div>
                </div>
            </div>
            <div>
                <div className='tituloCard'>
                    <p>{"Vuelos destacados" + (selectedStay.customId > 0 ? " por " : " en ")}<b>{title}</b> </p>
                </div>
            </div>
            <CardsContainer />
        </div>
    );
}

export default Main;