import { friendItem } from "../components/FriendsCard/FriendsCard";

const friendIdDeceider = (item: friendItem): string => {
    if (item.recipientId._id === localStorage.getItem("userId")) {
        return "requesterId";
    }
    return "recipientId";
};

export default friendIdDeceider;
