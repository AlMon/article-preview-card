import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Article Preview Card</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <main>
        <p className='text-red-500'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          harum vero vel dicta dolores quam beatae quibusdam est, illum in
          aspernatur perferendis possimus totam iure ad accusantium recusandae
          animi. Architecto.
        </p>
      </main>
    </div>
  )
}
