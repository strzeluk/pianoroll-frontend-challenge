import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PianoRollGrid, { loader as dataLoader } from "./pages/PianoRollGrid";
import PianoRollDetails from "./pages/PianoRollDetails";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/Error";

import "./app.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PianoRollGrid />,
        loader: dataLoader,
      },
      {
        path: "/details/:rollId",
        element: <PianoRollDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
