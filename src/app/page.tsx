// Custom Components
import { Calendar, Navigation, GreetingBlock, Articles } from "@/components";

const getArticles = async () => {
    const res = await fetch(
        "https://dev.to/api/articles?tags=cli,github,markdown,notion,vscode,design-patterns,functional-programming,supabase,browsers,javascript,frontend,html,tailwind-css,typescript,webdev&tags_exclude=discuss,begginers"
    );
    const articles = await res.json();
    return articles as Article[];
};

export default async function Home() {
    const articles = await getArticles();
    return (
        <main className="grid w-screen h-screen grid-flow-col grid-cols-5 gap-3 p-6 overflow-hidden bg-black bg-center bg-no-repeat bg-cover text-primary-light bg-blur">
            <Navigation />
            <div className="flex flex-col items-center justify-start col-span-3 gap-20 overflow-y-scroll">
                <GreetingBlock />
                <Articles articles={articles} />
            </div>
            <Calendar />
        </main>
    );
}
