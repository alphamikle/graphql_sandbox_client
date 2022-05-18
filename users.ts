import 'isomorphic-unfetch';
import { createClient, gql } from '@urql/core';
import { prettyJson } from './tools';

async function main(): Promise<any> {
  const USERS_QUERY = gql`
    query {
      users {
        name
        age
        email
        bills {
          id
          amount
        }
      }
    }
  `;
  const client = createClient({ url: `http://localhost:3000/graphql` });
  const result = await client.query(USERS_QUERY).toPromise();
  const response = result.data;
  console.log(result);
}

main().then(response => console.log(response));