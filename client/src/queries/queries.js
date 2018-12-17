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
  query($id: ID) {
    departments(id: $id) {
      id
      name
      categories {
        id
        name
        products {
          id
          name
          description
          price
        }
      }
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
const getCartQuery = gql`
  query($id: ID) {
    users(id: $id) {
      id
      email
      shoppingCart {
        id
        name
        description
        price
        quantity
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
  getCategoriesAndProducts,
  getCartQuery
};
