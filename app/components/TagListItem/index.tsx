import Link from 'next/link';
import { Tag } from '../../libs/microcms';

type Props = {
    tag: Tag;
    hasLink?: boolean;
};

export default function TagListItem({ tag, hasLink = true }: Props) {
    if (hasLink) {
        return (
            <Link href={`/tags/${tag.id}`} className="">
                #{tag.name}
            </Link>
        );
    }
    return <span className="">#{tag.name}</span>;
}
