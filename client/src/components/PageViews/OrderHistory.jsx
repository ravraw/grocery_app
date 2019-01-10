import Order from "../OrderHistory/Order.jsx";
import React, { Component } from "react";
import { graphql } from "react-apollo";
import NavigationBar from "../NavigationBar.jsx";
import { getUserOrders } from "../../queries/queries";

class OrderHistory extends Component {
  constructor() {
    super();
    this.state = {};
    this.displayOrder = this.displayOrder.bind(this);
  }
  displayOrder() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading History...</div>;
    } else {
      const orders = this.props.data.userOrders;
      return orders.map(order => {
        return <Order order={order} />;
      });
    }
  }
  render() {
    console.log("PROPS FROM ORDER_HISTORY", this.props.data.userOrders);
    return (
      <div className="orderHistory">
        <NavigationBar />
        <div className="user_display">
          <div className="user_history">
            <div className="order_headers">
              <span className="order_info__id">Order#</span>
              <span className="order_info__date">date</span>
              <span className="order_info__total"> amount</span>
              <span className="order_info__add"> Address</span>
              <span className="order_info__window">time</span>
              <span className="order_info__store">Store</span>
              <span className="order_info__detail">details</span>
            </div>
            {this.displayOrder()}
          </div>
        </div>
      </div>
    );
  }
}

export default graphql(getUserOrders, {
  options: props => {
    return { variables: { user_id: 1 } };
  }
})(OrderHistory);
