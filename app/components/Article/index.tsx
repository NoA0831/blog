import { type Article } from '../../libs/microcms';
import PublishedDate from '../Date';
import TagList from '../TagList';
import { formatRichText } from '@/app/libs/utils';
import styles from './index.module.css';

type Props = {
    data: Article;
};

export default function Article({ data }: Props) {
    return (
        <main className="flex flex-col items-center justify-center w-5/6 mx-auto bg-gray-900 m-8 rounded-lg">
            <h1 className="text-3xl m-4 p-4 font-bold">{data.title}</h1>
            {(data.updatedAt && data.updatedAt !== data.publishedAt) && (
                <div className="flex items-center mb-1">
                    <img src="/updated-icon.svg" alt="Updated Icon" className="h-4 mr-2" />
                    <PublishedDate date={data.updatedAt} />
                </div>
            )}
            <div className="flex items-center mb-3">
                <img src="/created-icon.svg" alt="Created Icon" className="h-4 mr-2" />
                <PublishedDate date={data.publishedAt || " "} />
            </div>
            <TagList tags={data.tags} />
            <p className="m-2">{data.description}</p>
            <div className={styles.content}
                dangerouslySetInnerHTML={{
                    __html: `${ formatRichText(data.content) }`,
                }}>
            </div>
        </main>
    );
}
