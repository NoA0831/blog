import Image from 'next/image';
import { formatDate } from '../../libs/utils';

type Props = {
    date: string;
};

export default function PublishedDate({ date }: Props) {
    return (
        <span className="">
            <Image src="/clock.svg" alt="" width={16} height={16} priority />
            {formatDate(date)}
        </span>
    );
}
