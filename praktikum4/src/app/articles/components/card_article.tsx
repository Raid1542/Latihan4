interface ArticleCardProps {
    title: string;
    urlimage: string;
    description: string;
    author: string;
}

export default function ArticleCard({ title, urlimage, description, author }: ArticleCardProps) {
    return (
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 transition-all duration-300">
            <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={urlimage}
                alt={title}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {title}
                </h5>
                <p className="mb-3 font-normal text-gray-700">
                    {description}
                </p>
                <small className="text-gray-500">By: {author}</small>
            </div>
        </div>
    );
}