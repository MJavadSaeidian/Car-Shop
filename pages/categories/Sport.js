import CarsList from "../../components/template/CarsList"
import carsData from "../../data/carsData"

function Sport() {
    const sportcars = carsData.filter((car) => car.category == "sport")

    return (
        <div>
            <CarsList data={sportcars} />
        </div>
    )
}

export default Sport