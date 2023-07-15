import React, { ChangeEvent, FC, useRef, useState } from "react";
import styles from "./EditProfileModal.module.scss";
import Modal from "../Modal/Modal";
import { RegularSubtitle } from "../Typography/Typography";
import { ProfileInterface } from "../ProfileCard/ProfileCard";
import Input from "../Input/Input";
import Button from "../Button/Button";
import axios from "axios";
import * as process from "process";

interface EditProfileModalProps extends ProfileInterface {
    onClose: () => void;
    refetchData: () => void;
}

const EditProfileModal: FC<EditProfileModalProps> = (
    props: EditProfileModalProps
) => {
    const { _id, avatarImg, email, fullName, refetchData, onClose } = props;

    const [fullNameState, setFullNameState] = useState(fullName);
    const [avatarImgState, setAvatarImgState] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(avatarImg);
    const [emailState, setEmailState] = useState(email);
    const [loadingUpload, setLoadingUpload] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const changeFullNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFullNameState(e.target.value);
    };

    const changeAvatarHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setAvatarImgState(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const changeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailState(e.target.value); // fixed here
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const BASE_URL_SIMPLE = process.env.REACT_APP_BASE_URL_SIMPLE;

    const uploadImageHandler = async () => {
        try {
            if (avatarImgState) {
                setLoadingUpload(true);
                const formData = new FormData();
                formData.append("image", avatarImgState);

                const response = await axios.post(
                    `${process.env.REACT_APP_BASE_URL}/image/upload`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );

                if (response.status === 200) {
                    console.log(
                        `${BASE_URL_SIMPLE}/upload/${response.data.data.filename}`
                    );
                    setPreviewUrl(
                        `${BASE_URL_SIMPLE}/uploads/${response.data.data.filename}`
                    );
                    setLoadingUpload(false);
                }
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
                avatarImg: previewUrl,
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
            <div className={"flex justify-around items-center my-10"}>
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={changeAvatarHandler}
                    style={{ display: "none" }}
                />
                {previewUrl && (
                    <img
                        src={previewUrl}
                        alt="Preview"
                        onClick={handleClick}
                        className={"w-40 h-40 rounded-full object-cover"}
                    />
                )}
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
