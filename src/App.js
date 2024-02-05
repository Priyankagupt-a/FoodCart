import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import About from "./Component/About";
// import Body from "./components/Body";

// const Footer=()=>{
//   <div className="footer">

//       <h4> {props.cName}</h4>
//       <h4>4.4 ratings</h4>
//       <h5>30 min delivery</h5>
//   </div>
// }
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
     
      <Outlet/>
      {/* // <Footer/> */}
    </div>
  );
};
const appBrowser = createBrowserRouter([{
  path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      // {
      //   path: "/contact",
      //   element: <Contact />,
      // },
      // {
      //   path: "/restaurants/:resId",
      //   element: <RestaurantMenu />,
      // },
    ],
    errorElement: <Error />,}
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>)
root.render(<RouterProvider router={appBrowser} />);
