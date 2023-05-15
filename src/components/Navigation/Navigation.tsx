import React, { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "pages/Home/Home";
import Auth from "pages/Auth/Auth";
import BankingCards from "pages/BankingCards/BankingCards";
import GenerateCard from "pages/GenerateCard/GenerateCard";
import User from "pages/User/User";
import Header from "components/Header/Header";
import SearchUsersPage from "../../pages/SeachUsers/SearchUsersPage";

const Navigation: FC = () => {

    const token = localStorage.getItem("jwtToken");

    return (
        <div>
            {!!token && <Header />}
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

                <Route path={"/searchUsers/:fullName"}
                       element={!!token ? <SearchUsersPage /> : <Navigate to={"/auth"} />} />

                <Route
                    path="*"
                    element={!!token ? <Home /> : <Navigate to="/auth" />}
                />

            </Routes>
        </div>
    );
};

export default Navigation;
