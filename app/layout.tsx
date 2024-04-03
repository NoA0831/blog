import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
    metadataBase: new URL('http://localhost:3000'),
    title: 'NoA Tech Blog',
    description: 'A simple blog presented by microCMS',
    openGraph: {
        title: 'NoA Tech Blog',
        description: 'A simple blog presented by microCMS',
        images: '/ogp.png',
    },
    alternates: {
        canonical: '/',
    },
};

type Props = {
    children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
    return (
        <html lang="ja">
            <body>
                <Header />
                    <main className="">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
