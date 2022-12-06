import React, { FC } from "react";
import styles from "./Input.module.scss";
import cn from "classnames";
import { RegularSubtitle } from "components/Typography/Typography";

interface InputProps {
    type: "email" | "text" | "password" | "file" | "number" | "select" | any;
    placeholder: string;
    className?: string;
    label: string;
    options?: string[];
    value: any;
    name: string;
    onChange: (e: any) => void;
}

const Input: FC<InputProps> = (props: InputProps) => {
    const {
        type,
        className,
        label,
        placeholder,
        options,
        onChange,
        name,
        value,
    } = props;

    const rootCls = cn(styles.Input, className);
    const optionCls = cn(
        styles.option,
        "text-pink-950 bg-gray-300 p-4 w-full outline-pink-950 "
    );

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
            {type !== "select" ? (
                <input
                    className="text-pink-950 bg-gray-300 p-4 w-full outline-pink-950 "
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    onChange={onChange}
                    value={value}
                />
            ) : (
                <select
                    className={optionCls}
                    placeholder="Select Account"
                    onChange={onChange}
                    name={name}
                >
                    {options?.map((item, index) => (
                        <option key={index} className={optionCls} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
};

export default Input;
