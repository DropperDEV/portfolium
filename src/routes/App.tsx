import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "../ui/Layout.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";
import About from "../pages/About.tsx";
import Projects from "../pages/Projects.tsx";
import Certificates from "../pages/Certificates.tsx";
import Contact from "../pages/Contact.tsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/certificates",
        element: <Certificates />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
