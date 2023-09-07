import Head from 'next/head';
import Link from 'next/link';

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{margin: '10px'}}>
        <h2>Slider</h2>
        <ul>
          <li>
            <Link href="/slider-spike-1">Spike #1</Link>
          </li>
        </ul>

        <div style={{marginBottom: '20px'}}></div>

        <h2>Disclosure</h2>
        <ul>
          <li>
            <Link href="/disclosure-spike-1">Spike #1</Link>
          </li>
          <li>
          <Link href="/disclosure-spike-2">Spike #2</Link>
          </li>
        </ul>
      </main>
    </>
  )
}
