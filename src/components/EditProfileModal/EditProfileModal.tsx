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

    const [avatarImgState, setAvatarImgState] = useState<File | null>(null);
    const [userData, setUserData] = useState({
        fullName,
        avatarImg,
        email,
    });
    const [loadingUpload, setLoadingUpload] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [hasUploaded, setHasUploaded] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    //function for changing values for name & email
    const changeUserDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const changeAvatarHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setAvatarImgState(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setUserData((prev) => ({
                    ...prev,
                    avatarImg: reader.result as string,
                }));
            };
            reader.readAsDataURL(file);
        }
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
                    setUserData((prev) => ({
                        ...prev,
                        avatarImg: `${BASE_URL_SIMPLE}/uploads/${response.data.data.filename}`,
                    }));
                    setHasUploaded(true);
                    setStatusMessage("Image uploaded");
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
            const response = await axios.patch(URL, userData);

            if (response.status === 200) {
                refetchData();
                onClose();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const closeHandler = async () => {
        // Find the position of "image" in the string
        const indexOfResultUserData = userData.avatarImg.indexOf("image");
        let resultUserData;

        // Check if "image" is found in the string
        if (indexOfResultUserData !== -1) {
            resultUserData = userData.avatarImg.substring(
                indexOfResultUserData
            );
        }
        if (hasUploaded) {
            try {
                const URL = `${process.env.REACT_APP_BASE_URL}/image/delete/${resultUserData}`;
                const response = await axios.delete(URL);
                if (response.status === 200) {
                    onClose();
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            onClose();
        }
    };

    return (
        <Modal onClose={closeHandler}>
            <RegularSubtitle>Edit Profile</RegularSubtitle>
            <Input
                type={"text"}
                placeholder={"fullName"}
                label={"Full Name"}
                value={userData.fullName}
                name={"fullName"}
                onChange={changeUserDataHandler}
            />
            <Input
                type={"text"}
                placeholder={"email"}
                label={"Email"}
                value={userData.email}
                name={"email"}
                onChange={changeUserDataHandler}
            />
            <div className={"flex justify-around items-center my-10"}>
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={changeAvatarHandler}
                    style={{ display: "none" }}
                />
                {userData.avatarImg && (
                    <img
                        src={userData.avatarImg}
                        alt="Preview"
                        onClick={handleClick}
                        className={"w-40 h-40 rounded-full object-cover"}
                    />
                )}
                <div>
                    <Button
                        type={"button"}
                        onClick={uploadImageHandler}
                        disable={loadingUpload}
                    >
                        Upload
                    </Button>
                    <RegularSubtitle className={"text-green-600 text-lg"}>
                        {statusMessage}
                    </RegularSubtitle>
                </div>
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
