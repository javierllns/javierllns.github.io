import { useEffect, useState, FC } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@components/lib/ui/select'
import { languages } from '@i18n/ui'
import { getLangFromUrl, useTranslations } from '@i18n/utils'

export const LanguagePicker: FC<{ className?: string }> = () => {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    setLang(getLangFromUrl(window.location as any)) //TODO: type as URL object)
  }, [])

  return (
    <Select
      value={lang}
      onValueChange={(val) => {
        setLang(val)
        window.location.href = `/${val}/`
      }}
    >
      <SelectTrigger className='w-[100px]'>
        <SelectValue placeholder='Language' />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          {Object.entries(languages).map(([lang, label], idx) => {
            return (
              <SelectItem key={idx} value={lang}>
                {label}
              </SelectItem>
            )
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
