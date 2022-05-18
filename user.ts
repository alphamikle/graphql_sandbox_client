import 'isomorphic-unfetch';
import { createClient, gql } from '@urql/core';
import { prettyJson } from './tools';

async function main(): Promise<any> {
  const USER_QUERY = gql`
    query GetUsers ($id: ID!){
      user(id: $id) {
        id
        email
        age
        bills {
          id
          amount
        }
      }
    }
  `;
  const client = createClient({ url: `http://localhost:3000/graphql` });
  const result = await client.query(USER_QUERY, { id: 'a' }).toPromise();
  const response = result.data;
  console.log(prettyJson(response));
}

main().then(response => console.log(response));