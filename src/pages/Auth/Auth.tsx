import React, { FC, useState } from "react";
import styles from "./Auth.module.scss";
import cn from "classnames";
import Input from "components/Input/Input";
import Card from "components/Card/Card";
import authBackground from "assets/images/authBackground.png";
import Button from "components/Button/Button";
import { RegularSubtitle } from "components/Typography/Typography";
interface AuthProps {
    className?: string;
}

interface InputProps {
    type: "email" | "text" | "password" | "file";
    label: string;
}

const Auth: FC<AuthProps> = (props: AuthProps) => {
    const { className } = props;
    const [isRegister, setIsRegister] = useState(true);

    const rootCls = cn(styles.Auth, className, "grid", "md:grid-cols-5");

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

    const leftCls = cn(styles.left, "col-span-3", "p-10");

    const rightCls = cn(
        styles.right,
        "flex",
        "flex-col",
        "col-span-2",
        "justify-center",
        "items-center",
        "rounded-r-xl"
    );

    const registerFieldList = [
        { type: "text", label: "Username", placeholder: "Username" },
        { type: "email", label: "Email", placeholder: "Email" },
        { type: "password", label: "Password", placeholder: "Password" },
        {
            type: "password",
            label: "Repeat Password",
            placeholder: "Repead Password",
        },
    ];
    const loginFieldList = [
        { type: "email", label: "Email", placeholder: "Email" },
        { type: "password", label: "Password", placeholder: "Email" },
    ];

    return (
        <div>
            <img src={authBackground} className={backgroundCls} />
            <Card className={rootCls} data-testid="Auth" noPadding>
                <div className={leftCls}>
                    {isRegister &&
                        registerFieldList.map((item, index) => {
                            return (
                                <Input
                                    key={index}
                                    type={item.type}
                                    label={item.label}
                                    placeholder={item.placeholder}
                                />
                            );
                        })}
                    {!isRegister &&
                        loginFieldList.map((item, index) => {
                            return (
                                <Input
                                    key={index}
                                    type={item.type}
                                    label={item.label}
                                    placeholder={item.placeholder}
                                />
                            );
                        })}
                    <Button className="w-full mt-10">
                        {isRegister ? "Register" : "Log In"}
                    </Button>
                    <div className="flex justify-center mt-4">
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
                </div>
                <div className={rightCls}>
                    <RegularSubtitle color={"white-950"} bold className="mb-5">
                        Welcome!
                    </RegularSubtitle>
                    <RegularSubtitle bold color={"white-950"}>
                        {isRegister
                            ? "Create an account to start using banking app."
                            : "Fill up the credentials and use Banking App"}
                    </RegularSubtitle>
                </div>
            </Card>
        </div>
    );
};

export default Auth;
