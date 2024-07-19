import { cn } from '@/components/lib/utils'
import { useEffect } from 'react'
import Rellax from 'rellax'

export default function Intro() {
  useEffect(() => {
    var rellax = new Rellax('.parallax')
  }, [])

  return (
    <div className={'overflow-hidden h-[500px] rounded-lg relative'}>
      <div
        className={cn('parallax rotate-45', 'absolute top-60 left-[20%]', 'h-[70px] w-[70px] box bg-red-200')}
        data-rellax-speed='-3'
      />

      <div className={cn('', 'absolute top-0 left-0', 'backdrop-blur-sm size-full')}></div>

      <div
        className={cn(
          'parallax rotate-45',
          'absolute top-72 left-[70%]',
          'h-[90px] w-[90px] box bg-blue-200 rounded-full'
        )}
        data-rellax-speed='-5'
      />

      <div className={cn('', 'absolute top-0 left-0', 'backdrop-blur-sm size-full')}></div>

      <div
        className={cn(
          'parallax !rotate-45',
          'absolute top-20 left-[50%]',
          'h-[100px] w-[100px] box bg-green-200 rounded-lg'
        )}
        data-rellax-speed='7'
      />
    </div>
  )
}
