import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

import { Error } from "./Error";
import GptSearch from "../GptSearch/GptSearch";
import Trailer from "./Trailer";

const Body = () => {
 
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/error",
      element: <Error />,
    },
    {
      path:'/gptsearch',
      element:<GptSearch/>
    },
    {
      path:"/video/:movie_id",
      element:<Trailer/>
    }
  ]);

 

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
