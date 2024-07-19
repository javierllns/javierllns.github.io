import React, { useState } from 'react'
import { Button } from '@components/lib/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@components/lib/ui/sheet'

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
          className='h-fit text-xl rounded-none hover:bg-transparent hover:border-b-4 hover:border-accent-foreground'
        >
          {title}
        </Button>
      </a>
    )
  }

  const Locations = () => {
    return (
      <ul className='flex flex-col h-full lg:flex-row'>
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
    <nav className='w-fit h-full'>
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
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent side='top' id='off-canvas-menu'>
            <SheetHeader>
              <SheetTitle>Site map</SheetTitle>
              <Locations />
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
