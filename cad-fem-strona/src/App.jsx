import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './Pages/HomePage.jsx'
import './Pages/AboutUs.jsx'
import AboutUs from "./Pages/AboutUs.jsx";
import HomePage from "./Pages/HomePage.jsx";
import ProjectsPage from "./Pages/ProjectsPage.jsx";

export default function App()
{
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage/>}/>
          <Route path="/" element={<AboutUs/>}/>
          <Route path="/Dom" element={<HomePage/>}/>
          <Route path="/Home" element={<HomePage/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/Projects" element={<ProjectsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
