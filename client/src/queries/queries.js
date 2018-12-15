import { gql } from 'apollo-boost';

const getUsersQuery = gql`
  {
    users {
      id
      email
      shoppingCart {
        id
        name
        description
        price
      }
    }
  }
`;
const getStoresQuery = gql`
  {
    stores {
      id
      name
      building_number
      street
      city
      postal_code
      state
      country
    }
  }
`;
const getDepartmentsQuery = gql`
  {
    departments {
      id
      name
    }
  }
`;
const getCategoriesQuery = gql`
  {
    categories {
      id
      name
    }
  }
`;
const getProductsQuery = gql`
  {
    products {
      id
      name
      description
      price
      department
      category
    }
  }
`;
const getCategoriesAndProducts = gql`
  {
    categories {
      id
      name
      products {
        id
        name
        description
        price
        department
        category
      }
    }
  }
`;

export {
  getUsersQuery,
  getStoresQuery,
  getDepartmentsQuery,
  getCategoriesQuery,
  getProductsQuery,
  getCategoriesAndProducts
};
