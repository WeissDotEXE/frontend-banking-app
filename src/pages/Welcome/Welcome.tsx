import React, { FC } from "react";
import styles from "./Welcome.module.scss";
import cn from "classnames";
import Button from "components/Button/Button";
import { RegularSubtitle } from "components/Typography/Typography";
import backgroundVideo from "assets/videos/background.webm";
interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = () => {
    const rootCls = cn(styles.Welcome);
    const backgroundCls = cn(
        styles.Background,
        "absolute",
        "top-0",
        "-left-1",
        "h-auto",
        "w-auto",
        "obejct-cover"
    );

    return (
        <div className={rootCls}>
            <video className={backgroundCls}>
                <source src={backgroundVideo} type="video/webm" />
            </video>
            <RegularSubtitle>Hello</RegularSubtitle>
        </div>
    );
};

export default Welcome;
