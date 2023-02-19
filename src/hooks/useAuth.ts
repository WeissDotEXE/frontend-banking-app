import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeJwtToken, setJwtToken } from "../redux/slices/tokenSlice";
import { useNavigate } from "react-router-dom";
import { AxiosResponse, AxiosError } from "axios";

interface authCredentials {
    username?: string;
    email: string;
    password: string;
    repeatPassword?: string;
}

const useAuth = () => {
    const BASE_LOGIN_URL = process.env.REACT_APP_LOGIN_URL;

    const [response, setResponse] = useState();
    const [isLogin, setIsLogin] = useState(true);
    const [errors, setErrors] = useState<boolean>(false);
    const [statusCode, setStatusCode] = useState<number>();
    const push = useNavigate();

    const dispatch = useDispatch();

    const sendRequest = async (
        credentials: authCredentials,
        authType: string
    ) => {
        try {
            console.log("credentials");

            const res = await axios.post(`${BASE_LOGIN_URL}/${authType}`, {
                ...(authType === "register" && {
                    email: credentials.email,
                    password: credentials.password,
                    username: credentials.username,
                }),
                ...(authType === "login" && {
                    email: credentials.email,
                    password: credentials.password,
                }),
            });
            console.log(res.status); //nu se executa

            if (res.data) {
                localStorage.setItem("jwtToken", res.data.jwt_token);
                localStorage.setItem("userId", res.data.user.id);
                localStorage.setItem("isLogged", "true");
                dispatch(setJwtToken(res.data.jwt_token));
                //user will be redirect to feed if no error occure
                push(`/`);
            }
            return 200;
        } catch (error: any) {
            setStatusCode(error.response.status);
            return error.response.status;
        }
    };

    const logoutUser = () => {
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("persist:root");
        localStorage.removeItem("userId");
        localStorage.removeItem("isLogged");
        push("/"); // redirect to home page
        dispatch(removeJwtToken(""));
    };
    const gotoLoginPage = () => {
        push("/auth");
    };

    return {
        response,
        isLogin,
        sendRequest,
        errors,
        logoutUser,
        gotoLoginPage,
        statusCode,
    };
};

export default useAuth;
