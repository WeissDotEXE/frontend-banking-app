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
import { RegularSubtitle } from "components/Typography/Typography";
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
        "lg:flex",
        "relative",
        "z-0",
        "justify-around",
        "items-center"
    );

    const formCls = cn(
        styles.form,
        "relative",
        "z-10",
        "rounded-lg",
        "-mt-8 lg:mt-2",
        "p-8"
    );

    return (
        <div className={rootCls} data-testid="GenerateCard">
            <div className={contentCls}>
                <form onSubmit={formik.handleSubmit} className={formCls}>
                    <RegularSubtitle bold color={"white-950"} size="4xl">
                        Generate Your Card
                    </RegularSubtitle>
                    <Input
                        type={"select"}
                        label="Card Type"
                        placeholder="Normal or Premium"
                        options={["Normal", "Premium"]}
                        name="cardType"
                        onChange={formik.handleChange}
                        value={formik.values.type}
                        labelColor={"white-950"}
                        className="my-10"
                    />
                    <Input
                        type={"select"}
                        label="Payment Processing"
                        placeholder="Normal or Premium"
                        options={["Visa", "Mastercard"]}
                        name="paymentProcessing"
                        onChange={formik.handleChange}
                        value={formik.values.paymentProcessing}
                        labelColor={"white-950"}
                        className="my-10"
                    />
                    <RegularSubtitle bold color={"white-950"}>
                        Preview
                    </RegularSubtitle>
                    <div className=" w-full flex justify-center items-center mb-10">
                        <BankingCardsItem
                            cardNumber={324234}
                            expireDate="23/33"
                            id="23"
                            name="John John"
                            type={"normal"}
                            processing={"visa"}
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <Button
                            type="submit"
                            className="flex justify-even items-center"
                        >
                            Generate <Icon name="secureIcon" className="ml-4" />
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GenerateCard;
