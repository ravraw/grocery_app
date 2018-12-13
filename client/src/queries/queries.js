import { gql } from 'apollo-boost';

const getUsersQuery = gql`
  {
    users {
      id
      email
    }
  }
`;
export { getUsersQuery };
