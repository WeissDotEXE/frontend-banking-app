import React, { FC, useState } from "react";
import styles from "./Auth.module.scss";
import cn from "classnames";
import Input from "components/Input/Input";
import Card from "components/Card/Card";
import authBackground from "assets/images/authBackground.png";
import Button from "components/Button/Button";
import { RegularSubtitle } from "components/Typography/Typography";
import useAuth from "hooks/useAuth";
import { useFormik } from "formik";
import * as Yup from "yup";
import useNotify from "hooks/useNotify";
import { Link, Navigate } from "react-router-dom";

interface AuthProps {
    className?: string;
}

interface LoginData {
    fullName: string;
    email: string;
    password: string;
    repeatPassword?: string;
}

const Auth: FC<AuthProps> = (props: AuthProps) => {
    const { className } = props;
    const [isRegister, setIsRegister] = useState(true);
    const [isLoadingResponse, setIsLoadingResponse] = useState(false);

    const { sendRequest, errors, statusCode, gotoLoginPage } = useAuth();
    const { errorNotification, successNotification, warningNotification } =
        useNotify();

    const rootCls = cn(
        styles.Auth,
        className,
        "flex flex-col xl:flex-row w-2/3",
        "overflow-auto",
        "mt-0 md:mt-0",
        "w-3/4",
        "h-3/4"
    );

    const backgroundCls = cn(
        styles.background,
        "absolute",
        "w-full",
        "h-full",
        "top-0",
        "left-0",
        "object-cover",
        "z-0"
    );

    const rightCls = cn(
        styles.left,
        // "col-span-3",
        "mt-6 md:mt-4",
        "p-10",
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "w-full",
        "h-full"
    );

    const leftCls = cn(
        styles.right,
        "flex",
        "flex-col",
        "col-span-3 md:col-span-2",
        "justify-center",
        "items-center",
        "rounded-xl md:rounded-l-xl md:rounded-r-none",
        "p-4"
    );

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
            repeatPassword: "",
        },
        validationSchema: Yup.object({
            // username: Yup.string()
            //     .max(15, 'Must be 15 characters or less')
            //     .required('Username is required'),
            email: Yup.string()
                .required("Email is required")
                .email("Invalid email adress"),
            password: Yup.string().required("Password is required").min(6),
            repeatPassword: Yup.string().min(6),
        }),
        onSubmit: async (values: LoginData) => {
            try {
                setIsLoadingResponse(true);
                let response;
                if (isRegister) {
                    if (values.repeatPassword !== values.password) {
                        errorNotification("Passwords must be the same");
                        return;
                    }

                    let credentials = {
                        fullName: values.fullName,
                        email: values.email,
                        password: values.password,
                        repeatPassword: values.repeatPassword,
                    };
                    response = await sendRequest(credentials, "register");
                    console.log(response);
                } else {
                    let credentials = {
                        fullName: values.fullName,
                        email: values.email,
                        password: values.password,
                        repeatPassword: values.repeatPassword,
                    };
                    response = await sendRequest(credentials, "login");
                    console.log(response);
                    if (response && response.status === "success")
                        return <Navigate to="/" replace={true} />;
                }
                setIsLoadingResponse(false);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoadingResponse(false);
            }
        },
    });
    const registerFieldList = [
        {
            type: "text",
            label: "Full Name",
            placeholder: "Full Name",
            name: "fullName",
            value: formik.values.fullName,
            onChange: formik.handleChange,
            error: formik.errors.fullName,
        },
        {
            type: "email",
            label: "Email",
            placeholder: "Email",
            name: "email",
            value: formik.values.email,
            onChange: formik.handleChange,
            error: formik.errors.email,
        },
        {
            type: "password",
            label: "Password",
            placeholder: "Password",
            name: "password",
            value: formik.values.password,
            onChange: formik.handleChange,
            error: formik.errors.password,
        },
        {
            type: "password",
            label: "Repeat Password",
            placeholder: "Repead Password",
            name: "repeatPassword",
            value: formik.values.repeatPassword,
            onChange: formik.handleChange,
            error: formik.errors.repeatPassword,
        },
    ];
    const loginFieldList = [
        {
            type: "email",
            label: "Email",
            placeholder: "Email",
            name: "email",
            value: formik.values.email,
            onChange: formik.handleChange,
            error: formik.errors.email,
        },
        {
            type: "password",
            label: "Password",
            placeholder: "Password",
            name: "password",
            value: formik.values.password,
            onChange: formik.handleChange,
            error: formik.errors.password,
        },
    ];

    return (
        <div>
            <img src={authBackground} className={backgroundCls} alt={""} />
            <Card className={rootCls} data-testid="Auth" noPadding>
                <div className={leftCls}>
                    <RegularSubtitle
                        color={"white-950"}
                        bold
                        className={"mb-5 text-xl md:text-4xl"}
                    >
                        Welcome!
                    </RegularSubtitle>
                    <RegularSubtitle
                        bold
                        color={"white-950"}
                        className={"text-lg md:text-3xl"}
                    >
                        {isRegister
                            ? "Create an account to start using banking app."
                            : "Fill up the credentials and use Banking App"}
                    </RegularSubtitle>
                </div>
                <form className={rightCls} onSubmit={formik.handleSubmit}>
                    {isRegister
                        ? registerFieldList.map((item, index) => {
                              return (
                                  <div key={index} className={"w-full"}>
                                      <Input
                                          type={item.type}
                                          label={item.label}
                                          placeholder={item.placeholder}
                                          onChange={formik.handleChange}
                                          name={item.name}
                                          value={item.value}
                                      />
                                      <p className="text-red-600 flex w-full text-center mx-auto">
                                          {item.error}
                                      </p>
                                  </div>
                              );
                          })
                        : loginFieldList.map((item, index) => {
                              return (
                                  <>
                                      <div key={index} className={"w-full"}>
                                          <Input
                                              type={item.type}
                                              label={item.label}
                                              placeholder={item.placeholder}
                                              onChange={formik.handleChange}
                                              name={item.name}
                                              value={item.value}
                                          />
                                          <p className="text-red-600 flex w-full text-center mx-auto">
                                              {item.error}
                                          </p>
                                      </div>
                                  </>
                              );
                          })}
                    <Button
                        className={`w-full mt-10 ${
                            isLoadingResponse && "bg-pink-disable"
                        }`}
                        type="submit"
                        disable={isLoadingResponse}
                    >
                        {isLoadingResponse
                            ? "Loading..."
                            : isRegister
                            ? "Register"
                            : "Log In"}
                    </Button>
                    <div className="flex justify-center text-center mx-auto my-2">
                        <RegularSubtitle size={"xl"} className="mr-3">
                            {isRegister
                                ? "Have an account?"
                                : "Don't have an account?"}
                        </RegularSubtitle>
                        <RegularSubtitle
                            size={"xl"}
                            onClick={() => setIsRegister(!isRegister)}
                            color={"gray-950"}
                        >
                            {isRegister ? "Log in" : "Sign Up"}
                        </RegularSubtitle>
                    </div>
                    <Link to={"/forgotPassword"}>
                        <RegularSubtitle
                            className={"text-gray-950 text-xl mt-3"}
                        >
                            Forgot Password?
                        </RegularSubtitle>
                    </Link>
                </form>
            </Card>
        </div>
    );
};

export default Auth;
