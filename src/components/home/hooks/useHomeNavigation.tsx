import { useEffect, useState } from 'react'
import { IHomeNavigation } from '../../../models'

function useHomeNavigation() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<IHomeNavigation[]>([])

  useEffect(() => {
    const baseUrl = window.location.origin
    const fetchData = () => {
      fetch(`${baseUrl}/configs/navigation.json`)
        .then((res) => res.json())
        .then((res) => {
          setIsLoading(false)
          setData(res.panels as IHomeNavigation[])
        })
        .catch((err) => {
          console.error(err)
          setIsLoading(false)
        })
    }

    fetchData()
  }, [])

  return { isLoading, data }
}

export default useHomeNavigation
