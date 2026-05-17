import { useState, useEffect } from 'react'

// Troque 'oqvpa' pelo nome do seu repositório se for diferente
const BASE = import.meta.env.BASE_URL

export function useContent(filename) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${BASE}content/${filename}.json`)
      .then((r) => {
        if (!r.ok) throw new Error(`Erro ao carregar ${filename}.json`)
        return r.json()
      })
      .then((json) => {
        setData(json)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [filename])

  return { data, loading }
}
