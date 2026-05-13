
import Card from '../module/Card'
import styles from './Carspage.module.css'

function Carspage({ data }) {
  return (
    <div className={styles.container}>
      {data.map((car) => (<Card key={car.id} {...car}/>))}
    </div>
  )
}

export default Carspage