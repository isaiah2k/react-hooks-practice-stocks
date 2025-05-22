import { useEffect, useState } from "react"
import Header from "./Header"
import MainContainer from "./MainContainer"

function App() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [sortType, setSortType] = useState("")
  const [filterType, setFilterType] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then(setStocks)
  }, [])

  function addToPortfolio(stock) {
    if (!portfolio.includes(stock)) {
      setPortfolio([...portfolio, stock])
    }
  }

  function removeFromPortfolio(stock) {
    setPortfolio(portfolio.filter((s) => s.id !== stock.id))
  }

  let displayedStocks = [...stocks]

  if (filterType) {
    displayedStocks = displayedStocks.filter(
      (stock) => stock.type === filterType
    )
  }

  if (sortType === "Alphabetically") {
    displayedStocks.sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    })
  } else if (sortType === "Price") {
    displayedStocks.sort((a, b) => a.price - b.price)
  }

  return (
    <div>
      <Header />
      <MainContainer
        stocks={displayedStocks}
        portfolio={portfolio}
        addToPortfolio={addToPortfolio}
        removeFromPortfolio={removeFromPortfolio}
        sortType={sortType}
        setSortType={setSortType}
        filterType={filterType}
        setFilterType={setFilterType}
      />
    </div>
  )
}

export default App