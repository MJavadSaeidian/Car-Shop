import CarsList from "../../components/template/CarsList"
import carsData from "../../data/carsData"

function Hatchback() {
    const hatchbackcars = carsData.filter((car) => car.category == "hatchback")

    return (
        <div>
            <CarsList data={hatchbackcars} />
        </div>
    )
}

export default Hatchback