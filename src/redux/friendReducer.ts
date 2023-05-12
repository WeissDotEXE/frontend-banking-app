import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    friends: [],
    loading: true,
    error: null
};

const userId = localStorage.getItem("userId");
const BASE_LOGIN_URL = process.env.REACT_APP_BASE_URL;
const api = `${BASE_LOGIN_URL}/friends/getFriends/${userId}`;


const friendsSlice = createSlice({
    name: "friends",
    initialState,
    reducers: {
        getFriendsStart: (state) => {
            state.loading = true;
        },
        setLoadingFalse: (state) => {
            state.loading = false;
        },
        getFriendsSuccess: (state, action) => {
            state.friends = action.payload;
            state.loading = false;
        },
        getFriendsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { getFriendsStart, getFriendsSuccess, getFriendsFailure, setLoadingFalse } = friendsSlice.actions;

export const fetchFriends = () => async (dispatch: any) => {
    try {
        const response = await axios.get(api);
        dispatch(getFriendsSuccess(response.data.data));
    } catch (error) {
        dispatch(getFriendsFailure(error));
    }
};

export const deleteFriendNotification = (notificationId: string, friendDocumentId: string) => async (dispatch: any) => {
    dispatch(getFriendsStart());
    try {
        const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/notification//declineFriendRequest`,
            { data: { notificationId, friendDocumentId } });
        if (response.status === 204) {
            const friendListResponse = await axios.get(api);
            dispatch(getFriendsSuccess(friendListResponse.data.data));
        }
    } catch (error) {
        dispatch(getFriendsFailure(error));
    }
};

export const acceptFriend = (friendId: string) => async (dispatch: Dispatch) => {
    dispatch(getFriendsStart());
    try {
        const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/friends/acceptFriendRequest/${userId}`,
            { requesterId: friendId });
        console.log(response);
        if (response.status === 200) {
            const friendListResponse = await axios.get(api);
            dispatch(getFriendsSuccess(friendListResponse.data.data));
        }
    } catch (error) {
        dispatch(getFriendsFailure(error));
    }
};

export default friendsSlice.reducer;