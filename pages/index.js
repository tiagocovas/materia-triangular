import Head from 'next/head'
import { useRouter } from 'next/router'

function Home() {
    const router = useRouter()

    const HandleClick = (e) => {
        e.preventDefault()
        router.push('/pokemon')
    }

    return (
        
        <>
            <Head>
                <title>Materia Triangular</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div class="row-full mx-auto p-5">
                <nav class="flex justify-between">
                    <div>
                        <a href="#">Logo</a>
                    </div>
                    <ul class="flex flex-row">
                        <li class="pr-5"><a> Services </a></li>
                        <li class="pr-5"><a>Porfolio</a></li>
                        <li class="pr-5"><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <h1>Home</h1>
                <h2>Materia Triangular</h2>
            </div>
        </>

    )
}

export default Home