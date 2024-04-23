import Link from 'next/link';
import { LIMIT } from '../../constants';

type Props = {
    totalCount: number;
    current?: number;
    basePath?: string;
    q?: string;
};

export default function Pagination({ totalCount, current = 1, basePath = '', q }: Props) {
    const pages = Array.from({ length: Math.ceil(totalCount / LIMIT) }).map((_, i) => i + 1);
    return (
        <ul className="">
            {pages.map((p) => (
                <li className="" key={p}>
                    {current !== p ? (
                        <Link href={`${basePath}/p/${p}` + (q ? `?q=${q}` : '')} className="">
                            {p}
                        </Link>
                    ) : (
                        <span className={`${""} ${""}`}>{p}</span>
                    )}
                </li>
            ))}
        </ul>
    );
}
