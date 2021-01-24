import Head from 'next/head'
import Link from 'next/link'

function Home() {
    return (
        
        <>
            <Head>
                <title>Materia Triangular</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div>
                <h1>Blog post</h1>
            </div>
            <Link href="/">
                <a>Back home</a>
            </Link>
        </>

    )
}

export default Home