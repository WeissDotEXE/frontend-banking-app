import React, { FC } from "react";
import styles from "./GenerateCard.module.scss";
import CardPreview from "components/CardPreview/CardPreview";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "components/Input/Input";
import cn from "classnames";
import Button from "components/Button/Button";
import { Icon } from "components/Icon/Icon";
interface GenerateCardProps {}

interface CardData {
    type: "normal" | "premium";
    paymentProcessing: "mastercard" | "visa";
}

const GenerateCard: FC<GenerateCardProps> = () => {
    const rootCls = cn(styles.GenerateCard);

    const formik = useFormik({
        initialValues: {
            type: "normal",
            paymentProcessing: "mastercard",
        },
        onSubmit: async (values: CardData) => {
            console.log(values.paymentProcessing, values.type);
        },
    });

    return (
        <div className={rootCls} data-testid="GenerateCard">
            <form onSubmit={formik.handleSubmit}>
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
        </div>
    );
};

export default GenerateCard;
