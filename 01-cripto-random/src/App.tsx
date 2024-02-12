import './App.css'
import { useRandonNumber } from './hooks/useRandonNumber'

export const App = () => {
  const { number, isError, error, isLoading, refetch } = useRandonNumber()

  return (
    <>
      {
        isError!
          ? (<h2>{`${error}`}</h2>)
          : isLoading
            ? (<h2>cargando...</h2>)
            : (<h2>Número aleatorio: {number}</h2>)
      }
      <button onClick={() => refetch()} disabled={isLoading}>
        {
          isLoading ? '...' : 'Nuevo número'
        }
      </button>
    </>
  )
}


