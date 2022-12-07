import React, { FC } from "react";
import styles from "./GenerateCard.module.scss";
import CardPreview from "components/CardPreview/CardPreview";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "components/Input/Input";
import cn from "classnames";
import Button from "components/Button/Button";
import { Icon } from "components/Icon/Icon";
import BackgroundImg from "assets/images/generateCardBackground.png";
import BankingCardsItem from "components/BankingCardItem/BankingCardItem";
interface GenerateCardProps {}

interface CardData {
    type: "normal" | "premium";
    paymentProcessing: "mastercard" | "visa";
}

const GenerateCard: FC<GenerateCardProps> = () => {
    const rootCls = cn(styles.GenerateCard, "relative");

    const formik = useFormik({
        initialValues: {
            type: "normal",
            paymentProcessing: "mastercard",
        },
        onSubmit: async (values: CardData) => {
            console.log(values.paymentProcessing, values.type);
        },
    });

    const BackgroundCls = cn(
        styles.BackgroundCls,
        "absolute",
        "-top-10",
        "left-0",
        "w-full",
        "h-screen",
        "object-cover",
        "z-0"
    );

    const contentCls = cn(
        styles.content,
        "flex",
        "relative",
        "z-10",
        "justify-around",
        "items-center"
    );

    const formCls = cn(styles.form, "relative", "z-10", "");

    return (
        <div className={rootCls} data-testid="GenerateCard">
            <img src={BackgroundImg} className={BackgroundCls} />
            <div className={contentCls}>
                <form onSubmit={formik.handleSubmit} className={formCls}>
                    <Input
                        type={"select"}
                        label="Card Type"
                        placeholder="Normal or Premium"
                        options={["Normal", "Premium"]}
                        name="cardType"
                        onChange={formik.handleChange}
                        value={formik.values.type}
                    />
                    <Input
                        type={"select"}
                        label="Payment Processing"
                        placeholder="Normal or Premium"
                        options={["Visa", "Mastercard"]}
                        name="paymentProcessing"
                        onChange={formik.handleChange}
                        value={formik.values.paymentProcessing}
                    />
                    <Button type="submit">
                        Generate <Icon name="addIcon" />
                    </Button>
                </form>
                <BankingCardsItem
                    cardNumber={324234}
                    expireDate="23/33"
                    id="23"
                    name="John John"
                    type={"normal"}
                    processing={"visa"}
                />
            </div>
        </div>
    );
};

export default GenerateCard;
