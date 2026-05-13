import { useRouter } from "next/router"
import carsData from "../../data/carsData"
import { useReducer } from "react"
import CarsList from "../../components/template/CarsList";

function FilterCars() {
    const router = useRouter();
    const [min,max] = router.query.slug || [];
    const filteredData = carsData.filter ( item => item.price > min && item.price < max) ;
    if (!filteredData.length) return (<h3>Not Found</h3>)
  return (
    <div>
        <CarsList data={filteredData} />
    </div>
  )
}

export default FilterCars