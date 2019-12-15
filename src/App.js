import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import StayContextProvider from './Contexts/StayContext';

import Main from './Componentes/Main';



const client = new ApolloClient({
    uri: "https://api.graph.cool/simple/v1/cjtk3okib547g0182680rna24"
});



function App() {

    return (
        <ApolloProvider client={client}>
            <StayContextProvider>
                <div>
                    <Main />
                </div>
            </StayContextProvider>
        </ApolloProvider>
    );

}

export default App;