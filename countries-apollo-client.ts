import { ApolloClient, InMemoryCache } from "@apollo/client";

const countriesGqlClient = new ApolloClient({
    uri: "https://countries.trevorblades.com",
    cache: new InMemoryCache(),
});

export default countriesGqlClient;
