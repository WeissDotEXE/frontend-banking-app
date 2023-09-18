import React, { ChangeEvent, FC, useState } from "react";
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

    const [bankingCardData, setBankingCardData] = useState({
        number: "",
        cvv: "",
    });

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
            if (
                String(bankingCard.cardNumber) === bankingCardData.number &&
                String(bankingCard.cvv) === bankingCardData.cvv
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

    const changeBankingCardDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setBankingCardData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    if (!bankingCard)
        return (
            <Modal className={modalCls} onClose={onClose}>
                <RegularSubtitle>
                    You have to generate a banking card before sending money
                </RegularSubtitle>
                <div className={"w-full flex justify-center items-center my-4"}>
                    {" "}
                    <Button
                        type={"button"}
                        onClick={() => navigate("/generatecard")}
                    >
                        Generate Card
                    </Button>
                </div>
            </Modal>
        );

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
                    name={"number"}
                    value={bankingCardData.number}
                    onChange={changeBankingCardDataHandler}
                />
                <Input
                    type={"cvv"}
                    placeholder={"CVV"}
                    label={"CVV"}
                    name={"cvv"}
                    value={bankingCardData.cvv}
                    onChange={changeBankingCardDataHandler}
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
