import styles from './page.module.css'
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.container}>
        <div> 2023 Huhin Co</div>
        <div className={styles.social}>
            <Image src='/vk.png' width={15} height={15} className={styles.icon} alt='vk'/>
            <Image src='/twitter.png' width={15} height={15} className={styles.icon} alt='vk'/>
            <Image src='/youtube.png' width={15} height={15} className={styles.icon} alt='vk'/>
        </div>
    </footer>
  )
}

export default Footer