import Link from 'next/link';
import Image from 'next/image';
import { Article } from '../../libs/microcms';
import TagList from '../TagList';
import PublishedDate from '../Date';

type Props = {
    article: Article;
};

export default function ArticleListItem({ article }: Props) {
    return (
        <li className="">
            <Link href={`/articles/${article.id}`} className="">
                {article.thumbnail ? (
                <picture>
                    <source
                        type="image/webp"
                        media="(max-width: 640px)"
                        srcSet={`${article.thumbnail?.url}?fm=webp&w=414 1x, ${article.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
                    />
                    <source
                        type="image/webp"
                        srcSet={`${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126 1x, ${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126&dpr=2 2x`}
                    />
                    <img
                        src={article.thumbnail?.url || `/noimage.png`}
                        alt=""
                        className=""
                        width={article.thumbnail?.width}
                        height={article.thumbnail?.height}
                    />
                </picture>
                ) : (
                    <Image
                        className=""
                        src="/no-image.png"
                        alt="No Image"
                        width={1200}
                        height={630}
                    />
            )}
                <dl className="">
                    <dt className="">{article.title}</dt>
                    <dd>
                        <TagList tags={article.tags} hasLink={false} />
                    </dd>
                    <dd className="">
                        <PublishedDate date={article.publishedAt || article.createdAt} />
                    </dd>
                </dl>
            </Link>
        </li>
    );
}
