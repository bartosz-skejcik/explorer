import React from "react";
import Article from "./Article";

type Props = {
    articles: Article[];
};

export default function Articles({ articles }: Props) {
    return (
        <section className="flex flex-row flex-wrap items-start justify-center w-full h-full gap-6">
            {articles.map((article) => (
                <Article key={article.id} article={article} />
            ))}
        </section>
    );
}
