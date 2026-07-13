# Soccer-Players-Shop


## About the Program
The application includes an Express server that serves a soccer player store.
It is written in JavaScript and uses local JSON files to store data.

## File structure
```
Soccer-Players-Shop/
├── README.md
├── dal
│   ├── baseDal.js
│   ├── customersDal.js
│   ├── fileHandler.js
│   ├── ordersDal.js
│   └── productsDal.js
├── data
│   ├── customers.json
│   ├── orders.json
│   └── products.json
├── package-lock.json
├── package.json
├── routes
│   ├── cartsRoute.js
│   ├── generalRoute.js
│   └── ordersRoute.js
├── server.js
├── services
│   ├── customersServices.js
│   ├── ordersServices.js
│   └── productsServices.js
├── utils.js
└── validations.js
```

## Endpoints
| Endpoint | Method | Description| Functions used |
| - | - | - | - |
|'/' | GET | Opening Statement|
|'/health' | GET | Server health check|
|'/products' | GET |  List of products, with filtering | getVerifiedDetails, getFilteredProducts
|'/cart' | GET | Displays the shopping cart for a given customerId| getVerifiedCustomerId, getTotalAmount |
|'/cart/items' | POST |  Adds a product to the customer's cart| getVerifiedDetails, getProduct, addProductToCart |
|'/cart/items/:productId' | DELETE | Removes a product from the customer's cart| getVerifiedDetails, getCustomer, getProduct, removeItemFromCart |
|'/account/balance' | GET | Displays the customer's current balance| getVerifiedDetails, getCustomerProperty |
|'/orders/checkout' | POST | Performs checkout and creates a new order.| getVerifiedCustomerId, getCustomer, checkCart, hasEnoughBalance, performCheckout |
|'/orders' | GET | Displays the customer's order history| getVerifiedCustomerId, getCustomerOrders |

## Result Formats
for success:
```
{"success": true, "data": [] / {}}
```
for failure:
```
{"success": false, "message": ""}
```

## Run Instructions
Run the following commands:
```
npm i
node server
```