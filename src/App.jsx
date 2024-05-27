import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Pages/HomePage.jsx'
import './Pages/AboutUs.jsx'
import AboutUs from "./Pages/AboutUs.jsx";
import HomePage from "./Pages/HomePage.jsx";
import ProjectsPage from "./Pages/ProjectsPage.jsx";
import SponsorPage from "./Pages/SponsorPage.jsx";
import NewsPage from "./Pages/NewsPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import SinglePostPage from "./Pages/SinglePostPage.jsx";
import Header from "./Components/MainHeader/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";

export const myRoutes = {
  "dom": "/dom",
  "projekty": "/projekty",
  "oNas": "/o-nas",
  "sponsorzy": "/sponsorzy",
  "aktualnosci": "/aktualnosci",
  "kontakt": "/kontakt"
}

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/dom" element={<HomePage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/o-nas" element={<AboutUs />} />
          <Route path="/projekty" element={<ProjectsPage />} />
          <Route path="/sponsorzy" element={<SponsorPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/aktualnosci" element={<NewsPage />} />
          <Route path="/projekty/testPost" element={<SinglePostPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
