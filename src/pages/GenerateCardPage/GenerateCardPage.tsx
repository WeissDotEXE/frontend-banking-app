import React, { FC, useEffect, useState } from "react";
import styles from "./GenerateCardPage.module.scss";
import cn from "classnames";
import Button from "components/Button/Button";
import { Icon } from "components/Icon/Icon";
import BankingCardsItem from "components/BankingCardItem/BankingCardItem";
import { RegularSubtitle } from "components/Typography/Typography";
import useNotify from "hooks/useNotify";
import BankingCardColorEnum from "../../enums/bankingCardColorEnum";
import bankingCardColorEnum from "../../enums/bankingCardColorEnum";
import bankingCardTypeEnum from "../../enums/bankingCardTypeEnum";
import axios from "axios";
import { useNavigate } from "react-router-dom";
interface GenerateCardProps {}

const GenerateCardPage: FC<GenerateCardProps> = () => {
    const [cardType, setCardType] = useState<bankingCardTypeEnum>(
        bankingCardTypeEnum.visa
    );
    const [cardColor, setCardColor] = useState<BankingCardColorEnum>(
        bankingCardColorEnum.white
    );
    const userId = localStorage.getItem("userId");
    const navigate = useNavigate();

    const {
        successNotification,
        errorNotification,
        warningNotification,
        notifyList,
        closeNotificationHandler,
    } = useNotify();

    const rootCls = cn(
        styles.cardPreviewCls,
        "flex",
        "flex-col",
        "w-full",
        "h-screen",
        "justify-around",
        "items-center"
    );

    const menuCls = cn(
        styles.menu,
        "w-5/6",
        "bg-gray-940",
        "lg:h-1/5",
        "rounded-lg",
        "-mt-24 lg:-mt-24",
        "flex",
        "flex-col",
        "lg:flex-row",
        "justify-around"
    );
    const cardTypeSectionCls = cn(
        styles.cardTypeCls,
        "flex",
        "flex-col",
        "justify-around",
        "items-center"
    );
    const cardColorSectionCls = cn(
        styles.cardColorSection,
        "flex",
        "flex-col",
        "justify-around",
        "mt-8 lg:mt-0"
    );

    const mockUserId = {
        _id: "646b0fe18ee7d25c297395c3",
        fullName: "Tache Mihnea Cristian",
        email: "tmihnea555@gmail.com",
        avatarImg: "https://www.w3schools.com/howto/img_avatar.png",
        iban: "JMpuy3rS1UN0ALpG",
        joinDate: "2023-05-22T06:31:08.843Z",
    };

    const colorOptionCls = cn("h-16", "w-16", "rounded-full");

    const generateCardHandler = async () => {
        try {
            const bankingCard = {
                type: cardType,
                color: cardColor,
                userId,
            };
            console.log(bankingCard);
            const url = `${process.env.REACT_APP_BASE_URL}/bankingCards/createCard`;
            const response = await axios.post(url, bankingCard);
            console.log(response);
            if (response.status === 201) {
                navigate("/cards");
            }
        } catch (error) {
            //todo add notification for generating card error
            console.log(error);
        }
    };

    // @ts-ignore
    return (
        <div className={rootCls}>
            <BankingCardsItem
                id={""}
                type={cardType}
                cardNumber={1111222233334444}
                expireDate={"03/20"}
                color={cardColor}
                cvv={123}
                userId={mockUserId}
            />
            <div className={menuCls}>
                <div className={cardTypeSectionCls}>
                    <RegularSubtitle className={"my-8 lg:my-0"}>
                        Card Type
                    </RegularSubtitle>
                    <div className={"flex items-center"}>
                        <Icon
                            name={"visaIcon"}
                            onClick={() =>
                                setCardType(bankingCardTypeEnum.visa)
                            }
                            className={`p-3  rounded-lg ${
                                cardType === bankingCardTypeEnum.visa &&
                                "border-8"
                            }`}
                        />
                        <Icon
                            name={"mastercardIcon"}
                            onClick={() =>
                                setCardType(bankingCardTypeEnum.mastercard)
                            }
                            className={`p-3 rounded-lg ${
                                cardType === bankingCardTypeEnum.mastercard &&
                                "border-8"
                            }`}
                        />
                    </div>
                </div>
                <div className={cardColorSectionCls}>
                    <RegularSubtitle bold={true} className={"mb-6 lg:mb-0"}>
                        Color
                    </RegularSubtitle>
                    <div className={"flex justify-around lg:justify-between"}>
                        <div
                            className={`${colorOptionCls} bg-white-950 ${
                                cardColor === bankingCardColorEnum.white &&
                                "drop-shadow-lg border-8"
                            }`}
                            onClick={() =>
                                setCardColor(bankingCardColorEnum.white)
                            }
                        ></div>
                        <div
                            className={`
                                    ${colorOptionCls} bg-gradient-to-r from-pink-940 to-blue-960 mx-3 ${
                                cardColor === bankingCardColorEnum.purple &&
                                "drop-shadow-lg border-8"
                            }
                                `}
                            onClick={() =>
                                setCardColor(bankingCardColorEnum.purple)
                            }
                        ></div>
                        <div
                            className={`
                                    ${colorOptionCls} bg-gradient-to-r from-red-950 to-yellow-950 ${
                                cardColor === bankingCardColorEnum.orange &&
                                "drop-shadow-lg border-8"
                            }
                                `}
                            onClick={() =>
                                setCardColor(bankingCardColorEnum.orange)
                            }
                        ></div>
                    </div>
                </div>
                <div
                    className={"flex items-center justify-center my-8 lg:my-0"}
                >
                    <Button
                        type={"button"}
                        className={"flex items-center"}
                        onClick={generateCardHandler}
                    >
                        <RegularSubtitle>Generate</RegularSubtitle>
                        <Icon name={"secureIcon"} className={"ml-5"} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default GenerateCardPage;
