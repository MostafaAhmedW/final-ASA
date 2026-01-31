import React from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Axes from "./Components/Axes/Axes";
import Infrastructure from "./Components/Axes/Infrastructure/Infrastructure";
import Health from "./Components/Axes/Health/Health";
import Education from "./Components/Axes/Education/Education";
import SocialProtection from "./Components/Axes/Social Protection/Social Protection";
import EconomicEmpowerment from "./Components/Axes/Economic Empowerment/Economic Empowerment";
import SustainableDevelopment from "./Components/Axes/Sustainable Development/Sustainable Development";
import NotFound from "./Components/NotFound/NotFound";
import TahyaMisr from "./Components/Tahya-Misr/Tahya-Misr";
import Contact from "./Components/Contact/Contact";

export default function App() {
  // route

  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "axes", element: <Axes /> },
        { path: "axes/infrastructure", element: <Infrastructure /> },
        { path: "axes/health", element: <Health /> },
        { path: "axes/education", element: <Education /> },
        { path: "axes/social-protection", element: <SocialProtection /> },
        { path: "axes/economic-empowerment", element: <EconomicEmpowerment /> },
        {
          path: "axes/sustainable-development",
          element: <SustainableDevelopment />,
        },
        { path: "about-tahya-misr", element: <TahyaMisr /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
