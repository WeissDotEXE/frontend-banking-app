import React, { FC, ReactNode, useEffect, Fragment } from "react";
import styles from "./Modal.module.scss";
import cn from "classnames";
import ReactDom from "react-dom";
import { Icon } from "components/Icon/Icon";
import Card from "components/Card/Card";

interface ModalProps {
    className?: string;
    children: ReactNode;
    onClose: () => void;
}

const Modal: FC<ModalProps> = (props: ModalProps) => {
    const { className, children, onClose } = props;

    const modalCls = cn(styles.modalCls, "z-20", "w-10/12", "md:w-4/6");
    const overlayCls = cn(
        styles.overlayCls,
        "fixed",
        "top-0",
        "left-0",
        "w-full",
        "h-full",
        "bg-gray-900",
        "opacity-90"
    );

    useEffect(() => {
        const keyDownHandler = (event: any) => {
            if (event.key === "Escape") {
                event.preventDefault();

                onClose!();
            }
        };
        document.addEventListener("keydown", keyDownHandler);
        return () => {
            document.removeEventListener("keydown", keyDownHandler);
        };
    }, []);

    const modalContent = cn("bg-white", "rounded-lg", "z-10", className);
    const modalRoot = document.getElementById("portal") as HTMLElement;

    return ReactDom.createPortal(
        <Fragment>
            <div className={overlayCls} onClick={onClose}></div>
            <Card className={modalCls}>
                <Icon
                    name="closeIcon"
                    className="cursor-pointer z-10 w-9 h-9 md:w-11 md:h-11 absolute right-3 top-3 z-20"
                />
                <div className={modalContent}>{children}</div>
            </Card>
        </Fragment>,
        modalRoot
    );
};

export default Modal;
