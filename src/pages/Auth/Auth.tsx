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

interface AuthProps {
    className?: string;
}

interface LoginData {
    username: string;
    email: string;
    password: string;
    repeatPassword?: string;
}

interface InputProps {
    type: "email" | "text" | "password" | "file";
    label: string;
}
type authType = "register" | "login";

const Auth: FC<AuthProps> = (props: AuthProps) => {
    const { className } = props;
    const [isRegister, setIsRegister] = useState(true);
    const {
        isLogin,
        sendRequest,
        errors,
        response,
        statusCode,
        gotoLoginPage,
    } = useAuth();
    const { errorNotification, successNotification, warningNotification } =
        useNotify();

    const rootCls = cn(
        styles.Auth,
        className,
        "grid",
        "md:grid-cols-5",
        "w-10/12 md:w-7/12"
    );

    const backgroundCls = cn(
        styles.background,
        "absolute",
        "w-full",
        "h-screen",
        "top-0",
        "left-0",
        "object-cover",
        "z-0"
    );

    const rightCls = cn(styles.left, "col-span-3", "p-10");

    const leftCls = cn(
        styles.right,
        "flex",
        "flex-col",
        "col-span-3 md:col-span-2",
        "justify-center",
        "items-center",
        "rounded-b-xl md:rounded-r-xl",
        "p-4"
    );

    const formik = useFormik({
        initialValues: {
            username: "",
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
            if (isRegister) {
                if (values.repeatPassword !== values.password) {
                    errorNotification("Passwords must be the same");
                    return;
                }
                console.log({
                    username: values.username,
                    email: values.email,
                    password: values.password,
                });
            } else {
                console.log({ email: values.email, password: values.password });
            }

            // const statusCode = await sendRequest(
            //     {
            //         email: values.email,
            //         password: values.password,
            //         ...(authType === "register" && {
            //             user_data: {
            //                 display_name: values.username,
            //             },
            //         }),
            //     },
            //     authType
            // );
            // if (statusCode === 401) {
            //     // addNotificationHandler({
            //     //     id: 'test',
            //     //     message: 'Username and password do not match',
            //     //     isError: true,
            //     // })
            //     errorNotification("Username and password do not match");
            //     return;
            // } else if (statusCode === 400) {
            //     errorNotification("Incorrect Credentials");
            // }
        },
    });
    const registerFieldList = [
        {
            type: "text",
            label: "Username",
            placeholder: "Username",
            name: "username",
            value: formik.values.username,
            onChange: formik.handleChange,
            error: formik.errors.username,
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
            <img src={authBackground} className={backgroundCls} />
            <Card className={rootCls} data-testid="Auth" noPadding>
                <div className={leftCls}>
                    <RegularSubtitle color={"white-950"} bold className="mb-5">
                        Welcome!
                    </RegularSubtitle>
                    <RegularSubtitle bold color={"white-950"} className="mb-5">
                        {isRegister
                            ? "Create an account to start using banking app."
                            : "Fill up the credentials and use Banking App"}
                    </RegularSubtitle>
                </div>
                <form className={rightCls} onSubmit={formik.handleSubmit}>
                    {isRegister
                        ? registerFieldList.map((item, index) => {
                              return (
                                  <div key={index}>
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
                                  <div key={index}>
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
                          })}
                    <Button className="w-full mt-10" type="submit">
                        {isRegister ? "Register" : "Log In"}
                    </Button>
                    <div className="flex justify-center text-center mx-auto mt-4">
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
                </form>
            </Card>
        </div>
    );
};

export default Auth;
