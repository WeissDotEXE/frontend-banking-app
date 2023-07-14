import React, { FC, useState } from "react";
import styles from "./ForgotPasswordPage.module.scss";
import authBackground from "../../assets/images/authBackground.png";
import cn from "classnames";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import axios from "axios";
import { Icon } from "../../components/Icon/Icon";
import { RegularSubtitle } from "../../components/Typography/Typography";
interface ResetPasswordPageProps {}

const ForgotPasswordPage: FC<ResetPasswordPageProps> = () => {
    const [email, setEmail] = useState("");
    const [isEmailSent, setIsEmailSent] = useState();

    const [loading, setLoading] = useState<boolean>(false);

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

    const cardCls = cn("w-2/3 lg:w-1/3");

    const forgotPasswordHandler = async () => {
        try {
            setLoading(true);
            const URL = `${process.env.REACT_APP_BASE_URL}/user/forgotPassword`;
            const response = await axios.post(URL, { email });

            if (response) {
                // @ts-ignore
                setIsEmailSent(true);
            }
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    return (
        <div>
            <img src={authBackground} className={backgroundCls} alt={""} />
            <div className={"flex justify-center items-center h-screen"}>
                <Card className={cardCls} data-testid="Auth" noPadding>
                    {isEmailSent ? (
                        <Card className={""}>
                            <div
                                className={
                                    styles.titleDiv +
                                    " rounded-lg p-20 text-white-950"
                                }
                            >
                                <RegularSubtitle bold={true}>
                                    Please check your email for reset password
                                    link
                                </RegularSubtitle>
                            </div>
                        </Card>
                    ) : (
                        <>
                            <div
                                className={
                                    styles.titleDiv +
                                    " rounded-t-lg p-6 text-white-950"
                                }
                            >
                                <RegularSubtitle bold={true}>
                                    You will get an email to reset your password
                                </RegularSubtitle>
                            </div>
                            <div className={"p-6"}>
                                <Input
                                    type={"text"}
                                    placeholder={"Email"}
                                    label={"Email"}
                                    value={email}
                                    name={"newPassword"}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className={"flex justify-center mt-6"}>
                                    <Button
                                        type={"button"}
                                        onClick={forgotPasswordHandler}
                                        disable={loading}
                                    >
                                        {loading ? (
                                            <Icon
                                                className={"animate-spin"}
                                                name={"loadingIcon"}
                                            />
                                        ) : (
                                            "Reset Password"
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </>
                    )}
                </Card>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
