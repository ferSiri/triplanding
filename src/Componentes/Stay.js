import React, { useContext } from "react";
import { StayContext } from '../Contexts/StayContext';


function Stay(props) {

    const { setSelectedStay } = useContext(StayContext);

    let index = props.first == false ? props.index + 2 : 1;
    /*Esta propiedad se utilizó para que el orden en el que se despliegan las estadías sea igual
    al de la muestra, ya que el arreglo recibido tiene "todas las estadías" como último y no
    hay un modo rápido de reordenar el array para que esta opción quede primera*/

    return (
        <div style={{ order: index }} className='stay' onClick={() => setSelectedStay(props.singleStay)}>
            <p className='stayLabel'>{props.singleStay.label}</p>
            <p className='precio'>{"desde $" + props.singleStay.bestPrice.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</p>
        </div>
    );
}

export default Stay;