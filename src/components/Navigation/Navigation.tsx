import React, { FC } from "react";
import styles from "./Navigation.module.scss";
import { Routes, Route } from "react-router-dom";

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
    const userId = localStorage.getItem("userId");

    return <Routes></Routes>;
};

export default Navigation;
