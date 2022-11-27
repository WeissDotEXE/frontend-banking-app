import colors from "colors.module.scss";

type IconTypes = {
    name: IconNames;
    color?: string;
    stroke?: string;
    className?: string;
    onClick?: () => void;
};

export type IconNames =
    | "addIcon"
    | "avatarIcon"
    | "cardIcon"
    | "cardSimIcon"
    | "closeIcon"
    | "deleteIcon"
    | "downloadIcon"
    | "dropDownIcon"
    | "homeIcon"
    | "infoIcon"
    | "mastercardIcon"
    | "notificationIcon"
    | "searchIcon"
    | "visaIcon";

type IconProps = { color?: string; stroke?: string; onClick?: () => void };

const getIcon = (
    name: IconNames,
    color?: string,
    stroke?: string,
    onClick?: () => void
) => {
    switch (name) {
        case "addIcon":
            return <AddIcon color={color} onClick={onClick} />;
        case "avatarIcon":
            return <AvatarIcon color={color} onClick={onClick} />;
        case "cardIcon":
            return <CardIcon color={color} onClick={onClick} />;
        case "cardSimIcon":
            return <CardSimIcon />;
        case "closeIcon":
            return <CloseIcon color={color} onClick={onClick} />;
        case "deleteIcon":
            return <DeleteIcon color={color} onClick={onClick} />;
        case "downloadIcon":
            return <DownloadIcon color={color} onClick={onClick} />;
        case "dropDownIcon":
            return <DropDownIcon color={color} onClick={onClick} />;
        case "homeIcon":
            return <HomeIcon color={color} onClick={onClick} />;
        case "infoIcon":
            return <InfoIcon color={color} onClick={onClick} />;
        case "mastercardIcon":
            return <MastercardIcon />;
        case "notificationIcon":
            return <NotificationIcon color={color} onClick={onClick} />;
        case "searchIcon":
            return <SearchIcon color={color} onClick={onClick} />;
        case "visaIcon":
            return <VisaIcon />;
    }
};

export const Icon = ({
    name,
    color,
    className = "icon",
    stroke,
    onClick,
}: IconTypes) => {
    const component = getIcon(name, color, stroke);
    return (
        <div
            style={{ display: "flex", justifyContent: "center" }}
            className={className}
            onClick={onClick}
        >
            {component}
        </div>
    );
};

const AddIcon = ({ color = colors.black }: IconProps) => {
    return (
        <svg
            width="127"
            height="127"
            viewBox="0 0 127 127"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M21.1668 116.417H84.6668V105.833H21.1668V42.3333H10.5835V105.833C10.5835 111.67 15.3301 116.417 21.1668 116.417Z"
                fill={color}
            />
            <path
                d="M105.833 10.5833H42.3333C36.4966 10.5833 31.75 15.3299 31.75 21.1666V84.6666C31.75 90.5033 36.4966 95.2499 42.3333 95.2499H105.833C111.67 95.2499 116.417 90.5033 116.417 84.6666V21.1666C116.417 15.3299 111.67 10.5833 105.833 10.5833ZM95.25 58.2083H79.375V74.0833H68.7917V58.2083H52.9167V47.6249H68.7917V31.7499H79.375V47.6249H95.25V58.2083Z"
                fill={color}
            />
        </svg>
    );
};

const AvatarIcon = ({ color = colors.black }: IconProps) => {
    return (
        <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_822_2)">
                <path
                    d="M30.61 24.52C29.0031 22.779 27.0532 21.3896 24.8829 20.4393C22.7127 19.489 20.3692 18.9984 18 18.9984C15.6308 18.9984 13.2873 19.489 11.1171 20.4393C8.94681 21.3896 6.99685 22.779 5.39 24.52C5.14192 24.7943 5.00314 25.1501 5 25.52V31.52C5.00526 31.9143 5.16561 32.2907 5.44635 32.5677C5.72709 32.8447 6.10562 33 6.5 33H29.5C29.8978 33 30.2794 32.8419 30.5607 32.5606C30.842 32.2793 31 31.8978 31 31.5V25.5C30.992 25.137 30.8536 24.7891 30.61 24.52V24.52Z"
                    fill={color}
                />
                <path
                    d="M18 17C21.866 17 25 13.866 25 10C25 6.13401 21.866 3 18 3C14.134 3 11 6.13401 11 10C11 13.866 14.134 17 18 17Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_822_2">
                    <rect width="36" height="36" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

const CardIcon = ({ color = colors.white }: IconProps) => {
    return (
        <svg
            width="55"
            height="55"
            viewBox="0 0 55 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M49.8438 8.59375H5.15625C4.20557 8.59375 3.4375 9.36182 3.4375 10.3125V18.9062H51.5625V10.3125C51.5625 9.36182 50.7944 8.59375 49.8438 8.59375ZM3.4375 44.6875C3.4375 45.6382 4.20557 46.4062 5.15625 46.4062H49.8438C50.7944 46.4062 51.5625 45.6382 51.5625 44.6875V23.6328H3.4375V44.6875ZM34.5361 34.8047C34.5361 34.5684 34.7295 34.375 34.9658 34.375H43.8281C44.0645 34.375 44.2578 34.5684 44.2578 34.8047V38.6719C44.2578 38.9082 44.0645 39.1016 43.8281 39.1016H34.9658C34.7295 39.1016 34.5361 38.9082 34.5361 38.6719V34.8047Z"
                fill={color}
            />
        </svg>
    );
};

const CardSimIcon = () => {
    return (
        <svg
            width="49"
            height="39"
            viewBox="0 0 49 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                width="48.4412"
                height="38.0241"
                rx="8.9"
                fill="url(#paint0_linear_790_44)"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.61503 0.012234C7.35151 0.151924 6.81715 0.25425 6.12307 0.489381C5.60594 0.664628 5.10623 0.896485 5.13883 0.946096C5.15517 0.97093 5.13217 0.978154 5.08773 0.962125C4.99172 0.92747 4.13959 1.3988 3.63111 1.76781C3.10456 2.14991 2.33997 2.8649 2.38261 2.93539C2.40284 2.9688 2.3975 2.97755 2.37078 2.95486C2.31163 2.90452 2.03403 3.19564 2.07775 3.26213C2.09486 3.28814 2.08309 3.30242 2.05169 3.2939C1.99164 3.27759 1.43939 3.94675 1.43939 4.03575C1.43939 4.06414 1.41633 4.09581 1.38817 4.10619C1.23415 4.1628 0.446626 5.79946 0.504812 5.94202C0.525348 5.99231 0.511657 6.0067 0.467763 5.98119C0.421286 5.95422 0.410898 5.97199 0.436538 6.0347C0.457615 6.08634 0.454012 6.12862 0.428492 6.12862C0.366823 6.12862 0.131258 7.06491 0.0593216 7.59607C0.0246743 7.85168 0.00125593 12.372 0.000115035 19.0071C-0.00162633 29.3784 0.0148267 30.6195 0.15888 30.9624C0.178455 31.0089 0.205236 31.1309 0.218447 31.2336C0.270027 31.634 0.830028 33.0886 0.962192 33.1654C0.995037 33.1845 1.03233 33.249 1.04512 33.3088C1.08763 33.5078 1.38835 33.9552 1.45398 33.917C1.49259 33.8945 1.50033 33.9067 1.47343 33.9475C1.39489 34.0671 2.47112 35.3435 2.59151 35.2735C2.62003 35.257 2.63589 35.2771 2.62682 35.3182C2.61775 35.3593 2.6461 35.3859 2.68981 35.3774C2.73358 35.3689 2.75448 35.3845 2.73629 35.4122C2.69245 35.4788 2.90736 35.6593 2.96543 35.6047C2.99029 35.5813 3.00163 35.5882 2.99059 35.6198C2.94909 35.7391 3.56902 36.2366 3.67939 36.1725C3.71295 36.153 3.72124 36.1655 3.69806 36.2008C3.57659 36.3855 6.31366 37.7275 6.54172 37.5951C6.57564 37.5754 6.60345 37.5813 6.60345 37.6083C6.60345 37.6643 6.96325 37.7574 7.69186 37.89C8.1457 37.9726 9.71593 37.9836 23.807 38.0027C34.9458 38.0179 39.6085 38.006 40.0798 37.9614C40.7765 37.8954 41.62 37.7503 41.6709 37.6877C41.6875 37.6672 41.7686 37.6463 41.8512 37.6412C41.9337 37.636 42.0823 37.6 42.1814 37.5613C42.2805 37.5224 42.3751 37.4875 42.3916 37.4835C42.7418 37.4003 43.7118 36.9761 43.7794 36.8766C43.7996 36.8468 43.8334 36.8247 43.8545 36.8274C43.9588 36.8405 44.0002 36.8233 44.1216 36.7171C44.1939 36.6538 44.253 36.6165 44.253 36.6342C44.253 36.6889 44.9186 36.2072 45.4087 35.798C45.6645 35.5844 45.8562 35.3829 45.8348 35.3502C45.8133 35.3176 45.8224 35.3063 45.8551 35.3253C45.9362 35.3724 46.3712 34.9276 46.81 34.3488C47.2027 33.8307 47.5231 33.3329 47.4638 33.3329C47.4435 33.3329 47.4673 33.295 47.5164 33.2488C47.5947 33.1752 48.0179 32.2248 48.0617 32.0241C48.0707 31.9834 48.0937 31.912 48.1129 31.8654C48.2215 31.6025 48.3412 31.0991 48.3163 31.0097C48.3004 30.9525 48.3097 30.9187 48.337 30.9346C48.3643 30.9505 48.4091 30.7917 48.4365 30.5819C48.4639 30.3721 48.4864 25.1081 48.4864 18.8841C48.4864 8.20421 48.4803 7.54087 48.3783 7.0881C48.2255 6.40941 47.9936 5.70972 47.7799 5.28201C47.679 5.08024 47.5928 4.90245 47.5881 4.88693C47.5317 4.69672 47.4771 4.60879 47.4319 4.63504C47.4016 4.65265 47.3929 4.62781 47.4124 4.57989C47.4325 4.53085 47.4103 4.4792 47.3617 4.46165C47.3143 4.44455 47.2754 4.39974 47.2754 4.36209C47.2754 4.27472 47.0093 3.87151 46.698 3.48738C46.538 3.28984 46.4257 3.19936 46.3668 3.22058C46.2966 3.24593 46.2924 3.23611 46.347 3.1743C46.3999 3.11431 46.397 3.08084 46.3349 3.03236C46.2901 2.99748 46.2358 2.98139 46.2141 2.99669C46.1923 3.01192 46.188 3.00752 46.2045 2.98687C46.2355 2.94798 45.2663 1.99668 45.2303 2.03065C45.219 2.04121 45.1202 1.97071 45.0108 1.87398C44.7909 1.67954 44.5074 1.48837 44.4753 1.51293C44.4639 1.52162 44.4083 1.48516 44.3516 1.43193C44.0373 1.13647 42.2805 0.397214 41.5509 0.25346C40.2438 -0.00419006 41.4222 0.0131937 24.5576 0.00241357C15.8882 -0.00317402 8.71411 0.00128453 8.61503 0.012234ZM40.7368 1.29128C40.9991 1.34315 41.424 1.45141 41.6811 1.53189C41.9382 1.61237 42.1829 1.65956 42.225 1.63676C42.2671 1.61395 42.281 1.61649 42.256 1.6424C42.231 1.66836 42.4271 1.78531 42.692 1.90231C43.2767 2.16064 44.0966 2.65629 44.4601 2.97134C44.6075 3.09901 44.7544 3.18819 44.7867 3.16945C44.8189 3.15077 44.8647 3.16516 44.8886 3.20151C44.9174 3.24519 44.9059 3.25242 44.855 3.22279C44.8034 3.19282 44.7876 3.20393 44.8072 3.25642C44.8233 3.29954 44.8772 3.33188 44.927 3.32822C44.9769 3.3246 45.0145 3.3627 45.0107 3.41288C45.0065 3.46706 45.0461 3.50098 45.1081 3.49641C45.1655 3.49218 45.197 3.51216 45.1782 3.54088C45.1429 3.59445 45.5724 4.07729 45.6378 4.05759C45.6578 4.05156 45.6745 4.07695 45.675 4.11404C45.6757 4.17888 46.0364 4.7162 46.1181 4.77405C46.1991 4.83139 46.7094 5.88841 46.8559 6.30211C47.2197 7.3295 47.2254 7.39898 47.2254 10.8132V13.9456H40.1698C34.302 13.9456 33.0587 13.9322 32.784 13.8662C32.1386 13.711 31.4276 13.3526 30.93 12.9318C30.8186 12.8375 30.7017 12.7674 30.6704 12.7759C30.639 12.7844 30.6295 12.7668 30.6492 12.7369C30.6689 12.707 30.6065 12.5984 30.5106 12.4956C30.234 12.1994 29.92 11.6137 29.7749 11.1236C29.5342 10.3102 29.6135 9.31896 29.9827 8.52733C30.0841 8.31003 30.1829 8.11955 30.2024 8.10403C30.2959 8.02958 30.4954 7.72023 30.4704 7.68846C30.4549 7.6687 30.4582 7.66334 30.4779 7.67666C30.5229 7.70714 30.8916 7.31612 30.8952 7.23389C30.8967 7.20025 30.9345 7.18033 30.979 7.18958C31.0236 7.19884 31.1305 7.14533 31.2165 7.07066C31.3025 6.99593 31.4879 6.87205 31.6283 6.79529C31.7688 6.71853 31.8633 6.63466 31.8385 6.60887C31.8136 6.58313 31.822 6.57737 31.8571 6.59611C31.8922 6.61491 32.0972 6.57009 32.3126 6.49661C32.896 6.29754 33.5135 6.23783 34.9457 6.24189C35.6558 6.24387 36.2841 6.2446 36.3418 6.24353C36.4351 6.24172 36.4469 6.1749 36.4469 5.64887V5.05625H35.1022C33.0965 5.05625 32.4524 5.13927 31.5089 5.51934C31.3524 5.58233 31.239 5.65604 31.2567 5.68308C31.2746 5.71011 31.2529 5.7192 31.2088 5.70328C31.0783 5.65621 29.6644 6.65803 29.7489 6.73749C29.7647 6.75234 29.7107 6.81391 29.629 6.87436C29.5469 6.93504 29.4983 7.01383 29.5205 7.05029C29.5426 7.08663 29.5382 7.09713 29.5107 7.07365C29.4529 7.02432 29.1893 7.37363 28.9461 7.82183C28.1818 9.23063 28.1773 10.9729 28.9344 12.3807C29.2758 13.0156 30.2462 14.081 30.401 13.9911C30.4338 13.972 30.4448 13.9807 30.4253 14.0103C30.3741 14.0881 31.1359 14.5605 31.2271 14.5075C31.2719 14.4814 31.2862 14.4876 31.2629 14.5229C31.2219 14.5852 31.5573 14.7363 32.1535 14.9239C32.6124 15.0684 33.4802 15.1591 34.403 15.1591H35.1259V19.0219C35.1259 21.2959 35.1033 22.8978 35.0709 22.9166C35.0407 22.9342 34.7503 23.0128 34.4254 23.0914C33.7127 23.2637 33.0162 23.5109 33.0592 23.5762C33.0764 23.6024 33.0553 23.6116 33.0123 23.5967C32.906 23.5596 32.2094 23.9353 32.2301 24.0185C32.2392 24.0551 32.2183 24.0686 32.1837 24.0485C32.0501 23.9709 30.7042 24.9888 30.7827 25.1081C30.8038 25.1402 30.7943 25.1509 30.7616 25.132C30.5691 25.0201 29.0259 27.0467 29.1545 27.2424C29.1802 27.2814 29.1747 27.2966 29.142 27.2776C29.1102 27.2591 29.0099 27.4237 28.919 27.6432C28.1011 29.6191 28.1859 31.8044 29.1541 33.6997C29.4763 34.3307 29.7728 34.7557 29.8567 34.707C29.8949 34.6848 29.9025 34.697 29.8759 34.7376C29.8196 34.8231 30.0393 35.0957 30.6352 35.6802C31.1048 36.1407 31.8217 36.7095 31.8251 36.6242C31.8261 36.5989 31.8556 36.6245 31.8906 36.6812C31.9257 36.7378 31.9428 36.7951 31.9287 36.8084C31.9145 36.8217 28.4351 36.8261 24.1967 36.8183L16.4906 36.8039L16.8162 36.5715C17.2964 36.2287 17.6544 35.9218 17.6255 35.8778C17.6115 35.8565 17.6278 35.8022 17.6617 35.7571C17.7098 35.6933 17.7148 35.7001 17.6844 35.788C17.6589 35.8617 17.7394 35.8144 17.9163 35.6516C18.0654 35.5146 18.1708 35.3773 18.1506 35.3466C18.1305 35.3159 18.144 35.3083 18.1807 35.3295C18.2181 35.3513 18.2943 35.2996 18.3546 35.2113C18.4135 35.1249 18.5093 35.0051 18.5674 34.9448C18.6254 34.8847 18.6729 34.8167 18.6729 34.7937C18.6729 34.7707 18.7079 34.7183 18.7506 34.6773C18.8638 34.5688 19.2407 33.9664 19.3801 33.6715C19.6815 33.0336 19.7642 32.8165 19.9066 32.2887C20.4624 30.2286 20.0684 28.0223 18.8313 26.2682C18.6634 26.03 18.5008 25.8498 18.4701 25.8677C18.4394 25.8856 18.4306 25.8752 18.4507 25.8447C18.5015 25.7674 18.1376 25.3652 18.0584 25.4112C18.0229 25.4318 18.0107 25.423 18.0313 25.3916C18.0645 25.3413 17.3699 24.6721 17.0001 24.3982C16.6476 24.1371 15.7881 23.6764 15.7234 23.714C15.6817 23.7382 15.6678 23.7314 15.69 23.6976C15.7542 23.6 14.0573 23.0043 13.7151 23.0043C13.6709 23.0043 13.5725 22.9777 13.4967 22.9452L13.3588 22.8861L13.39 19.0085C13.4072 16.8758 13.4274 15.1308 13.435 15.1308C13.4425 15.1308 13.7522 15.1389 14.1233 15.1487C15.6805 15.1899 16.7864 14.9222 17.8447 14.2478C18.3352 13.9352 18.9379 13.3799 18.8808 13.2931C18.8517 13.2488 18.859 13.2369 18.9006 13.261C18.9735 13.3034 19.3457 12.8182 19.5878 12.3653C20.3631 10.9146 20.3204 9.12024 19.4758 7.66001C19.2442 7.25957 19.1304 7.1306 19.0608 7.18958C19.035 7.21137 19.0321 7.19935 19.0544 7.16288C19.1252 7.04662 18.5946 6.50773 17.9759 6.06755C17.4887 5.72095 17.038 5.50365 16.4098 5.31249C15.7428 5.10953 15.1458 5.05715 13.4939 5.0567L12.0677 5.05625L12.0677 5.66298L12.0676 6.26972L13.4037 6.25149C14.8293 6.23207 15.5825 6.29314 16.1398 6.47335C16.4928 6.58753 17.2027 6.9417 17.2633 7.03398C17.2836 7.06474 17.326 7.07495 17.3575 7.05661C17.3891 7.03826 17.4075 7.04419 17.3984 7.06981C17.3894 7.09538 17.3978 7.11632 17.4171 7.11632C17.4365 7.11632 17.6112 7.29411 17.8054 7.5114C17.9997 7.7287 18.1732 7.91919 18.1911 7.93471C18.274 8.00684 18.5546 8.56119 18.6624 8.86597C19.1345 10.2009 18.845 11.5692 17.8618 12.6509C17.7158 12.8116 17.6156 12.9631 17.6392 12.9878C17.6628 13.0123 17.6529 13.0168 17.6171 12.9976C17.5812 12.9784 17.4062 13.0657 17.228 13.1916C16.6133 13.6257 16.0804 13.8197 15.2403 13.9154C14.8458 13.9603 12.6973 13.9742 7.98453 13.9624L1.28927 13.9456V10.8132C1.28927 7.40417 1.29299 7.35822 1.65682 6.31069C1.81925 5.84308 2.31361 4.88439 2.5801 4.52035C2.67666 4.38839 2.73647 4.26044 2.71305 4.236C2.68957 4.21156 2.70128 4.20818 2.73911 4.2285C2.80918 4.26614 2.91144 4.11454 2.88502 4.0121C2.87704 3.98106 2.88845 3.97254 2.91036 3.99314C2.93228 4.01374 3.04937 3.92485 3.17055 3.7956C3.29178 3.66635 3.43824 3.52739 3.496 3.48681C3.61141 3.40582 3.64318 3.27544 3.53173 3.34018C3.48844 3.36535 3.47877 3.35565 3.50591 3.31439C3.52981 3.27804 3.57587 3.26371 3.60823 3.28256C3.64066 3.30135 3.79414 3.20557 3.94936 3.06972C4.33126 2.73548 4.97923 2.30772 5.47546 2.06226C5.70064 1.9509 5.86415 1.83836 5.83881 1.81223C5.81353 1.78604 5.82409 1.78141 5.86228 1.80196C5.93962 1.84355 6.61419 1.61892 6.57787 1.56367C6.5652 1.54448 6.61311 1.52574 6.68421 1.52213C6.75537 1.51846 7.06251 1.46134 7.36677 1.39513C7.67103 1.32887 8.10337 1.2524 8.32752 1.22519C8.55426 1.19759 15.7283 1.18038 24.4975 1.18631C38.9679 1.19607 40.299 1.20471 40.7368 1.29128ZM12.1278 18.997V22.835H6.69352H1.25924V18.997V15.1591H6.69352H12.1278V18.997ZM47.2554 18.997V22.835H41.8211H36.3869V18.997V15.1591H41.8211H47.2554V18.997ZM13.3888 24.1478C13.9563 24.2604 14.8244 24.5471 15.2352 24.7578C15.4086 24.8467 15.5509 24.9012 15.5514 24.879C15.5519 24.8568 15.5722 24.8652 15.5964 24.8977C15.6207 24.9303 15.7351 25.0176 15.8507 25.0917C15.9663 25.1659 16.2155 25.3507 16.4045 25.5024C16.6082 25.6659 16.7771 25.7616 16.8192 25.7372C16.8602 25.7134 16.8742 25.7201 16.8524 25.7533C16.8317 25.7847 16.9511 25.9474 17.1178 26.1147C17.2846 26.282 17.4905 26.5205 17.5756 26.6447C17.6606 26.7688 17.7464 26.8831 17.7663 26.8987C17.7862 26.9142 17.8403 26.9958 17.8864 27.0802C17.9327 27.1645 17.9931 27.2203 18.0208 27.2042C18.0484 27.1881 18.055 27.2144 18.0354 27.2626C18.0157 27.3108 18.0295 27.3502 18.066 27.3502C18.1026 27.3502 18.127 27.3692 18.1204 27.3925C18.1137 27.4158 18.1637 27.5364 18.2314 27.6606C18.2991 27.7848 18.4051 28.0211 18.4667 28.1858C18.5557 28.4232 18.5889 28.4641 18.6269 28.3833C18.66 28.3128 18.6652 28.3281 18.6436 28.4332C18.6265 28.5166 18.6521 28.7279 18.7006 28.9027C18.749 29.0775 18.8201 29.4835 18.8586 29.8048C18.9781 30.8031 18.7632 32.0821 18.3208 33.0065C18.1678 33.326 17.5806 34.2567 17.4739 34.3488C17.2716 34.5233 16.8246 35.077 16.8579 35.1117C16.8819 35.1366 16.8688 35.1393 16.8286 35.1177C16.7857 35.0945 16.5856 35.2124 16.3411 35.4049C15.6711 35.9328 14.6689 36.4042 13.7405 36.6282C13.0286 36.8 12.0566 36.8477 10.094 36.8074C7.82667 36.7608 7.74915 36.7576 7.77947 36.7115C7.7925 36.6917 7.67865 36.6579 7.52649 36.6365C7.17143 36.5864 5.96268 36.1953 5.68202 36.0397C5.56187 35.973 5.43241 35.9386 5.38947 35.9619C5.34708 35.9849 5.33213 35.9832 5.35627 35.9581C5.41565 35.8964 4.62489 35.4135 4.53944 35.4594C4.50221 35.4793 4.48978 35.4768 4.51176 35.4538C4.53374 35.4307 4.37161 35.2703 4.15148 35.0975C3.93135 34.9246 3.60997 34.641 3.43734 34.4672C3.2647 34.2934 3.09807 34.1512 3.06703 34.1512C3.03604 34.1512 2.98812 34.1281 2.96056 34.0999C2.93102 34.0695 2.94447 34.067 2.99341 34.0936C3.05039 34.1247 3.06679 34.1143 3.04595 34.0603C3.02926 34.0172 2.98524 33.9883 2.94807 33.996C2.9109 34.0038 2.887 33.9911 2.89493 33.9678C2.90286 33.9446 2.75424 33.7046 2.56467 33.4346C2.3751 33.1646 2.22 32.9291 2.22 32.9114C2.22 32.8936 2.15209 32.778 2.0691 32.6544C1.98618 32.5309 1.93279 32.4298 1.95057 32.4298C1.96834 32.4298 1.94498 32.36 1.89869 32.2746C1.73752 31.9775 1.50262 31.239 1.38132 30.6482C1.26801 30.0962 1.25924 29.8374 1.25924 27.0346V24.0155L7.09884 24.037C12.1333 24.0556 13.0005 24.0709 13.3888 24.1478ZM47.255 26.9692C47.2548 29.2518 47.2351 30.0405 47.1679 30.4591C47.0743 31.0429 46.8085 31.8848 46.5405 32.4462C46.4485 32.6389 46.368 32.8151 46.3616 32.8375C46.3552 32.8599 46.2024 33.0843 46.0221 33.3362C45.8417 33.588 45.6942 33.8036 45.6942 33.8154C45.6942 33.8453 45.5215 34.0227 44.9853 34.5441C44.7312 34.7912 44.5323 35.0197 44.5433 35.052C44.5543 35.0843 44.5438 35.0924 44.52 35.0701C44.4751 35.0279 44.2615 35.1546 44.0279 35.3621C43.9536 35.428 43.8928 35.467 43.8928 35.4487C43.8928 35.4304 43.8006 35.4814 43.6881 35.5621C43.0812 35.9972 41.7296 36.5157 40.7282 36.6976C40.0436 36.8219 36.5953 36.8765 35.7263 36.7767C35 36.6934 34.2928 36.5309 33.8764 36.3517C33.6969 36.2745 33.5276 36.2113 33.5 36.2113C33.4724 36.2113 33.349 36.147 33.2257 36.0683C33.1023 35.9896 32.9646 35.9385 32.9196 35.9547C32.8686 35.9731 32.854 35.9596 32.8808 35.9189C32.9098 35.8748 32.8903 35.8656 32.8208 35.8907C32.7641 35.9111 32.7318 35.9064 32.749 35.8803C32.7662 35.8542 32.6548 35.7481 32.5014 35.6446C32.348 35.5411 32.2422 35.4863 32.2662 35.5228C32.2949 35.5663 32.2785 35.5778 32.2186 35.5563C32.1684 35.5381 32.1332 35.5045 32.1404 35.4815C32.1476 35.4586 31.9176 35.2191 31.6293 34.9494C29.9219 33.3523 29.2486 31.089 29.8218 28.8741C29.9212 28.4904 30.3241 27.5275 30.4779 27.3063C30.527 27.2355 30.5485 27.1491 30.5255 27.1141C30.4999 27.0751 30.5107 27.0662 30.5535 27.0911C30.5938 27.1145 30.6401 27.0885 30.6634 27.0292C30.6856 26.9729 30.7193 26.9142 30.7384 26.8987C30.8838 26.7806 31.1016 26.4337 31.0664 26.3762C31.0427 26.3376 31.0455 26.3249 31.0726 26.3479C31.1357 26.4017 31.2924 26.2816 31.2477 26.2136C31.2291 26.1853 31.2361 26.1687 31.2634 26.1768C31.3337 26.1977 32.0969 25.4897 32.077 25.4222C32.0679 25.3915 32.0879 25.3823 32.1215 25.4018C32.195 25.4445 32.761 25.0474 32.7375 24.9696C32.7284 24.9395 32.7487 24.9309 32.7825 24.9506C32.8503 24.99 33.4444 24.6965 33.4445 24.6236C33.4445 24.5985 33.4708 24.5932 33.5029 24.6118C33.5349 24.6304 33.6373 24.6086 33.7304 24.5633C34.0737 24.3965 34.8976 24.1803 35.469 24.1071C35.9207 24.0493 37.3516 24.0305 41.656 24.026L47.2554 24.0202L47.255 26.9692ZM47.1353 33.8751C47.1353 33.9218 47.0187 33.9482 46.992 33.9076C46.9746 33.8812 46.9998 33.8596 47.0479 33.8596C47.096 33.8596 47.1353 33.8666 47.1353 33.8751ZM30.3105 34.83C30.292 34.8474 30.2584 34.8161 30.2359 34.7604C30.2033 34.68 30.2102 34.6735 30.2695 34.7288C30.3106 34.7671 30.329 34.8127 30.3105 34.83Z"
                fill="url(#paint1_linear_790_44)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_790_44"
                    x1="-10.8915"
                    y1="10.5622"
                    x2="45.5172"
                    y2="20.5315"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#FFFDE7" />
                    <stop offset="1" stop-color="#C9AD77" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_790_44"
                    x1="24.2432"
                    y1="0"
                    x2="24.2432"
                    y2="38.009"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#A9A950" />
                    <stop offset="1" stop-color="#A58849" />
                </linearGradient>
            </defs>
        </svg>
    );
};

const CloseIcon = ({ color = colors.black }: IconProps) => {
    return (
        <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_509_229)">
                <path
                    d="M19.41 17.9999L27.7 9.70994C27.8638 9.51864 27.9494 9.27256 27.9397 9.02089C27.93 8.76921 27.8257 8.53047 27.6476 8.35238C27.4695 8.17428 27.2307 8.06995 26.9791 8.06023C26.7274 8.05051 26.4813 8.13612 26.29 8.29994L18 16.5899L9.71 8.28994C9.5217 8.10164 9.26631 7.99585 9 7.99585C8.7337 7.99585 8.47831 8.10164 8.29 8.28994C8.1017 8.47825 7.99591 8.73364 7.99591 8.99994C7.99591 9.26624 8.1017 9.52164 8.29 9.70994L16.59 17.9999L8.29 26.2899C8.18532 26.3796 8.1003 26.4899 8.04028 26.614C7.98026 26.738 7.94652 26.8732 7.94121 27.0109C7.93589 27.1486 7.95909 27.2859 8.00937 27.4143C8.05964 27.5426 8.1359 27.6591 8.23335 27.7566C8.33081 27.854 8.44736 27.9303 8.57568 27.9806C8.70401 28.0309 8.84134 28.0541 8.97906 28.0487C9.11678 28.0434 9.25191 28.0097 9.37597 27.9497C9.50004 27.8896 9.61036 27.8046 9.7 27.6999L18 19.4099L26.29 27.6999C26.4813 27.8638 26.7274 27.9494 26.9791 27.9397C27.2307 27.9299 27.4695 27.8256 27.6476 27.6475C27.8257 27.4694 27.93 27.2307 27.9397 26.979C27.9494 26.7273 27.8638 26.4812 27.7 26.2899L19.41 17.9999Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_509_229">
                    <rect width="36" height="36" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

const DeleteIcon = ({ color = colors.black }: IconProps) => {
    return (
        <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_509_229)">
                <path
                    d="M19.41 17.9999L27.7 9.70994C27.8638 9.51864 27.9494 9.27256 27.9397 9.02089C27.93 8.76921 27.8257 8.53047 27.6476 8.35238C27.4695 8.17428 27.2307 8.06995 26.9791 8.06023C26.7274 8.05051 26.4813 8.13612 26.29 8.29994L18 16.5899L9.71 8.28994C9.5217 8.10164 9.26631 7.99585 9 7.99585C8.7337 7.99585 8.47831 8.10164 8.29 8.28994C8.1017 8.47825 7.99591 8.73364 7.99591 8.99994C7.99591 9.26624 8.1017 9.52164 8.29 9.70994L16.59 17.9999L8.29 26.2899C8.18532 26.3796 8.1003 26.4899 8.04028 26.614C7.98026 26.738 7.94652 26.8732 7.94121 27.0109C7.93589 27.1486 7.95909 27.2859 8.00937 27.4143C8.05964 27.5426 8.1359 27.6591 8.23335 27.7566C8.33081 27.854 8.44736 27.9303 8.57568 27.9806C8.70401 28.0309 8.84134 28.0541 8.97906 28.0487C9.11678 28.0434 9.25191 28.0097 9.37597 27.9497C9.50004 27.8896 9.61036 27.8046 9.7 27.6999L18 19.4099L26.29 27.6999C26.4813 27.8638 26.7274 27.9494 26.9791 27.9397C27.2307 27.9299 27.4695 27.8256 27.6476 27.6475C27.8257 27.4694 27.93 27.2307 27.9397 26.979C27.9494 26.7273 27.8638 26.4812 27.7 26.2899L19.41 17.9999Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_509_229">
                    <rect width="36" height="36" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

const DownloadIcon = ({ color = colors.white }: IconProps) => {
    return (
        <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19.7539 25.8203C19.7831 25.8577 19.8205 25.8879 19.8631 25.9086C19.9058 25.9294 19.9526 25.9402 20 25.9402C20.0474 25.9402 20.0942 25.9294 20.1369 25.9086C20.1795 25.8879 20.2169 25.8577 20.2461 25.8203L24.6211 20.2852C24.7812 20.082 24.6367 19.7812 24.375 19.7812H21.4805V6.5625C21.4805 6.39062 21.3398 6.25 21.168 6.25H18.8242C18.6523 6.25 18.5117 6.39062 18.5117 6.5625V19.7773H15.625C15.3633 19.7773 15.2188 20.0781 15.3789 20.2812L19.7539 25.8203ZM34.2969 24.4531H31.9531C31.7812 24.4531 31.6406 24.5938 31.6406 24.7656V30.7812H8.35938V24.7656C8.35938 24.5938 8.21875 24.4531 8.04688 24.4531H5.70312C5.53125 24.4531 5.39062 24.5938 5.39062 24.7656V32.5C5.39062 33.1914 5.94922 33.75 6.64062 33.75H33.3594C34.0508 33.75 34.6094 33.1914 34.6094 32.5V24.7656C34.6094 24.5938 34.4688 24.4531 34.2969 24.4531Z"
                fill={color}
            />
        </svg>
    );
};

const DropDownIcon = ({ color = colors.black }: IconProps) => {
    return (
        <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M21 3.5C11.34 3.5 3.5 11.34 3.5 21C3.5 30.66 11.34 38.5 21 38.5C30.66 38.5 38.5 30.66 38.5 21C38.5 11.34 30.66 3.5 21 3.5ZM21 24.5L14 17.5H28L21 24.5Z"
                fill={color}
            />
        </svg>
    );
};

const HomeIcon = ({ color = colors.white }: IconProps) => {
    return (
        <svg
            width="49"
            height="49"
            viewBox="0 0 49 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M45.2915 24.165L25.5815 4.46932C25.4395 4.32713 25.271 4.21431 25.0854 4.13734C24.8998 4.06037 24.7009 4.02075 24.5 4.02075C24.2991 4.02075 24.1002 4.06037 23.9146 4.13734C23.7291 4.21431 23.5605 4.32713 23.4186 4.46932L3.70851 24.165C3.13429 24.7392 2.8089 25.5192 2.8089 26.3327C2.8089 28.0219 4.18224 29.3952 5.8714 29.3952H7.94816V43.4492C7.94816 44.2962 8.63243 44.9805 9.47941 44.9805H21.4375V34.2617H26.7969V44.9805H39.5206C40.3676 44.9805 41.0519 44.2962 41.0519 43.4492V29.3952H43.1286C43.9421 29.3952 44.7221 29.0746 45.2963 28.4956C46.4878 27.2993 46.4878 25.3613 45.2915 24.165V24.165Z"
                fill={color}
            />
        </svg>
    );
};

const InfoIcon = ({ stroke = colors.white }: IconProps) => {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                stroke={stroke} //"#F2F4F7"
                strokeWidth="2"
            />
            <path
                d="M11 6H11.01"
                stroke={stroke} //"#F2F4F7"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                d="M9 10H11V15M9 15H13"
                stroke={stroke} //"#F2F4F7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

const MastercardIcon = () => {
    return (
        <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17.5 47.5C27.165 47.5 35 39.665 35 30C35 20.335 27.165 12.5 17.5 12.5C7.83502 12.5 0 20.335 0 30C0 39.665 7.83502 47.5 17.5 47.5Z"
                fill="#EA001B"
            />
            <path
                d="M42.5 47.5C52.165 47.5 60 39.665 60 30C60 20.335 52.165 12.5 42.5 12.5C32.835 12.5 25 20.335 25 30C25 39.665 32.835 47.5 42.5 47.5Z"
                fill="#FFA200"
                fill-opacity="0.8"
            />
        </svg>
    );
};

const NotificationIcon = ({ color = colors.white }: IconProps) => {
    return (
        <svg
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_705_6)">
                <path
                    d="M46.5375 39.8508L46.0559 39.4258C44.6894 38.2084 43.4933 36.8122 42.5 35.275C41.4152 33.1536 40.765 30.8369 40.5875 28.4608V21.4625C40.5969 17.7305 39.2431 14.1234 36.7806 11.3191C34.318 8.51484 30.9162 6.70631 27.2142 6.23334V4.40584C27.2142 3.90425 27.0149 3.4232 26.6603 3.06852C26.3056 2.71384 25.8245 2.51459 25.3229 2.51459C24.8214 2.51459 24.3403 2.71384 23.9856 3.06852C23.631 3.4232 23.4317 3.90425 23.4317 4.40584V6.26167C19.7629 6.76873 16.4022 8.5882 13.9719 11.3831C11.5417 14.1779 10.2067 17.7588 10.2142 21.4625V28.4608C10.0368 30.8369 9.38655 33.1536 8.3017 35.275C7.32544 36.8083 6.14864 38.2043 4.80253 39.4258L4.32086 39.8508V43.8458H46.5375V39.8508Z"
                    fill={color}
                />
                <path
                    d="M21.7033 45.3333C21.8275 46.2313 22.2725 47.054 22.956 47.6495C23.6396 48.245 24.5155 48.5731 25.4221 48.5731C26.3286 48.5731 27.2045 48.245 27.8881 47.6495C28.5716 47.054 29.0166 46.2313 29.1408 45.3333H21.7033Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_705_6">
                    <rect width="51" height="51" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

const SearchIcon = ({ color = colors.white }: IconProps) => {
    return (
        <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M26.25 26.25L20.6425 20.6325M23.75 13.125C23.75 15.9429 22.6306 18.6454 20.638 20.638C18.6454 22.6306 15.9429 23.75 13.125 23.75C10.3071 23.75 7.60456 22.6306 5.61199 20.638C3.61942 18.6454 2.5 15.9429 2.5 13.125C2.5 10.3071 3.61942 7.60456 5.61199 5.61199C7.60456 3.61942 10.3071 2.5 13.125 2.5C15.9429 2.5 18.6454 3.61942 20.638 5.61199C22.6306 7.60456 23.75 10.3071 23.75 13.125V13.125Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
};

const VisaIcon = () => {
    return (
        <svg
            width="79"
            height="26"
            viewBox="0 0 79 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_790_50)">
                <path
                    d="M40.8569 8.27865C40.8118 11.8861 44.024 13.899 46.4437 15.096C48.9297 16.3239 49.7648 17.1114 49.7549 18.2097C49.7364 19.8903 47.7719 20.6321 45.9336 20.6609C42.7263 20.7113 40.8615 19.7819 39.379 19.079L38.2237 24.5669C39.7111 25.2626 42.4653 25.8694 45.3213 25.896C52.0255 25.896 56.4116 22.5367 56.4353 17.3282C56.4615 10.7179 47.4281 10.3521 47.4898 7.39746C47.5111 6.50156 48.3532 5.54552 50.1986 5.30243C51.1121 5.17964 53.6336 5.08566 56.4924 6.422L57.6145 1.11236C56.077 0.544117 54.1011 -3.8147e-06 51.641 -3.8147e-06C45.3309 -3.8147e-06 40.8927 3.40506 40.8569 8.27865ZM68.3961 0.457346C67.1719 0.457346 66.1403 1.18221 65.6799 2.29457L56.1033 25.506H62.8025L64.1357 21.7661H72.322L73.0954 25.506H79L73.8474 0.457346H68.3961ZM69.3333 7.22392L71.2666 16.63H65.9718L69.3333 7.22392ZM32.7344 0.457659L27.4537 25.5057H33.8376L39.1158 0.457031H32.7344M23.2905 0.457031L16.6459 17.5065L13.958 3.01004C13.6426 1.39178 12.3971 0.457346 11.014 0.457346H0.152137L0 1.18472C2.2299 1.6759 4.76345 2.46812 6.2984 3.31578C7.23776 3.83359 7.50562 4.28624 7.81421 5.5167L12.9051 25.506H19.6513L29.9941 0.457346H23.2905"
                    fill="url(#paint0_linear_790_50)"
                />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_790_50"
                    x1="36.3195"
                    y1="26.4155"
                    x2="37.0803"
                    y2="-0.179459"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#222357" />
                    <stop offset="1" stop-color="#254AA5" />
                </linearGradient>
                <clipPath id="clip0_790_50">
                    <rect width="79" height="26" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};