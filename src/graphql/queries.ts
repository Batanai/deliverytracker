import { gql } from "@apollo/client";


export const GET_CUSTOMERS = gql`
    query GetCustomers {
    getCustomers {
      name
      value {
        email
        name
      }
    }
}
`;

export const GET_ORDERS = gql`
    query GetOrders {
    getOrders {
        value {
        Address
        City
        Lat
        Lng
        carrier
        createdAt
        shippingCost
        trackingId
        trackingItems {
            customer {
            email
            name
            }
            items {
            name
            price
            quantity
            item_id
            }
            customer_id
        }
        }
  }
}
`;