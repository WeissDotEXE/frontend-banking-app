import React from "react";
import Header from "components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import Auth from "pages/Auth/Auth";
import BankingCards from "pages/BankingCards/BankingCards";
import GenerateCard from "pages/GenerateCard/GenerateCard";
import User from "pages/User/User";
import Footer from "components/Footer/Footer";
import Welcome from "pages/Welcome/Welcome";
function App() {
    return (
        <div>
            <Header />
            <div className="mt-20">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/cards" element={<BankingCards />} />
                    <Route path="/generatecard" element={<GenerateCard />} />
                    <Route path="/user/:id" element={<User />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
