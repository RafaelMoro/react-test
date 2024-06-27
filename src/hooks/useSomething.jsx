import { useQuery } from "@tanstack/react-query"

const fetchInfo = async () => {
  try {
    const response = await fetch('https://api.restful-api.dev/objects')
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    return error
  }
}

const useSomething = () => {
  const { data, isError, error, isLoading } = useQuery({ queryKey: ['fetchIndo'], queryFn: fetchInfo })
  return { data, isError, error, isLoading }
}

export { useSomething }