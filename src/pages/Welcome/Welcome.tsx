import React, { FC } from "react";
import styles from "./Welcome.module.scss";
import cn from "classnames";
import Button from "components/Button/Button";
import { RegularSubtitle } from "components/Typography/Typography";
import backgroundVideo from "assets/videos/background.webm";
import { Link } from "react-router-dom";
interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = () => {
    const rootCls = cn(styles.Welcome, "relative");
    const backgroundCls = cn(
        styles.Background,
        "fixed",
        "top-0",
        "-left-1",
        "h-screen",
        "w-screen",
        "object-cover",
        "brightness-50",
        "z-0"
    );

    const contentCls = cn(
        styles.Content,
        "z-10",
        "absolute",
        "w-full",
        "block",
        "top-1/3",
        "mx-auto"
    );

    return (
        <div>
            <video className={backgroundCls} autoPlay muted loop>
                <source src={backgroundVideo} type="video/webm" />
            </video>
            <div className={contentCls}>
                <RegularSubtitle size={"6xl"} color={"white-950"} bold>
                    Banking App
                </RegularSubtitle>
                <RegularSubtitle bold color={"white-950"} className="my-8">
                    App created by Tache Mihnea Cristian
                </RegularSubtitle>
                <a href="https://github.com/WeissDotEXE" target="_blank">
                    <RegularSubtitle color={"pink-950"} bold>
                        WeissDotExe
                    </RegularSubtitle>
                </a>
                <div className="w-full flex justify-center mt-10">
                    <Link to="/auth">
                        <Button type="button">Start Using App</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
