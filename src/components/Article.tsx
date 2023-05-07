/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import ArticleIcon from "./ArticleIcon";

type Props = {
    article: Article;
};

export default function Article({ article }: Props) {
    return (
        <Link
            href={`https://dev.to/${article.user.username}/${article.slug}`}
            className="flex w-80 flex-col items-center justify-around cursor-pointer p-3 gap-2 bg-primary text-primary-light hover:border-[#3e3e3e] transition-all duration-200 border-primary-dark border-[1.5px] rounded-lg"
        >
            <div className="flex items-center justify-start w-full gap-2 text-[#717171]">
                <img
                    src={article.user.profile_image}
                    alt={article.user.name}
                    className="rounded-full h-9 aspect-square"
                />
                <p>{article.user.name}</p>
            </div>
            <h3 className="text-xl font-semibold">
                {/* if the title is more than 45 characters then slice and ... at the end but if it has lest than 28 then add invisible characters to make it 35 */}
                <p>
                    {article.title.length > 42
                        ? article.title.slice(0, 42) + "..."
                        : article.title}
                </p>
                {article.title.length < 28 && (
                    <span className="invisible">a</span>
                )}
            </h3>
            <img
                src={article.social_image}
                alt={article.title}
                className="w-11/12 rounded-xl aspect-video"
            />
            <div className="flex items-center justify-around w-full mt-2">
                <ArticleIcon
                    number={article.public_reactions_count}
                    type="likes"
                />
                <ArticleIcon number={article.comments_count} type="comments" />
                <ArticleIcon
                    number={article.positive_reactions_count}
                    type="share"
                />
            </div>
        </Link>
    );
}
