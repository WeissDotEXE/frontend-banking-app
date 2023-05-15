import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { userDataInterface } from "../Home/Home";
import { RegularSubtitle } from "../../components/Typography/Typography";
import cn from "classnames";
import styles from "./SeachUsersPage.module.scss";
import SearchUserItem from "../../components/SearchUserItem/SearchUserItem";


const SearchUsersPage = () => {

    const { fullName } = useParams();
    const baseLink = process.env.REACT_APP_BASE_URL;
    const [users, setUsers] = useState<userDataInterface[]>();
    const [isLoading, setIsLoading] = useState(true);

    const rootCls = cn(styles.searchUsersPage, "px-20", "mt-10");

    const getUsers = async () => {
        try {
            const response = await axios.get(`${baseLink}/searchusers?fullName=${fullName}`);
            setUsers(response.data.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            {isLoading ? <div className={"w-full h-full"}>Loading...</div> :
                <div className={rootCls}>
                    <RegularSubtitle position={"text-start"} color={"white-950"} bold={true}>
                        Search result for {fullName}</RegularSubtitle>
                    <div>
                        {users && users.map((item: userDataInterface, index: number) => {
                                return <SearchUserItem key={index} _id={item._id} fullName={item.fullName}
                                                       email={item.email}
                                                       avatarImg={item.avatarImg} joinDate={item.joinDate} />;
                            }
                        )})
                    </div>
                </div>
            }
        </div>
    );
};

export default SearchUsersPage;
;