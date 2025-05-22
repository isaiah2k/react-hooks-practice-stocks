import StockContainer from "./StockContainer"
import PortfolioContainer from "./PortfolioContainer"
import SearchBar from "./SearchBar"

function MainContainer({
  stocks,
  portfolio,
  addToPortfolio,
  removeFromPortfolio,
  sortType,
  setSortType,
  filterType,
  setFilterType
}) {
  return (
    <div>
      <SearchBar
        sortType={sortType}
        setSortType={setSortType}
        filterType={filterType}
        setFilterType={setFilterType}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onStockClick={addToPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolio={portfolio}
            onStockClick={removeFromPortfolio}
          />
        </div>
      </div>
    </div>
  )
}

export default MainContainer
