import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import { ParticlesComponent } from './Particles'

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
      <ParallaxProvider>
        <div className={'relative size-full'}>
          <ParticlesComponent className='absolute size-full' />

          <Parallax speed={-25} className='absolute top-60 left-[20%]'>
            <div className='size-[50px] bg-gradient-to-bl from-orange-800 from-5% via-black to-black rounded-full shadow-orange-500 shadow-2xl' />
          </Parallax>

          <Parallax speed={21} className='absolute top-48 left-[50%]'>
            <div className='size-[70px] bg-gradient-to-tr from-zinc-800 from-5% via-black to-black shadow-white shadow-lg rounded-full' />
          </Parallax>

          <Parallax speed={-25} className='absolute bottom-0 left-[50%]'>
            <div className='size-[30px] bg-gradient-to-b from-green-900 from-5% via-black to-black rounded-full shadow-green-500 shadow-inner' />
          </Parallax>

          <Parallax speed={-25} className='absolute top-72 right-[20%]'>
            <div className='size-[20px]  bg-gradient-to-tl from-black from-30% via-blue-900 to-zinc-500 rounded-full shadow-blue-500 shadow-inner' />
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  )
}
