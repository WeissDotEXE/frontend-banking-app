import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeJwtToken, setJwtToken } from "../redux/slices/tokenSlice";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
interface authCredentials {
    fullName?: string;
    email: string;
    password: string;
    repeatPassword?: string;
}

const useAuth = () => {
    const BASE_LOGIN_URL = process.env.REACT_APP_BASE_URL;

    const [response, setResponse] = useState();
    const [isLogin, setIsLogin] = useState(true);
    const [errors, setErrors] = useState<boolean>(false);
    const [statusCode, setStatusCode] = useState<number>();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const sendRequest = async (
        credentials: authCredentials,
        authType: "login" | "register"
    ) => {
        try {
            const res = await axios.post(`${BASE_LOGIN_URL}/auth/${authType}`, {
                ...(authType === "register" && {
                    email: credentials.email,
                    password: credentials.password,
                    repeatPassword: credentials.repeatPassword,
                    fullName: credentials.fullName,
                }),

                ...(authType === "login" && {
                    email: credentials.email,
                    password: credentials.password,
                }),
            });

            if (res.data) {
                localStorage.setItem("jwtToken", res.data.token);
                localStorage.setItem("userId", res.data.data._id);
                dispatch(setJwtToken(res.data.jwt_token));
                //user will be redirect to feed if no error occure
                navigate("/");
            }
            return res.data;
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
        redirect("/auth"); // redirect to home page
        dispatch(removeJwtToken(""));
    };
    const gotoLoginPage = () => {
        redirect("/auth");
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
