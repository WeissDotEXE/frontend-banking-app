import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import Auth from "pages/Auth/Auth";
import BankingCards from "pages/BankingCards/BankingCards";
import GenerateCard from "pages/GenerateCard/GenerateCard";
import User from "pages/User/User";
import Footer from "components/Footer/Footer";
import Welcome from "pages/Welcome/Welcome";
import Navigation from "components/Navigation/Navigation";
function App() {
    return (
        <div className="mt-20">
            <Navigation />
        </div>
    );
}

export default App;
