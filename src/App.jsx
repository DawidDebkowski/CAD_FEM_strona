import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './Pages/HomePage.jsx'
import './Pages/AboutUs.jsx'
import AboutUs from "./Pages/AboutUs.jsx";
import HomePage from "./Pages/HomePage.jsx";
import ProjectsPage from "./Pages/ProjectsPage.jsx";
import SponsorPage from "./Pages/SponsorPage.jsx";
import NewsPage from "./Pages/NewsPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";

export const myRoutes = {
  "dom": "dom",
  "projekty": "projekty",
  "o-nas": "o-nas",
  "sponsorrzy": "sponsorzy"
}

export default function App()
{
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage/>}/>
          <Route path="/" element={<AboutUs/>}/>
          <Route path="/dom" element={<HomePage/>}/>
          <Route path="/Home" element={<HomePage/>}/>
          <Route path="/o-nas" element={<AboutUs/>}/>
          <Route path="/projekty" element={<ProjectsPage/>}/>
          <Route path="/sponsorzy" element={<SponsorPage/>}/>
          <Route path="/kontakt" element={<ContactPage/>}/>
          <Route path="/aktualnosci" element={<NewsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
