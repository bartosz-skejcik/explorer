import {
    ArrowTopRightOnSquareIcon,
    ChatBubbleBottomCenterTextIcon,
    HeartIcon,
} from "@heroicons/react/24/outline";

type Props = {
    number: number;
    type: "likes" | "comments" | "share";
};

export default function ArticleIcon({ number, type }: Props) {
    const getClassNames = () => {
        switch (type) {
            case "likes":
                return `flex items-center justify-center group-hover:bg-[#1ddc6f3d] group-hover:text-[#39e58c] transition-all duration-200 rounded-lg p-1`;
            case "comments":
                return `flex items-center justify-center group-hover:bg-[#0dcfdc3d] group-hover:text-[#2cdce6] transition-all duration-200 rounded-lg p-1`;
            case "share":
                return `flex items-center justify-center group-hover:bg-[#c029f03d] group-hover:text-[#ce3df3] transition-all duration-200 rounded-lg p-1`;
        }
    };

    const getClassName = () => {
        switch (type) {
            case "likes":
                return `text-sm font-semibold group-hover:text-[#39e58c] transition-all duration-200`;
            case "comments":
                return `text-sm font-semibold group-hover:text-[#2cdce6] transition-all duration-200`;
            case "share":
                return `text-sm font-semibold group-hover:text-[#ce3df3] transition-all duration-200`;
        }
    };
    return (
        <div className="flex items-center justify-center gap-2 cursor-default group">
            <div className={getClassNames()}>
                {type === "likes" ? (
                    <HeartIcon className="w-5 h-5" />
                ) : type === "comments" ? (
                    <ChatBubbleBottomCenterTextIcon className="w-5 h-5" />
                ) : (
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                )}
            </div>
            <p className={getClassName()}>{number}</p>
        </div>
    );
}
