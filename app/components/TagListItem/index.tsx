import Link from 'next/link';
import { Tag } from '../../libs/microcms';

type Props = {
    tag: Tag;
    hasLink?: boolean;
};

const TagListItem = ({ tag, hasLink = true }: Props) => {

    if (hasLink) {
        return (
            <Link href={`/tags/${tag.id}`} className="bg-gray-700 px-2 py-1 text-sm rounded-md whitespace-nowrap text-gray-300">
                <p>#{tag.name}</p>
            </Link>
        );
    }
    return <span className="bg-gray-700 px-2 py-1 text-sm rounded-md whitespace-nowrap text-gray-300">#{tag.name}</span>;
};

export default TagListItem;
