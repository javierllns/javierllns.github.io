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
      <div className={'flex size-full items-center justify-center'}>
        <ParticlesComponent className='absolute size-full' />

        <div className='relative flex flex-col items-center gap-2'>
          <h1 className='bg-gradient-to-r from-zinc-500 via-white to-blue-100 bg-clip-text px-14 text-center text-6xl font-black text-transparent sm:text-6xl sm:font-bold md:text-7xl lg:text-8xl'>
            JAVIER LLANOS
          </h1>

          <p className='z-10 bg-white bg-clip-text font-extrabold text-transparent lg:text-xl'>
            FULL-STACK DEVELOPER
          </p>

          <div className='absolute -top-28 right-[25%] size-[70px] rounded-full bg-gradient-to-tr from-zinc-800 from-5% via-black to-black shadow-lg shadow-white' />
          <div className='absolute -bottom-36 left-[15%] size-[50px] rounded-full bg-gradient-to-bl from-amber-800 from-5% via-black to-black shadow-2xl shadow-orange-500' />
        </div>
      </div>
    </div>
  )
}
