import React from "react";

function Card(props) {

    return (
        <div className='card'>
            <div className='cardImg' style={{ background: "url(" + props.SingleCard.imgUrl + ") no-repeat top left" }}></div>
            <div className='cardContainer'>
                <div className='cardFoot'>
                    <div className='marca'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="14px" width="14px"><path d="M17.8 21.9l1.6-1.6L17 9.4l4.6-4.6c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0L14.6 7 3.7 4.5 2.1 6.2l8.7 4.6-4.6 4.6-2.9-.5L2 16.1l3.8 2.1L7.9 22l1.3-1.3-.5-2.9 4.6-4.6 4.5 8.7z"></path><path d="M12-5l17 17-17 17-17-17L12-5z" fill="none"></path></svg><div className='cardTextTop'>{props.SingleCard.scale}</div></div>
                    <div className='cardDesc'>{props.SingleCard.description}</div>
                </div>
                <div className='cardFoot containerRightFoot cardFootRight'>
                    <div className='cardTextTop'>Precio desde</div>
                    <div className='cardPrice'>{"$" + props.SingleCard.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</div>
                </div>
            </div>
            <div onClick={() => window.open(props.SingleCard.link, "_blank")} className='ver'>VER VUELO</div>
        </div>
    );
}

export default Card;