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
        image
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
// used in home/departments
const getDepartmentsQuery = gql`
  {
    departments {
      id
      name
      image
    }
  }
`;
// used in PageViews/DepartmentContainer
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
          image
          description
          price
        }
      }
    }
  }
`;
// used in PageViews/OrderPage
const getProductsQuery = gql`
  {
    products {
      id
      name
      description
      price
      image
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
        image
        department
        category
      }
    }
  }
`;
// used in PageViews/Cart
const getCartQuery = gql`
  query getCartQuery($id: ID) {
    shoppingCart(id: $id) {
      id
      name
      description
      price
      quantity
      image
      user_id
      product_id
    }
  }
`;
// used in PageView/CategoryContainer
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
        image
      }
    }
  }
`;
// used in PageViews/ProductContainer
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
// used in PageViews/Products  serch results
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

// register
const registerUserMutation = gql`
  mutation($email: String!, $username: String!, $password: String!) {
    register(
      data: { email: $email, username: $username, password: $password }
    ) {
      id
      username
      email
    }
  }
`;
// login
const loginUserMutation = gql`
  mutation($email: String!, $password: String!) {
    login(data: { email: $email, password: $password })
  }
`;
// used in Products component
const addCartItemMutation = gql`
  mutation($quantity: Int!, $user_id: ID!, $product_id: ID!) {
    addCartItem(
      data: { quantity: $quantity, user_id: $user_id, product_id: $product_id }
    ) {
      id
    }
  }
`;
// used in Products component
const deleteCartItemMutation = gql`
  mutation($user_id: ID!, $product_id: ID!) {
    deleteCartItem(data: { user_id: $user_id, product_id: $product_id }) {
      id
    }
  }
`;
// add Order in CheckoutForm component
const addOrderMutation = gql`
  mutation($user_id: ID!) {
    addOrder(user_id: $user_id) {
      id
      user_id
    }
  }
`;
// add orderItem in checkoutform component
const addOrderItemMutation = gql`
  mutation($product_id: ID!, $quantity: Int!, $price: Float!, $order_id: ID!) {
    addOrderItem(
      data: {
        product_id: $product_id
        quantity: $quantity
        price: $price
        order_id: $order_id
      }
    ) {
      id
      product_id
      quantity
      price
      order_id
    }
  }
`;
// emptyCart in CheckoutForm component
const emptyCartMutation = gql`
  mutation($user_id: ID!) {
    emptyCart(user_id: $user_id) {
      id
      quantity
      user_id
      product_id
    }
  }
`;

// subscriptions
// cartInfo
const cartInfoSubscription = gql`
  subscription($userId: ID!) {
    cartInfo(userId: $userId) {
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
  registerUserMutation,
  loginUserMutation,
  addCartItemMutation,
  deleteCartItemMutation,
  getSearchResults,
  addOrderMutation,
  addOrderItemMutation,
  emptyCartMutation,
  cartInfoSubscription
};
