import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import Footer from "./components/layout/Footer";
import Navigation from "./components/layout/Navigation";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import BlogsScreen from "./screens/BlogsScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import CompanyDashboardScreen from "./screens/CompanyDashboardScreen";
import ContactsScreen from "./screens/ContactsScreen";
import CookiesPolicyScreen from "./screens/CookiesPolicyScreen";
import EmployeeDashboardScreen from "./screens/EmployeeDashboardScreen";
import GeneralConditionsScreen from "./screens/GeneralConditionsScreen";
import JobBoardScreen from "./screens/JobBoardScreen";
import JobCreationScreen from "./screens/JobCreationScreen";
import LoginRegistrerScreen from "./screens/LoginRegistrerScreen";
import PrivacyNoticeScreen from "./screens/PrivacyNoticeScreen";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/blog" element={<BlogsScreen />} />
        <Route path="/categories" element={<CategoriesScreen />} />
        <Route path="/dashboard" element={<CompanyDashboardScreen />} />
        <Route path="/contact" element={<ContactsScreen />} />
        <Route path="/cookies" element={<CookiesPolicyScreen />} />
        <Route path="/employe" element={<EmployeeDashboardScreen />} />
        <Route path="/general" element={<GeneralConditionsScreen />} />
        <Route path="/jobs" element={<JobBoardScreen />} />
        <Route path="/create" element={<JobCreationScreen />} />
        <Route path="/login" element={<LoginRegistrerScreen />} />
        <Route path="/privacy" element={<PrivacyNoticeScreen />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
