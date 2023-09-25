import Image from 'next/image'
import styles from './page.module.css'
import Hero from "public/hero.png"
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
        The Future of AI in the next few years
        </h1>
        <p className={styles.desc}>
        Turning your Idea into Reality. We bring together the teams from the
              global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Work" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='main photo' className={styles.img}/>
      </div>
    </main>
  )
}
