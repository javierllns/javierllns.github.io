import { cn } from '@/components/lib/utils'
import React, { useEffect } from 'react'
import Rellax from 'rellax'

const BlurredItem: React.FC<{ children: React.ReactNode; className?: string; blurClassName?: string }> = ({
  children,
  className,
  blurClassName
}) => {
  return (
    <div className={cn(className ? className : '', 'size-fit p-6', 'flex items-center justify-center')}>
      {children}
      <div className={cn(blurClassName ? blurClassName : '', 'absolute top-0 left-0', 'size-full')} />
    </div>
  )
}

export default function Intro() {
  useEffect(() => {
    var rellax = new Rellax('.parallax')
  }, [])

  return (
    <div className={'overflow-hidden h-[500px] rounded-lg relative'}>
      <div className='parallax absolute top-60 left-[20%]' data-rellax-speed='-3'>
        <BlurredItem className='!p-8' blurClassName='backdrop-blur-md'>
          <div id='box' className={cn('size-[70px]', 'bg-red-200')} />
        </BlurredItem>
      </div>

      <div className='parallax absolute top-20 left-[50%] !rotate-45' data-rellax-speed='7'>
        <BlurredItem>
          <div id='box' className={cn('size-[100px]', 'bg-green-200')} />
        </BlurredItem>
      </div>

      <div className='parallax absolute top-72 right-[20%]' data-rellax-speed='-5'>
        <BlurredItem blurClassName='backdrop-blur-sm'>
          <div className={cn('size-[90px]', 'bg-blue-200')} />
        </BlurredItem>
      </div>
    </div>
  )
}
