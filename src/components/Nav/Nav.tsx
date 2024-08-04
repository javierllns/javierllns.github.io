import React, { useState } from 'react'
import { Button } from '@components/lib/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@components/lib/ui/sheet'
import { MenuIcon } from 'lucide-react'
import { Separator } from '@components/lib/ui/separator'
import { getLangFromUrl, useTranslations } from '@i18n/utils'

const lang = getLangFromUrl(window.location as any) //TODO: type as URL object
const t = useTranslations(lang)

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
          className='h-full rounded-none border-b-4 border-transparent text-xl hover:border-b-4 hover:border-primary hover:bg-transparent sm:px-2 lg:px-3 xl:px-4'
        >
          {title}
        </Button>
      </a>
    )
  }

  const Locations = () => {
    return (
      <ul className='flex h-full flex-col gap-2 md:flex-row md:gap-0'>
        <li>
          <NavItem title={t('nav.link.about')} href='#about' />
        </li>
        <li>
          <NavItem title={t('nav.link.experience')} href='#experience' />
        </li>
        <li>
          <NavItem title={t('nav.link.stack')} href='#stack' />
        </li>
        <li>
          <NavItem title={t('nav.link.tooling')} href='#tooling' />
        </li>
        <li>
          <NavItem title={t('nav.link.projects')} href='#projects' />
        </li>
        <li>
          <NavItem title={t('nav.link.contact')} href='#contact' />
        </li>
      </ul>
    )
  }

  return (
    <nav className='flex h-full w-fit items-center'>
      <div className='hidden md:block'>
        <Locations />
      </div>

      <div className='md:hidden'>
        <Sheet
          modal={true}
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
          <SheetContent side='top' id='off-canvas-menu' className='rounded-b-lg p-10'>
            <SheetHeader>
              <SheetTitle className='pb-2 text-2xl font-bold uppercase'>
                {t('nav.title')}
              </SheetTitle>
              <Separator className='!mb-3' />
              <Locations />
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
