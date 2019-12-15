import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { StayContext } from '../Contexts/StayContext';

import Card from './Card';

const GET_ALL_CARDS = gql`
  query {allCards{
    scale
    price
    description
    id
    link
    stayId
    imgUrl
  }}
`;

const GET_SINGLE_CARD = gql`
  query getCard($id: String!) {
    allCards(filter:{stayId:$id}orderBy:price_ASC){
        scale
        price
        description
        id
        link
        stayId
        imgUrl
      }
  }
`;

function CardsContainer() {
  const { selectedStay } = useContext(StayContext);

  let idBusq = selectedStay.customId ? selectedStay.customId : 0;

  const { loading, error, data } = idBusq == 0 ? useQuery(GET_ALL_CARDS) : useQuery(GET_SINGLE_CARD, { variables: { id: idBusq }, });;

  if (loading) return <p>Cargando ...</p>

  var arrAux = [];
  var stayIdAux = 0;

  /*Al no existir un modo de filtrar para obtener únicamente la card con el precio mas bajo por
  stay cuando se deben mostrar todas, se filtra de esta manera*/

  data.allCards && data.allCards.map(card => {
    if (card.stayId > stayIdAux || idBusq > 0) {
      arrAux.push(card)
      stayIdAux = card.stayId;
    }
  })

  return (<div className='cardContainer'>
    {arrAux.map(card => <Card key={card.id} SingleCard={card} />)}
  </div>
  )
}

export default CardsContainer;