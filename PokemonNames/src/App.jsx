import axios from 'axios';
// import './App.css'
import { useEffect, useState } from 'react';
import Pages from './Components/Pages';

function App() {
  const [data, setData] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPreviosPage] = useState(null);
  const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon/");


  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(currentPage)
        setData(response.data.results.map(pokemon => pokemon.name))
        setNextPage(response.data.next)
        setPreviosPage(response.data.previous)
        console.log(response)
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getData();
  }, [currentPage]);

  useEffect(() => {
    if (data !== null) {
    }
  }, [data, currentPage]);

  if (!data) {
    return <p>Loading/...</p>
  }

  const PageChange = (page) => {
    if (page === prevPage) {
      setCurrentPage(prevPage)
    }
    if (page === nextPage) {
      setPreviosPage(currentPage)
      setCurrentPage(nextPage)
    }
  }
  return (
    <>
      <div style={{ margin: "10px" }}>
        {data.map((result, index) => (
          <div key={index}>Name : --{" "}{result}</div>
        ))}
        <Pages prevPage={prevPage} PageChange={PageChange} nextPage={nextPage} />
      </div>
    </>
  )
}

export default App
