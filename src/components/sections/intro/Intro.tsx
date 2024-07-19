import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

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
    <div className='relative'>
      <ParallaxProvider>
        <div className={'relative  h-[500px] overflow-hidden'}>
          <Parallax speed={-10} className='absolute top-60 left-[20%]'>
            <div className='size-[70px] bg-red-200' />
          </Parallax>

          <Parallax speed={21} className='absolute top-32 left-[50%]'>
            <div className='size-[70px] bg-green-200' />
          </Parallax>

          <Parallax speed={-15} className='absolute top-72 right-[20%]'>
            <div className='size-[70px] bg-blue-200' />
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  )
}
