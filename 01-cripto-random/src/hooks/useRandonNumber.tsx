import { useQuery } from "@tanstack/react-query"

export const useRandonNumber = () => {
  const getRandomNumberFromApi = async (): Promise<number> => {
  const url = 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new'
  const response = await fetch(url)
  const numberString = await response.text()
  // throw new Error('Error al obtener el número')
  return +numberString
}

const query = useQuery({
  queryKey: ['randomNumber'],
  queryFn: () => getRandomNumberFromApi()
}
)
const { 
  data: number, 
  isError, 
  error, 
  isFetching: isLoading, 
  refetch 
} = query

  return {
    number,
    isError,
    error,
    isLoading,
    refetch
  }
}
