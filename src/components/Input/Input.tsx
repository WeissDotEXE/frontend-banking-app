import React, { FC } from "react";
import styles from "./Input.module.scss";
import cn from "classnames";
import { RegularSubtitle } from "components/Typography/Typography";

interface InputProps {
    type: "email" | "text" | "password" | "file" | "number" | any;
    placeholder: string;
    className?: string;
    label: string;
}

const Input: FC<InputProps> = (props: InputProps) => {
    const { type, className, label, placeholder } = props;

    const rootCls = cn(styles.Input, className);

    return (
        <div className={rootCls}>
            <RegularSubtitle
                className="mt-4 mb-2"
                color={"pink-950"}
                bold
                position={"text-left"}
            >
                {label}
            </RegularSubtitle>
            <input
                className="text-pink-950 bg-gray-300 p-4 w-full outline-pink-950 "
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
