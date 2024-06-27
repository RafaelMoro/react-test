import { useSomething } from "../hooks/useSomething"

const Something = () => {
  const { data, error, isError, isLoading } = useSomething()
  console.log(data)
  return (
    <div style={{ backgroundColor: 'black', minWidth: '100vw', minHeight: '100vh', color: 'white' }}>
      { (isLoading) && <p>Loading...</p> }
      { (isError) && <p>Error: {error.message}</p> }
      { (data) && (data.map((item) => (
        <div key={item?.id}>
          <h1>{item?.name}</h1>
        </div>
      ))) }
    </div>
  )
}

export { Something }