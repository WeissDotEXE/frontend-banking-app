import React, { ChangeEvent, FC, useRef, useState } from "react";
import styles from "./EditProfileModal.module.scss";
import Modal from "../Modal/Modal";
import { RegularSubtitle } from "../Typography/Typography";
import { ProfileInterface } from "../ProfileCard/ProfileCard";
import Input from "../Input/Input";
import Button from "../Button/Button";
import axios from "axios";
import * as process from "process";
import { Buffer } from "buffer";

interface EditProfileModalProps extends ProfileInterface {
    onClose: () => void;
    refetchData: () => void;
}

const EditProfileModal: FC<EditProfileModalProps> = (
    props: EditProfileModalProps
) => {
    const { _id, avatarImg, email, fullName, refetchData, onClose } = props;

    const [fullNameState, setFullNameState] = useState(fullName);
    const [avatarImgState, setAvatarImgState] = useState<
        string | ArrayBuffer | null
    >(avatarImg);
    const [emailState, setEmailState] = useState(email);
    const [loadingUpload, setLoadingUpload] = useState(false);

    const changeFullNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFullNameState(e.target.value);
    };

    const changeAvatarHandler = (e: ChangeEvent<HTMLInputElement>) => {
        //@ts-ignore
        setAvatarImgState(e.target.files[0]);
    };

    const changeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setAvatarImgState(e.target.value);
    };

    const fileInputRef = useRef(null);
    const handleClick = () => {
        // @ts-ignore
        fileInputRef.current.click();
    };

    const uploadImageHandler = async () => {
        try {
            setLoadingUpload(true);
            const response = await axios.post(
                `${process.env.REACT_APP_BASE_URL}/imageUpload/`,
                { image: avatarImgState }
            );
            if (response.status === 200) {
                setAvatarImgState(response.data.filename);
                setLoadingUpload(false);
            }
        } catch (error) {
            console.log(error);
            setLoadingUpload(false);
        }
    };

    const submitHandler = async () => {
        try {
            const URL = `${process.env.REACT_APP_BASE_URL}/user/editprofile/${_id}`;
            const response = await axios.patch(URL, {
                fullName: fullNameState,
                avatarImg: "image-1689171193655.jpeg",
                email: emailState,
            });

            if (response.status === 200) {
                refetchData();
                onClose();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Modal onClose={onClose}>
            <RegularSubtitle>Edit Profile</RegularSubtitle>
            <Input
                type={"text"}
                placeholder={"fullName"}
                label={"Full Name"}
                value={fullNameState}
                name={"fullName"}
                onChange={changeFullNameHandler}
            />
            <Input
                type={"text"}
                placeholder={"email"}
                label={"Email"}
                value={emailState}
                name={"email"}
                onChange={changeEmailHandler}
            />
            <div className={"flex justify-around items-center"}>
                <img
                    // @ts-ignore
                    src={avatarImgState}
                    alt="Image Preview"
                    onClick={handleClick}
                    className={
                        "cursor-pointer rounded-full w-44 h-44 object-cover my-8"
                    }
                />
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={changeAvatarHandler}
                    className={"hidden"}
                />
                <Button
                    type={"button"}
                    onClick={uploadImageHandler}
                    disable={loadingUpload}
                >
                    Upload
                </Button>
            </div>
            <div className={"flex justify-center"}>
                <Button type={"button"} onClick={submitHandler}>
                    Submit
                </Button>
            </div>
        </Modal>
    );
};

export default EditProfileModal;
