import React from "react";
import Header from "components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import Auth from "pages/Auth/Auth";
import BankingCards from "pages/BankingCards/BankingCards";
import GenerateCard from "pages/GenerateCard/GenerateCard";
import Profile from "pages/Profile/Profile";
import Footer from "components/Footer/Footer";
import Welcome from "pages/Welcome/Welcome";
function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/cards" element={<BankingCards />} />
                <Route path="/generatecard" element={<GenerateCard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
