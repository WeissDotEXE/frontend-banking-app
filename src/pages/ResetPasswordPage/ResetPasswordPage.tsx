import React, { FC, useState } from "react";
import styles from "./ResetPasswordPage.module.scss";
import authBackground from "../../assets/images/authBackground.png";
import cn from "classnames";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Icon } from "../../components/Icon/Icon";
import { RegularSubtitle } from "../../components/Typography/Typography";

interface ResetPasswordPageProps {}

const ResetPasswordPage: FC<ResetPasswordPageProps> = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const { token } = useParams();

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

    const cardCls = cn("w-2/3 lg:w-1/3", "p-10");

    const resetPasswordHandler = async () => {
        try {
            if (newPassword === "" || confirmNewPassword === "") {
                setError("Please provide all credentials");
                return;
            }
            if (newPassword !== confirmNewPassword) {
                setError("Passwords are not the same");
                return;
            }
            setLoading(true);
            const URL = `${process.env.REACT_APP_BASE_URL}/user/resetPassword/${token}`;
            const response = await axios.patch(URL, { password: newPassword });
            console.log(response);
            if (response.status === 200) {
                // @ts-ignore
                localStorage.setItem("jwtToken", response.data.token);
                //@ts-ignore
                localStorage.setItem("userId", response.data.data._id);
                // eslint-disable-next-line no-restricted-globals
                location.reload();
            }
        } catch (error) {
            // @ts-ignore
            setError(error.response.data.message);
        }
        setLoading(false);
    };

    return (
        <div>
            <img src={authBackground} className={backgroundCls} alt={""} />
            <div className={"flex justify-center items-center h-screen"}>
                <Card className={cardCls} data-testid="Auth" noPadding>
                    <Input
                        type={"password"}
                        placeholder={"New Password"}
                        label={"New Password"}
                        value={newPassword}
                        name={"newPassword"}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <Input
                        type={"password"}
                        placeholder={"Confirm New Password"}
                        label={"Confirm New Password"}
                        value={confirmNewPassword}
                        name={"confirmNewPassword"}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                    <RegularSubtitle className={"text-red-600 text-lg mt-4"}>
                        {error}
                    </RegularSubtitle>
                    <div className={"flex justify-center mt-6"}>
                        <Button
                            type={"button"}
                            disable={loading}
                            onClick={resetPasswordHandler}
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
                </Card>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
