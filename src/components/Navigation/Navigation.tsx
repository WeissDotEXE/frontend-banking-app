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
import ResetPasswordPage from "../../pages/ResetPasswordPage/ResetPasswordPage";
import ForgotPasswordPage from "../../pages/ForgotPasswordPage/ForgotPasswordPage";
import WelcomePage from "../../pages/WelcomePage/WelcomePage";

const Navigation: FC = () => {
    const token = localStorage.getItem("jwtToken");

    return (
        <div>
            {!!token && <Header />}
            <Routes>
                <Route
                    path="/"
                    element={!!token ? <Home /> : <Navigate to="/welcome" />}
                />
                <Route
                    path="/auth"
                    element={!!token ? <Navigate to="/" /> : <Auth />}
                />
                <Route
                    path="/cards"
                    element={
                        !!token ? <BankingCards /> : <Navigate to="/welcome" />
                    }
                />
                <Route
                    path="/generatecard"
                    element={
                        !!token ? (
                            <GenerateCardPage />
                        ) : (
                            <Navigate to="/welcome" />
                        )
                    }
                />
                <Route
                    path="/user/:id"
                    element={!!token ? <User /> : <Navigate to="/welcome" />}
                />

                <Route
                    path={"/searchUsers/:fullName"}
                    element={
                        !!token ? (
                            <SearchUsersPage />
                        ) : (
                            <Navigate to={"/welcome"} />
                        )
                    }
                />
                <Route
                    path={"/addMoney/:userId"}
                    element={
                        !!token ? (
                            <AddMoneyPage />
                        ) : (
                            <Navigate to={"/welcome"} />
                        )
                    }
                />
                <Route
                    path={"/sendMoney/:userId/:friendId"}
                    element={
                        !!token ? (
                            <SendMoneyPage />
                        ) : (
                            <Navigate to={"/welcome"} />
                        )
                    }
                />

                <Route
                    path={"/resetPassword/:token"}
                    element={token ? <Home /> : <ResetPasswordPage />}
                />

                <Route
                    path={"/forgotPassword"}
                    element={token ? <Home /> : <ForgotPasswordPage />}
                />

                <Route path={"/welcome"} element={<WelcomePage />} />

                <Route
                    path="*"
                    element={!!token ? <Home /> : <Navigate to="/welcome" />}
                />
            </Routes>
        </div>
    );
};

export default Navigation;
