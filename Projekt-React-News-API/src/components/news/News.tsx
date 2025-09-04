import React, { useEffect, useState } from 'react'
import type { INews } from '../../interface/INews'

interface NewsProps {
  news: INews | undefined
  setNews: React.Dispatch<React.SetStateAction<INews | undefined>>
}

export default function News() {
  const [news, setNews] = useState<INews>()
  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        'https://newsapi.org/v2/everything?q=keyword&apiKey=33eabe0865b04c2aaa146d22a50ac2ac'
      )

      const data: INews = await response.json()
      setNews(data)
    }

    fetchNews()
  }, [])

  if (!news) return <p>Keine Daten geladen.</p>

  return (
    <>
      <h1>News</h1>
      <ul>
        {news.articles?.map((a, i) => (
          <li key={i}>
            <a href={a.url}>{a.title}</a>
            <p>{a.description ?? 'Keine Beschreibung'}</p>
            <p>
              {a.source?.name} • {new Date(a.publishedAt).toLocaleString()}
            </p>
            {a.urlToImage && <img src={a.urlToImage} alt={a.title} />}
          </li>
        ))}
      </ul>
    </>
  )
}
