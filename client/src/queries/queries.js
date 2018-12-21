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
  query getCartQuery($id: ID) {
    shoppingCart(id: $id) {
      id
      name
      description
      price
      quantity
      user_id
      product_id
    }
  }
`;
const getCategoryProductsQuery = gql`
  query($id: ID) {
    categories(id: $id) {
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
`;
const getProductQuery = gql`
  query($id: ID, $selected: [SelectedProducts]) {
    products(id: $id, selected: $selected) {
      id
      name
      description
      price
      image
      store {
        id
        name
      }
    }
  }
`;
const getSearchResults = gql`
  query($string: String) {
    products(query: $string) {
      id
      name
      description
      price
      image
      department {
        id
        name
      }
      category {
        id
        name
      }
    }
  }
`;

// Mutations
const addCartItemMutation = gql`
  mutation($quantity: Int!, $user_id: ID!, $product_id: ID!) {
    addCartItem(
      data: { quantity: $quantity, user_id: $user_id, product_id: $product_id }
    ) {
      id
    }
  }
`;
const deleteCartItemMutation = gql`
  mutation($user_id: ID!, $product_id: ID!) {
    deleteCartItem(data: { user_id: $user_id, product_id: $product_id }) {
      id
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
  getCartQuery,
  getCategoryProductsQuery,
  getProductQuery,
  addCartItemMutation,
  deleteCartItemMutation,
  getSearchResults
};
