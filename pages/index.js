import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="map"></div>
      <div className="start"></div>
    </div>
  )
}
