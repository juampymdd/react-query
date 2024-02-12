import { useEffect, useReducer, useState } from 'react'
import './App.css'

export const AppOld = () => {

  const [number, setNumber] = useState<number>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>()
  const [key, forceRefetch] = useReducer((x)=> x+1,0)

  const getRandomNumberFromApi = async (): Promise<number> => {
    const url = 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new'
    const response = await fetch(url)
    const numberString = await response.text()
    // throw new Error('Error al obtener el número')
    return +numberString
  }

  useEffect(() => {
    setIsLoading(true)
    getRandomNumberFromApi()
      .then(setNumber)
      .catch((error)=>setError(error.message))
  }
    , [key])

  useEffect(() => {
    if (number) {
      setIsLoading(false)
    }
  }, [number])

  useEffect(() => {
    if (error) {
      setIsLoading(false)
    }
  }, [error])

  return (
    <>
      {
        error!
          ? (<h2>{error}</h2>)
          : isLoading
            ? (<h2>cargando...</h2>)
            : (<h2>Número aleatorio: {number}</h2>)
      }
      <button onClick={forceRefetch} disabled={isLoading}>
        {
        isLoading ?'...':'Nuevo número'
}
      </button>
    </>
  )
}


