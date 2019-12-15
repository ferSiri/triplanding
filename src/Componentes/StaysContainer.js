import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Stay from './Stay';

const GET_STAYS = gql`
  query {allStayDatas{
    label
    bestPrice
    id
    customId
  }}
`;

function StaysContainer() {

  const { loading, error, data } = useQuery(GET_STAYS);

  if (loading) return <p>Cargando ...</p>;

  return data.allStayDatas.map((stay, index) => { return <Stay key={stay.id} first={index == 4} index={index} singleStay={stay} /> });
}

export default StaysContainer;