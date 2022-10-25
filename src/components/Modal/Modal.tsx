import React, { FC, ReactNode } from "react";
import styles from "./Modal.module.scss";
import { Portal } from "react-portal";
import cn from "classnames";
import closeIcon from "assets/icons/closeIcon.svg";
import Card from "components/Card/Card";

interface ModalProps {
    className?: string;
    children: ReactNode;
    onClose: () => void;
}

const Modal: FC<ModalProps> = (props: ModalProps) => {
    const { className, children, onClose } = props;

    const rootCls = cn(styles.Modal, className, "fixed", "top-10");

    const backgroundCls = cn(
        styles.background,
        "fixed",
        "h-full",
        "w-full",
        "bg-gray-950",
        "opacity-50"
    );

    return (
        <Portal>
            <div className={backgroundCls}></div>
            <Card className={rootCls}>
                <img src={closeIcon} className="relative left-10" />
                {children}
            </Card>
        </Portal>
    );
};

export default Modal;
