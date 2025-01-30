# Fast-React-Pizza 🍕

A pizza ordering application built with React, demonstrating modern practices like Redux Toolkit for state management and a more organized project structure.

## Live Demo

You can see a live demo of the application [here](link-to-deployed-demo). (Replace `link-to-deployed-demo` with the actual deployed link, if available)

## Features

*   **Pizza Menu Display:** Displays a list of available pizzas with their names and prices.
*   **Order Placement:** Allows users to add pizzas to their order and specify the quantity for each item.
*   **Order Summary:** Shows a summary of the current order with the total amount and ability to update the quantity of each item.
*    **Shopping Cart:** Persistent shopping cart functionality that survives page refreshes.
*   **Basic UI:** Simple and responsive user interface suitable for learning and demonstration purposes.
*   **State Management:** Utilizes Redux Toolkit for structured state management
*   **Data Fetching:** Utilizes React Router's `useFetcher` hook to fetch pizza data.

## Technologies Used

*   **React:** JavaScript library for building user interfaces.
*   **JSX:** Syntax extension to JavaScript for writing HTML-like code.
*    **Redux Toolkit:** For state management.
*    **React Router:** For navigation and data loading.
*   **Tailwind CSS:** For styling.

## Project Structure

fast-react-pizza/
├── public/
│ └── index.html
├── src/
│ ├── features/
│ │ ├── cart/
│ │ │ ├── CartItem.jsx # Component to display a single cart item.
│ │ │ ├── CartSlice.js # Redux slice for managing cart state.
│ │ │ └── Cart.jsx # Component to display the entire cart.
│ │ ├── menu/
│ │ │ ├── Menu.jsx # Component to display the pizza menu.
│ │ │ └── Pizza.jsx # Component to display a single pizza item.
│ │ └── user/
│ │ └── userSlice.js # Redux slice for managing user state.
│ ├── services/
│ │ └── apiPizza.js # API service for fetching pizza data.
│ ├── ui/
│ │ ├── Button.jsx # Reusable button component.
│ │ ├── LinkButton.jsx # Reusable link button component.
│ │ ├── Loader.jsx # Reusable Loader component
│ │ └── Error.jsx # Reusable error component
│ ├── utils/
│ │ └── helpers.js # Helper function
│ ├── App.jsx # Main application component.
│ ├── index.css # Global styles for the application.
│ ├── main.jsx # Entry point of the application.
│ ├── store.js # Redux store configuration.
│ ├── .eslintrc.json
│ ├── .gitignore
│ ├── README.md
│ ├── index.html
│ ├── package-lock.json
│ ├── package.json
│ ├── postcss.config.js
│ ├── tailwind.config.js
│ └── vite.config.js

## How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/2017kartik/Fast-React-Pizza.git
    cd Fast-React-Pizza
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in your browser:** The application will be running at `http://localhost:5173`.

## Key Components and Functions

### `features/cart/Cart.jsx`

*   **Functionality:** Displays the shopping cart, including individual cart items, and provides the total amount.
*   **State Management:** Connects to Redux store to get current cart and its items.
*   **Rendering:** Iterates over the cart items and renders each item as `CartItem` component, also renders an empty message if the cart is empty.
*   **Key Functions:**
    *   `useSelector` from `react-redux` to access the cart state.
    *    Calculation for total amount of items in the cart
    *   Conditional Rendering: Displays a message if the cart is empty.

###  `features/cart/CartItem.jsx`

*   **Functionality:** Displays details of a single pizza in the cart, including its name, price, and quantity, and provides ability to update the quantity of each item in the cart.
*   **Props:**
     *    `item`: An object containing the details of a single item in the cart
*   **State Management:** Dispatches action to update or delete the items in cart.
*   **Rendering:** Renders the item's details using JSX, including buttons to increase/decrease or remove the quantity.
*   **Key Functions:**
    *    `useDispatch` from `react-redux` for dispatching action to Redux store.
    *    `handleIncreaseQuantity`, `handleDecreaseQuantity` and `handleRemove` : Event handlers for updating quantity or removing the item from the cart.
    *   Conditional Rendering: To render different UI elements depending on the item quantity.

### `features/cart/cartSlice.js`

*   **Functionality:** Defines the Redux slice for managing the shopping cart state.
*   **State Management:** Manages the cart items, adds items to cart, updates quantity of existing items and removes item from the cart.
*   **Key Functions:**
      *    `initialState`: Defines the initial state of cart.
      *    `reducers`: Define reducer for adding, deleting or updating the cart items.
      *    `addItem`, `deleteItem`, `increaseQuantity`, `decreaseQuantity`: Reducer functions to manage cart state.

### `features/menu/Menu.jsx`

*   **Functionality:** Displays a list of available pizzas.
*   **State Management:**  Data loading via `useFetcher`.
*    **Data Loading:** Loading data by `useFetcher` hook.
*   **Rendering:** Renders the pizzas as `<Pizza />` components
*   **Key Functions:**
    *   `useFetcher` to load data from the API.
    *   Uses JSX to map over data and render pizza items.

### `features/menu/Pizza.jsx`

*   **Functionality:** Renders the details of a single pizza item, including its name, ingredients, price, and a button to add it to the cart.
*   **Props:**
    *   `pizza`: Object containing the data of a pizza.
*   **State Management:** Dispatches action to add items to the cart
*   **Rendering:** Displays pizza details using JSX and a button to add the pizza to the cart.
*   **Key Functions:**
    *   `useDispatch` from `react-redux` for dispatching action to Redux store.
    *   Button click handler to add pizza to cart

### `features/user/userSlice.js`

*   **Functionality:** Defines the Redux slice for managing the user's state. (Current implementation only manages name, but can be extended later for managing user profile)
*   **State Management:** Manages the user information.
*   **Key Functions:**
      *    `initialState`: Defines the initial state of user.
      *    `reducers`: Define reducer to update user info.
      *   `updateName`: Reducer functions to update user information.

### `services/apiPizza.js`

*   **Functionality:**  Fetches the pizza data from an API endpoint.
*   **Key Functions:**
    *    `getPizza()`: Makes an asynchronous call to an API endpoint to fetch data.

### `ui/Button.jsx`, `ui/LinkButton.jsx`, `ui/Loader.jsx`, `ui/Error.jsx`

*   **Functionality:** These are reusable UI components.
    *   `Button.jsx` : A reusable button component.
    *    `LinkButton.jsx` : A reusable link button component.
    *    `Loader.jsx` : A reusable loading indicator component
    *    `Error.jsx` : A reusable error display component.
*   **Props:**
    *   Customizable props depending on the component type.
*   **State Management:** They don't have any direct state of their own.

### `utils/helpers.js`
*   **Functionality:** Contains helper functions for the application
*   **Key Functions:**
    *    `formatCurrency`: Helper function to format amount into currency

### `App.jsx`

*   **Functionality:**  Main application component. Sets up routing. Renders other components and ensures state persistence.
*   **Key Functions:**
    *   Routing logic for navigation
    *   Layout management for the application.

### `store.js`

*   **Functionality:** Configures the Redux store using Redux Toolkit.
*   **Key Functions:**
    *   `configureStore`: Setups store by combining different redux slices.
    *   Persisting state for surviving page refresh.

##  Future Improvements

*   Enhance the UI with more styling.
*    Implement user authentication.
*    Add more features like searching, filtering etc.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to create a pull request. Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m "Add your feature"`).
5.  Push to the branch (`git push origin feature/your-feature`).
6.  Create a pull request.

## License

This project is licensed under the [MIT License](LICENSE). (If you have a `LICENSE` file, make sure to link to it or specify it here)

---
