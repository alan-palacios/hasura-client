import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/link-ws";
import {render} from 'react-dom';
import App from "./App";
import './index.css';

const httpLink = new HttpLink({
  uri: `https://movies1.hasura.app/v1/graphql`,
  headers: {
    'x-hasura-admin-secret': "A2AWfzsWLPMVnKzfOtZAmUOY07GkAZzk1D4ULzuveOuaZUklMCPYLBBJElRSxFfD"
  }
});

const webSocketLink = new WebSocketLink({
  uri: `ws://movies1.hasura.app/v1/graphql`,
  options:{
    reconnect: true,
    connectionParams:{
      headers:{
        'x-hasura-admin-secret': "A2AWfzsWLPMVnKzfOtZAmUOY07GkAZzk1D4ULzuveOuaZUklMCPYLBBJElRSxFfD"
      }
    }
  }
});

const splitLink= split(
  ({query})=>{
    const definition = getMainDefinition(query);
    return(
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  }, webSocketLink, httpLink
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink
})

render( <ApolloProvider client={client}>
          <App/>
        </ApolloProvider>, 
        document.getElementById("root"));

