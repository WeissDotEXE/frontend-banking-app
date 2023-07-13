import React, { FC, useState } from "react";
import Modal from "../Modal/Modal";
import Input from "../Input/Input";
import Button from "../Button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RegularSubtitle } from "../Typography/Typography";
import { Icon } from "../Icon/Icon";
import cn from "classnames";

interface InputBankingCardModalProps {
    onClose: () => void;
    bankingCard: {
        cardNumber: number;
        cvv: number;
        date: string;
    };
    patchObj: {
        amount: number;
        userBalance: number;
        userAccountId: string;
        recipientAccountId: string;
        currency: string;
        recipientBalance: string;
    };
}

const InputBankingCardModal: FC<InputBankingCardModalProps> = (
    props: InputBankingCardModalProps
) => {
    const { onClose, bankingCard, patchObj } = props;

    const [numberState, setNumberState] = useState();
    const [cvvState, setCvvState] = useState();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const loadingCls = cn(
        "backdrop-blur-md",
        "absolute",
        "w-full",
        "h-screen",
        "top-0",
        "left-0",
        "z-20",
        "bg-gray-300",
        "bg-opacity-70",
        "flex",
        "justify-center",
        "items-center"
    );

    const modalCls = cn();

    const sendMoneyHandler = async () => {
        try {
            setIsLoading(true);
            setTimeout(() => {}, 2500);
            console.log(parseInt(String(bankingCard.cardNumber)), numberState);
            if (
                String(bankingCard.cardNumber) === numberState &&
                String(bankingCard.cvv) === cvvState
            ) {
                onClose();
                const response = await axios.patch(
                    `${process.env.REACT_APP_BASE_URL}/bankingAccounts/sendMoney`,
                    patchObj
                );
                if (response.status === 200) {
                    navigate("/");
                }
            } else {
                setIsLoading(false);
                setError("Credit Number/CVV is wrong");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {isLoading && (
                <div className={loadingCls}>
                    <RegularSubtitle>Loading...</RegularSubtitle>
                    <Icon name={"loadingIcon"} className={"animate-spin"} />
                </div>
            )}
            <Modal className={modalCls} onClose={onClose}>
                <Input
                    type={"number"}
                    placeholder={"Card Number"}
                    label={"Card Number"}
                    value={numberState}
                    name={"number"}
                    onChange={(e) => setNumberState(e.target.value)}
                />
                <Input
                    type={"cvv"}
                    placeholder={"CVV"}
                    label={"CVV"}
                    value={cvvState}
                    name={"number"}
                    onChange={(e) => setCvvState(e.target.value)}
                />
                <div className={"flex justify-center"}>
                    <Button
                        type={"button"}
                        className={"my-7"}
                        onClick={sendMoneyHandler}
                    >
                        Transfer
                    </Button>
                </div>
                <RegularSubtitle className={"text-xl text-red-600"}>
                    {error}
                </RegularSubtitle>
            </Modal>
        </>
    );
};

export default InputBankingCardModal;
