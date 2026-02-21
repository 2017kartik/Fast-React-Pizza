# Fast-React-Pizza 🍕

A pizza ordering application built with React, demonstrating modern practices like Redux Toolkit for state management and a more organized project structure.

## Live Demo

You can see a live demo of the application [here](https://fast-react-pizza-sepia.vercel.app/).

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

The project is organized into the following directories:

*   **`public/`:**
    *   Contains static assets like `index.html`.

*   **`src/`:**
    *   Contains all the application's source code.

    *   **`features/`:** Contains feature-specific code.
        *   **`cart/`:** Manages the shopping cart functionality.
            *   `Cart.jsx`: Component to display the entire cart.
            *   `CartItem.jsx`: Component to display a single cart item.
            *   `CartOverview.jsx`: Component to display a summary of the cart.
            *   `DeleteItem.jsx`: Component to handle deleting an item from the cart.
            *   `EmptyCart.jsx`: Component to display a message when cart is empty
            *   `UpdateItemQuantity.jsx`: Component to update the quantity of an item in the cart.
            *   `cartSlice.js`: Redux slice for managing cart state.
        *   **`menu/`:** Manages the display of the pizza menu.
            *   `Menu.jsx`: Component to display the pizza menu.
            *   `MenuItem.jsx`: Component to display a single pizza item in the menu.
        *   **`order/`:** Manages order-related functionality.
            *   `CreateOrder.jsx`: Component to create a new order.
            *   `Order.jsx`: Component to display order details or list of orders.
            *   `OrderItem.jsx`: Component to display a single item within an order.
            *   `SearchOrder.jsx`: Component to search for orders.
            *   `UpdateOrder.jsx`: Component to update an existing order.
        *   **`user/`:** Manages user-related state.
            *   `CreateUser.jsx`: Component to create a new user.
            *   `Username.jsx`: Component to display or update the user's name.
            *   `userSlice.js`: Redux slice for managing user state.

              
    *   **`services/`:** Contains code for interacting with external services or APIs.
         *   `apiGeocoding.js`: API service for interacting with a geocoding service.
         *   `apiRestaurant.js`: API service for interacting with restaurant data.

  
    *   **`ui/`:** Contains reusable UI components.
         *   `AppLayout.jsx`: Reusable layout component for the application.
         *   `Button.jsx`: Reusable button component.
         *   `Error.jsx`: Reusable error component.
         *   `Header.jsx`: Reusable header component for the application.
         *   `Home.jsx`: Reusable home component for the application.
         *   `LinkButton.jsx`: Reusable link button component.
         *   `Loader.jsx`: Reusable loader component.

    *   **`utils/`:** Contains utility functions.
         *  `helpers.js`: Helper functions for the application.

    *   **`App.jsx`:** Main application component.
    *   **`index.css`:** Global styles for the application.
    *   **`main.jsx`:** Entry point of the application.
    *   **`store.js`:** Redux store configuration.

*   **Other Files (in the root directory):**
    *   `.eslintrc.json`: Configuration file for ESLint.
    *   `.gitignore`: Specifies intentionally untracked files that Git should ignore.
    *   `README.md`: The file you're reading.
    *   `index.html`: Main HTML file for the application.
    *   `package-lock.json`: Dependency lock file.
    *   `package.json`: Project's package configuration file.
    *   `postcss.config.js`: Configuration file for PostCSS.
    *   `tailwind.config.js`: Configuration file for Tailwind CSS.
    *  `vite.config.js`: Configuration file for Vite.

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
*   **State Management:** Connects to the Redux store to access the cart state.
*   **Rendering:** Renders the cart items using `CartItem` components. Displays a message if the cart is empty.
*   **Key Functions:**
    *   `useSelector` from `react-redux` to access the cart state.
    *   Calculates the total amount of items in the cart.
    *   Conditional rendering to display an empty cart message.

### `features/cart/CartItem.jsx`

*   **Functionality:** Displays details of a single item in the cart, including its name, price, and quantity. Allows updating the quantity or removing the item.
*   **Props:**
    *   `item`: An object containing the details of a single item in the cart.
*   **State Management:** Dispatches actions to the Redux store to update or delete items in the cart.
*   **Rendering:** Renders item details using JSX with buttons to increase/decrease quantity or remove the item.
*   **Key Functions:**
    *   `useDispatch` from `react-redux` for dispatching actions to the Redux store.
    *   `handleIncreaseQuantity`, `handleDecreaseQuantity`, and `handleRemove`: Event handlers for updating quantity or removing the item.
    *   Conditional rendering based on item quantity.

### `features/cart/CartOverview.jsx`

*   **Functionality:** Displays a summary of the current cart, such as the total number of items or total price.
*   **State Management:** Connects to Redux store to get current cart state.
*   **Rendering:** Displays cart summary information using JSX.
*   **Key Functions:**
    * `useSelector` from `react-redux` to access the cart state.

### `features/cart/DeleteItem.jsx`

*   **Functionality:** Handles deleting a specific item from the cart.
*   **State Management:** Dispatches an action to the Redux store to remove an item from the cart.
*   **Rendering:** Renders a button or similar UI element to trigger the delete action.
*   **Key Functions:**
   * `useDispatch` from `react-redux` for dispatching actions to the Redux store.
   *  `handleDelete` : Event handlers for removing the item.

### `features/cart/EmptyCart.jsx`
*   **Functionality:** Displays a message or UI element indicating that the cart is currently empty.
*   **Rendering:** Renders a message or graphic to inform the user the cart is empty.
*   **State Management:** No state management is needed for this component.

###  `features/cart/UpdateItemQuantity.jsx`

*   **Functionality:** Handles updating the quantity of an item in the cart.
*   **State Management:** Dispatches an action to the Redux store to increase or decrease the quantity of a cart item.
*  **Rendering:** Renders a button or similar UI element to trigger the update action.
*   **Key Functions:**
   * `useDispatch` from `react-redux` for dispatching actions to the Redux store.
   *  `handleIncreaseQuantity`, `handleDecreaseQuantity`: Event handlers for updating quantity.

### `features/cart/cartSlice.js`

*   **Functionality:** Defines the Redux slice for managing the shopping cart state.
*   **State Management:** Manages the cart items, adding items, updating quantities, and removing items.
*   **Key Functions:**
    *   `initialState`: Defines the initial state of the cart.
    *   `reducers`: Defines reducers for adding, deleting, or updating cart items.
    *   `addItem`, `deleteItem`, `increaseQuantity`, `decreaseQuantity`: Reducer functions to manage cart state.

### `features/menu/Menu.jsx`

*   **Functionality:** Displays a list of available pizzas.
*   **State Management:** Data loading using `useFetcher`.
*   **Data Loading:** Loads data via the `useFetcher` hook.
*   **Rendering:** Renders the pizzas using `MenuItem` components.
*   **Key Functions:**
    *   `useFetcher` to fetch data from the API.
    *   Uses JSX to map over data and render pizza items.

###  `features/menu/MenuItem.jsx`
*   **Functionality:** Renders details of a single pizza item, including its name, ingredients, and price.  Allows user to add it to the cart.
*    **Props:**
    *   `pizza`: Object containing the data of a pizza.
*    **State Management:** Dispatches action to add items to the cart
*    **Rendering:** Displays pizza details using JSX and a button to add the pizza to the cart.
*    **Key Functions:**
    *    `useDispatch` from `react-redux` for dispatching action to Redux store.
    *    Button click handler to add pizza to cart

### `features/order/CreateOrder.jsx`
*   **Functionality:**  Handles the creation of a new order, including collecting necessary user information and order details.
*   **State Management:** Might connect with Redux store for user or order specific data.
*   **Rendering:** Provides forms to collect order details and user information
*   **Key Functions:**
    *   Handles form submission to create a new order.

### `features/order/Order.jsx`
*   **Functionality:**  Displays details of a single order, or a list of existing orders.
*   **State Management:** Might connect with Redux store to get order specific data.
*   **Rendering:** Renders order information, possibly in a list or detailed view.
*   **Key Functions:**
    *   Retrieves order data to display from a state or an API.

### `features/order/OrderItem.jsx`
*   **Functionality:**  Displays a single item within an order such as pizza.
*   **Props:**
     *    `item`: An object containing the details of a single item in the order.
*   **Rendering:** Displays the item information within an order.
*   **State Management:** No direct state managment is required.

### `features/order/SearchOrder.jsx`
*   **Functionality:**  Handles the search functionality for finding existing orders.
*   **State Management:** Might connect with Redux store for managing search queries.
*   **Rendering:** Provides UI elements such as a search box and buttons to perform order searches.
*   **Key Functions:**
    *   Handle search queries and updates search results.

### `features/order/UpdateOrder.jsx`
*  **Functionality:** Provides the user interface and functionality for updating an existing order.
*  **State Management:** Might connect with Redux store to manage order data during editing.
*  **Rendering:** Provides input fields to update the order details.
*  **Key Functions:**
    *   Handles form submission for order updation.

### `features/user/CreateUser.jsx`
*   **Functionality:** Manages the user interface and logic for creating a new user
*   **State Management:** May connect with Redux to update the user state after user creation.
*   **Rendering:** Renders the form or UI elements needed for the user creation
*   **Key Functions:**
      * Handles form submission to create a new user

###  `features/user/Username.jsx`
*   **Functionality:** Renders or allows updates to the current user's username.
*   **State Management:** Reads from and may update the Redux user state.
*  **Rendering:** Displays the user name or provides a form to update it.
*  **Key Functions:**
      * Gets username from state and provides input to update it.

### `features/user/userSlice.js`

*   **Functionality:** Defines the Redux slice for managing the user's state.
*   **State Management:** Manages the user information.
*   **Key Functions:**
    *   `initialState`: Defines the initial state of the user.
    *   `reducers`: Defines reducers to update user info.
    *   `updateName`: Reducer function to update the user's name.

### `services/apiGeocoding.js`
*    **Functionality:** Makes API calls to a geocoding service (e.g., Google Maps)
*    **Key Functions:**
    *   `fetchGeoData()`: Makes an asynchronous call to a geocoding API endpoint.

### `services/apiRestaurant.js`
*   **Functionality:** Interacts with a backend API to manage restaurant related data.
*   **Key Functions:**
    * `fetchRestaurantData()`: Makes an asynchronous call to an API to fetch restaurant data (e.g., menus).

### `ui/AppLayout.jsx`
*   **Functionality:**  Provides a reusable layout component for the whole application.
*   **Props:**
    *   `children`: Renders the child components nested within it.
*   **Rendering:** Renders the basic structural elements like header, footer and main content.

### `ui/Button.jsx`

*   **Functionality:** Reusable button component.
*   **Props:**
    *   Customizable props for button type, style, etc.
*   **State Management:** Does not have direct state management.

### `ui/Error.jsx`

*   **Functionality:** Reusable component for displaying error messages.
*   **Props:**
    *  `message`: String containing the message to be displayed.
*   **State Management:** Does not have direct state management.

### `ui/Header.jsx`
*   **Functionality:**  Provides a reusable header component for the application.
*   **Rendering:** Renders the header content for application.

### `ui/Home.jsx`
*   **Functionality:** Displays the home page of the application.
*   **Rendering:** Renders main content of home page

### `ui/LinkButton.jsx`

*   **Functionality:** Reusable link button component.
*   **Props:**
    *   Customizable props for link, style, etc.
*   **State Management:** Does not have direct state management.

### `ui/Loader.jsx`

*   **Functionality:** Reusable component for displaying a loading indicator.
*   **State Management:** Does not have direct state management.

### `utils/helpers.js`

*   **Functionality:** Contains helper functions for the application.
*   **Key Functions:**
    *   `formatCurrency`: Helper function to format amount into currency.

### `App.jsx`

*   **Functionality:** Main application component. Sets up routing, renders other components, and ensures state persistence.
*   **Key Functions:**
    *   Routing logic using React Router.
    *   Layout management for the application.

### `store.js`

*   **Functionality:** Configures the Redux store using Redux Toolkit.
*   **Key Functions:**
    *   `configureStore`: Sets up the store by combining different Redux slices.
    *   Persists state for surviving page refreshes.

## Future Improvements

*   Enhance the UI with more styling.
*   Implement user authentication.
*   Add more features like searching, filtering, etc.

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
