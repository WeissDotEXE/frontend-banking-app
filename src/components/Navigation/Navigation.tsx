import React, { FC, useEffect, useState } from "react";
import styles from "./Navigation.module.scss";
import { Routes, Route, redirect, Navigate } from "react-router-dom";
import Home from "pages/Home/Home";
import Auth from "pages/Auth/Auth";
import BankingCards from "pages/BankingCards/BankingCards";
import GenerateCard from "pages/GenerateCard/GenerateCard";
import User from "pages/User/User";
import Header from "components/Header/Header";

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
    const token = localStorage.getItem("jwtToken");
    console.log(token);

    return (
        <div>
            {token && <Header />}
            <Routes>
                <Route
                    path="/"
                    element={!!token ? <Home /> : <Navigate to="/auth" />}
                />
                <Route
                    path="/auth"
                    element={!!token ? <Navigate to="/" /> : <Auth />}
                />
                <Route
                    path="/cards"
                    element={
                        !!token ? <BankingCards /> : <Navigate to="/auth" />
                    }
                />
                <Route
                    path="/generatecard"
                    element={
                        !!token ? <GenerateCard /> : <Navigate to="/auth" />
                    }
                />
                <Route
                    path="/user/:id"
                    element={!!token ? <User /> : <Navigate to="/auth" />}
                />
                <Route
                    path="*"
                    element={!!token ? <Home /> : <Navigate to="/auth" />}
                />
            </Routes>
        </div>
    );
};

export default Navigation;
