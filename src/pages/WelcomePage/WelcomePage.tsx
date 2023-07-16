import styles from "./WelcomePage.module.scss";
import background from "../../assets/videos/background.webm";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { RegularSubtitle } from "../../components/Typography/Typography";
import cn from "classnames";
const IntroPage = () => {
    const rootCls = cn("-mt-20", "relative");

    const videoCls = cn(
        styles.video,
        "w-full",
        "h-screen",
        "object-cover",
        "brightness-50",
        "absolute",
        "top-0",
        "left-0"
    );

    const textCls = cn(
        "absolute",
        "w-full",
        "h-screen",
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
        "text-white-950",
        "px-4"
    );

    return (
        <div className={rootCls}>
            <video
                autoPlay={true}
                muted={true}
                loop={true}
                className={videoCls}
                src={background}
            ></video>
            <div className={textCls}>
                <RegularSubtitle className={"text-4xl md:text-7xl"} bold={true}>
                    Welcome to Banking APP
                </RegularSubtitle>
                <RegularSubtitle className={"text-2xl my-5"}>
                    An App Created By Tache Mihnea Cristian
                </RegularSubtitle>
                <Link to={"/auth"}>
                    <Button type={"button"}>Register/Login</Button>
                </Link>
            </div>
        </div>
    );
};

export default IntroPage;
