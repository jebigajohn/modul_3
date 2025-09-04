import React, { useEffect, useState } from 'react'
import type { INews } from '../../interface/INews'
import type { Language } from '../../enums/Language'
import { Parameter } from '../../enums/Parameter'

interface HeaderProps {
  news: INews | undefined
  setNews: React.Dispatch<React.SetStateAction<INews | undefined>>
}
export default function Header() {
  const [searchValue, setSearchValue] = useState<string>()
  const [language, setLanguage] = useState<Language>('en' as Language)
  const [sortValue, setSortValue] = useState<string>('relevancy')

  const searchNews = async (): Promise<void> => {
    const apiParameters: string[] = []
    apiParameters[Parameter.SEARCH_VALUE] = `q=${searchValue}`
    apiParameters[Parameter.LANGUAGE] = `language=${language}`
    apiParameters[Parameter.SORT_BY] = `sortBy=${sortValue}`
  }

  useEffect(() => {
    searchNews()
  }, [])
  return <div>Header</div>
}
