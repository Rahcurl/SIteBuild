import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t border-zinc-900 bg-black text-zinc-300'>
      <div className='max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-[1.4fr_1fr]'>
        <div>
          <div className='text-sm uppercase tracking-[0.24em] text-zinc-500 mb-3'>GenWeb.ai</div>
          <a href='/privacy' className='text-zinc-200 hover:text-white transition text-sm'>Privacy Policy</a>

          <div className='mt-6 flex items-center gap-3'>
            <a href='https://twitter.com/Rahcurl' target='_blank' rel='noreferrer' className='flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-800 transition'>
              <svg viewBox='0 0 24 24' className='h-4 w-4 fill-current' aria-hidden='true'>
                <path d='M22.46 6c-.77.35-1.6.59-2.46.7a4.3 4.3 0 0 0 1.88-2.38 8.6 8.6 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.14 12.14 0 0 1 3.15 4.9a4.28 4.28 0 0 0 1.33 5.72 4.23 4.23 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.28 4.28 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54a12.14 12.14 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.55A8.7 8.7 0 0 0 24 5.6a8.54 8.54 0 0 1-2.54.7z'/>
              </svg>
              Twitter
            </a>
            <a href='https://www.instagram.com/rahcurl?igsh=MTMyYnFjNXpvZDA2dQ==' target='_blank' rel='noreferrer' className='flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-800 transition'>
              <svg viewBox='0 0 24 24' className='h-4 w-4 fill-current' aria-hidden='true'>
                <path d='M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.5 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm-4.25 1.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z'/>
              </svg>
              Instagram
            </a>
          </div>

          <ul className='mt-6 space-y-2 text-sm text-zinc-400'>
            <li>• Fast site creation with clean, modern design</li>
            <li>• Secure privacy-focused experience</li>
          </ul>
        </div>

        <div className='text-right text-xs text-zinc-500 md:text-right'>
          &copy; {new Date().getFullYear()} c@Kanxo
        </div>
      </div>
    </footer>
  )
}

export default Footer
