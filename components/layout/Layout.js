import Link from "next/link"
import styles from "./Layout.module.css"

function Layout({ children }) {
    return (
        <>
            <header className={styles.header}>

                <Link href="/">
                 <h2>CARSHOP</h2>
                <p>Choose and Buy your car</p>
                </Link>
               
            </header>

            <div className={styles.container}>{children}</div>

            <footer className={styles.footer}>
               <a href="https://github.com/MJavadSaeidian" target="_blank" >M.Javad.Sae  </a>   Next.js course | Car Shop Project &copy;
            </footer>
        </>
    )
}

export default Layout