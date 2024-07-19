import React, { useState } from 'react'
import { Button } from '@components/lib/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@components/lib/ui/sheet'
import { MenuIcon } from 'lucide-react'
import { Separator } from '@components/lib/ui/separator'

export const Nav: React.FC = () => {
  const [openOffCanvasMenu, setOpenOffCanvasMenu] = useState(false)

  const NavItem: React.FC<{ title: string; href: string }> = ({ title, href }) => {
    return (
      <a href={href}>
        <Button
          onClick={() => {
            setOpenOffCanvasMenu(false)
          }}
          variant={'ghost'}
          className='h-full text-xl rounded-none hover:bg-transparent hover:border-b-4 hover:border-accent-foreground'
        >
          {title}
        </Button>
      </a>
    )
  }

  const Locations = () => {
    return (
      <ul className='flex flex-col h-full lg:flex-row gap-2'>
        <li>
          <NavItem title='About me' href='#introduction' />
        </li>
        <li>
          <NavItem title='Work' href='#work' />
        </li>
        <li>
          <NavItem title='Tech Stack' href='#stack' />
        </li>
        <li>
          <NavItem title='Tooling' href='#tooling' />
        </li>
        <li>
          <NavItem title='Projects' href='#projects' />
        </li>
        <li>
          <NavItem title='Contact' href='#contact' />
        </li>
      </ul>
    )
  }

  return (
    <nav className='w-fit h-full flex items-center'>
      <div className='hidden lg:block'>
        <Locations />
      </div>

      <div className='lg:hidden'>
        <Sheet
          open={openOffCanvasMenu}
          onOpenChange={(open) => {
            setOpenOffCanvasMenu(open)
          }}
        >
          <SheetTrigger asChild>
            <Button variant={'ghost'} className='size-fit p-4'>
              <MenuIcon size={28} strokeWidth={2.25} />
            </Button>
          </SheetTrigger>
          <SheetContent side='top' id='off-canvas-menu' className='rounded-b-3xl'>
            <SheetHeader>
              <SheetTitle className='text-2xl uppercase font-bold'>Navigation</SheetTitle>
              <Separator />
              <Locations />
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
