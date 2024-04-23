import Image from 'next/image';
import { formatDate } from '../../libs/utils';

type Props = {
    date: string;
};

export default function PublishedDate({ date }: Props) {
    return (
        <span className="">
            {formatDate(date)}
        </span>
    );
}
