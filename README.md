# Soccer-Players-Shop

## About the Program
The application includes an Express server that serves a soccer player store.
It is written in JavaScript and uses local JSON files to store data.

## File structure
```
Soccer-Players-Shop/
├── README.md
├── dal/
│   ├── customersDal.js
│   ├── ordersDal.js
│   └── productsDal.js
├── data/
│   ├── customers.json
│   ├── orders.json
│   └── products.json
├── package-lock.json
├── package.json
├── routes/
│   ├── cartsRoute.js
│   ├── generalRoute.js
│   └── ordersRoute.js
├── server.js
├── services/
│   ├── customersServices.js
│   ├── ordersServices.js
│   └── productsServices.js
├── .env
├── .env.example
└── .gitignore
```

## Endpoints
| endpoint | method | description|
| - | - | - |
|'/' | GET | Opening Statement|
|'/health' | GET | Server health check|
|'/products' | GET |  List of products, with filtering |
|'/cart' | GET | Displays the shopping cart for a given customerId|
|'/cart/items' | POST |  Adds a product to the customer's cart|
|'/cart/items/:productId' | DELETE | Removes a product from the customer's cart|
|'/account/balance' | GET | Displays the customer's current balance|
|'/orders/checkout' | POST | Performs checkout and creates a new order.|
|'/orders' | GET | Displays the customer's order history|

## Functions used


## Run Instructions
Run the following commands:
```
npm i
node server
```