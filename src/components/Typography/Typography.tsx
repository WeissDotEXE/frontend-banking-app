import React, { ReactNode } from "react";
import cn from "classnames";
import styles from "./Typography.module.scss";
import {
    variantsMapping,
    color,
    fonts,
    variant,
    size,
    position,
} from "./TypesPropsTypography";

// TODO: the goal is to implement components that use this as a reference and to use them in the code

function Typography(props: {
    children: React.ReactNode;
    color?: color;
    variant?: variant;
    font?: fonts;
    size?: size;
    position?: position;
    // TODO: remove custom style, className is the way to go
    customStyle?: Array<any>;
    className?: string;
    onClick?: () => void;
}) {
    const Component = props.variant ? variantsMapping[props.variant] : "p";
    const { onClick } = props;
    return (
        <Component
            className={cn(
                props.customStyle,
                `font-${props.font}`,
                `text-${props.color}`,
                `text-${props.size}`,
                `text-${props.position}`,
                props.className && props.className
            )}
            onClick={onClick}
        >
            {props.children}
        </Component>
    );
}

export default Typography;

export type GeneralTypographyProps = {
    children: ReactNode;
    color?: color;
    className?: string;
    bold?: boolean;
    size?: size;
    position?: position;
    onClick?: () => void;
};

export const RegularSubtitle = (props: GeneralTypographyProps) => {
    const {
        color = "white",
        size = "4xl",
        onClick,
        position = "text-center",
    } = props;
    const rootCls = cn(
        props.className,
        props.bold && "font-bold",
        position,
        size
    );
    return (
        <Typography
            color={color}
            className={rootCls}
            variant="div"
            size={size}
            font={"noah"}
            onClick={onClick}
            position={position}
        >
            {props.children}
        </Typography>
    );
};
