import { ApolloClient} from "@apollo/client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import fetch from 'isomorphic-fetch'

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `${'http://192.168.0.204:1330'}/graphql`,
});
const client = new ApolloClient({
  cache,
  link,
  fetch,
});

export default client;