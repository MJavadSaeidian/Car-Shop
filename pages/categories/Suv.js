import CarsList from "../../components/template/CarsList"
import carsData from "../../data/carsData"

function Suv() {
    const suvcars = carsData.filter((car) => car.category == "suv")

    return (
        <div>
            <CarsList data={suvcars} />
        </div>
    )
}

export default Suv