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
    labelColor?:
        | "white-950"
        | "red-950"
        | "gray-950"
        | "blue-950"
        | "blue-940"
        | "pink-950";
    name: string;
    onChange: (e: any) => void;
    min?: number;
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
        min,
        labelColor = "pink-950",
    } = props;

    const rootCls = cn(styles.Input, className);
    const optionCls = cn(
        styles.option,
        "text-pink-950 bg-gray-300 p-4 w-full outline-pink-950 rounded-lg"
    );

    return (
        <div className={rootCls}>
            <RegularSubtitle
                className="mt-4 mb-2"
                color={labelColor}
                bold
                position={"text-left"}
            >
                {label}
            </RegularSubtitle>
            {type !== "select" ? (
                <input
                    className="text-pink-950 p-4 w-full focus:outline-none border-b-2 border-pink-950"
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    onChange={onChange}
                    value={value}
                    min={min}
                />
            ) : (
                <select
                    className={optionCls}
                    placeholder="Select Account"
                    onChange={onChange}
                    name={name}
                    value={options}
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
