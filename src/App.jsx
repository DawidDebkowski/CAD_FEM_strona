import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Pages/HomePage.jsx'
import './Pages/AboutUs.jsx'
import AboutUs from "./Pages/AboutUs.jsx";
import HomePage from "./Pages/HomePage.jsx";
import ProjectsPage from "./Pages/ProjectsPage.tsx";
import SponsorPage from "./Pages/SponsorPage.jsx";
import NewsPage from "./Pages/NewsPage/NewsPage.jsx";
import ContactPage from "./Pages/ContactPage/ContactPage.jsx";
import SingleProjectPage from "./Pages/SingleProjectPage.jsx";
import Header from "./Components/MainHeader/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import TestPage from "./Pages/TestPage.jsx";
import AddPersonPage from "./Pages/AddPages/AddPersonPage.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import 'react-photo-view/dist/react-photo-view.css';
import AdminLinkPage from "./Pages/AdminLinkPage.jsx";
import EditMembersPage from "./Pages/EditPages/EditMembersPage.jsx";
import RemoveMemberPage from "./Pages/RemovePage/RemoveMemberPage.jsx";
import AddArticlePage from "./Pages/AddPages/AddArticlePage.jsx";
import React from "react";

export const myRoutes = {
  "dom": "/dom",
  "projekty": "/projekty",
  "oNas": "/o-nas",
  "sponsorzy": "/sponsorzy",
  "aktualnosci": "/aktualnosci",
  "kontakt": "/kontakt",
  "addPerson": "/adminPage/addPerson",
  "editMembersPage": "/adminPage/editMembersPage",
  "removeMemberPage": "/adminPage/removeMemberPage",
  "addArticlePage": "/adminPage/addArticlePage",
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Header />
        <div className="appMain">
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
            <Route path="/projekty/RedbullGdynia2024" element={<SingleProjectPage />} />
            <Route path="/testPage" element={<TestPage />} />
            <Route path="/adminPage" element={<AdminLinkPage />} />
            <Route path="/adminPage/addPerson" element={<AddPersonPage />} />
            <Route path="/adminPage/editMembersPage" element={<EditMembersPage />} />
            <Route path="/adminPage/removeMemberPage" element={<RemoveMemberPage />} />
            <Route path="/adminPage/addArticlePage" element={<AddArticlePage />} />
          </Routes>
        </div>
        <ScrollToTop/>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
