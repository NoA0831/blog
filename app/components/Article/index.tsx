import parse  from 'html-react-parser'
import { type Article } from '../../libs/microcms';
import PublishedDate from '../Date';
import TagList from '../TagList';

type Props = {
    data: Article;
};

export default function Article({ data }: Props) {
    return (
        <main className="flex flex-col items-center justify-center w-4/5 mx-auto bg-gray-900 m-8 rounded-lg">
            <h1 className="text-3xl m-4 p-4 font-bold">{data.title}</h1>
            <TagList tags={data.tags} />
            <p className="m-2">
                {data.description}
            </p>
            <PublishedDate date={data.publishedAt} />
            {(data.updatedAt && data.updatedAt !== data.publishedAt) && <PublishedDate date={data.updatedAt} />}
            <div className="m-4 p-4">
                {parse(data.content)}
            </div>
        </main>
    );
}
