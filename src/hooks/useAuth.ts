import { useState } from "react";
import axios from "axios";
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

    const [errors, setErrors] = useState<boolean>(false);
    const [statusCode, setStatusCode] = useState<number>();
    const navigate = useNavigate();

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
                localStorage.setItem("fullName", res.data.data.fullName);
                // eslint-disable-next-line no-restricted-globals
                location.reload();
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
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    const gotoLoginPage = () => {
        redirect("/auth");
    };

    return {
        sendRequest,
        errors,
        logoutUser,
        gotoLoginPage,
        statusCode,
    };
};

export default useAuth;
