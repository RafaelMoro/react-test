import { useSomething } from "../hooks/useSomething"

const Something = () => {
  const { data, error, isError, isLoading } = useSomething()
  console.log(data)
  return (
    <>
      { (isLoading) && <p>Loading...</p> }
      { (isError) && <p>Error: {error.message}</p> }
      { (data) && (data.map((item) => (
        <div>
          <h1>{item?.name}</h1>
        </div>
      ))) }
    </>
  )
}

export { Something }