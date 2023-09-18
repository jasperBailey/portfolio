import Head from 'next/head';
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <p className="text-3xl font-bold underline">main</p>
      </main>

      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}
