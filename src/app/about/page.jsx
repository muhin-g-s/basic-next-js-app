import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const about = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/about.jpg' fill={true} alt="about" className={styles.img}/>
      </div>

    </div>
  )
}

export default about