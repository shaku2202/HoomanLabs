# Node.js Shopify API Integration

This project demonstrates how to integrate Shopify APIs with a Node.js application using Express and the Shopify API client library.

## Getting Started

1. **Clone the repository:https://github.com/shaku2202/HoomanLabs**


2. **Install dependencies:  npm i node**


3. **Set up Shopify API credentials:**

- Obtain your Shopify API credentials (API key, API password, and shop name).
- Update `index.js` with your Shopify API credentials:

  ```javascript
  const shopify = new Shopify({
    shopName: 'your-shop-name.myshopify.com', // Replace with your Shopify store name
    apiKey: 'your-api-key', // Replace with your Shopify API key
    password: 'your-api-password', // Replace with your Shopify API password
  });
  ```

4. **Start the server:**



## API Endpoints

### GET `/app/api/addresses`

Retrieves a list of saved addresses for Shopify customers based on their phone numbers.

#### Request Parameters

- None

#### Response

```json
[
{
 "id": 1,
 "address": "123 Main Street",
 "city": "New York",
 "country": "USA"
},
{
 "id": 2,
 "address": "456 Elm Avenue",
 "city": "Los Angeles",
 "country": "USA"
}
]
```
### PUT `/app/api/address/update`
Updates a customer's address and sets it as the default address.

#### Request Body
```json
{
  "customer_id": 123,
  "new_address": "789 Maple Drive",
  "city": "Chicago",
  "country": "USA"
}
```
#### Response
```json

{
  "success": true,
  "message": "Address updated successfully."
}
```
### GET `/app/api/orders`
Fetches the list of orders associated with Shopify customers.

#### Request Parameters
None
#### Response
```json
[
  {
    "order_id": 1,
    "customer_id": 123,
    "total_amount": 100.00,
    "status": "Pending"
  },
  {
    "order_id": 2,
    "customer_id": 456,
    "total_amount": 150.00,
    "status": "Shipped"
  }
]
```
### GET `/app/api/order`
Retrieves detailed order information including order status and product details.

#### Request Parameters
order_id: The ID of the order to retrieve details for.
#### Response
```json
{
  "order_id": 1,
  "customer_id": 123,
  "total_amount": 100.00,
  "status": "Pending",
  "products": [
    {
      "product_id": 101,
      "name": "Product 1",
      "quantity": 2,
      "price": 50.00
    },
    {
      "product_id": 102,
      "name": "Product 2",
      "quantity": 1,
      "price": 50.00
    }
  ]
}
```

### POST `/app/api/order/cancel`
Cancels an existing order in the Shopify store.

#### Request Body
```json
{
  "order_id": 1
}
```
#### Response
```json
{
  "success": true,
  "message": "Order canceled successfully."
}
```

## Project Structure

- `index.js`: Main entry point of the application.
- `routes/`: Contains route handlers for different API endpoints.
- `controllers/`: Contains controller functions for handling API requests.
- `models/`: Contains database models (not used in Shopify integration).
- `config/`: Contains configuration files (not used in Shopify integration).

## Dependencies

- express: Web framework for Node.js.
- body-parser: Middleware for parsing request bodies.
- shopify-api-node: Shopify API client library for Node.js.







