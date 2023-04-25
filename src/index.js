import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import  './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Notes from "./components/pages/notes/Notes";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "notes",
      element: <Notes />,
    },
  ]);

// ReactDOM.render(<RouterProvider router={router} />,  document.getElementById('root'));
// ReactDOM.createRoot(document.getElementById("root")).render(
    
//       <RouterProvider router={router} />
    
//   );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<RouterProvider router={router} />
)



