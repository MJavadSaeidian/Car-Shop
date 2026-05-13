import CarsList from "../../components/template/CarsList"
import carsData from "../../data/carsData"

function Sedan() {
    const sedancars = carsData.filter((car) => car.category == "sedan")

    return (
        <div>
            <CarsList data={sedancars} />
        </div>
    )
}

export default Sedan