import Link from 'next/link';

export default function Nav() {
    return (
        <div>
            <Link href="/blog">
                <a >Home</a>
            </Link>
            <Link href="/articulo">
                <a >Articulo</a>
            </Link>
        </div>
    )
}
