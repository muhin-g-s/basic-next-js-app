import React from 'react'
import styles from './page.module.css'
import Link from "next/link";
import Image from 'next/image';

async function getData(){
  const resp = await fetch("https://api.slingacademy.com/v1/sample-data/blog-posts", {
    cache: "no-store"
  })

  if(!resp.ok){
    throw new Error("Fuck pesp, Pedro")
  }

  return await resp.json()
}

const Blog = async () => {
  const data = await getData();

  console.log(data.blogs)
  return (
    <div className={styles.mainContainer}>
    {data.blogs.map((item) => (
      <Link
      href={`blog/${item.id}`}
      className={styles.container}
      key={item.id}
      >
        <div className={styles.imageContainer}>
          <Image
            src={item.photo_url}
            alt="bl"
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{item.description}</p>
        </div>
      </Link>
    ))}
    </div>
  )
}

export default Blog