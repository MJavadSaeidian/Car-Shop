import AllButoon from '../components/module/AllButoon';
import Categories from '../components/module/Categories';
import SearchBar from '../components/module/SearchBar';
import Carspage from '../components/template/Carspage';
import carsData from '../data/carsData';



export default function Home() {
  const cars = carsData.slice(0 , 6);
  return (
    <>
      <SearchBar />
      <Categories />
      <AllButoon />
      <Carspage data={cars} />
    </>
  )
}
