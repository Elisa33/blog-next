import Footer from "../Footer";
import Nav from './../Nav/index';
import Head from 'next/head';

export default function Layout({children, title, description}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta charSet="utf-8"/>
                <meta name="description" content={description}/>
                <meta name="keywords" content="palabra clave 1, palabra clave 2, palabra clave 3"/>
            </Head>
            <Nav/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Blog',
    description: 'Descripcion'
}
