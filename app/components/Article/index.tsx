import { formatRichText } from '../../libs/utils';
import { type Article } from '../../libs/microcms';
import PublishedDate from '../Date';
import TagList from '../TagList';

type Props = {
    data: Article;
};

export default function Article({ data }: Props) {
    return (
        <main className="">
            <h1 className="">{data.title}</h1>
            <TagList tags={data.tags} />
            <p className="">{data.description}</p>
            <PublishedDate date={data.publishedAt || data.createdAt} />
            <div
                className=""
                dangerouslySetInnerHTML={{
                    __html: `${formatRichText(data.content)}`,
                }}
            />
        </main>
    );
}
