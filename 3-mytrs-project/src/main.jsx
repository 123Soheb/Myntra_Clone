import { StrictMode } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import App from "./router/App.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./componenet/Bag.jsx";
import Home from "./router/Home.jsx";
import { Provider } from "react-redux";
import mytraStore from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={mytraStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
