import React, { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "pages/Home/Home";
import Auth from "pages/Auth/Auth";
import BankingCards from "pages/BankingCards/BankingCards";
import GenerateCardPage from "pages/GenerateCardPage/GenerateCardPage";
import User from "pages/User/User";
import Header from "components/Header/Header";
import SearchUsersPage from "../../pages/SeachUsers/SearchUsersPage";
import AddMoneyPage from "../../pages/AddMoneyPage/AddMoneyPage";
import SendMoneyPage from "../../pages/SendMoneyPage/SendMoneyPage";

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
                        !!token ? <GenerateCardPage /> : <Navigate to="/auth" />
                    }
                />
                <Route
                    path="/user/:id"
                    element={!!token ? <User /> : <Navigate to="/auth" />}
                />

                <Route
                    path={"/searchUsers/:fullName"}
                    element={
                        !!token ? (
                            <SearchUsersPage />
                        ) : (
                            <Navigate to={"/auth"} />
                        )
                    }
                />
                <Route
                    path={"/addMoney/:userId"}
                    element={
                        !!token ? <AddMoneyPage /> : <Navigate to={"/auth"} />
                    }
                />
                <Route
                    path={"/sendMoney/:userId/:friendId"}
                    element={
                        !!token ? <SendMoneyPage /> : <Navigate to={"/auth"} />
                    }
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
