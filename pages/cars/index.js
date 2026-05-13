import Categories from '../../components/module/Categories'
import SearchBar from '../../components/module/SearchBar'
import Carspage from '../../components/template/Carspage'
import carsData from '../../data/carsData'

function Details() {
  return (
    <div>
      <SearchBar />
      <Categories />
      <Carspage data={carsData} />
    </div>
  )
}

export default Details