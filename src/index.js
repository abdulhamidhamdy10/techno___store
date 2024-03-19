import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,

  Link,
} from "react-router-dom";
import App from "./App";
import AllLabtops from "./Laptops/AllLabtops";
import Allwatchpages from "./WatchPage/Allwatchpages";
import Allphonespages from "./Phones/Allphonespages";
import Allheadphone from "./Headphonspage/Allheadphone";
import Allproducts from "./productsPage/Allproducts";
import Alltablepage from "./Tablepage/Alltablepage";
import Alluserprofile from "./Userprofile/Alluserprofile";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/AllLabtops",
    element: <AllLabtops />,
  },
  {
    path: "/Allwatchpages",
    element: <Allwatchpages />,
  },
  {
    path: "/Allphonespages",
    element: <Allphonespages />,
  },
  {
    path: "/Allheadphone",
    element: <Allheadphone />,
  },
  {
    path: "/Allproducts",
    element: <Allproducts />,
  },
  {
    path: "/Alltablepage",
    element: <Alltablepage />,
  },
  {
    path: "/Alluserprofile",
    element: <Alluserprofile />,
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);








