import {getArticles} from "./services/getarticles";
import ArticleCard from "./components/card_article";

interface Article {
    id: number;
    title: string;
    urlimage: string;
    description: string;
    author: string;
}

export default async function ArticlesPage() {
    const articles: Article[] = await getArticles();

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                Daftar Artikel
            </h1>
            <p className="text-center text-gray-600 mb-8">
                Berita dan informasi terbaru seputar teknologi
            </p>
            <ul className="space-y-6">
                {articles.map((article) => (
                    <li key={article.id}>
                        <ArticleCard
                            title={article.title}
                            urlimage={article.urlimage}
                            description={article.description}
                            author={article.author}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}