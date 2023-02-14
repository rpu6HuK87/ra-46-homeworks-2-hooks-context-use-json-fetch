import {useState, useEffect} from 'react'

export default function useJsonFetch(url, opts = {}) {
  const [data, setData] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [hasError, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const response = await fetch(url, opts)
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const news = await response.json()
        setData(news)
        setError(null)
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    //return false
    // eslint-disable-next-line
  }, [url])
  return [data, isLoading, hasError]
}
