import Link from 'next/link';
import { Article } from '../../libs/microcms';
import TagList from '../TagList';
import PublishedDate from '../Date';

type Props = {
    article: Article;
};

const ArticleListItem = ({ article }: Props) => {

     // 更新日時が作成日時より後であるかどうかを判定する
    const isUpdated = article.updatedAt && new Date(article.updatedAt) > new Date(article.createdAt);

    return (
        <li className="border-2 border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition duration-300 ease-in-out max-w-xl mx-auto m-4 bg-gray-900">
            <Link href={`/articles/${article.id}`} className='block p-4'>
                <div>
                    <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                    <div className="flex flex-wrap items-center">
                        <TagList tags={article.tags} hasLink={false} />
                    </div>
                    <div className="text-gray-500 flex items-center">
                        {isUpdated ? (
                            <img src="/updated-icon.svg" alt="Updated icon" className="mr-1 h-4 w-4" />
                        ) : ( // 更新がない場合
                            <img src="/created-icon.svg" alt="Created icon" className="mr-1 h-4 w-4" />
                        )}
                        <PublishedDate date={article.publishedAt || article.createdAt} />
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default ArticleListItem;
