import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Article Preview Card</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <main className='flex flex-wrap items-center justify-center min-h-screen font-medium bg-[#ecf2f8] overflow-hidden text-[13px]'>
        <div className='flex bg-white max-w-[730px] shadow-xl rounded-lg overflow-hidden'>
          <img
            src='/drawers.jpg'
            alt='Drawers'
            className='min-h-[281px] max-w-[286px] object-cover'
          />
          <div className='px-10 py-7'>
            <h1 className='text-[20px] font-bold text-[#48556a]'>
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h1>
            <p className='text-[#6d7f97] mt-4'>
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
            <div className='flex flex-wrap items-center mt-5'>
              <img
                src='/avatar-michelle.jpg'
                alt='Michelle Avatar'
                className='w-12 h-12 rounded-full'
              />
              <div>
                <h3 className='text-[#48556a] font-bold'>Michelle Appleton</h3>
                <p className='text-[#9eafc2]'>28 Jun 2020</p>
              </div>
              <img src='/icon-share.svg' alt='Share Icon' className='h-4 w-4' />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
