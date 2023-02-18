  type Customer = {
    email: String
    name: String
  }
  
  type CustomerList = {
    name: ID
    value: Customer
  }

  type Order = {
    carrier: String
    createAt: Date
    shippingCost: Int
    trackingId: String
    Address: String
    City: String
    Lat: Float
    Long: Float
    trackingItems: TrackingItems
  }
  
  type OrderList = {
    name: ID
    value: Order
  }

  type Items = {
    item_id: Int
    name: String
    price: Float
    quantity: Int
  }

  type OrderResponse = {
    value: Order
  }

  type TrackingItems = {
    customer_id: String
    items: [Items]
    customer: Customer
  }
  
  type TrackingItemsList = {
    name: ID
    value: TrackingItems
  }