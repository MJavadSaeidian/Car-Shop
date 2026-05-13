import Link from 'next/link'
import styles from './AllButoon.module.css'

function AllButoon() {
  return (
    <div className={styles.container}>
        <Link href="/cars">See All Cars</Link>
    </div>
  )
}

export default AllButoon