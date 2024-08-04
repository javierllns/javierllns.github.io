import { ParticlesComponent } from './Particles'
import { Button } from '@components/lib/ui/button'
import { FileDownIcon } from 'lucide-react'
import { getLangFromUrl, useTranslations } from '@i18n/utils'

const lang = getLangFromUrl(window.location as any) //TODO: type as URL object
const t = useTranslations(lang)

// const BlurredItem: React.FC<{ children: React.ReactNode; className?: string; blurClassName?: string }> = ({
//   children,
//   className,
//   blurClassName
// }) => {
//   return (
//     <div className={cn(className ? className : '', 'size-fit p-6', 'flex items-center justify-center')}>
//       {children}
//       <div className={cn(blurClassName ? blurClassName : '', 'absolute top-0 left-0', 'size-full')} />
//     </div>
//   )
// }

export default function Intro() {
  return (
    <div className='size-full'>
      <div className={'flex size-full items-center justify-center'}>
        <ParticlesComponent className='absolute size-full' />

        <div className='relative flex flex-col items-center gap-2'>
          <h1 className='bg-gradient-to-r from-zinc-500 via-white to-blue-100 bg-clip-text px-14 text-center text-7xl font-black text-transparent sm:text-6xl sm:font-bold md:text-7xl lg:text-8xl'>
            JAVIER LLANOS
          </h1>

          <p className='z-10 bg-gradient-to-r from-amber-700 via-yellow-500 to-amber-500 bg-clip-text text-xl font-black text-transparent lg:text-3xl'>
            FULL-STACK DEVELOPER
          </p>

          <div className='mt-2 flex flex-col items-center gap-2'>
            <h1 className='my-2'>{t('section.title.resume')}</h1>

            <div className='flex gap-2'>
              <a href='/resume_cv_EN.pdf' download>
                <Button
                  variant='default'
                  className='flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-400 px-4 py-6 hover:opacity-90'
                >
                  <FileDownIcon />
                  <h1 className='font-base flex flex-row items-center gap-2 py-1 text-lg'>
                    EN
                  </h1>
                </Button>
              </a>
              <a href='/resume_cv_ES.pdf' download>
                <Button
                  variant='secondary'
                  className='flex items-center gap-2 rounded-xl px-4 py-6'
                >
                  <FileDownIcon />
                  <h1 className='font-base flex flex-row items-center gap-2 py-1 text-lg'>
                    ES
                  </h1>
                </Button>
              </a>
            </div>
          </div>

          <div className='absolute -top-28 right-[25%] size-[70px] rounded-full bg-gradient-to-tr from-zinc-800 from-5% via-black to-black shadow-lg shadow-white' />
          <div className='absolute -bottom-36 left-[15%] size-[50px] rounded-full bg-gradient-to-bl from-amber-800 from-5% via-black to-black shadow-2xl shadow-orange-500' />
        </div>
      </div>
    </div>
  )
}
